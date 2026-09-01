---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/AGENTS.md and metabrain-mvp/docs/agents
supersedes: nothing
status: distillation, not an activated rule set
---

# Cross-project agent operating model

## Purpose

This document separates the reusable operating model in Metabrain from its
product policy and tool-specific wiring. It applies to software projects and
processing projects where agents inspect evidence, change durable artifacts,
coordinate concurrent work, and report completion.

It does not activate these practices in another repository. A project must
select the relevant rules, name its local tools and sources of authority, and
wire any checks or hooks it needs.

The reviewable Metabrain-sourced package is under
[`drafts/metabrain-mvp/`](../drafts/metabrain-mvp/README.md). It remains
inactive until individual rules are reviewed and promoted.

## Selection test

A protocol belongs in the shared layer when it:

1. prevents a failure class that can recur across projects;
2. is stated in terms of outcomes and evidence rather than one repository's
   product model;
3. preserves local project authority instead of imposing a universal product
   decision;
4. remains useful when the language, framework, artifact type, or tracker
   changes;
5. says what an agent can observe to know that it complied.

Put a protocol in a project adapter when the principle is reusable but its
command, path, tracker, or generated artifact is local. Keep it in the project
when it defines domain meaning, architecture, product identity, data policy,
or a local acceptance criterion.

## The small always-on kernel

### 1. Preserve material input before work

Before substantive work, capture new requirements, defects, constraints,
corrections, decisions, and requested follow-ups in an append-only intake
record. Preserve enough of the owner's meaning to reconstruct the request.

Intake is loss prevention, not prioritisation. Convert independently actionable
work into the project's tracker after capture. Do not make chat history, a
rolling task document, or a generated issue view the only durable record.

**Observable compliance:** the intake record predates the implementation and
the actionable item has one authoritative tracker identity.

**Originating failure:** Metabrain's earlier rolling task document mixed raw
input with current execution state, grew too large to operate reliably, and
could not guarantee that detailed requests survived later work.

### 2. Establish the authority plane before resolving disagreement

Do not use one authority chain for three different questions:

| Question | Highest-value evidence |
|---|---|
| What should happen? | current owner instruction, repository constitution, current canonical requirement |
| What happens now? | observation at the active boundary, defining source/configuration/data, focused tests |
| What must a replica preserve? | current owner instruction, named reference artifact or implementation, defining reference source |

Plans, audits, handoffs, generated bundles, issue mirrors, old specifications,
and agent judgement are derived evidence unless the project explicitly assigns
them a stronger role.

When two artifacts disagree, first state which question is being answered.
Then apply the authority chain for that plane. Current code can be strongest
evidence of present behaviour while still being defective against the current
requirement.

**Observable compliance:** a finding names the question, the governing source,
and whether other evidence is direct, derived, inferred, or historical.

This refines the existing shared `authority-chain.md`: its replication ordering
is valid for replication work, but “running source code” cannot universally
outrank a current canonical requirement when deciding desired behaviour.

### 3. Settle load-bearing premises

Before answering or implementing, identify premises that would change the
answer: repository, artifact, version, scope, identity, active wiring, source,
or definition. Verify them cheaply when possible.

Ask the owner only when an unresolved premise is genuinely product-defining,
destructive, irreversible, or knowable only by the owner. A missing technical
prerequisite is normally work, not a reason to ask.

**Observable compliance:** the answer exposes any unresolved load-bearing
premise and does not reason past it.

### 4. Retrieve narrowly, then confirm in primary evidence

Start from the task and a small routing map. Load the repository constitution,
the active task capsule, and the few current sources relevant to the work.
Use structural indexes or targeted search to find likely seams; confirm useful
leads in defining source, data, configuration, tests, or the live artifact.

Do not preload the documentation corpus. Do not let a search result, knowledge
graph, summary, generated output, or archive become proof merely because it was
found first.

**Observable compliance:** the work cites the defining evidence it inspected,
and historical material is opened only for a named provenance question.

### 5. Verify at the boundary of the claim

A changed artifact is not evidence that its intended effect occurred. Match
verification to the claim:

- user interaction: exercise the real interface;
- transformation or import: run a representative input and inspect the output;
- persistence: write, restart or reopen, and read back;
- migration: migrate an older fixture forward;
- integration: exercise request, acknowledgement or failure, and reconciliation;
- generated artifacts: regenerate and confirm no unexplained residue;
- destructive or recovery behaviour: test deletion, restoration, and retention
  at the promised boundary.

Use the smallest direct check that can falsify the claim. State exactly which
manual or external boundary remains unperformed.

**Observable compliance:** every completion claim names observed evidence; an
unperformed acceptance check is reported as unverified.

### 6. Keep work state safe and attributable

Inspect repository and process state before writing and again before delivery.
Preserve unrelated user and agent work. Stage only owned paths. Do not replace
version control with duplicate `old`, `v2`, or commented-out implementations.
Do not stop unrelated processes.

