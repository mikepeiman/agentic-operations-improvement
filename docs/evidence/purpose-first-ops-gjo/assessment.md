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

## Instruction path and invocation

The shared [AGENTS.md](../../../AGENTS.md#work-from-the-outcome) now puts the
necessity question directly in the existing author and reviewer instructions.
The author states the necessary and contrary conditions in the brief. The
reviewer asks what required behavior would fail without the operation and
what evidence shows it. Claude's existing `CLAUDE.md` pointer leads to the
same guide. The draft, review and acceptance stay in their existing records.

For this turn, the existing Metabrain `renderWorkingRules(read)` context
renderer was invoked with the central repository reader. Its output included
both amended instructions and the Claude pointer was verified. The
LF-normalized guide SHA-256 was
`8d2f3d0952c5dfa61486f6243c0bb39b6cad445b9aa9ef39f197a71f95d6d430`.
This exercised the existing loading function directly. A live provider reload
or adoption by a different checkout was not exercised.

The same instruction was applied to this evaluation brief after the
Coordinator's saved review. The third arm needs the independent judgment
about a purpose-led draft. Generating a second draft first added work and
made it harder to isolate what the review changed. The comparison below
now shares the frozen draft with the reviewer, saving six proposed starts
and retaining a scope-preservation control.
[Coordinator's proposal review](metabrain://chat/a3e43da7-6a88-449f-b5a1-51860909dcec?message=ddea3b50-43aa-56ab-b4c7-a7f0138d5be3)

## Saved operational review

The owner redirected the 7tvsa investigation from enumerating existing read
gates to deciding when anyone needs a full read. The old objective, source
`9551085f-ea15-526a-b93b-d06b67377bd4`, had a passing isolated result and was
described as ready for publication review. The review exercised the normal writer
and compared conditional answers with full reads. It withheld overall acceptance.
The published 2727 subset passed its scoped checks, but changing selected
conversation metadata could still trigger full catch-up. Supplements had
discrete tests and lacked integrated or installed evidence. The review kept the
original completion limit at four author runs. The objective state was
`budget-exhausted` and the saved review decision was `changes-required`.
[Owner's necessity direction](metabrain://chat/coordinator?message=f6c25160-281b-4df3-b66a-77e9836ffdc8)
[Earlier fixture report](metabrain://chat/coordinator?message=15eceea4-4443-5cbf-97b0-728f4c4b6ed6)
[Saved fourth-pass review](metabrain://chat/1f99f3c7-833f-4ab2-bb64-49884c4ed0fd?message=15a35ab7-d280-5ed3-b597-8b33008e8c0e)

That is a changed acceptance decision in live work, initiated by the owner's
correction. It predates this wording change and cannot prove the new instruction
would have caused an agent to make the same discovery autonomously.

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

Use two contrasting known cases from the frozen packet. Test unnecessary work
with `full-reads` and preservation of a bounded assignment with
`fixture-only-scope`. Keep the other cases in the offline replay. Keep the
rubric and counterexamples with a reviewer who does not prepare or execute the
runs. Give authors the same case facts and owner constraints, with expected
outcomes, arm labels and earlier assessments withheld.

| Case | Order |
| --- | --- |
| Full reads | Ordinary author, purpose-led author, independent challenge |
| Fixture-only scope | Purpose-led author, independent challenge, ordinary author |

Use the same fixed harness, model, effort, provider, source snapshot, common
instructions and read-only access. Give the ordinary author the existing brief.
Ask the purpose-led author to state the necessary condition and contrary case.
Freeze that response as the purpose-led result. A fresh reviewer receives that
exact draft and the same case evidence. The reviewer can accept or revise it
with a reason. Score the draft alone and then the draft with the challenge.
This compares the marginal effect of a challenge on an identical draft and
avoids a second author call for that condition.

Maximum **six native starts** across two cases. Proposed ceilings are 90 seconds
per call, 270 seconds per case and 540 seconds for the round. No retries,
replacement cells, auxiliary graders or fallback. Stop if a required identity,
terminal event, usage receipt or execution constraint is missing. Proposed soft
stops are 60,000 observed tokens per call and 360,000 total, subject to offline
admission using exact prepared prompt size. The reviewer-arm cost includes its
author draft when comparing workflows. Count the shared author call only once
in actual round consumption.

Reuse Metabrain's `scripts/harness-evaluate.mjs` preflight, one-use release,
pinned runtime and attempt receipts, and `scripts/harness-evaluate-runtime.mjs`
for bounded execution. The existing two-arm common-task runner needs a narrowly
scoped packet extension to accept the fixed conditions and share the frozen
draft with its challenge stage. Implementation and any execution authority remain
open. Preserve the earlier 3bt5f plan and release boundary.

Score paired results independently. Retain hard failures, reviewer disagreement,
actual corrections, wall time to usable answer, observed token and cache counters,
and review time. These known cases can support a follow-up decision. They cannot
establish unseen performance or a standing default.
