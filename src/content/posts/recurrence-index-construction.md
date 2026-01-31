---
slug: recurrence-index-construction
title: "Recurrence Index Construction: From Repair Codes to Risk"
date: "2026-01-27"
summary: "How the recurrence index is built, validated, and kept leak-safe across worlds."
tags: ["recurrence", "benchmark", "ml"]
---

The recurrence index is a risk score that answers a durability question: after a repair, what is
the probability of the same failure returning within a fixed window? The index is built to be
stable under log drift and strict about leakage.

## Inputs

The index uses features that are available at prediction time:

- Repair code hierarchy (level-1 prefix for stable grouping).
- Shop context and tier.
- Lag-safe aggregates computed only on past data.
- Diagnostic flags derived from normalized repair descriptions.

### Baseline feature list (v2)

```text
median_hours_code_past_v2
shop_hours_median_v2
class_hours_median_v2
vehicle_age
shop_tier
warranty_remaining_frac
has_dtc_flag
diagnostic_required
```

## Record identity

Every row needs a deterministic key before any split logic. The pipeline builds a `record_id`
from stable fields (VIN, job start/end, work order, repair code) and suffixes duplicates so the
mapping remains one-to-one even when upstream IDs collide.

```text
record_id = sha256(vin|job_start|job_end|work_order|repair_code|dup_rank)
```

The duplicate rank is computed after stable sorting so the same input yields the same IDs.

## Rolling construction

For each target year:

1. Restrict the training window to years strictly before the target year.
2. Recompute aggregates using only the restricted window.
3. Fit a baseline model that predicts expected cost or risk on log scale.
4. Score the target year and record calibration metrics.

This gives a clean, year-by-year view of performance and avoids future leakage. If a year does
not meet minimum training size, it is skipped rather than padded.

### Pseudo-code (rolling construction)

```text
for target_year in years:
    train = df[year < target_year]
    test  = df[year == target_year]
    if len(train) < min_train_size: continue

    # recompute aggregates using train only
    code_hours  = median(hours by repair_code_lvl1 in train)
    shop_hours  = median(hours by shop in train)
    class_hours = median(hours by class_desc in train)
    global_hours = median(hours in train)

    # map aggregates with fallbacks
    test.median_hours_code_past_v2 = map(code_hours) else map(class_hours) else global_hours
    test.shop_hours_median_v2      = map(shop_hours) else global_hours
    test.class_hours_median_v2     = map(class_hours) else global_hours

    X_train = train[baseline_features]
    y_train = log1p(train.cost)
    fit model
    preds = expm1(model.predict(test[baseline_features]))
```

### Baseline v2 (expected cost)

The baseline model is a rolling, lag-safe estimator that explains scale and removes trivial
signals before recurrence modeling:

```text
expected_cost_v2 = expm1( f_theta( X_baseline ) )
residual_log = log1p(cost) - log1p(expected_cost_v2)
```

`X_baseline` is built from lag-safe aggregates:

```text
median_hours_code_past_v2
shop_hours_median_v2
class_hours_median_v2
vehicle_age
shop_tier
warranty_remaining_frac
diagnostic_required
```

Aggregates are recomputed using only years < target_year. If a code or shop is unseen, the
pipeline falls back to class-level medians, then to global medians.

## Recurrence target

The recurrence label is defined inside a rolling window:

```text
recurrence = 1 if a matching failure signature occurs within 90 days of job start
```

This label is computed only from data available after the repair window closes, and the world
split ensures training rows never include future test events.

### Signature matching

The signature is intentionally conservative:

```text
signature = (repair_code_lvl1, class_desc, shop_tier, diagnostic_flag)
```

This reduces false matches while keeping the label stable as text fields drift.

## Leakage safeguards

The pipeline enforces:

- **Prediction time:** features built from job start, not job end.
- **World definitions:** train years end before test years.
- **VIN disjointness:** cold worlds remove vehicle overlap.
- **Run hashing:** artifacts stored with content hashes and run metadata.

## Validation

Every run produces:

- Per-year calibration metrics (R2, MAE, bias, coverage).
- Content hashes for artifacts so results are reproducible.
- Benchmark slices that merge recurrence scores with proxy baselines.

The goal is not just a score, but a score you can trust.
