---
slug: benchmark-suite
title: "Benchmark Suite: Comparing Recurrence, Proxy Scores, and Baselines"
date: "2026-01-29"
summary: "A compact benchmark suite that keeps recurrence evaluations honest and reproducible."
tags: ["benchmark", "systems", "repairability"]
---

The benchmark suite exists to answer a simple question: does the recurrence index outperform
proxy scores and naive baselines on clean splits? The answer depends on clean data boundaries,
so the suite is strict by design.

## What the suite produces

- A benchmark slice keyed by deterministic record IDs.
- Joined recurrence scores and proxy scores on a one-to-one mapping.
- Coverage checks for cost, duration, and proxy fields.
- Run metadata with content hashes for every artifact.

## Join logic (deterministic and strict)

The suite refuses to merge if record IDs are not unique. It validates keys on both sides and
fails early if duplicates exist:

```text
assert unique(scores.record_id)
assert unique(base.record_id)
bench = scores ⨝ base on record_id (one-to-one)
```

Any overlap that breaks one-to-one mapping is treated as a data quality error, not a warning.

<<<<<<< HEAD
### Pseudo-code (benchmark build)

```text
scores = read_parquet(recurrence_scores)
base   = read_parquet(gold_data)

base.record_id = make_record_id(base)
validate_record_id(scores.record_id)
validate_record_id(base.record_id)

bench = merge(scores, base, on="record_id", validate="one_to_one")
coverage_cost = mean(bench.log_cost not null)
coverage_dur  = mean(bench.log_duration_hr not null)
if coverage_cost < 0.98 or coverage_dur < 0.98: fail

if jrc_proxy:
    jrc = read_parquet(jrc_proxy)
    bench = merge(bench, jrc, on="record_id", validate="one_to_one")
```

=======
>>>>>>> 2beec16 (Update 4)
## Coverage thresholds

Metrics are only reported if coverage is high enough to be meaningful:

```text
coverage_cost = mean(log_cost not null)
coverage_duration = mean(log_duration_hr not null)
coverage_proxy = mean(jrc_proxy_total not null)
```

If any coverage drops below the threshold (default 98%), the run fails so you don’t end up
publishing partial or biased metrics.

## World-aware evaluation

The suite runs per world:

- **World A (warm):** train and test share VINs but respect time.
- **World A cold:** strict VIN disjointness for cold-start validation.
- **World B/C:** alternative temporal boundaries for robustness.

This makes it explicit whether gains are due to leak-free generalization or data overlap.

<<<<<<< HEAD
### Output artifacts

```text
reports/jrc_omi_comparison/
  benchmark_slice__A_cold.parquet
  benchmark_slice__A_cold.meta.json
  ladder_results__A_cold.csv
  performance_table__A_cold.csv
```

=======
>>>>>>> 2beec16 (Update 4)
## Why it matters

Without a benchmark, recurrence scores can look good even when leakage is present. The suite
forces you to validate:

- VIN disjointness for cold worlds.
- Time ordering with explicit prediction time.
- Coverage thresholds before reporting metrics.

## Example artifact metadata

Every output includes a `__run.meta.json` payload with hashes and environment details:

```text
{
  "artifact": "benchmark_slice__A_cold.parquet",
  "world": "A_cold",
  "rows": 123456,
  "content_hash": "...",
  "record_id_hash": "...",
  "environment": { "python": "3.11", "git_sha": "...", "host": "..." }
}
```

## Outcomes

The suite is not a leaderboard. It is a debugging tool that makes failure cases explicit and
keeps the evaluation honest.
