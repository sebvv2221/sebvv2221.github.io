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

## Why it matters

Without a benchmark, recurrence scores can look good even when leakage is present. The suite
forces you to validate:

- VIN disjointness for cold worlds.
- Time ordering with explicit prediction time.
- Coverage thresholds before reporting metrics.

## Outcomes

The suite is not a leaderboard. It is a debugging tool that makes failure cases explicit and
keeps the evaluation honest.
