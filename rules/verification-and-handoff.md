---
date created: 2026-09-01
author: Codex, at Mike's direction
derived from: Pax Fluxia false-completion post-mortem and verification protocol
supersedes: nothing
status: active when wired by a project
---

# Verification and handoff

Before implementation, state the requested outcome and the evidence that would
show it is complete. After implementation, verify at the boundary of each
claim:

- code contract: focused test or type/build check;
- runtime route: exercise the active dispatch and consumer path;
- user interaction: exercise the real interface and relevant state;
- persistence: write, reopen or restart, and read back;
- transformation: run representative input and reconcile output;
- integration: exercise success, failure, and reconciliation where promised;
- generated artifact: regenerate and inspect residue.

Review the final diff before delivery.

The handoff must name:

- changed artifacts and behavior;
- checks run and their results;
- boundaries not exercised;
- remaining risks or follow-up work;
- commit, build, run, or output location when one exists.

Use `implemented; owner verification remains` for a user-visible boundary that
was not exercised. Use `fixed` only for the boundary actually demonstrated.

**Observable completion:** a reader can distinguish automated checks, runtime
evidence, and unperformed owner acceptance without reconstructing the chat.

Incident: Pax Fluxia reported a visual transition as implemented after testing
a helper path. Ordinary gameplay used a gated route and post-transition
topology that made the transition invisible.
