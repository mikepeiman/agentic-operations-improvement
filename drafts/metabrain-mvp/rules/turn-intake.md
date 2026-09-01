---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/docs/agents/turn-intake.md
supersedes: nothing
status: review draft, not active policy
---

# Turn intake

Before substantive analysis, planning, investigation, editing, or execution:

1. Scan the current user turn for project-relevant requirements, defects,
   constraints, corrections, decisions, and requested follow-ups.
2. Write one new append-only intake record under `[INTAKE_PATH]`.
3. Preserve enough of the user's words and concrete examples to reconstruct the
   request without chat history.
4. Create or update the authoritative work item for each independently
   actionable item.
5. Begin the requested work.

Intake preserves provenance. It does not set priority, replace canonical
requirements, or become the actionable tracker.

Do not keep raw intake and current execution state in one growing task file.
Do not rewrite old intake when the owner corrects a decision. Capture the new
turn, then update the current authoritative requirement or work item.

**Compliance:** the intake timestamp precedes substantive work and every
independent action has one tracker identity.

**Incident:** Metabrain's rolling task document combined raw requests and
current state. It grew too large to operate reliably and could not guarantee
that detailed requests survived later work.
