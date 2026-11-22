# Purpose-first operational evaluation

**Purpose** Determine whether reconsidering the problem changes the work and its acceptance.
**Constraints** This is a retrospective replay of five known cases, followed by a prepared comparison. No model, provider, account or API call was made for either artifact. Separate owner authority is needed for prospective execution.

The owner accepted the three-way evaluation in Coordinator message
`422e77d2-338d-406d-a6e7-57fbc5f12a5b`. The technical proposal is
`980c8717-231b-554f-9681-98363401eda1`. The initial direction to develop the
programme proactively is `983c9f44-5231-47cc-826b-977e0a7a0e00`.
[Owner acceptance](metabrain://chat/coordinator?message=422e77d2-338d-406d-a6e7-57fbc5f12a5b)
[Proposal](metabrain://chat/coordinator?message=980c8717-231b-554f-9681-98363401eda1)

The [case packet](cases.json) and [rubric](rubric.md) were fixed before the replay
assessments below. SHA-256 of the captured LF files:

- Cases `6637bbbfbdab33e1937524c50a5ed9ed06b864f22c76fdecff5067bc5bfc34f0`
- Rubric `b0611cfea2c0fb31504cb76d89c1456c49beb97cad80adc770edbb02f5a02baf`

## Applied brief change

The [revised full-read brief](applied-review.json) now permits a full read on
initial load or recovery when the consumer cannot reconstruct correct history
from a valid snapshot and verified changes. It requires zero full reads or
rebuilds on unrelated conversation changes. The positive check now exercises
the normal save route with an older edit and attachment replacement, and the
contrary check includes concurrent streaming and multiple watchers. The earlier
fixture covered named changes in isolation. The revised brief requires evidence
for the broader happy path and counterexamples before accepting the repair.
Installed performance remains open.

The existing [operational review procedure](../../operational-review-proposal.md)
now gives authors and reviewers this brief step. The executable check refuses an
incorrect owner reference, missing necessity condition, wrong acceptance
boundary, or claimed installed delivery supported only by isolated evidence.
Those tests exercise the record rules. An explicitly written but wrong
necessity condition can still pass the record check, so the reviewer must judge
whether it follows from the purpose and evidence.

## Retrospective replay

One author reconstructed each response from the cited evidence and scored it
against the frozen rubric. The challenge column shows a simulated independent
challenge, performed by the same author here. Scores are ordered purpose,
elimination, preservation, quality. An asterisk marks a hard failure.

| Case | Implementation-led reconstruction | Purpose-led reconstruction | Problem-challenge reconstruction |
| --- | --- | --- | --- |
| Full reads | Optimize existing read gates and compare faster reads. The unrelated operation stays. **1/0/1/1** | Start with initial/recovery necessity and eliminate unaffected rereads. Preserve changed history. **2/2/2/1** | Include normal writer/save propagation, old edits, attachments, concurrent streaming and multiple consumers. **2/2/2/2** |
| Primary web link | Make the sign-in link an exception to the shared mandatory menu. **1/1/1/1** | Primary action opens the destination across callers. Optional preview stays. **2/2/2/1** | Challenge the shared interaction and exercise pointer, keyboard and modifiers across entry points. **2/2/2/2** |
| Fixture as delivery | Repeat the passing checks and report the delivered experience fixed. **0/0/1/0*** | Judge success at the reported entry point and retain fixture proof at its own level. **2/2/2/2** | Check exact installed identity, then reproduce the owner-observed path with required authority. **2/2/2/2** |
| Watched older edit | Keep full reads on every update to preserve correctness. **1/0/2/1** | Eliminate unrelated reads and preserve older edits via validated changes, including recovery. **2/2/2/1** | Counterexample with unchanged head/count rules out a last-row shortcut. Verify attachment replacement and both consumers. **2/2/2/2** |
| Fixture-only scope | Repeat the fixture and broaden acceptance to installation without authority. **1/0/1/0*** | Complete the isolated regression with exact source and bounded proof. **2/2/2/2** | Keep the delivery owner and unverified installed acceptance visible. The handoff is the requested result. **2/2/2/2** |

The first three cases came from real recorded failures. The two controls are
reconstructed from known behavior and authority boundaries. The replay shows
where the proposed decision changes. It does not estimate causal improvement,
human corrections, quality of future output, wall time or token overhead. All
those workflow observations are unmeasured. Historical owner corrections are
source evidence and did not occur during this replay.

## Bounded prospective comparison

Use three frozen failure cases from this packet as an initial calibration.
Reserve the controls as counterexamples for the reviewer. This
set is known to the preparer and is unsuitable for claims about unseen work.
Keep source facts and owner constraints equal across conditions. Strip the
assessment, expected outcomes and arm labels from author inputs. Hold the
rubric and preservation checks for a reviewer who does not prepare or execute
the runs.

| Case | Condition order |
| --- | --- |
| Full reads | Implementation-led, purpose-led, independent challenge |
| Primary web link | Purpose-led, independent challenge, implementation-led |
| Fixture as delivery | Independent challenge, implementation-led, purpose-led |

Hold the exact harness, model, effort, provider, baseline source, common
instructions, and access policy fixed. All work is read-only and no native tool
or provider exploration is required. The implementation-led author receives
the ordinary brief. The purpose-led author receives the necessity and contrary
condition prompt. The independent-challenge arm uses the same purpose-led
condition and a fresh reviewer sees its draft and the same evidence. Keep the
draft and reviewer decision together as the final output for scoring. The
reviewer may accept or revise the plan and must cite the actual reason.

The calibration has nine author cells and three challenge calls, totaling
**12 native starts at most**. The proposed absolute ceilings are 90 seconds
per call, 360 seconds per case and 1,080 seconds for the round, with no retries,
substitutions, auxiliary grader or provider fallback. Stop if any material
constraint, call identity, terminal event or usage receipt is missing. Proposed
soft token stops are 60,000 reported tokens per call and 720,000 aggregate,
subject to offline admission based on exact prepared prompt size. An in-flight
call can overshoot a soft stop. These are preparation limits for owner review.

Reuse Metabrain's `scripts/harness-evaluate.mjs` preflight, one-use release,
pinned runtime and attempt receipts, and `scripts/harness-evaluate-runtime.mjs`
for the existing bounded harness execution. The current runner hard-codes two
harness-mode arms that share task text. It cannot express this three-condition
matrix with per-arm premise instructions and an independent challenge. The
smallest prospective change is to let the existing packet admit a fixed
condition and challenge stage over the same evidence with the existing
authority and usage checks. That adapter remains unimplemented. Avoid
confounding the purpose treatment with a different harness mode, and keep the
earlier 3bt5f comparison and its authority intact.

Score the paired per-case changes in an independent human review, flag hard
failures and retain disagreements. Separately report total wall time to usable
answer, token/cache counters, reviewer time, and actual corrections or rework
if those are observed. The trial may establish a measured tradeoff for these
cases. A standing default would need further owner review and unseen cases.
