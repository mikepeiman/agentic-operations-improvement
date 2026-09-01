---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/AGENTS.md and metabrain-mvp/docs/agents
supersedes: nothing
status: review draft, not active policy
---

# Project agent constitution and router

Keep this file small. Load task-specific rules only when their trigger applies.

## Intake

Before substantive work, capture every project-relevant requirement, defect,
constraint, correction, decision, and follow-up according to
[`rules/turn-intake.md`](rules/turn-intake.md).

Create or update the authoritative work item before implementation when the
turn contains independently actionable work.

## Authority

Follow [`rules/authority-planes.md`](rules/authority-planes.md). Distinguish:

1. what should happen;
2. what happens now;
3. what a replica must preserve.

The owner's current explicit instruction outranks stored project artifacts.
Current code is evidence of current behaviour, not automatic authority for
desired behaviour.

## Retrieval and evidence

Start with this constitution, the active task, and one to three routed current
sources. Use targeted structural retrieval before a broad search. Confirm leads
in defining source, data, configuration, tests, or the live artifact.

Follow [`rules/evidence-and-verification.md`](rules/evidence-and-verification.md).

## Work and delivery

Finish assigned scope unless blocked by missing authority, destructive or
irreversible risk, or an unresolved product-defining decision.

Preserve unrelated work. Stage only owned paths. Verify the claimed result,
commit the coherent change, and push it before reporting completion. Follow
[`rules/work-state-and-delivery.md`](rules/work-state-and-delivery.md).

## Context and coordination

Use compact task capsules for long work. Delegate narrow independent questions
with explicit inputs, acceptance criteria, and output shape. Enforce configured
token, cost, model, and concurrency limits.

Follow [`rules/context-and-coordination.md`](rules/context-and-coordination.md).

## Operational records

Keep intake, actionable tracking, canonical requirements, implementation,
verification evidence, and delivery records distinct. Declare one authority
for each role. Follow [`rules/operational-records.md`](rules/operational-records.md).

## Reporting

Lead with the outcome. Report observed verification, remaining uncertainty,
task state, and genuine blockers. Follow [`rules/reporting.md`](rules/reporting.md).

## Project adapter

The target project must declare:

- `[INTAKE_PATH_AND_COMMAND]`
- `[TRACKER_AND_COMMANDS]`
- `[CANONICAL_REQUIREMENT_REGISTRY]`
- `[STRUCTURAL_RETRIEVAL_COMMANDS]`
- `[TEST_BUILD_AND_RENDER_COMMANDS]`
- `[DELIVERY_REMOTE_AND_BRANCH_POLICY]`
- `[DESTRUCTIVE_ACTION_AND_DATA_PRESERVATION_POLICY]`
- `[TOKEN_COST_AND_CONCURRENCY_LIMITS]`

Product meaning and project-specific invariants belong below this router or in
its routed canonical documents.
