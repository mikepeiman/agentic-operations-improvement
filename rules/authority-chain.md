---
date created: 2026-09-01
last updated: 2026-09-01
author: agent, at Mike's direction
derived from: Curatio replication incident and Pax Fluxia authority and verification rules
supersedes: original 2026-09-01 authority-chain rule
status: active when wired by a project
---

# Authority chain

First name the question being answered. Different questions use different
authority chains.

| Question | Order, highest first |
|---|---|
| What should happen? | current owner instruction; repository constitution; current canonical requirement; implementation; derived material |
| What happens now? | observation at the active boundary; defining source, configuration, or data; focused tests; derived material |
| What must a replica preserve? | current owner instruction; named reference artifact; defining reference source; derived material |

**No document supersedes an instruction.** Docs are never authoritative over
intent.

A lower artifact that disagrees with a higher artifact in the relevant chain
is defective. Report the defect. Do not implement from it.

Before building from any document:

1. Name what it is derived from.
2. Check its normative claims against that source.
3. Treat any claim it does not cite as unverified.

A document is invention wearing a spec's format when it has any of these:

- no frontmatter naming date, author, source, and what it supersedes
- normative tables or lists carrying no citations, beside ones that do
- a "canonical" label with no provenance

Finding a document does not end the search. Finding the source does.

**Observable completion:** the finding names the question, governing source,
and evidence grade. Current code can prove present behavior while remaining
wrong against the current requirement.

Incident: on 2026-09-01, told to replicate TabsOutliner with perfect fidelity,
an agent located `2026-08-11_TO_EXTENSION_REBUILD_KICKSTART.md` §4.6 and
proposed implementing its five-region drop table. The keyboard table beside it
cited `treeview.js:740`, `:746`, `:734` line by line. The drop table cited
nothing, and the reference decides drops by element containment, not regions.
The document was the invention that produced the defect being fixed.
