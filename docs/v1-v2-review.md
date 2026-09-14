# Agent operations: v1 versus v2

Review date: 2026-09-13 (America/New_York).
Work record: `ops-e70`. This report describes the initial v2 delivery on that date;
it is not another instruction layer. Subsequent adoption, capture, setup, and
review changes are tracked from `ops-6if`; current usage is in the
[README](../README.md). Counts and validation results below are historical.

## Purpose and baselines

The owner requested a robust starting point for new and existing projects with
ruthless minimalism, then authorized implementation. Three essentials govern v2:
commits every changing turn/task/issue/feature; Beads by default with features and
use cases driving development; and concise communication.

V1 means the fetched operations repo at
[78cb01c](https://github.com/mikepeiman/agentic-operations-improvement/tree/78cb01ce563c74210b17d1b3698ac8e25d03bf99).
Local and remote `master` matched before changes. This is the current default
branch baseline, not the older unmerged consolidation or source-contribution
branches. All retired files remain retrievable at that revision.

The Metabrain comparison uses its working-tree instructions and targeted process
files at HEAD
[140b22c](https://github.com/mikepeiman/metabrain-mvp/tree/140b22c2f56ac98779b010b2170a7c9b6df4a402).
Its existing unrelated changes were present before review and were not edited.
The review covered both root agent entry points; the shared repo's 27 rules,
tool/setup documents, incident record, architecture exploration, lexicon and
four checks; and Metabrain's reading map, issue/Graphify guides, documentation
scripts/CI, and configured agent/Git hooks. It did not audit all Metabrain product
specifications or run its application.

## Size and operating model

| Measure | V1 | Implemented v2 |
|---|---|---|
| Shared `AGENTS.md` | 962 words; 6,434 characters | 787 words; 5,428 characters |
| Separate rule files | 27; 6,816 words | 0 |
| Core plus routed rules | 7,778 words | 787 words |
| Required rule-file routing table | 23 trigger rows, several applying to ordinary messages/actions | No rule-file router |
| Default agent entry files | README advertised two files but the core needed `rules/` | One self-contained core; optional Claude pointer |
| Shared repo work tracking | Beads prescribed, no `.beads/` in the baseline tree | Initialized Dolt store, real Bead, remote sync, tracked review export |
| Old generic agent hooks | Four scripts; no baseline host wiring in this repo | Retired; package-specific validator and tests wired to CI |
| Per-project scaffolding | Lexicon, tool setup phases, optional hook configuration | Existing project facts plus Beads; other tools on demonstrated need |

The root alone is 15.6% smaller by characters. Core plus routed-rule words fell
89.9%. The latter is an available instruction corpus comparison, **not a claim
that every v1 turn loaded every rule**. Characters divided by four estimates
1,609 root tokens in v1 versus 1,357 in v2; these are not tokenizer measurements.
Word counts split Git blob/text content on whitespace.

V1 had 37 tracked Markdown files totaling 12,506 words, including historical
evidence and setup. This report is deliberately outside the operating context;
including it in a claimed per-turn savings calculation would be misleading.

## Findings and changes

### 1. Make installation complete

V1 README told users to copy `AGENTS.md` and `CLAUDE.md`, while AGENTS routed
messages, authority, changes, claims and closure through separate files.
The setup guide gave a different copy recipe. Its newest platform-simulation
rule was absent from the router and lacked the frontmatter required by AGENTS.

V2's copied core contains the operating loop. README explains how to merge it into
an existing repo without erasing product constraints. Setup and review remain
optional reading. A copy-only smoke test catches missing linked file dependencies;
the core's prose was also reviewed for uncopied dependencies.
There is no new installer, adapter layer, or tool-specific framework.

### 2. Make Beads the working memory

V1 said Beads was the default but also said it was not a place to preserve request
detail, routing material input into an intake log. The lexicon described Beads
much more broadly. That split encouraged duplicate records.

V2 keeps actionable intent, use cases, acceptance, decisions, dependencies,
progress and continuation in one Bead. Durable product contracts remain the
owner of enduring meaning; the Bead links them. Ordinary questions do not need
tickets. Features, bugs and enabling tasks are the normal types. Epics and child
tasks are used only when grouping or separate execution helps.

[The command guide](beads.md) includes a concrete restore-session use case,
bug content, parent versus blocking relationships, deferred ideas, and an outage
fallback that reconciles back into Beads. It uses `bd close`; installed
`bd statuses` lists `closed`, rather than v1's documented `--status done`.

The installed CLI reports version 1.2.2 with Dolt storage. Setup now distinguishes
database sync from Git source delivery and from a JSONL review snapshot. This
repo uses explicit commands rather than installed hooks. Initialization also
generated a verbose README and commented config template; these were replaced
with a pointer and the two settings used here.

### 3. Keep frequent commits without unsafe automation

The owner explicitly retains frequent commits. V2 requires a coherent commit
for every changing turn and task/issue/feature outcome, including unfinished
checkpoints with the remaining state in Beads. Read-only replies do not create
empty commits. Commits use the Bead ID and explain why when useful.

V1's unconditional `git pull --rebase`, automatic rebase after rejection,
`push -u origin HEAD` in every repo, and mandatory source/model trailers are
removed. V2 inspects current branch, upstream and staged changes, respects local
branch policy, stages owned changes, and reconciles delivery failures without
force. This package uses master; adopters need not use that branch name.
Dolt state is also synchronized. Failed pushes are reported as pending delivery.

### 4. Keep communication brief and evidence useful

V1's separate communication document contains 545 words including metadata,
prescribing vocabulary,
punctuation, enumerations and rhetorical style. V2 adopts the short Metabrain
style: answer directly, say each point once, scale detail, give useful progress,
and distinguish fact, inference and unverified boundaries. No forced report
headings, evidence labels on every sentence, vocabulary blacklist, or model
signature ritual.

Evidence protections remain: check the boundary claimed, use relevant source,
preserve named-reference behavior, distinguish simulation from platform behavior,
and record owner acceptance against an identifiable artifact. Exact counts and
material assertions still need evidence. Compulsory reopening of every cited
symbol in every turn is replaced by refreshing context when it changes or is
uncertain.

### 5. Remove architecture slogans and diagnostic ceremony

V1 required one authority for every lifecycle phase, eliminating dual writes,
one enforcement point per invariant, and exhaustive case inventories for broad
classes of work. Those can fit one system but impose architecture on others.

V2 retains the outcomes: authoritative inputs, recovery, ordering, retries,
partial failure, and explicit reconciliation where relevant. Reuse existing
operations across callers. This supports distributed and transactional designs
without declaring one topology correct.

V1's requirement to build a replica before hypothesizing also overreaches.
A non-reproducing replica does not establish that its faked boundary is the cause;
inputs, timing and reproduction quality may also differ. V2 asks for decisive
evidence and a new observation after repeated failed fixes. Diagnostics remain
for asynchronous or owner-tested behavior, without universal permanent logging
or mandatory replication infrastructure.

### 6. Replace weak enforcement with package checks

The old checks were reviewed at source level; their limitations below are not
claims from an end-to-end host-hook trial.

| Retired script | What its source actually observes | Reason for retirement |
|---|---|---|
| `concise-commit-message.mjs` | Regex over a host command payload; explicitly skips `-F/-C` | Host-specific parser; misses message-file delivery, bans useful URLs/email text and imposes body caps absent from the core |
| `no-opt-outs.mjs` | Whole files changed relative to HEAD plus untracked files | Not a turn or added-line boundary; can flag inherited suppressions and sees nothing after a clean commit; a `reason:` string is not justification |
| `reachable-features.mjs` | Declared names appearing in caller text | Text occurrence cannot establish user reachability; project wiring is better checked through its actual interface |
| `untested-limits.mjs` | Selected denial phrases and an earlier tool call in a particular log schema | A preceding unrelated tool call can satisfy it; wording and schema do not establish the claimed limitation |

V2 adds [a dependency-free package check](../checks/README.md) for a bounded core,
bootstrap shape and local inline file links, plus pass/fail fixtures. CI runs
on Windows and Linux. It makes no claim to prove reasoning, product quality or
actual Git/Beads delivery. Semantic obligations remain in the workflow and
behavioral acceptance checks; universal phrase scanning is not substituted for
judgment.

## What the Metabrain comparison contributed

| Inspected source | Observation | V2 treatment |
|---|---|---|
| `AGENTS.md` | Outcome authority, scoped retrieval, one Bead, concise communication and claim-boundary verification are already co-located | Retain these portable principles |
| `docs/active/agents-reading-map.md` | Routes a task to a first source plus at most two more | Retain question-driven loading; do not require a map in small repos |
| `docs/active/agents-issue-tracker.md` and `scripts/render-beads-markdown.mjs` | Beads is authoritative; Markdown and GitHub are secondary views | Keep single work-state ownership; omit default mirrors and mirror-maintenance procedures |
| `scripts/check-doc-governance.mjs`, `gen-docs-index.mjs`, `.github/workflows/documentation.yml` | Placement, metadata and generated-index checks are executable; product names and Curatio routes are hard-coded | Keep narrow automated verification; do not export Metabrain's document schema or domain assertions |
| `AGENTS.md` sections 4–6 | Product identity, semantic store guarantees, Chrome fixture and TabsOutliner parity are domain contracts | Leave in Metabrain; transfer only relevant general protections |
| `.claude/settings.json`, `.codex/hooks.json`, `.beads/hooks/` | Multiple enforcement surfaces, including machine-specific absolute paths and Graphify post-commit generation | Avoid default host hooks; inspect integration before installation |
| `.claude/hooks/curatio-reference-reminder.mjs` | Every matching edit reminds agents to use `_REFERENCE_TABSOUTLINER_1.4.168/`; current AGENTS conditionally routes to `_LEGACY_BACKUP/` | Demonstrates a policy/route mismatch outside the root guide; do not ship another reminder channel |
| `.beads/config.yaml` | JSONL auto-export may stage shared issue content; live data uses Dolt | Explicit reviewed export and separate Dolt sync; do not describe the snapshot as full backup |

Metabrain's governance command passed: 236 Markdown files checked, zero warnings,
root approximately 2,447 tokens by its estimator. That is structural evidence
only. The checker does not examine the agent-hook policies above. This explains
why a passing documentation gate does not establish consistency of all rules.

Potential Metabrain follow-ups are to reconcile the reminder with the current
reference route, review the old host hooks against their actual observables,
and resolve whether Graphify post-commit mutation earns its cost. They are
recommendations from this comparison, not changes made to Metabrain.

## Disposition of every old rule

All paths below are relative to v1's `rules/`. The replacement location is in
v2 [AGENTS.md](../AGENTS.md), unless noted. Each old file was removed from the
active tree, rather than retained as a competing archived instruction.

| Old file | Retained meaning / deliberate removal |
|---|---|
| `artifact-identity.md` | Communicate usable artifact identity; Bead acceptance identifies its build. Drop mandatory hash manifests for every output. |
| `authority-chain.md` | Work from outcome: intent differs from runtime evidence. Drop three ritual chains and frontmatter as authority proof. |
| `authorization-and-scope.md` | Outcome and Git sections preserve scope and existing authority. Drop mandatory mutation-by-mutation classification. |
| `citation-integrity.md` | Evidence in verification/communication; selective refresh. Drop same-turn reread mandate. |
| `communication.md` | Communicate clearly. Drop word bans, punctuation policy and mandatory enumeration. |
| `concurrent-work-safety.md` | Preserve work, coordinate overlap, inspect staged diff. Drop claims that an unfamiliar branch proves another worker and fixed claim metadata. |
| `correction-under-challenge.md` | Evidence-based verification and renewed observation after failed fixes. Drop fixed attempt count and ceremonial correction format. |
| `destructive-actions.md` | Obtain missing authority and preserve recovery/secrets. Drop repeated approval after authority already exists. |
| `enforcement-design.md` | Small-protocol section and README optional checks retain observable gates. Drop reflector framework. |
| `input-preservation-and-reproducibility.md` | Relevant data invariants, recovery and rejected-input visibility. Drop mandatory manifests for every transformation. |
| `instrument-before-hypothesising.md` | Decisive bug evidence. Drop replica-first ordering and inference that non-reproduction locates the cause. |
| `learning-from-failure.md` | Incident on the Bead, regression/tool fix before new rules. Drop separate post-mortem protocol. |
| `observable-by-default.md` | Build/action/decision/result diagnostics where needed. Drop universal release logging and owner-gated log removal. |
| `owner-acceptance.md` | Quote acceptance/withdrawal with artifact identity on the Bead. Drop separate acceptance files. |
| `primary-source-first.md` | Intent versus evidence and boundary checks. Drop grade on every claim and universal necessary-and-sufficient causal demand. |
| `replicate-what-was-named.md` | Inspect relevant reference behavior/platform constraints, approve meaningful deviations. Drop mandatory whole-artifact enumeration before any code. |
| `root-cause-not-green-indicators.md` | Fix cause and verify promised behavior. Drop separate status-indicator workflow. |
| `scope-additions.md` | Capture independent work without expanding scope. Drop blanket file-type prohibitions. |
| `settle-the-prior-question.md` | Resolve consequential ambiguity; refresh uncertain context. Drop premise recital and stopping on every unsettled assumption. |
| `simulated-verification-must-reproduce-platform-constraints.md` | Explicit mock/platform boundary in verification. Move incident history out of active rules. |
| `task-closure-and-blockers.md` | Finish authorized work, record remainder, deliver. Drop duplicated closure checklist. |
| `test-and-checker-integrity.md` | Preserve required coverage; explain corrections to wrong checks. Drop mandatory separate commit for every checker correction. |
| `untested-limits.md` | Evidence for material limitations. Drop same-turn tool-call ritual. |
| `verification-states.md` | State checks, unverified boundaries and owner acceptance separately. Drop universal seven-stage status ladder. |
| `architecture/one-owner-per-fact.md` | Identify authoritative inputs and reconcile conflicts. Drop universal single-authority topology and dual-write ban. |
| `architecture/operation-home-and-invariants.md` | Reuse existing semantic operation across callers. Drop single-enforcement-point mandate. |
| `architecture/reachable-capability.md` | Complete and exercise the use case through its intended interface. |

## Other file changes and migration

- `README.md` is the installation and repository-maintenance guide;
  `CLAUDE.md` is a single pointer.
- `LEXICON.md` is removed. The protocol defines work terms where used; product
  glossaries are local and optional.
- `docs/tools/beads.md` and `docs/tools/setup.md` are replaced by
  [docs/beads.md](beads.md) and README's installation steps.
- `docs/tools/graphify.md` is removed. README keeps the tool decision; local
  commands, scope and maintenance stay in the adopting project.
- `docs/incidents.md` and `docs/mechanising-the-authority-check.md` are removed
  from the active package. The pinned v1 revision preserves the historical
  evidence and unimplemented exploration; new incidents belong with work.
- `checks/README.md` is rewritten; the four old scripts are replaced by
  `protocol.mjs` and `protocol.test.mjs`. `.github/workflows/protocol.yml`
  wires these checks into CI. No host settings or Git hooks are installed.
- `.beads/` contains the initialized store's tracked configuration and generated
  review export. Live database/cache files remain ignored. `.gitignore` also
  excludes disposable check fixtures.

Existing adopters should reconcile their root instructions and host settings
against this report before retiring copied v1 rules. Replacing the root file
alone does not disable installed hooks or remove duplicate instructions in
nested agent files. Keep project constraints and local history; remove retired
hook registrations when retiring their scripts. No mass migration of other
repositories was performed.

## Validation and limits

Local validation passed: all eight Node tests, package validation across six
Markdown files, and `git diff --check`. The tests exercise the copy-only
distribution and deliberate invalid inputs. Beads creation,
claim, remote push/pull and retrieval were exercised on the real `ops-e70` record;
the first remote push hit Windows path length limits, and a cache-local
`core.longpaths` setting resolved that error.

Implementation was pushed to `master` in
[e917a81](https://github.com/mikepeiman/agentic-operations-improvement/commit/e917a818ada696825e35f5402a4a5c095c78240d),
with current GitHub Actions versions in
[523d065](https://github.com/mikepeiman/agentic-operations-improvement/commit/523d06520735d373d842eccacf0330deed08a2b5).
[Windows and Linux CI passed](https://github.com/mikepeiman/agentic-operations-improvement/actions/runs/34792301316)
on that implementation. The workflow checks package integrity; the local
staged-diff check is not repeated against an unchanged CI checkout.
The final report and Bead closure are delivered as a separate evidence commit.

Cross-project agent reliability, task completion speed, token savings in live
sessions, and owner acceptance cannot be established by a documentation rewrite
or a package test. The next useful evidence is ordinary feature/bug work using
the copied core. Record a concrete failure on its Bead, then fix the narrow
cause; do not grow a new global rule from every incident.
