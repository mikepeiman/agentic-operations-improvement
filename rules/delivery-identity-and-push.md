---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: "Curatio AGENTS.md and agent.md at https://github.com/mikepeiman/curatio/tree/8c9deb3"
supersedes: the narrower commit wording in AGENTS.md
---

# Delivery identity and push

## Trigger

When committing a completed change or delivering a build, export, report, or
processed artifact.

## Required action

1. Commit one coherent outcome with the tests, migration, and required
   documentation that make it complete.
2. Use an imperative subject of at most 72 characters, a body naming the failure
   or purpose, and `From: <project>`.
3. Push in the same step as the commit. On a protected default branch, push the
   working branch and use the repository's review path.
4. Resolve a rejected push before reporting the delivery as complete.
5. Give every delivered artifact a unique identity: version plus source revision
   for software, or job id plus input/output hashes for processing work.
6. Move every identity-bearing version stamp together when the artifact's release
   convention requires a bump.

Completion criterion: another machine can fetch the commit and unambiguously map
the delivered artifact to its source and inputs.
