---
date created: 2026-09-01
last updated: 2026-09-01
author: agent, at Mike's direction
derived from: Graphify workflow incidents and Pax Fluxia tested graph scope
supersedes: original 2026-09-01 Graphify rule
status: active only when a project declares a Graphify adapter
---

# Graphify

Applies only when a project declares Graphify as a structural-retrieval
adapter.

1. Query the graph before a broad filesystem search when the task is
   architectural, cross-module, or impact-sensitive.
2. Confirm useful graph leads in defining source before asserting behavior.
3. Rebuild with the project's declared command after changes inside its graph
   scope.
4. Follow the project's declared staging policy for generated graph output.
5. Report unexplained generated residue; do not hide it.

The project adapter must declare:

- graph location and extraction scope;
- query, path, explain, and affected-symbol commands that are supported;
- rebuild command;
- generated-output staging policy;
- clean-rebuild or recovery command.

Do not assume `graphify update .` is safe. Repository roots can contain docs,
fixtures, prototypes, assets, ignored paths, or a deliberately narrower tested
scope.

Incident: Pax Fluxia has a tested AST-only graph over three source roots. A
root-wide update would silently change the corpus and contradict its repository
constitution. The correct rebuild command is project-specific.
