---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio fabrication-and-symptom-fix post-mortem at https://github.com/mikepeiman/curatio/tree/8c9deb3/docs/post-mortems"
supersedes: nothing
---

# Root cause, not green indicators

## Trigger

When a proposed fix changes a status, metric, retry, warning, exception, timeout,
or presentation of success.

## Required action

1. State the user-visible or data-integrity acceptance condition first.
2. Trace the path that establishes that condition.
3. Fix the earliest owning cause that makes the condition false.
4. Keep indicators conservative: they may report success only when the underlying
   capability or output is verified.
5. Label retries, fallbacks, and workarounds as such; state the failure they do
   not remove.
6. Prove that the acceptance condition, not merely the indicator or test count,
   changed.

Completion criterion: the real behavior or data invariant passes its observable
gate, and every displayed success signal follows that gate.
