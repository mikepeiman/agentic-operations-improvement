---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/AGENTS.md and metabrain-mvp/docs/agents/issue-tracker.md
supersedes: nothing
status: review draft, not active policy
---

# Operational records

Declare one authority for each role:

```text
owner input
    -> immutable intake       lossless provenance
    -> actionable tracker     priority, dependency, ownership, completion
    -> canonical requirements current durable meaning
    -> implementation         present mechanism
    -> verification evidence  observed result
    -> delivery record        commit, build, run, or produced artifact
```

Keep the roles distinct even when one tool displays several of them.

- Intake does not set priority.
- The tracker does not replace canonical product meaning.
- Current implementation does not redefine the intended requirement silently.
- Tests and reports do not replace observation beyond the boundary they
  exercise.
- Generated Markdown, dashboards, GitHub mirrors, and handoffs are views unless
  the constitution explicitly makes one authoritative.

When a secondary view changes independently, reconcile it into its declared
authority. Do not maintain two silent sources of truth.

Record discovered independent work in the tracker with its dependency or
relationship. Do not expand the current task silently.

**Compliance:** every operational fact has one declared authoritative record
and every secondary representation names its source.
