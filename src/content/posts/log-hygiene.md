---
slug: log-hygiene
title: "Log Hygiene for Long-Running Models"
date: "2025-12-05"
summary: "Keeping telemetry clean enough to trust recurrence signals across years of log drift."
tags: ["ml", "systems", "telemetry"]
---

Long-running models do not fail loudly; they fail quietly with subtle logging shifts. In the JRC pipeline we treat log hygiene as first-class infrastructure.

## Three rules

- **Stable identifiers:** every row needs a deterministic record ID. We hash VIN, dates, work order, and repair code to create reproducible keys.
- **Bounded cardinality:** avoid unbounded text features when you can normalize, bucket, or hash.
- **Timestamp sanity:** enforce monotonicity and double-check with job start and end fields.

## Quick checklist

- Run weekly histogram checks on key fields and watch for drift.
- Keep a data dictionary in the repo and track column contracts.
- Store run metadata and content hashes alongside artifacts.
