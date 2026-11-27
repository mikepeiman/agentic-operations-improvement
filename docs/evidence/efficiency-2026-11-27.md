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
