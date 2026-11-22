# Bounded supervision audit

**Purpose:** Check which results Metabrain still owes, what the evidence proves, and who takes the next action. Exercise one independent Codex review.

**Constraints:** The Master Coordinator retains delivery responsibility. This pilot reads existing evidence and uses one bounded review. A standing supervisor or council remains an owner decision. The existing harness matrix and its authorization are unchanged.

The owner asked the Coordinator to “consider setting yourself up a supervisor, and perhaps other emmbers for a Council of Experts, inspectors, supervisors, managers and executives.” The full wording and source are recorded on `ops-5yq`. The immediate audit is `ops-5yq.2`.

## Proposed roles for ongoing cooperation

- **Master Coordinator** owns priorities, assignments and follow-through to delivery.
- **Evaluator** analyzes and judges the Master Coordinator's work and overall
  Operations. It records findings against the obligations and evidence.
- **Problem Solver** takes findings of defects, failures and insufficiencies and
  devises solutions.

The Evaluator hands a concrete finding to the Problem Solver, who returns a
proposed remedy and a way to verify it. The Master Coordinator decides how to
act within the owner's authority and follows through. This is a proposal for
ongoing cooperation following the independent review below.

## Method

The [snapshot](evidence/supervision-audit-2026-11-22.json) retains the obligations, observed stages, exact evidence references, measurement boundaries and next owners. Run `node checks/supervision-audit.mjs docs/evidence/supervision-audit-2026-11-22.json` from this repository. The check lists missing evidence stages and returns a failing exit status if a recorded completion assertion lacks required evidence. Explicit unknown costs remain visible. The inputs are a point-in-time reading of the owning records. The checker does not read Metabrain records, certify the entered evidence or monitor work.

The existing Metabrain Coordinator supervisor already makes acceptance review distinct from a finished run and reconciles uncertain external effects. Its guarded publication and preparation workflow distinguishes a verified patch, a remote commit and a prepared update. This standalone check applies those distinctions to a read-only evidence snapshot so the independent reviewer can challenge the classification without writing to the release or supervision stores. The comparison run and its authorization stay with `metabrain-mvp-3bt5f`.

Review the outcome and the response the owner received. Two Operations cases
cover [instructions acknowledged without execution](agentic-failure-patterns.md#instruction-acknowledged-without-execution)
(`ops-g47`) and a [question whose delivery was inferred from a tool acknowledgment](agentic-failure-patterns.md#question-delivery-assumed-from-tool-acknowledgment)
(`ops-gkh`). A Communications case covers the [written defense of an unnecessary diagnostic approval request](communication-inquiry.md#2026-11-22--diagnostic-permission-gate-defended-after-correction)
(`ops-o9q`). The [repeated failure to deliver a promised report](agentic-failure-patterns.md#repeated-report-non-delivery-after-correction)
is an Operations case.

## First findings

- Native profiling has fixtures, a source handoff, and a native check reported underway. The installed capture is missing. The native shell check found that the locked Tauri build lacks the API used by the packet. Publisher a9 must verify the correction and record the release identity. The designated preparer can then prepare it and the runtime-capture owner can obtain a noninteractive, exact-build native sample through the verified route. The Coordinator then owns fixing and remeasuring confirmed hot paths. Desktop or app control remains consent-bound.
- The Chat read investigation established repeated approximately 34 MB full responses and a missing revision guard on mounted panes. B6 owns the repair. The headless proof timed out opening the fixture tab. B6 owes runnable proof for unchanged panes and streamed updates, followed by an exact-build byte comparison after release.
- The three ordered UI packets cover message references, task navigation and editor corrections, and collapsed relay layout. The task/editor combined fixture passed and the publisher reported matching three UI manifests. The publisher must supply the combined remote source identity and the preparer the corresponding package receipt. Installed behavior remains open.
- Cleanup was held because closing the tracked process can leave descendants using its Temp. The Coordinator owes B6 the surviving-descendant case. The next fixture must show both lease protection while the descendant survives and reclamation after positive process-tree settlement.
- None of the reviewed updates explicitly claimed that these owner-visible outcomes were delivered. Source handoffs and checks are recorded at their observed stages. The Master Coordinator still owns the path through publication, preparation and runtime evidence.

Recorded byte volumes describe the historical transport window. They do not establish time or tokens spent by agents, owner attention, or the cause of native WebView memory and GPU use. These unknown costs remain open in the snapshot.

## Independent review

The reviewer receives the five rows, the check, and the original source pointers. The review asks for a verdict on missing obligations, incorrect evidence stages or costs, and exact next owners. An expert is worth adding only when the first review identifies a concrete question requiring that expertise.

One Codex review ran to completion in **142.814 seconds** measured from its
recorded start to terminal update. That is elapsed time for the review run.
Token use and owner attention were unmeasured. The independent reviewer found
no explicit claim in the original snapshot that any owner-facing outcome had
shipped. The reviewer identified missing evidence and obligations, including
hot-path remediation, the ordered message-reference packet, the isolated
collapsed-relay proof and the exact preparation gates. The refreshed snapshot
incorporates these corrections and cites the mounted-Chat dispatch receipt
that distinguishes assignment from routing intent. Its 33.1695 seconds for the
failed proof command exclude earlier engineering and later recovery.

[Independent verdict](metabrain://chat/844256d4-9c6a-4656-bdf2-8ef52f886855?message=aabdd3b6-6230-5c2b-a269-d792708c20fe)
