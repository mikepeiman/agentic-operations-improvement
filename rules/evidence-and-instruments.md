---
date created: 2026-09-01
author: Codex, at Mike's direction
derived from: Pax Fluxia AGENTS.md and sandbox false-negative post-mortem
supersedes: nothing
status: active when wired by a project
---

# Evidence and instruments

Before making a material claim:

1. Label it as observed, source-verified, derived, inferred, or unknown.
2. Name evidence that could confirm or refute it.
3. Obtain that evidence when the cost is proportionate to the claim.
4. Verify that the probe measures the relevant system, version, environment,
   and execution path.
5. State the remaining uncertainty.

User instruction is authority for intent. A user's direct observation is
evidence of what occurred at their boundary. Neither an agent inference nor a
proxy reading overrides it. Investigate the mechanism separately.

A passing unit test proves its tested contract. It does not prove an untested
runtime route, visible interaction, persistence boundary, or deployment.

**Observable completion:** every conclusion names its evidence grade and no
claim is stronger than the boundary exercised.

Incident: Pax Fluxia treated a failure inside an agent sandbox as evidence that
the user's machine-level tool was broken, despite the user reporting that the
same command worked in their terminal. Direct execution outside the sandbox
disproved the diagnosis.
