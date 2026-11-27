# Agentic efficiency checkpoint, November 27

**Purpose** Reduce time and tokens per usable result. Recover existing measurements and use them to choose changes and comparisons that can affect current work.

**Constraints** Metabrain published source checked at d5465d922. The isolated source checks used 52685e534. Preserve the existing programme, budgets, blocked trials and provider permissions. The two checks below used saved data and fake transports. No accounts, model calls, desktop changes or new gates.

## What already exists

| Area | Source and owner | Remaining question |
| --- | --- | --- |
| Guidance, rules, hook and host behavior | Metabrain docs/audits/agentic-operations-reference-807h4, including its reading map and hook inventory. Central [AGENTS.md](../../AGENTS.md), [communications inquiry](../communication-inquiry.md) and [supervision audit](../supervision-audit.md). | Read and execution receipts have different coverage. Measure the cost of repeated reads and checks on matched work. |
| Problem choice and quality | [Purpose-first assessment](purpose-first-ops-gjo/assessment.md), ops-gjo, and [classifier design](../classifier-evaluation.md), ops-5yq. | Five retrospective cases isolate decision differences. Independent quality, cost and owner corrections on new cases remain unmeasured. |
| Harness comparisons | Metabrain sh4k2 historical pair in docs/evidence/harness-ab-pilot-2026-11-20. Follow-on cases in docs/evidence/harness-experiment-programme-2026-11-20. Existing scripts/harness-evaluate.mjs and operation-log.mjs bind cases and account for contributors. Supported comparison stays under 3bt5f. | Confirm which optional stages improve the answer enough to justify their input and delay. |
| Run accounting | Metabrain cc727.1 and m75yo.4. Local Nov 25 Eastern coverage under docs/evidence/cc727.1 and docs/evidence/m75yo.4. | In the late Nov 25 sample, tokens were saved for 37/42 direct Claude, 36/47 direct Codex, and 0/4 T3 Gemini runs. Awake time was present for 14/42, 15/47 and 0/4 respectively. Missing samples prevent comparison of all providers. |
| Queue, restart and session costs | Metabrain qf9os.1 and g0ywl.3 for reply and queue evidence, g0ywl.1 for hook receipts, neait/injrl.1/xoa8.21 for stale runs, batch steering and Gemini. | Join by owner input, run, provider and attempt before counting historical retries or claiming whole-workload savings. |

The user's estimate of tenfold waste is an investigation target. The records measure costs in particular runs and cannot establish an app-wide factor.

## Two offline checks applied to current work

1. **Clarity-only scoring on an unchanged answer.** Replayed the saved Rules instruction answer from corrected-results.json through the published runModeReply function with a fixed author result and fake reader. Compared the normal pipeline to the same pipeline taking its existing Lean early-return branch. The output text matched exactly. The normal path invoked author and clarity; the second invoked author alone. In the real historical arm the clarity stage consumed 26,935 of 55,467 reported tokens (48.56%) and 10.407 seconds. The score is metadata. This fixture holds author behavior constant and therefore leaves whole-mode quality and token changes unmeasured. Use a single answer and deterministic evidence checks for this routine source explanation; no separate scored or editorial pass was needed.
2. **Gemini saved-session setup.** Ran the existing 'advertised Gemini resume' unit case on 52685e534. It verified the same saved session and one new prompt after resume, with no load call. In the original installed failure, the load path wrote 525,256 bytes of historic provider output and recorded 48,758ms in stdout writes before the session-open request failed. The current owner confirms Gemini is working again. The fixture verifies method, identity and prompt count. The byte and time observations are from the failed run. Inference savings and a matched installed post-change time are unmeasured. See Metabrain docs/evidence/metabrain-mvp-xoa8.21/gemini-reply-2026-11-27.md.

The earlier completed Rules-and-editor arm used 145,219 tokens and 92.395s versus 55,467 and 35.908s for Rules instruction. Both saved answers covered the required source distinctions when reread without the mode labels. Long-term adoption and independent preference are unmeasured. Local parser replay is a separate result: 50,257 retained frames processed in a median 1,235ms versus 1,814ms with identical projected frames and attachments (Metabrain docs/evidence/agent-run-replay-2026-11-18.md).

## Next discriminating comparison

Use the existing diagnosis-cache and review-durable-save cases. On each, hold provider, model, effort, required guidance and task fixed. Compare one author pass to the same initial author pass with the existing targeted editor when a durable-write or source-integrity question justifies it. Check the saved outputs first using the frozen factual and preservation rubrics. Track each added stage, token/cache counters, wall time, and corrections that change whether the result is usable. Retain the one-pass result where it meets acceptance and added work supplies no consequential correction. Claim an exact improvement only for measured workloads. No provider experiment was started here.

## Session replay and handoff decision

Preserve the context of a resumed session through the provider's saved session identity. A new chat or agent needs the task and the small amount of evidence its work depends on. Re-send a prior tool result only for a stated need, such as recovering an interrupted action or inspecting the exact result in an audit. Full historical tool output has no default role in either flow.

