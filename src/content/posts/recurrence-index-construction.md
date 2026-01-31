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

## Rolling construction

For each target year:

1. Restrict the training window to years strictly before the target year.
2. Recompute aggregates using only the restricted window.
3. Fit a baseline model that predicts expected cost or risk on log scale.
4. Score the target year and record calibration metrics.

This gives a clean, year-by-year view of performance and avoids future leakage. If a year does
not meet minimum training size, it is skipped rather than padded.

## Validation

Every run produces:

- Per-year calibration metrics (R2, MAE, bias, coverage).
- Content hashes for artifacts so results are reproducible.
- Benchmark slices that merge recurrence scores with proxy baselines.

The goal is not just a score, but a score you can trust.
