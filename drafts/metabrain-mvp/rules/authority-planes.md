---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp/AGENTS.md and agentic-operations-improvement/rules/authority-chain.md
supersedes: proposed replacement for rules/authority-chain.md after review
status: review draft, not active policy
---

# Authority planes

Name the question before choosing the authority chain.

## Intended behaviour

Order, highest first:

1. current explicit owner instruction or correction;
2. repository constitution;
3. current canonical requirement or decision registry;
4. active scoped task or accepted plan;
5. current code, tests, schema, data, and observed behaviour as implementation
   evidence;
6. audits, handoffs, old plans, prototypes, archives, and agent judgement.

## Current behaviour

Order, highest first:

1. direct observation at the active boundary;
2. defining source, configuration, stored data, and active wiring;
3. focused tests that exercise that boundary;
4. generated or packaged artifacts;
5. summaries, comments, commit messages, and inference.

## Replicated behaviour

Order, highest first:

1. current explicit owner instruction;
2. the named reference artifact or implementation;
3. defining source in the reference;
4. derived specifications, audits, tables, bundles, fixtures, and agent
   judgement.

When artifacts disagree:

1. state which plane applies;
2. name the governing source;
3. grade each other artifact as direct, derived, inferred, or historical;
4. report the lower-authority conflict;
5. do not implement the conflict as if it were settled.

Current code can define what happens now while remaining defective against the
current requirement. A document labelled canonical has only the authority its
declared provenance and the repository constitution give it.

**Compliance:** every load-bearing conclusion identifies its plane and source.
