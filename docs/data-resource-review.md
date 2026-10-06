# Data resource review

Use for persistence, synchronization, history, backup, transport and resource
regressions. Existing architecture is evidence to inspect, not a requirement.

1. Name the authoritative inputs, what changes in one action, and what should be
   shared or rebuilt. Set measurable budgets for peak process memory, latency and
   total durable growth, including current rows, events, versions, retry results,
   shared bytes, indexes and recovery copies. A per-table budget can conceal a
   duplicate moved elsewhere.
2. Challenge the sharing mechanism before accepting it. Vary insertion/deletion
   lengths and positions, ordering, collection size and payload entropy. Include
   large unchanged inputs beside tiny edits, partial upgrades and failed retries.
   Repeated characters and equal-length edits can conceal amplification. Record
   the escaped case failing before the repair, then measure its corrected cost.
3. Verify exact retry results, reopen/recovery and the actual process boundary.
   Preserve recoverable user inputs; isolate an optional failure to its feature.
   Check protected content when disposing obsolete generated copies. Report
   installed evidence, synthetic evidence, remaining costs and untested boundaries
   separately; a fixture pass closes only the behavior it exercised.

Keep incident measurements in the tracker. Prefer a regression gate to another
general rule; update this guide when a recurring failure exposes a missing case.
