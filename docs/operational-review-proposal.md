# Operational review: purpose and concrete proposal

**Purpose:** Record the owner’s purpose and specify the proposed versioned review of agents’ understanding and plans.

**Constraints:** This is a proposal and installs no hook. Owner intent governs; decisions about the Communications & Operations project’s completion belong to the owner.

Status: proposed procedure, 2026-10-28. This document specifies records and checks;
it installs no hook. Source: the owner and agent in "Fix markdown styling on
load", session `01a1792a-c8c0-7b12-9856-00f1dda4e97a`. Existing documentation
work: `ops-dpt`. See the [communication inquiry](communication-inquiry.md).

## The owner's purpose and authority

The owner named the project "Identifying agentic biases, defects, and slop
patterns" and explained:

> The reason I have made it a major project is in order to complete it to a
> sufficient level. I am doing this because your behavior causes too much
> friction, compromises effectiveness, and overall burns too many resources
> (time, tokens, attention, confusion, application bugs, defects, errors, etc).

> My aim is to "complete" this Communications & Operations project to a threshold
> that allows me to focus 100% on actual product development with sufficient
> effectiveness and sufficiently-minimal friction and stress.

The agent mistakenly turned that context into a proposal for numeric completion
criteria and stopping routine expansion. The owner corrected it:

> You are NOT in any way responsible for determining completion or thresholds in
> this area.

Decisions about this project's completion belong to the owner. Agents should
record this purpose, improve their work and present evidence and proposals.
Maintain the project documentation and product references as part of agent work,
so the owner can focus on product decisions.

## The owner's concrete mechanism

> the agent, at whatever point the protocol would trigger a question - eg. the
> boundary between planning and first code action - should write an outline of
> its exact operational understanding, aim, and plan. Then it asks the questions,
> and creates the second version of the same doc. Then they can be compared for
> real difference.

The sections below are the agent's proposed implementation of that mechanism.

## Records and sequence

Use one review directory per task and revision of the owner's request, under the
project's existing evidence directory. Store concise operational summaries,
relevant facts and decisions. Keep private incidental material out of tracked
records. Existing task records link to the review directory.

1. **V1: initial operational understanding.** Save `v1.md` before the challenge.
   Include the user's aim and observable requested result; reported observations;
   established facts with source locations; premises and tentative explanation;
   how the relevant system works; affected paths and shared implementations;
   the proposed actions; and the observations that would disprove success.
   Identify facts and proposals separately. Assign short IDs to requirements,
   claims and plan steps so the comparison can name what changed.
2. **Inquiry and evidence.** Save `inquiry.md`. For each question below, record an
   answer, evidence inspected or an investigation performed, and the consequence
   for the claim or next action. Read, observe and investigate while this step is
   underway. Obtain deciding evidence before relying on a premise to implement.
3. **V2: revised operational understanding.** Save `v2.md` using the same outline
   and IDs. Revise the explanation, scope, actions and verification from the
   inquiry. The original V1 remains available for comparison.
4. **Comparison.** Record changes by ID in `comparison.json`: the earlier position,
   revised position, question that caused the change, evidence, and resulting
   action. Record retained decisions with their supporting evidence. Distinguish
   wording changes from changes in understanding, investigation or action.

The proposed record command writes a receipt containing task, request revision,
session, sequence, relative artifact paths and SHA-256 hashes of LF-normalized
text. It writes V1 once and refuses attempts to replace it. A new material owner
instruction creates a linked revision with a new V1. Routine continuation reuses
the current review. Parallel sessions have distinct directories and receipts.

## Questions and required consequences

| Direct question | Consequence to record |
| --- | --- |
| What did the person actually ask for or observe? What have I added? | Correct the requirement and separate agent additions from owner decisions. |
| How does this work, from its input to the result the person sees? | Read the actual sequence; record the relevant states and transitions before diagnosing. |
| What am I taking for granted? Where did I establish it? | Inspect the source or observation needed to establish each material premise; revise unsupported conclusions. |
| What observation would show this explanation or success claim is wrong? Have I looked for it? | Apply falsifiability: perform the contrary check and record what it showed. |
| What else does the same job or presents the same content? | Reconcile shared components, callers, screens, navigation and reload paths. |
| Does my explanation account for the user's observation? | Investigate remaining discrepancies; revise an explanation that leaves the reported event unexplained. |
| Am I adding a decision, expectation or obligation the person never expressed? | Remove it or identify it as an agent proposal before relying on it. |
| What useful fact or action changes after this inquiry? | Name the affected claim or plan step and its evidence in the comparison. |

