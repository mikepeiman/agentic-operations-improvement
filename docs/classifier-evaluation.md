# Offline evaluation of classifier-assisted intent review

**Purpose:** Find out whether a typed model judgment catches scope errors that a Codex agent or a simple rule would miss.

**Constraints:** This is a preparation and offline baseline record. Use source-backed fixtures, keep owner material and holdout answers private, and keep decisions about authority in the existing workflow. No external inference or new dependency is needed for preparation.

## Question and comparison

Ask one question first. What does the person want done about the subject they are addressing? Return one of `explain`, `revise_response`, `revise_plan`, `execute`, or `abstain`, with the source message ID and the passage supporting the suggestion. Abstain when the referent is missing or the message calls for multiple independent outcomes this single-label prototype cannot represent. Treat malformed output and unavailable models as separate outcomes. A suggestion of `execute` conveys no authorization.

Give each arm the same owner message, the preceding message it addresses when available, and the same task context. Compare the current Codex workflow, the literal rule below, and a typed classifier used as a second opinion. Score the final suggestion and record whether the second opinion actually corrected an error. Jev's `Choice` interface and confidence calculation inform the design. They supply no local calibration data. [Typed questions](https://docs.typesafe.ai/introduction), [confidence calculation](https://docs.typesafe.ai/confidence).

## Development cases

These short inputs are reconstructions of recorded incidents, with agent-assigned expected labels. They are for development only. The original records and subsequent owner corrections stay in the [Communication inquiry](communication-inquiry.md).

| Case | Reconstructed input | Expected | Recorded incident |
| --- | --- | --- | --- |
| Wording | This passage is so badly written as to be obscure. | revise_response | 2026-11-08, wording criticism redirected into code work |
| Implied loss | Why did you say recover the existing findings? Were they lost? | explain | 2026-11-22, loss implication in reviewing existing experiment results |
| Priorities | The three priorities are system-wide performance, agent effectiveness, and user logging. The items you named belong under those. | revise_plan | 2026-11-22, task headings misrepresented the owner's governing priorities |
| Audit scope | You were asked for communication failures. This list includes operational failures. | revise_response | 2026-11-22, a communication audit answered with mixed failure categories |
| Direct action | File the communication incidents individually in the permanent inquiry. | execute | Subsequent instruction recorded in the audit-scope incident, message 6535d45a-f7f3-49eb-a7e4-49359ebbd031 |

Literal baseline, in order: a leading “why” or “what” yields `explain`. A leading “file”, “implement”, or “run” yields `execute`. All other inputs yield `abstain`. This intentionally simple rule tests what explicit surface cues buy before spending inference time. On these five reconstructed inputs it answers two correctly and abstains on three. The abstentions include two different kinds of revision. There is one positive execution example and insufficient evidence to judge the rule's false-action rate.

## Withheld cases and review

A case custodian independent of prompt development selects unseen incident families before the prompt is frozen. Include mixed messages, corrections with no change in authorization, actionable instructions embedded in quotations, a missing referent, and clear direct requests. Keep all turns and paraphrases from the same incident family in one split. Preserve original messages locally at their source and build minimal review packets with case IDs, preceding context, and provenance. The custodian and a reviewer resolve expected outcomes before scoring. Record genuine disagreements as ambiguous cases.

Before any run, commit the SHA-256 digest of the ordered case manifest and of the label file, plus the frozen prompt, baseline rules, model identity and scorer revision. Keep the case inputs and labels in the custodian's restricted storage. Give inputs to the runner only after freezing the arms. Release labels to the scorer after predictions have been saved with hashes. Publish aggregate results and redacted examples. Keep the source-backed aggregate record in this repository and retire the restricted packet once review and reproducibility needs have been met.

Compare per-label errors, false `execute` suggestions, abstention rates, useful corrections, and wrong interventions introduced by the second opinion. Report counts as well as rates, by incident family. Measure elapsed time from context preparation through review, including retries, observed token usage, and reviewer time. Mark unavailable observations as unknown. A false execution suggestion on the withheld cases rules out using that candidate for automatic routing in this experiment. Suggestion-only review would still require a practical reduction in scope errors relative to both baselines.

Current state: the development inputs and baseline are ready. A custodian has yet to be assigned and no holdout has been sealed. The next step for this thread is to coordinate that assignment and freeze the comparison before any scoring run.
