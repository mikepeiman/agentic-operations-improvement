# Owner acceptance

When Mike says something works, is correct, is good, or is accepted:

1. Record it in that same turn, before any other work.
2. Name the exact artifact: commit sha, version, and build stamp.
3. Quote his words.
4. Commit and push.

Record it in the project's issue tracker when it has one, otherwise in
`docs/accepted/<date>-<subject>.md`.

Record a withdrawal the same way when he later says it is broken. The pair is
the evidence: what worked, at which build, and when it stopped.

Incident: on 2026-09-01 Mike said Curatio-NEXT had worked and asked for the
commit where he declared it good. No such record existed anywhere — not in a
commit message, a tracker note, or a doc. Reconstructing it cost an hour and
failed. An acceptance nobody wrote down cannot be used to bisect a regression.