The direct adapter at Metabrain commit 52685e534 selects session/resume when the local Google Antigravity process advertises it. The isolated test confirmed the same session ID and one new prompt. Session/load is still the fallback for a process that supports loading but lacks resume. It has a 45-second request deadline and still permits historical output to reach the diagnostic stream. It is compatibility behavior. An explicit history recovery can justify showing prior updates. An ordinary reply has no use for those updates.

Read-only check of the three latest completed Gemini runs after the failed attempt found three saved replies. The two newest runs were 3b4ab730 and c2e97e84. The saved session-ready events lacked the method field that would distinguish session/resume from session/load or session/new. This confirms delivery in those runs. It cannot establish installation of the new path or a matched speedup. The exact next evidence is a natural resumed turn with provider.session-ready detail.method=session/resume and the matching saved reply.

## Two operating levels

The owner clarified on November 27 that the ability to plan, conduct and
analyze controlled experiments is essential. He wants an immediate operating
approach that delivers good results and a longer-term system that can keep
improving. Both optimize the cost of an accepted result, including every retry,
handoff, review and delivery attempt.

### Immediate triage

1. Give a routine task one execution owner through verification and delivery.
   Keep existing publication ownership. Bring in a reviewer for a concrete
   decision the executor cannot verify cheaply. Omit optional scores and second
   readings that have no effect on delivery. Work from the exact owner request,
   the relevant source and a narrow acceptance check. Batch independent reads
   and keep log and transcript extracts to the lines that establish the claim.
2. Pack compatible small decisions that share setup and can be scored
   separately. The retained calibration used 56,048 reported tokens in one
   request versus 108,355 in two, with 24/24 on both layouts. The cases were
   familiar. A small sample of unfamiliar cases should check transfer before a
   broad workflow change.
3. Concentrate background work on a new actionable event, a changed dependency,
   or a requested status deadline. An unchanged blocked list can be rendered
   from saved state. Verify existing wake-up repairs before assigning another
   implementation. Trace any repeated prefix changes at the provider request
   boundary. Treat storage growth as a separate reliability repair with its own
   measurements and data-preservation requirements.
4. For the first new split test, change only optional context assembly. Choose
   two fresh cases, an exact diagnosis and a small repair with a preservation
   requirement. Use the same provider, model, effort, tool policy, required
   guidance, worktree snapshot and acceptance checks. Use fresh isolated
   sessions, order AB for the first case and BA for the second, and make one
   author attempt per cell. Compare the usual optional prefill with a short
   task-specific packet. Keep required rules and exact evidence available to
   both. Freeze the checks first. Score artifacts without arm labels and count
   tool calls, time to verified result, and each token category. Four author
   turns screen for a large effect. Stop expansion on a quality or authority
   failure. Use retained outputs and deterministic checks while provider
   execution is outside the current scope.

The same design can later test effort, action batching, reviewer placement or
session handoffs. Start with the change most likely to matter in the next
actual workload. Vary one factor unless the choice is between two already
defined operating policies. In that case the result belongs to the policies as
a whole. A task retained from prior development can debug the measurement,
while a fresh task is needed for convincing quality evidence.

### Complete operational system

- **Accounting.** Add missing joins to the existing operation log and provider
  receipts. Attribute the owner objective, exact input, execution run, native
  attempt, tools and child runs, saved result and delivery. Keep fresh input,
  cache reads, cache writes and output separate. Track queue, setup, tool,
  provider and delivery intervals without adding overlapping wall times.
  Provider-side work without an authoritative counter stays unknown.
- **Experiment.** Extend the existing harness evaluator. One experiment record
  fixes the decision, unit of comparison, cases, held factors, assignment,
  acceptance and budget. One result records all attempts, independent
  judgments, costs and outcomes. Derive outcomes from the existing ledger.
  Use deterministic task checks where possible and blind semantic review only
  for material quality questions.
- **Adoption.** Every completed comparison has an owner and a decision:
  adopt in a narrow workload, reject, or name the one missing observation.
  A promising small screen earns a reversible rollout on real comparable work.
  Check quality, owner corrections, retries and total cost per verified
  delivery. Roll back a consequential regression and keep its evidence.
  Widen only when the same saving survives different cases and normal use.
- **Use.** Through the existing operations dashboard work, expose per-objective
  delivery time and usage by source, attempts and missing coverage. Keep
  process, disk and cache metrics attributable to their writers. Report changes
  with a before/after outcome people can use, such as a previously unnecessary
  reviewer or history copy eliminated.

The pasted analysis mixes recorded totals and causal estimates. The micro-screen
measured 167,389 input tokens out of 168,626 total; per-component fixed overhead
was unknown. A cached-input count represents provider-reported processing, not
a measured charge. A tool or activity event is not necessarily a model request.
The share of runs in named coordination chats does not measure dispensable work.
These distinctions matter when choosing which operation to remove. The design
uses retained evidence and opens no new experiment.

