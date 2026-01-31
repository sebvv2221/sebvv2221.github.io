---
slug: world-a-cold-targets
title: "World A Cold: Designing Leak-Safe 90-Day Recurrence Targets"
date: "2026-02-01"
summary: "How we moved from cost-based targets to recurrence risk with strict time windows and VIN disjointness."
tags: ["repairability", "recurrence", "ml"]
---

Cost-based targets encouraged us to chase the wrong signals. They were easy to compute but brittle under log drift, and they punished teams that actually fixed root causes. We needed a target that was harder to game and more aligned with field reliability.

## A recurrence-first target

We moved to a 90-day recurrence window that measures if the same failure reappears in a fleet slice after a repair. The proxy is simple and stable:

- Define a failure signature from log clusters.
- Track recurrence within a rolling 90-day window.
- Optimize for the probability of repeat occurrence, not the raw cost curve.

## Why it worked

Recurrence aligns with repairability. It captures whether a fix is durable, and it provides a clean gradient for experimentation. The key was enforcing leak-safe world splits:

- **Time ordering:** training data ends before the test year.
- **VIN disjointness:** cold worlds ensure test vehicles never appear in training.
- **Prediction time:** the pipeline anchors on job start, not job end, so features are truly ex-ante.

```text
recurrence_risk = failures_with_repeat / total_failures
```

The best part: this metric is robust to noisy price models and still rewards root-cause fixes. It also scales cleanly into a recurrence index, where scores can be compared to proxy baselines and calibrated per world.
