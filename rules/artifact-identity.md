---
date created: 2026-09-01
author: Codex, curatio (dir unrecorded, github.com/mikepeiman/curatio)
derived from: "Curatio AGENTS.md and agent.md at https://github.com/mikepeiman/curatio/tree/8c9deb3"
supersedes: rules/delivery-identity-and-push.md
---

# Artifact identity

When delivering a build, export, report, or processed artifact.

Give it an identity that resolves to its inputs:

- software: version plus source revision
- processing work: job id plus input and output hashes

When the artifact's release convention requires a version bump, move every
identity-bearing stamp together.

Commit and push rules live in `AGENTS.md`.

Completion criterion: another machine can fetch the commit and map the delivered
artifact to its source and inputs without asking anyone.
