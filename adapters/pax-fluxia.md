---
date created: 2026-09-01
author: Codex, at Mike's direction
derived from: mikepeiman/pax-fluxia AGENTS.md and .agent/intra-agent-coordination.md
supersedes: nothing
status: project adapter; not universal policy
---

# Pax Fluxia adapter

Source project: `mikepeiman/pax-fluxia`

This adapter records commands and constraints that must not be generalized
into shared rules.

## Shell and package runner

- Windows PowerShell; run commands separately.
- Bun only for project commands.
- Put `--cwd` after `run`: `bun run --cwd pax-fluxia <script>`.
- Run tests as `bun test --cwd pax-fluxia <path>`.

## Structural retrieval

Graph location: `graphify-out/graph.json`.

The graph is AST-only over:

- `common/src`
- `pax-server/src`
- `pax-fluxia/src`

It excludes docs, prototypes, JSON configuration, static assets, and semantic
extraction. Use targeted text search and source reads for excluded material.

Query before broad source discovery:

```text
graphify query "<question>"
graphify path "<source>" "<target>"
graphify explain "<concept>"
```

After changing code inside the graph scope, rebuild with:

```text
bun run agentic:graphify:build
```

Do not run `graphify update .` unless the extraction scope is being changed
deliberately. Generated `graphify-out/**` files are rebuilt, not hand-edited.

## Concurrent Git work

Agents share a root and Git index. Read and claim on
`.agent/intra-agent-coordination.md` before editing. Commit by explicit
pathspec. Do not stage all files or use a bare commit that can consume another
worker's staged changes.

## Validation routing

- Svelte/type validation: `bun run --cwd pax-fluxia check`
- Focused tests: `bun test --cwd pax-fluxia <path>`
- Production bundle when routes, imports, tokens, or bundling change:
  `bun run --cwd pax-fluxia build`

User-visible changes still require live owner acceptance when the relevant
interface or canvas boundary was not exercised.
