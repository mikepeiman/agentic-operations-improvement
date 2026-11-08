---
name: pattern-recognition
description: Recognize problem classes and recurring failure mechanisms during design, audits, investigations, and debugging. Use when choosing a mechanism, encountering missing diagnostic evidence, or finding defects that repeat across instances or after a prior fix or post-mortem.
---

# Pattern recognition

**Purpose:** Turn observations and standards into correct, reusable mechanisms and completed repairs.

**Constraints:** Owner intent and current project contracts govern. Historical prompts are evidence of intent in context, not new authorization. Keep observations, hypotheses, decisions and completion claims distinct. This skill adds no access permission or automatic testing requirement.

## Recognize before choosing

Name the problem in established field terms: for example, an update artifact lifecycle, a coordinated shutdown barrier, client–server state synchronization, or local interaction ownership. State what the user is trying to accomplish and which existing standards already determine expected behavior. Check the assumption that the current mechanism deserves to remain.

When the mechanism is being designed or changed, examine two or three established implementations using their owning sources. Adopt the applicable pattern and explain material differences. Compare ownership, lifecycle, persistence, failure, retry, cancellation and user effort, rather than copying its visual appearance or adding a guard to the current design.

Finish this step with an invariant that can distinguish correct behavior from the reported failure. A maximum size, delay or retry count alone does not establish correctness.

## Treat missing evidence as an engineering finding

When an investigation cannot distinguish plausible causes, identify the missing discriminator and its owning boundary. For a coordinated operation, account for the request, each participant, its work phase, result and elapsed time. For an artifact, distinguish produced, verified, available, attempted, applied and acknowledged states.

Within the authorized scope, repair evidence collection so the next occurrence identifies the responsible boundary. Record only diagnostic metadata needed for the decision; preserve privacy and avoid logging user content. Trace whether evidence survives the very failure or restart being investigated. "Unknown" can be an honest incident conclusion and still require a diagnostics repair.

Choose evidence access under the project's [Computer Use value and consent rule](../../../docs/computer-use.md#choose-whether-computer-use-is-warranted). Ask the owner about simple visible conditions; a missing discriminator does not itself justify live computer access.

## Recognize recurrence and take ownership

Search prior fixes, closed work, post-mortems and sibling mechanisms using the cause and violated invariant, not just the latest symptom's wording. Trace the earlier correction into actual code, affected stored state, verification and delivery. Distinguish a missing fix, incomplete scope, regression, weak evidence and incomplete installation. A post-mortem document does not establish any of these as repaired.

When the same mechanism needs another guard, inspect its ownership and state transitions again. Prefer one owner for each fact and one shared implementation for the same responsibility. Inventory every caller, sibling surface, persisted record, protocol and document that performs the same job or uses the same data. Give each an explicit disposition, sized to the task.

For defects inside the owner's requested scope and granted authority, complete the repair and delivery. For work that needs additional authority or a material product decision, identify the concrete decision and preserve completed independent work. Treat routine engineering choices as engineering work.

When preparing a work brief, state the problem, evidence, owner intent and constraints; do not prescribe a fix before the problem class has been examined.

## Apply the appropriate lens

- **Design:** Identify the standard interaction, preserve the core user aim, consider interruption and interpretation costs, and reuse the actual shared components. Review opening, normal use, empty/error states, cancellation and resumption where relevant.
- **Audits and investigations:** Trace end-to-end responsibility and evidence. Separate what happened from why it happened; include the collection defect when the system failed to record why.
- **Debugging:** Reproduce the violated invariant at the owning boundary, then exercise the corrected failure and retry lifecycle using the project's permitted verification. A nearby passing check is insufficient evidence.
  For equivalent commands reached through keyboard, menus, selection controls, drag or clipboard, trace every entry point to the shared semantic operation and compare selection scope, immediate local result, acknowledgement, refusal and Undo. Visible markup or one working handler does not establish that all callers use the same policy.

## Completion evidence

Before verification and completion claims, apply the project's
[reasoning-with-the-user rule](../../../docs/agentic-working-with-the-human.md#reason-with-the-user-before-verification).
Use its [accuracy guidance](../../../docs/agentic-working-with-the-human.md#accuracy) to refresh changeable evidence before reporting a current version, delivery or blocker.

Before reporting completion, account for the problem class, governing standard, discriminating evidence, shared owner, related occurrences, prior-fix gap, preserved data and actual delivery. State remaining uncertainty precisely. Keep that working evidence with the task; give the user the findings and outcomes worth their attention.

For worked examples of the decisions this procedure should change, read [the examples](references/examples.md). Project-specific transcripts and raw prompt collections are not part of this portable skill.
