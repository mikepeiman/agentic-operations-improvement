---
date created: 2026-09-01
author: unrecorded agent — metabrain-mvp (dir unrecorded, repo url unrecorded)
derived from: "Curatio acceptance-record failure, recorded from metabrain-mvp"
supersedes: nothing
---

# Owner acceptance

When Mike says something works, is correct, is good, or is accepted:

1. Record it in that same turn, before any other work.
2. Name the exact artifact. For software, record commit sha, version, and build
   stamp. For processing work, record the job id plus input and output hashes.
3. Quote his words.
4. Commit and push.

Record it in the project's issue tracker when it has one, otherwise in
`docs/accepted/<date>-<subject>.md`.

Record a withdrawal the same way when he later says it is broken. The pair is
the evidence: what worked, at which build, and when it stopped.

Completion criterion: the acceptance or withdrawal can be tied to one exact,
recoverable artifact without reconstructing the conversation.

Incident: [an acceptance nobody recorded](../docs/incidents.md#owner-acceptance).
Read it before deciding the acceptance can be reconstructed later.
