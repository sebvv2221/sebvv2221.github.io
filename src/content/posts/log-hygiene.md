---
slug: log-hygiene
title: "Log Hygiene for Long-Running Models"
date: "2025-12-05"
summary: "Notes on keeping telemetry clean enough to trust recurrence signals over months."
tags: ["ml", "systems", "telemetry"]
---

Long-running models do not fail loudly; they fail quietly with subtle logging shifts.

## Three rules

- **Stable identifiers:** every log line should anchor to a versioned signature.
- **Bounded cardinality:** avoid unbounded string fields when you can hash.
- **Timestamp sanity:** keep a monotonic clock and cross-check with server time.

## Quick checklist

- Run a weekly histogram check on key fields.
- Keep a data dictionary in the repo.
- Version the schema and enforce diffs with CI.
