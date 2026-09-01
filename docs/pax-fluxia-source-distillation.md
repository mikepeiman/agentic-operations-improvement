---
date created: 2026-09-01
author: Codex, at Mike's direction
derived from: mikepeiman/pax-fluxia AGENTS.md, .agent/AGENT.md, .agent/rules, .agent/.skills, and project process post-mortems
supersedes: nothing
status: source review and distillation; activated rules are in rules/
---

# Pax Fluxia source distillation

## Purpose

Extract cross-project operating rules from Pax Fluxia without exporting its
game ontology, framework choices, commands, architecture, or accumulated rule
ceremony.

## Observed instruction surface

At review time Pax Fluxia contained:

- 29 active files under `.agent/rules/`, totaling 1,441 lines;
- 2,062 lines across root `AGENTS.md`, `.agent/AGENT.md`, and active rules;
- 1,200 Markdown files under `.agent/`;
- an index claiming 22 active rules;
- onboarding claiming 10 active rules.

An earlier context-distillation plan had already identified the failure: too
many files are not loaded, duplicated critical language competes for
attention, and ceremony is skipped. The repository later accumulated the same
failure again.

## Strong reusable material

### Epistemic control

The root constitution's strongest contribution is a concrete evidence loop:
separate observation, hypothesis, and guess; identify confirming or refuting
evidence; verify the instrument; and prefer ground truth over a convenient
proxy. This became `rules/evidence-and-instruments.md`.

### End-to-end trace

Pax requires tracing definition, write path, read path, active consumer,
dispatch, and visible output before claiming that a control or feature is
wired. The reusable form is already represented by `primary-source-first.md`,
`settle-the-prior-question.md`, and `verification-and-handoff.md`.

### Scope safety

The unauthorized-change post-mortem established that information requests do
not authorize mutation, and infrastructure changes require explicit intent.
This became `rules/scope-and-change-safety.md`.

### Verification boundary

The false-completion post-mortem showed that a helper, optional path, or unit
test does not prove the ordinary runtime route. This became
`rules/verification-and-handoff.md`.

### Concurrent ownership

The shared-index incident showed that staging discipline is a concurrency
contract, not merely Git style. This became `rules/concurrent-work.md`.

### Durable data

Pax classifies saved maps, games, themes, presets, and editor state as
protected persistence. The general processing rule is to classify durable
inputs and outputs, preserve source data, reconcile every item, and make
exceptions inspectable. This became `rules/processing-integrity.md`.

### Learning without sediment

Pax has useful post-mortem triggers and a large archive of concrete failures.
It also demonstrates the cost of promoting every lesson into an always-on
file. The shared rule therefore requires narrow triggers, observable
completion, routing, and consolidation.

## Conflicts resolved in the shared layer

### Less code versus maximalism

Pax simultaneously says to bias toward less code and to prefer maximalism over
minimalism. Neither slogan selects a correct change. The shared resolution is:
choose the smallest coherent change that satisfies full intent and the best
known architecture; surface any compromise.

### Only the owner can verify

The owner alone can accept owner-visible behavior, but agents and automation
can verify compilation, deterministic contracts, file state, schemas, counts,
and exercised runtime boundaries. Reports must distinguish those forms of
evidence.

### Fixed hypothesis counts and one-change loops

Three hypotheses and one edit per iteration can help uncertain visual
debugging, but they are not universal. The invariant is to form falsifiable
alternatives when uncertainty exists and choose the smallest experiment that
distinguishes them.

### Continuous lossless documentation

Preserving owner intent is valuable. Writing every prompt into multiple files
before acting creates mutation during read-only work, duplicates chat history,
and expands the always-on corpus. Durable capture should focus on requirements,
decisions, acceptance, provenance, and actionable work, with one authoritative
home for each role.

### Universal Graphify commands

Pax deliberately tests a narrow AST corpus and forbids a root-wide update.
Graphify invocation and staging therefore belong in project adapters. The
shared rule specifies the retrieval and evidence behavior, not the command.

## Keep project-specific

- game terminology and territory architecture;
- Svelte, PixiJS, Colyseus, Tauri, and Bun commands;
- settings-store and slider conventions;
- logger categories and UI controls;
- protected storage key names;
- branch, remote, and deployment policy;
- generated graph scope and rebuild command;
- design-system component and token paths.

The adapter records the local commands that implement shared rules without
turning them into universal policy.
