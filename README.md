# Agentic operations improvement

Shared rules, tools, and protocols for agents working across Mike's projects.

## Purpose

Agents suffer from a collection of serious faults, biases, and failure modes
across thinking and reasoning, communication style, problem-solving, and
instruction-following. This repository exists to mitigate those faults and
improve human-agent cooperation and productivity.

## Use in a project

1. Clone or pull this repository.
2. Copy `AGENTS.md` and `CLAUDE.md` into the target project's root.
3. Initialize Beads and create or update the project's `LEXICON.md`.
4. Configure Graphify when the repository benefits from structural retrieval.
5. Copy and wire only the checks the project needs.
6. Add project-specific product, architecture, build, test, and delivery
   instructions without duplicating the shared rules.

Tool setup:

- [`docs/tools/beads.md`](docs/tools/beads.md)
- [`docs/tools/graphify.md`](docs/tools/graphify.md)
- [`checks/README.md`](checks/README.md)

## Improve the shared protocol

Every agent may propose and implement improvements from any project. Discuss
the change with Mike before committing it to this repository.

1. Pull the latest default branch and inspect concurrent work.
2. Explain the concrete problem and proposed change to Mike.
3. After agreement, create a working branch.
4. Integrate the idea into the existing source of truth and remove superseded
   wording.
5. Verify links, examples, checks, and formatting affected by the change.
6. Commit one coherent outcome and push the working branch for review.

## Repository contents

- `AGENTS.md` — the common drop-in operating protocol.
- `CLAUDE.md` — compatibility pointer to `AGENTS.md`.
- `LEXICON.md` — this repository's domain language and an example for projects.
- `docs/tools/` — setup and operating instructions for selected tools.
- `checks/` — optional mechanical checks and their limitations.

Project history preserves superseded approaches; the default branch contains
the current operating system.