Make destructive actions explicit, narrowly targeted, and recoverable where
possible. Treat source inputs as immutable when the project promises
non-destructive processing; write results to a distinct output.

**Observable compliance:** the delivered change can be attributed to its task,
and unrelated work remains byte-for-byte and process-for-process undisturbed.

### 7. Complete coherent changes completely

For a repository-changing task, verification, commit, and push are one delivery
sequence. Commit only a coherent owned change. A successful local commit is not
remote delivery. A successful push is not verification.

Generated indexes that describe a code change belong in the same commit as the
change, not a follow-up commit whose only purpose is generated residue.

**Observable compliance:** the report names the verification and pushed commit;
the working tree contains no unexplained residue owned by the task.

### 8. Report facts, limits, and state

Lead with the outcome. Separate observed fact, source evidence, inference,
estimate, recommendation, and open question. Report completed work,
verification performed, remaining work, genuine blockers, and tracker state.

Use direct, stable terms. Write instructions to direct behaviour, not to win an
argument. Explain non-obvious reasons in the durable artifact or commit where
future maintainers need them.

**Observable compliance:** a reader can tell what changed, what was exercised,
what remains uncertain, and where the work lives without reconstructing the
chat.

## Routed modules

These are broadly useful but should load only when the task triggers them.

| Trigger | Routed protocol |
|---|---|
| unfamiliar, architectural, cross-module, or impact-sensitive work | structural retrieval, affected-symbol analysis, focused source confirmation |
| defect or regression | reproduce, localise, form falsifiable hypotheses, prove the cause before proposing a fix |
| schema, storage, migration, import, or sync | identity, preservation, conflict, rollback, and old-fixture verification |
| user-visible behaviour | intended flow, real interface verification, accessibility and error-state checks |
| long or multi-agent work | compact task capsule, narrow delegation, explicit token/cost/concurrency limits |
| owner acceptance or withdrawal | record exact words against commit/version/build in the authoritative tracker |
| destructive or irreversible action | exact target resolution, recovery plan, explicit authority, post-action accounting |
| external or historical reference | provenance, citation, authority-plane classification, source-rot checks |

The trigger and expected output are universal. Commands such as `graphify`,
`bd`, a browser harness, a migration runner, or an issue mirror belong in a
project adapter.

## Operational state model

Keep these roles separate even when a project implements them with different
tools:

```text
owner input
    -> immutable intake       lossless provenance
    -> actionable tracker     priority, dependency, ownership, completion
    -> canonical requirements current durable meaning
    -> implementation         present mechanism
    -> verification evidence  observed result
    -> delivery record        commit, build, run, or produced artifact
```

A generated Markdown issue list, GitHub mirror, dashboard, report, or handoff is
a view of one of these roles. It must not quietly become a second authority.

## Context and cost control

Context is a routed working set, not a measure of diligence.

- Keep the always-on constitution small.
- Load task-specific rules only when triggered.
- Give delegated work a narrow question, named sources, acceptance criteria,
  and output shape.
- Use bounded parallelism for independent work; do not fan out a repository
  sweep without a purpose.
- Maintain a compact capsule for long work: objective, current state, evidence,
  decisions, acceptance criteria, owned files, and next action.
- Checkpoint and continue from the capsule when transcript size reduces
  performance.
- Enforce configured token, cost, and concurrency limits; never silently change
  billing or model policy to finish a task.

## What remains project-specific

Do not export these from Metabrain as universal agent rules:

- product names, ontology, module boundaries, and terminology;
- its single-store, Metatag, history, Journal, or sync invariants;
- exact documentation paths and status labels;
- Beads as the mandatory tracker;
- Graphify as the mandatory structural index;
- Svelte, Rust, Tauri, browser-extension, database, port, and build commands;
- the identity of a particular reference implementation;
- an unconditional requirement to run a UI when the project has no UI.

Export the invariant instead: one authoritative tracker, one declared
structural-retrieval adapter when needed, verification at the claim boundary,
and explicit local product authority.

## Mechanisation boundary

Automate conditions a tool can determine:

- required authority and provenance declarations exist;
- citations resolve;
- intake exists before implementation;
- tracker identity appears in the delivery record when required;
- forbidden generated-only commits are detected;
- a dirty tree contains paths outside the task's declared ownership;
- required checks ran and their outputs were recorded;
- the pushed remote contains the delivered commit.

Do not claim a hook can decide product meaning, semantic equivalence, UX
quality, causal correctness, or whether an inference is wise. Automation should
make missing evidence noisy and deliver the relevant rule at decision time.

## Recommended repository shape

```text
AGENTS.md                 small constitution and router
rules/                    activated cross-project rules, one failure class each
docs/                     explorations and distilled guidance, not active policy
checks/                   deterministic checks with corrective failure messages
adapters/                 project, tracker, IDE, and harness wiring
```

Promote a section from this document into `rules/` only after a real project
incident supplies the failure, scope, and observable correction. Keep the
incident short and name its originating project in the commit trailer.
