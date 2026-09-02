# Universal agent operating protocol

**Status:** active on import
**Source:** distilled from failures and operating rules in `metabrain-mvp`

This directory is a complete, tool-agnostic operating protocol for in-project
agents. Import its contents into a repository root. The imported `AGENTS.md`
and `rules/` are immediately operative; no review or configuration step is
required.

Projects may add domain rules, commands, architecture, and stricter
constraints. Project additions must not weaken the safety, evidence,
authorization, or completion requirements here.

## Included protocol

- `AGENTS.md` — small always-on constitution and router.
- `rules/turn-intake.md` — lossless capture before work.
- `rules/authority-planes.md` — intended, current, and replicated behaviour.
- `rules/evidence-and-verification.md` — primary evidence and verification at
  the boundary of the claim.
- `rules/work-state-and-delivery.md` — workspace safety and complete delivery.
- `rules/context-and-coordination.md` — routed context, task capsules, and
  bounded delegation.
- `rules/operational-records.md` — distinct roles for intake, tracking,
  requirements, evidence, and delivery records.
- `rules/owner-acceptance.md` — preserve acceptance and withdrawal against an
  exact delivered artifact.
- `rules/reporting.md` — evidence-graded completion reports.

## Immediate defaults

The protocol works without project-specific tooling:

- Capture intake under `docs/intake/YYYY-MM/`.
- Use the repository's existing issue tracker when one is declared. When none
  exists, the intake record remains the durable work record; do not install or
  invent an external tracker merely to begin work.
- Treat the root `AGENTS.md` and its linked current documents as the repository
  constitution.
- Use current source, configuration, data, tests, and runtime behaviour as
  evidence of what exists.
- Use available repository search and native language/build tools. A structural
  index is an optimization, not a prerequisite.
- Use the current repository, branch, and configured upstream. Do not create a
  clone, worktree, sibling directory, account, service, or external resource
  without explicit authorization.
- Run the smallest repository-native check that directly exercises the claim.
- If a required tool, remote, or tracker is absent, continue with safe local
  work and report the exact unavailable boundary.

## Import behavior

Once imported, agents must follow the protocol automatically. They do not ask
the owner to approve the protocol, select its rules, fill placeholders, or
design an adoption process.

Local project instructions may name concrete commands and sources. The current
owner instruction remains highest authority.