Apply the same method when authoring any rule, guide, skill or hook: identify the
mistake it should help discover, the question that prompts discovery and what the
agent must do after answering. Consult the named failure patterns for the current
task. Preserve one governing source for each instruction.

## Hook boundaries and proposed commands

An internal moment such as "choosing an explanation" has no corresponding tool
event. Record the explanation in V1, then require the review before the first
implementation action that depends on it. A conversation-only explanation uses
the same draft-and-review method; a tool hook checks the events it actually sees.

Reuse the adopting project's request/session tracking and hook registration.
The following subcommands are a proposed interface, with no implementation yet:

| Proposed command | Operation |
| --- | --- |
| `review record-v1 <task> <file>` | Preserve V1 and issue its receipt for the current request revision. |
| `review record-inquiry <task> <file>` | Record questions, evidence and consequences linked to V1. |
| `review record-v2 <task> <file>` | Preserve the revised outline linked to the inquiry. |
| `review compare <task> <file>` | Validate ID references and save the substantive comparison. |
| `review check <task> --before implementation` | Verify the current request, artifact sequence, hashes and required fields. |

At `PreToolUse`, check the first implementation mutation for the task. If a current
review is missing, refuse that action with the exact missing record and command.
Permit investigation and writing the task's review artifacts. After the check
passes, permit work within its recorded scope; a changed requirement reopens the
affected review. Normal calls should remain quiet.

Cover the actual mutation routes: patches, shell writes and relevant application
API calls, including calls nested in an orchestration tool. Reuse the host's tool
events and the existing project gate. Avoid a keyword-only detector that mistakes
an arbitrary shell command for a proven read. Verify that the chosen host loads,
trusts, invokes and enforces the hook; configuration on disk is one piece of that
evidence. Codex requires owner review of new or changed hook definitions through
its normal trust interface. See [official hook documentation](https://learn.chatgpt.com/docs/hooks).

The hook checks record integrity and procedural order. The agent must assess the
answers against the underlying evidence; field presence is insufficient grounds
for declaring an explanation correct. For reporting, name the observations that
support the claim and the remaining work. Keep review records available without
requiring the owner to read or approve each one.

## Concrete implementation checks

These checks establish the specified mechanism, independently of decisions about
the Communications & Operations project's completion.

| Scenario | Required observed result |
| --- | --- |
| First code edit with no V1 | The actual host refuses the edit and identifies the missing record. |
| Investigation or creation of review artifacts | The action proceeds without requiring the completed review. |
| Inquiry or V2 missing | Implementation remains blocked; the diagnostic names the missing stage. |
| V1 altered, stale request, wrong task or wrong session | The check rejects that receipt for the pending action. |
| Complete, current review | The implementation action proceeds; later ordinary actions proceed quietly. |
| Patch, shell write, nested tool call or relevant API write | Each tested mutation route observes the same rule. |
| Merely reworded V2 | The comparison identifies wording edits; it supplies no invented evidence of changed understanding. |
| Supported decision retained | The comparison records the inspected evidence and the unchanged next action. |
| Parallel sessions or a resumed task | Receipts remain attributable; valid reviews can be retrieved and reused. |
| Journal regression example | The review covers startup, ordinary navigation, reload from another view and realistic Metatag/video content. |

## Journal example and scope

The owner's requirement remains: show a placeholder while preparing content, then
formatted text, Metatags and saved items. On reload, keep Journal hidden when
another view is being loaded. Process non-plain content before showing it. Account
for the whole app's uses of the same content and presentation mechanisms.

A useful V1-to-V2 change would replace startup-only verification with checks of
ordinary navigation, reload routing, realistic metadata and the interval before
the final presentation appears. Establish how content is read and presented, then
find what exposes it prematurely. The concrete runtime cause remains unresolved
in this conversation; these documents introduce no Journal repair.
