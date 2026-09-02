---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/AGENTS.md and metabrain-mvp/docs/agents
supersedes: nothing
status: active universal protocol on import
---

# Universal project agent constitution and router

Keep this file small. Load task-specific rules only when their trigger applies.

## Intake

Before substantive work, capture every project-relevant requirement, defect,
constraint, correction, decision, and follow-up according to
[`rules/turn-intake.md`](rules/turn-intake.md).

Use `docs/intake/YYYY-MM/` unless the repository already declares an intake
location.

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

Operate only inside the supplied repository and workspace roots. A Git branch
is a ref, not authorization to create a clone, worktree, sibling directory, or
other filesystem location.

## Context and coordination

Use compact task capsules for long work. Delegate narrow independent questions
with explicit inputs, acceptance criteria, and output shape. Enforce configured
token, cost, model, and concurrency limits.

Follow [`rules/context-and-coordination.md`](rules/context-and-coordination.md).

## Operational records

Keep intake, actionable tracking, canonical requirements, implementation,
verification evidence, and delivery records distinct. Declare one authority
for each role. Follow [`rules/operational-records.md`](rules/operational-records.md).

When the owner says an outcome works, is correct, or is accepted, follow
[`rules/owner-acceptance.md`](rules/owner-acceptance.md) before other work.

## Reporting

Lead with the outcome. Report observed verification, remaining uncertainty,
task state, and genuine blockers. Follow [`rules/reporting.md`](rules/reporting.md).

## Repository-native defaults

Use the repository's existing tracker, canonical documents, search tools,
tests, build commands, current branch, and configured upstream. If one is not
declared or available, continue with safe work that does not depend on it and
report the exact missing boundary. Do not create external infrastructure or
expand filesystem scope as a substitute.

Product meaning and project-specific invariants may extend this router through
routed canonical documents.
