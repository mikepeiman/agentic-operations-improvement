---
date created: 2026-09-01
last updated: 2026-09-01
author: agent, at Mike's direction
derived from: Curatio acceptance-history incident
supersedes: original 2026-09-01 owner-acceptance rule
status: active only when a project declares an acceptance tracker
---

# Owner acceptance

When the owner says something works, is correct, is good, or is accepted:

1. Record it in the project's declared acceptance tracker during the authorized
   delivery flow.
2. Quote the owner's exact words.
3. Name the exact artifact: commit SHA, version, build stamp, run ID, or output
   identity available at that boundary.
4. Link the requirement or defect being accepted.
5. Record later withdrawal against the same identity when the owner reports a
   regression.

If the current request does not authorize repository or tracker mutation,
report the acceptance record that remains to be captured instead of silently
writing it.

The pair of acceptance and withdrawal is regression evidence: what worked,
which artifact carried it, and when it stopped.

**Observable completion:** the acceptance tracker can answer which artifact
the owner accepted without reconstructing chat history.

Incident: on 2026-09-01 Mike said Curatio-NEXT had worked and asked for the
commit where he declared it good. No such record existed anywhere — not in a
commit message, a tracker note, or a doc. Reconstructing it cost an hour and
failed. An acceptance nobody wrote down cannot be used to bisect a regression.
