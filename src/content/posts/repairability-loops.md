---
slug: repairability-loops
title: "Repairability Loops: From Telemetry to Fix"
date: "2026-01-18"
summary: "A loop that keeps telemetry, labeling, and fix verification in the same feedback system."
tags: ["systems", "repairability"]
---

Most reliability pipelines treat telemetry as a one-way input. That breaks when you need to validate the fix. The JRC pipeline closes the loop by connecting repair actions to recurrence outcomes.

## The loop

1. Ingest field logs with clear provenance and stable record IDs.
2. Create a minimal, stable label schema with explicit prediction-time rules.
3. Attach fixes to signatures, not tickets or free-form text.
4. Verify recurrence in the same data window using leak-safe splits.

The insight is to keep every stage in the same domain so you can measure regression quickly.

## Open questions

- How do we keep signature drift small?
- Can we generate synthetic regressions to test the loop?
- What is the smallest label set that still supports repairability?
