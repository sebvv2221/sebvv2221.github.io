# Curriculum Vitae

Sebastian Vo  
(203) 435-3276 | [seb.vv2221@gmail.com](mailto:seb.vv2221@gmail.com) | [linkedin.com/in/sebvv2221](https://linkedin.com/in/sebvv2221) | [github.com/sebvv2221](https://github.com/sebvv2221)

## Education

University of Florida, Gainesville, FL  
Bachelor of Science in Computer Science and Statistics
Expected April 2027  
Relevant Coursework: Computer Systems and Systems Programming, Data Structures and Algorithms,
Operating Systems, Databases, Distributed Systems, Computer Networks (ongoing)

## Skills

- Languages: C++, Rust, Go, C, Python, SQL, ARM and x86 assembly
- Systems & Networking: Linux, POSIX APIs, multithreading (threads, mutexes, condition variables),
  socket programming (TCP/UDP), HTTP/REST, basic performance profiling
- Distributed Systems & Data: replication and sharding, leader-follower architectures, Raft-style
  consensus, message queues and pub/sub, caching, relational schema design and indexing,
  NoSQL/key-value stores
- Frameworks and Developer Tools: Git, Docker, gdb/lldb, CMake, clang-tidy/clang-format,
  unit testing (gtest, Python test frameworks), VS Code, PyTorch, NumPy, pandas, matplotlib, LaTeX

## Experience & Technical Projects

GetCot Lab, University of Florida — Gainesville, FL  
June 2025 – Present  

Applied ML for Evaluation of Repairability Metrics (June 2025 – August 2026)  
- Built Python pipelines to clean and join >1M automotive service records with vehicle metadata,
  producing leak-safe feature sets for modeling repair outcomes
- Trained gradient-boosted trees and neural networks to benchmark expert-crafted repairability
  indices against data-driven 90-day recurrence risk models
- Used SHAP values and targeted ablation studies to interpret model behavior and identify which
  design attributes most strongly predict recurrence
- Authored conference paper; structured code into reproducible modules and notebooks using git
  and Make-style runners

RepLog: Data Evaluation System for ML applications (March 2026 – Present)  
- Building RepLog, a C++ library and CLI that ingests normalized automotive repair logs, builds
  per-vehicle event sequences, and emits labeled cut-points for tasks like 90-day recurrence prediction
- Implemented time-windowed feature extraction (counts, costs, components, shop visits, etc.) that
  uses only information available before each cut, plus regime / world tags to support policy-period
  train/val/test splits
- Added structural leak checks and invariants to prevent future events or ex-post outcome fields
  (e.g., warranty flags, rework labels) from entering the feature set
- Exported leak-safe design matrices to CSV and integrated them with existing Python modeling code
  for tabular and sequence baselines

Personal Project  

AuroraKV: Distributed Key-Value Systems (May 2026 – Present)  
- Implemented a sharded, replicated key-value store with a Rust core: per-shard Raft-style
  consensus for linearizable single-key operations, static hash-based sharding, and a custom on-disk
  B+Tree + WAL storage engine with crash recovery and snapshots
- Added per-shard dynamic membership (Raft configuration changes) and an offline rebalance tool that
  moves key ranges and applies updated cluster configs, enabling operator-driven scaling and repair
- Built a Go-based client, load generator, chaos harness, and linearizability/fuzz-testing framework
  that spin up multi-node clusters in Docker, inject crashes and network partitions, and validate
  AuroraKV's consistency and performance under failure