## Scoring and review inventory

Source at Metabrain d5465d922 (0.2.3004) and read-only saved desktop records
checked November 27 Eastern. Coverage is scoring of agent replies or work and
the judgments easily mistaken for it. Owner-message text was excluded from
the audit output. No provider calls were used to audit scoring.

| Mechanism | When it runs and what it does | Evidence of actual use and visibility |
| --- | --- | --- |
| Numeric clarity score | scripts/agent-harness.mjs runs one extra model turn after producing the text for each selected non-Lean Harness mode. The reader sees the supplied conversation and the final draft, returns SCORE: 0–100, and does not revise or choose the reply. The worker uses a fresh reader session on the selected provider/backend. | The saved Rules instruction test used 26,935 reported tokens and 10.407s for score 90. The other arm used 26,912 and 11.298s for score 94. The desktop showed 329 Direct reply records, 328 completed and one stopped, with zero stored numeric scores and zero clarity steps. When present, the score is in Reply details and its median is in Harness modes → Record so far. No active saved conversation in the snapshot had a mode selection. |
| Selected-mode substantive review | One editor pass and Rules and editor together check writing. Claim checker checks factual support. Cold reader checks gaps and context. Six family readers check separate groups of rules. Findings can cause an author revision that accepts or rejects them. Fresh writer produces a reply from collected facts. Plain, Rules instruction and Your corrections as examples have no standalone editor, but still get the clarity score. Lean context omits both. | The saved experiment exercised editor, revision and clarity. Live reply step rows in the audit used only ordinary provider-reply and observed Codex-turn labels. Defined extra model turns per reply, excluding the author, are 1 for Rules instruction, Your corrections as examples and Plain, up to 3 for either editor mode, Claim checker or Cold reader, 2 for Fresh writer, up to 8 for Six family readers, and 0 for Lean. |
| Automatic complaint reader | scripts/agent-complaints.mjs runs at worker startup and around runs, after an owner message immediately follows a recorded reply. It asks a separate model whether the owner complained about the writing. It stores fine, failed with the owner's exact quote, or error. It can read the reply, the preceding owner message and the new owner message. | 51 saved outcomes across five conversations, all on Direct replies and all with Claude Sonnet low. 47 fine and four errors, three mentioning allowance or 429. 34 of the reviewed replies were Claude and 17 Codex. There is no per-verdict token total in this table and overwritten retry attempts cannot be counted from rows. The reader model is set in Harness modes → Record so far → Summaries and reply review. The metric is Failures you named. |
| Claude Code draft hook | The Claude UserPromptSubmit, PreToolUse and Stop registrations invoke .claude/hooks/reply-draft.mjs. When active, it asks for a draft, runs local writing checks and can launch one extra Claude Sonnet low editor on the eligible draft write. Editor findings can influence the reply. It exits when a Metabrain Harness mode supplies its own pipeline. Immediate acknowledgments are exempt. | Source-configured. No matching reply-draft receipt appeared in the bounded November 25–27 receipt read (about 1.37 MB). That leaves actual invocation and editor spend unverified in this window. The Codex registration does not include this draft editor. |
| Explicit reviews and experiments | Code, design and delivery reviews assess requirements when a reviewer runs. Owner verdicts and supervision decisions are stored judgments. The harness pilot used internal model clarity and a separate unblinded rubric assessment. Micro-screen and packing have deterministic answer-key grading. Purpose-first and design/diagnosis evaluations use their experiment rubrics. | These are named tasks or explicit evaluation paths with their own evidence and costs. Stored verdicts and local rubric calculations do not themselves start a model. Arbitrary chat requests asking an agent for a judgment are accounted for as ordinary assigned work. |
| Local rules and ranks | Hook and contract conditions, search relevance, text similarity, recommended-action ordering and owner verdict buttons use code or explicit input. | These are not paid language-model scoring. They can still use local CPU and require their own performance measurements. |

The original metabrain-mvp-f2iw5.2 approval limited automatic complaint reading
to owner messages after sub-chat replies. The complaint reader now scans
every agent_reply_record. The later direct accounting writer inserts
mode=Direct reply into that table. Together those paths admit ordinary Chat.
This is the actual recurring review expense found in the snapshot. The
26,935-token clarity scorer is evidence about the selected Harness mode in
the test. It cannot be counted as a saving on ordinary direct replies.

Source paths include scripts/agent-harness.mjs, scripts/agent-chat-worker.mjs,
scripts/agent-reply-accounting.mjs, scripts/agent-complaints.mjs,
.claude/hooks/reply-draft.mjs, .claude/settings.json, .codex/hooks.json,
src/lib/build/chat/HarnessModes.svelte, ReplyDetails.svelte, and harness-modes.json
in the same directory. Runtime counts are from agent_reply_record,
agent_reply_step and agent_reply_complaint. Estimates of spending from unseen
native retries or provider billing are outside these observations.
