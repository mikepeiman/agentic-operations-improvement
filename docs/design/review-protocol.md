# Proportionate design review

A short protocol for projects adopting evidence-backed UI review. Adapt the
resource pointers and hook to the project. Metabrain's owner requested this after
a shared feedback feature replaced existing right-click commands despite available
design guidance; reading a document had not established that its principles were used.

1. **Frame.** Read the project's UI guidance, UX foundations, design system and
   relevant product contract. State the person's purpose, situation and visible
   result, connecting the change to the owner's accepted product vision.
2. **Review the proposed interaction.** Ask whether it addresses the need with few
   decisions, which familiar pattern and shared component fit, and which existing
   commands, data and host interactions must survive. Record the precedent,
   resources and decision before editing.
   Apply [design correctness before diff size](../../AGENTS.md#read-and-build-selectively)
   when choosing the change's scope and reviewing its result.
   Follow universal UI patterns by default. Deviate for explicit owner direction
   or a uniquely excellent design whose benefit over the standard is demonstrated.
   Use the project's shared primitive-based controls and design system.
   For recurring behavior, resolve ownership before choosing the patch. Name
   its owner, relevant callers and competing implementations, including layout,
   state and lifecycle. Reusing a button does not establish shared ownership of
   the surrounding behavior. Record which callers delegate to the owner, which
   copies are removed and why any retained implementation performs a distinct
   job. A duplication exception cites the owner's explicit decision.
3. **Review the actual result.** Examine the changed surface in its host. Ask about
   hierarchy, density, labels, color meaning, focus, keyboard, dismissal,
   close/reopen, rapid input and relevant loading/failure states. Record what was
   observed, the findings and their disposition. Label source-only conclusions
   and verification limits. A design-only delivery names its production limits.
   Reconcile the ownership inventory against the actual result. Matching pixels
   between copies does not establish consistency. Do not approve a local patch
   that preserves a known violation of the requirement being repaired.
4. **Loop on findings.** Resolve the finding and review its affected boundary again.
   Additional rounds follow findings or changed assumptions, not a fixed quota.
   A small restoration can have two brief reviews; a substantial redesign needs
   more evidence. Repeat a render when its visual decision changes, rather than
   repeating the same full-fidelity inspection to inflate a count.
   Time-box each focused review and send a finding/next-step update between
   rounds. Continue while findings require changes; a fixed round quota does
   not authorize stopping unfinished work. The owner withdrew the earlier
   four-round limit in Metabrain on 2026-10-26.

A hook checks the record, not the agent's mind. Keep its mechanism small:

- Derive the counter from distinct review entries with question, finding, action
  and evidence. Repeated assurances are not new reviews.
- Require the initial design review and the final integration review; carry
  unresolved findings forward until resolved.
- Require the actual between-round update in each later entry. Checking the
  record alone does not prove the message was sent.
- Require explicit owner/caller/competing-implementation evidence in new rounds;
  preserve historical entries. Validate its shape without claiming that field
  presence establishes correctness. Reviewers must inspect the claimed callers
  and removals. A concrete structural guard should reject an actual prior bad
  implementation before being relied upon; state the limited pattern it guards.
- Use independent standards and specification review for a recurring failure
  that the implementing agent's own review previously approved. Keep the two
  conclusions distinct and resolve actionable findings before delivery.
- Bind final evidence to the delivered files and current governing resources.
  Preserve committed review history and append new reviews when files change.
- Gate the proposed commit, including UI produced through shell tools. Scope
  host reminders to the current agent's work; ordinary non-UI work needs none.
- Verify host invocation separately from configuration. State path-detection and
  platform limits. A hook cannot establish comprehension or make invented evidence true.

Origin: `ops-ntf`, from Metabrain `metabrain-mvp-1fmf`, 2026-10-23. The executable
checker remains project-specific; adopting this guidance does not install a hook.
Ownership evidence: `ops-26s`, from Metabrain `metabrain-mvp-kdwp`, 2026-10-27.
The motivating patch reused navigation buttons and matched padding while leaving
two header owners; its own recorded review approved matching coordinates.
Design correctness before diff size: `ops-mm3`, from Metabrain
`metabrain-mvp-ru5s`, owner request 2026-10-27. The authoritative priority is in
AGENTS; a smaller patch had preserved the structure causing the defect.
