# Authority chain

Order, highest first:

1. Mike's stated intent and instructions.
2. The artifact being replicated, when the work is replication.
3. Running source code in this repo.
4. Everything derived: docs, specs, audits, plans, ledgers, built bundles, test
   fixtures, and your own judgement.

**No document supersedes an instruction.** Docs are never authoritative over
intent.

A lower artifact that disagrees with a higher one is defective. Report the
defect. Do not implement it.

Before building from any document:

1. Name what it is derived from.
2. Check its normative claims against that source.
3. Treat any claim it does not cite as unverified.

A document is invention wearing a spec's format when it has any of these:

- no frontmatter naming date, author, source, and what it supersedes
- normative tables or lists carrying no citations, beside ones that do
- a "canonical" label with no provenance

Finding a document does not end the search. Finding the source does.

Incident: on 2026-09-01, told to replicate TabsOutliner with perfect fidelity,
an agent located `2026-08-11_TO_EXTENSION_REBUILD_KICKSTART.md` §4.6 and
proposed implementing its five-region drop table. The keyboard table beside it
cited `treeview.js:740`, `:746`, `:734` line by line. The drop table cited
nothing, and the reference decides drops by element containment, not regions.
The document was the invention that produced the defect being fixed.
