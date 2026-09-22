# Agent operations, v2

A small starting point for agents working in new projects or existing projects
without consistent procedures. The defaults are feature and use-case driven work,
Beads for durable work state, a commit and push every changing turn, and concise
communication.

## Use in a project

For initialization or adoption, run the on-demand
[new-project-setup procedure](docs/new-project-setup.md). It covers installation,
existing trackers, project commands, delivery, recovery, and fresh-session
verification. The distribution steps are:

1. Read the target's existing instructions, Git state, and build/test configuration.
   Copy [AGENTS.md](AGENTS.md) into a new project. In an existing project, merge
   it with the current instructions and remove overlapping rules while preserving
   product constraints. Do not overwrite existing instructions blindly.
2. Copy [CLAUDE.md](CLAUDE.md) if that agent needs an entry point. Both agents
   then read the same protocol. `AGENTS.md` has no dependency on this repo's
   rule tree, reports, tools, or directory layout.
3. Set up Beads using [docs/beads.md](docs/beads.md). Keep that guide in the
   target's existing documentation location if ongoing setup reference is useful.
4. Add only the project facts agents cannot cheaply discover: product purpose,
   pointers to governing contracts, unusual environment requirements, and branch
   or release policy. Reuse existing docs. A short project section in `AGENTS.md`
   is enough for a small repo; route larger domains by task.
5. Exercise a real small task: create/claim its Bead, implement its use case,
   verify acceptance, sync work state, commit, and push. On a second session,
   confirm the Bead and delivered revision can be retrieved.

The default installation is one protocol file, an optional agent pointer, Beads,
and a maintained project lexicon (reuse an existing glossary). Preserve the
upstream reference and ongoing-improvement instructions in each adopting
AGENTS.md. Intake logs, rule directories, hook frameworks, document frontmatter,
and generated indexes remain optional.

## Optional tools

Use the [weekly review](docs/weekly-review.md) to examine project coherence and
maintain existing Beads and governing documents. Configure its day/time with the
owner using the project's scheduler; copying the protocol installs no automation.

Use existing test, lint, type, and build commands. Add a check when it catches a
specific failure with useful diagnostics and representative pass/fail examples.
This repository's [package checks](checks/README.md) validate its own packaging;
they are not a general development framework to install everywhere.

Use the [UI design guidance](docs/ui-design-guidance.md) when a project does
interface work. The core names its path so an agent reads it before interface
work; the document itself is copied only into projects that build UI, and the
protocol does not otherwise depend on it. It is an on-demand SKILLS-type
document: reference production UI and component precedents before inventing, with
the component sources, layout and density rules, and observable checks.

Graphify can help when structural retrieval saves time on unfamiliar code.
Use direct search for known targets. Treat graphs as derived leads, verify them
in source, and choose scope, exclusions, refresh cadence, and storage per project.
There is no default installation, paid indexing, or post-commit rebuild. Inspect
existing hook configuration before adding any tool that changes it.

## Work on this repository

Routine work uses `master` and `origin/master`; deployment is outside this workflow.
Use [Beads setup and delivery](docs/beads.md) for this repo's Dolt remote and
reviewable issue export. Run:

```sh
node --test checks/protocol.test.mjs
node checks/protocol.mjs
git diff --check
```

The check uses Node.js 22 or newer and no dependencies. CI runs it on Windows
and Linux. Changes to this package should explain the failure addressed and
remove superseded wording; Git preserves previous versions.

[V1 versus v2 review](docs/v1-v2-review.md) records the comparison with Metabrain,
the disposition of the old files, tradeoffs, and validation evidence. It is a
review artifact, not required task context.

Current follow-through is tracked in Beads: `ops-6if` covers adoption and capture,
`ops-24y` covers weekly review and scheduling, and `ops-1cz` covers field validation.
The field trial uses one real feature and one bug fix across two owner-selected
projects, including a fresh-session handoff. Record capture fidelity, scope,
behavioral verification, and Git/Beads recovery on the actual task Beads and link
them to the trial. Package tests do not establish these outcomes; check the live
Beads for progress and next actions.
