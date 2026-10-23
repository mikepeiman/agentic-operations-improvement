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
3. **Review the actual result.** Examine the changed surface in its host. Ask about
   hierarchy, density, labels, color meaning, focus, keyboard, dismissal,
   close/reopen, rapid input and relevant loading/failure states. Record what was
   observed, the findings and their disposition. Label source-only conclusions
   and verification limits. A design-only delivery names its production limits.
4. **Loop on findings.** Resolve the finding and review its affected boundary again.
   Additional rounds follow findings or changed assumptions, not a fixed quota.
   A small restoration can have two brief reviews; a substantial redesign needs
   more evidence. Repeat a render when its visual decision changes, rather than
   repeating the same full-fidelity inspection to inflate a count.

A hook checks the record, not the agent's mind. Keep its mechanism small:

- Derive the counter from distinct review entries with question, finding, action
  and evidence. Repeated assurances are not new reviews.
- Require the initial design review and the final integration review; carry
  unresolved findings forward until resolved.
- Bind final evidence to the delivered files and current governing resources.
  Preserve committed review history and append new reviews when files change.
- Gate the proposed commit, including UI produced through shell tools. Scope
  host reminders to the current agent's work; ordinary non-UI work needs none.
- Verify host invocation separately from configuration. State path-detection and
  platform limits. A hook cannot establish comprehension or make invented evidence true.

Origin: `ops-ntf`, from Metabrain `metabrain-mvp-1fmf`, 2026-10-23. The executable
checker remains project-specific; adopting this guidance does not install a hook.
