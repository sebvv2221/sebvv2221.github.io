# Curriculum Vitae

## Focus

ML systems, repairability modeling, and recurrence targets for real-world automotive repair logs.

## Education

- University of Florida, PhD Researcher (ML Systems)
- University of Florida, MS in Computer Science

## Research Statement

I build reliability pipelines that start with raw field logs and end with leak-safe recurrence
targets. The JRC project treats recurrence risk as the primary metric for repairability, with
cost and duration models serving as baselines to explain scale effects. The core work is building
infrastructure that keeps those targets reproducible across years of log drift.

## Methods & Systems

- Bronze and silver layers with schema validation, dtype normalization, and deterministic ordering.
- Feature engineering for repair code hierarchy, shop tier inference, seasonality, and diagnostics.
- World A/B/C definitions with explicit prediction time and VIN disjointness for cold starts.
- Rolling baseline v2 to estimate expected cost without leaking future data.
- Recurrence index scoring with per-world calibration metrics and benchmark slices.
- Run metadata and artifact hashing to trace every output to its inputs.

## Selected Outputs

- Recurrence scores and calibration metrics per world.
- Benchmark suite comparing recurrence index, JRC proxy scores, and baselines.
- Content-hashed artifacts with reproducible run IDs.

## Contact

Email: [seb.vv2221@gmail.com](mailto:seb.vv2221@gmail.com)
