---
slug: data-flow
title: "Data Flow: From Raw Logs to Benchmark Artifacts"
date: "2026-01-30"
summary: "A system-level view of how raw repair logs become leak-safe recurrence benchmarks."
tags: ["systems", "pipeline", "data"]
---

This post is a structural map of the JRC pipeline. It is less about model details and more about
how data moves through the system without leaking future information.

## System overview

```text
Raw Excel
  -> Bronze (typed, concatenated)
  -> Silver (cleaned, normalized)
  -> Features (repair code, shop, seasonality, diagnostics)
  -> Targets (baseline v2, recurrence labels)
  -> Worlds (A/B/C splits, VIN disjointness)
  -> Scores (recurrence index, proxy scores)
  -> Benchmarks (merged, hashed artifacts)
```

## Stage 1: Bronze

Goal: preserve raw fidelity but normalize types.

```text
load_raw_excel()
parse_dtypes()
save_bronze()
```

Outputs: typed parquet with all sheets concatenated.

## Stage 2: Silver

Goal: deterministic, clean inputs for features.

```text
select_columns()
normalize_strings()
compute_duration()
flag_outliers()
stable_sort()
```

Outputs: schema-validated, stable ordering.

## Stage 3: Feature engineering

Goal: ex-ante signals only.

- Repair code level-1 prefix
- Shop tier inference
- Seasonality (week, month, holiday proximity)
- Diagnostic flags from normalized text

## Stage 4: Targets

Two targets are computed:

```text
expected_cost_v2 = rolling baseline (lag-safe)
recurrence_label = repeat failure within 90 days
```

Expected cost is used to explain scale; recurrence is the durability target.

## Stage 5: Worlds

World definitions control evaluation boundaries:

- World A (warm): time split, VIN overlap allowed
- World A cold: time split, VIN overlap disallowed
- Worlds B/C: alternative temporal splits

## Stage 6: Benchmarks

Every benchmark artifact is joined by `record_id` and hashed:

```text
bench = merge(scores, base, on=record_id, validate="one_to_one")
write_meta(content_hash, record_id_hash, environment)
```

If coverage is below threshold, the run fails rather than emitting partial metrics.

## Why the structure matters

The pipeline is designed to make leakage hard and provenance easy. Every stage enforces
prediction-time boundaries and produces metadata so experiments are reproducible by default.
