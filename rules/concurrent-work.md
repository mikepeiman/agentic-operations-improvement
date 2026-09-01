---
date created: 2026-09-01
author: Codex, at Mike's direction
derived from: Pax Fluxia 2026-06-21 shared-index incident and coordination protocol
supersedes: nothing
status: active when work surfaces are shared
---

# Concurrent work

When agents or humans share a repository or process surface:

1. Inspect active claims and working state before editing.
2. Claim the exact files, records, jobs, or subsystem to be changed.
3. Resolve overlap before writing.
4. Stage and commit only owned paths.
5. Recheck state immediately before commit or publication.
6. Release the claim and record the delivered artifact when finished.

Do not infer ownership from an old claim. Claims need an owner, scope,
timestamp, status, and expiry or liveness rule.

**Observable completion:** delivered artifacts contain only the task's owned
work, and another worker can identify whether the surface is free.

Incident: Pax Fluxia agents shared one Git index. A bare commit swept another
agent's staged landing-page files into an unrelated territory commit. Explicit
path commits and a live claim board were adopted afterward.
