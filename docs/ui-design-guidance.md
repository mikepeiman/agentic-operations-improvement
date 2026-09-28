# UI design guidance

Practice guidance for designing or changing a view, component, or interaction.
It is a SKILLS-type document: a procedure an agent loads when the task is
interface work. The operating rules stay in [AGENTS.md](../AGENTS.md); nothing
here repeats them.

Read it before designing, not after. It is the product and application UI guide
in the [design reference router](design/README.md), which routes game, marketing,
brand, and graphic design work to their own guides. When a task is product design rather than
interface construction, the two are different jobs with different evidence.

## Exemptions

These exemptions concern the reference-research workflow. Time-box that step;
a small fix does not need five galleries. The semantic-color rule below applies
throughout application UI/HUD unless the owner explicitly exempts a case.

- **Prototypes and throwaway artifacts.**
- **Constrained environments**: CLI/TUI, emails, terminal output, and embedded
  surfaces where the conventions below do not apply.
- **A fix that restores agreed appearance or behavior**: restore what was
  agreed and do not redesign it.
- **A surface the design system already answers**: when the system specifies a
  component, its states, and its density, follow the system.
- **An explicit owner instruction** for a particular case.

One concrete exception: the owner's literal hex colors and exact copy text are
input, not suggestions. Do not adjust them to satisfy a guidance bullet.

## Use cases and flows

Write each flow of a use case, and answer it, before drawing its screen. A use case is
a lasting purpose the product serves (an epic Bead); a flow is one concrete path
through it, from trigger to done (a child Bead). Keep data, views and actions
distinct: a view shows; only actions the person issues change data, and each change
is recorded and undoable.

### Write the flow

1. Intent, in the person's words: "When ___, I want to ___, so that ___."
2. Situation: screen or window, device, what is in hand, time, attention and energy.
3. Done: what is true afterwards, and how the person sees it.
4. Objects: the records, views, actions and windows involved.
5. Frequency and stakes: how often, what a mistake costs, whether it can be undone.

### Answer the questions

1. **Need.** Is this the need, or a step toward one?
2. **Zero steps.** Can it happen with no input: inferred, defaulted, or already on screen?
3. **Fewest steps.** Count keystrokes, clicks and decisions; default, remember or defer the rest.
4. **Place.** Do it where the person's attention already is.
5. **Recognition.** Offer recent, usual and suggested values instead of asking for recall.
6. **Before and after.** Show what an action will do, then what it did; record it and make it undoable.
7. **Comprehension.** Give each color, shape and word one meaning; make data, views and actions distinguishable at a glance.
8. **All and only.** Tie every control to a decision in this flow; add the missing undo, error and empty states.
9. **Low energy.** One decision at a time, large targets, safe defaults, nothing lost when the person stops halfway.
10. **Failure.** Show what failed, where, and why.
11. **Consistency.** Use the same command, key and component wherever the flow appears.

Record the written flow and its answers in the flow's Bead, then draw screens from the
answers. Every feature idea an answer produces (a new feature, a variation, an
improvement or a possibility) becomes a Bead pending owner review, related to its flow.
When a use case's flows are all answered, bring its pending ideas to the owner.

## Reference before inventing

Before designing or substantially changing a view, component, or interaction,
look at strong existing examples. Prefer **real production application UI** over
speculative concept art.

### UI inspiration galleries

Use these primarily for layout, hierarchy, density, composition, flows, and
visual treatment:

- **[Mobbin](https://mobbin.com/)** — production UI screens, UI elements, and
  complete flows.
- **[Nicelydone](https://nicelydone.club/)** — polished desktop, web, and SaaS
  application UI.
- **[Refero](https://refero.design/)** — curated real-product UI and flows.
- **[Page Flows](https://pageflows.com/)** — how complete interactions and flows
  behave, beyond the static screen.
- **[SaaSFrame](https://www.saasframe.io/)** — dashboards, editors, settings,
  onboarding, tables, and productivity software.

When useful, inspect **2–4 relevant examples** before designing. Synthesize the
common good ideas; do not blindly copy one screen.

Access differs by source. Some galleries gate content behind an account, and a
required login is an owner decision, not a step to work around. If a source is
unavailable, say so, name what you could not consult, and proceed. Never invent
a citation for a screen you did not open.

### What to carry back from a reference

Record the observation and the reason, not just the extraction: the action lives
in a toolbar because it applies to the current selection; the empty state offers
the first action instead of describing the feature. The reason is what lets a
later reviewer judge whether the adaptation still holds. Where a reference
conflicts with this application's established patterns, follow the application.

## Component references

Use these to understand established component structure, behavior, visual
treatment, and states. Our preferred implementation foundation is **Bits UI**.

- **[Bits UI](https://bits-ui.com/)** — primary component primitive library for
  this project. Accessible, headless Svelte components.
- **[shadcn-svelte](https://www.shadcn-svelte.com/)** — Svelte component
  compositions and visual examples, built on Bits UI.
- **[Skeleton](https://www.skeleton.dev/)** — Svelte component and design-system
  reference with many application-oriented patterns.
- **[Flowbite Svelte](https://flowbite-svelte.com/)** — broad collection of
  production-ready Svelte components and common application patterns.
- **[daisyUI](https://daisyui.com/components/)** — large catalog of standard UI
  component patterns and visual treatments; framework-agnostic.

Bits UI primitives are headless and unstyled: they supply behavior and
accessibility, not appearance. Visual treatment comes from this application's
system, so adopting a component means adopting its behavior and states, then
styling it to match what is already here. shadcn-svelte components are copies
rather than dependencies; adapt one into this project's conventions instead of
adding a second pattern beside an existing one.

These are references to understand, not components to install. A task that
introduces one of these libraries as a dependency needs its own authorization.

## Design guidance

### Interface text

Write interface text by rules 1–6 of
[Agentic Communications Style](agentic-communications-style.md): each sentence
starts with its subject named in full, has a finite verb, uses literal verbs,
says who does what, defines a thing by what it is, and lets the control carry any
reassurance. Review the text in the rendered screen.

### Recurring design review

At planning, implementation, and rendered review, ask of each control: what does
the person want here; what action does this afford; why is this the clearest
place and representation; and is a simpler established interaction better?
Remove controls that expose implementation machinery without a user decision.
Judge the completed interaction, not just the component's presence.

- Creation leads directly to input: reveal the first editable item immediately,
  focus newly added fields, and preserve the agreed Enter/Tab continuation.
- Use the accepted domain lexicon in labels and examples. A list contains items;
  placeholders guide entry rather than repeating a generic type name.
- Keep the primary work visually dominant. Put optional configuration behind
  explicit settings; avoid redundant sublabels that enlarge every row.
- Search large vocabularies on demand; initially show current selections and
  deliberate shortcuts, not an exhaustive grid. Reuse the shared search control.
- Anchor a popup to its trigger within the active modal's interaction boundary;
  bound it to the viewport. Provide visible dismissal. Escape closes the
  innermost surface, returns focus, and leaves no hidden child state on reopen.
- Use conventional icons: plus adds or increments. Use a recognizable icon for
  choosing an icon. Disclosure controls use clean icons and substantial targets
  (at least 36px in compact desktop interfaces), not tiny text arrows.
- Treat related action buttons as one sized group with its label above; keep
  the group on one row at its intended working width. Animate insertion briefly
  without delaying focus or revealing an obstructive autofocus tooltip.
- Style scrollbars through shared application tokens on every scrollable surface,
  including popups. Search borders, focus rings, and radii also belong to shared
  controls, not one-off dialog styling.

Exercise these with real mouse and keyboard paths, viewport-edge popups,
close/reopen, and persisted readback. A renamed view is not delivery of its
specified editor or workflow.

- Prefer familiar, established interaction patterns over inventing new controls.
- Novel product functionality usually does **not** require novel control
  semantics.
- Check existing project components before creating another implementation.
- A new feature should normally look as though it always belonged to the
  application.
- Compose complex interfaces from recognizable primitives: buttons, menus, tabs,
  toolbars, popovers, dialogs, trees, tables, split panes, and so on.
- Standard controls should behave like users expect: keyboard navigation, focus,
  hover, selected, disabled, loading, empty, and error states where relevant.
- Use semantic controls: actions should look and behave like actions, navigation
  like navigation, editable fields like editable fields.
- Maintain the application's established spacing, density, typography, control
  sizing, iconography, borders, and hierarchy.
- Favor **compact productivity-app UI** over oversized cards, excessive padding,
  giant headings, unnecessary whitespace, or turning every value into a badge.
- Labels and icons should communicate the actual action clearly. Do not sacrifice
  meaning merely for symmetry or visual neatness.
- When unsure how a component should look or behave, **research examples instead
  of guessing**.

### Color carries meaning

**Color is a required information-bearing, ontology-bearing dimension of meaning
in design. Use color deliberately across the application UI/HUD.**

Use a palette rich enough to distinguish the domain meanings present: types,
categories, entities, relationships, priority, state, and action roles where
relevant. Name what each color treatment communicates. A single brand accent
plus success/warning/error colors is insufficient when the interface also needs
to distinguish domain concepts.

Define reusable semantic color roles in the design system and apply them
consistently across views and components. Express them through appropriate
foregrounds, icons, markers, borders, or surface tints, with emphasis proportional
to their importance. Preserve user-assigned domain colors and their meaning.
Themes may change palette and styling while keeping semantic roles coherent;
switching a theme must not change the underlying classification or identity.

Review color as information: a person should be able to scan meaningful groups,
distinctions, and priorities before reading every label. Keep contextual labels
compact and use tooltips for supporting detail when needed.

### Applying it to existing UI

"Preserve existing patterns" governs new work. It is not a reason to leave a
surface broken: fix a pattern that fails the bullets above, and say what was
already there and why it changed. When the existing UI and this guidance
genuinely conflict on something consequential, surface the conflict to the owner
rather than silently picking a side.

### Practical principle

**Find a good precedent, understand why it works, then adapt it to this
application.**

## Observable checks

Outcomes an agent can inspect and report on its own work:

- A cited precedent exists, is a real application, and its reason for working is
  stated.
- Reused components are named; new ones are justified against what already
  existed.
- Keyboard navigation, focus-visible, and disabled/hover/selected states exist
  where the control type requires them.
- The new surface matches the application's spacing, density, type scale, and
  control sizing.
- Color treatments have named domain or interaction meanings, remain consistent
  across related components, and preserve those meanings when themes change.
- The rendered UI uses color to distinguish relevant groups, priorities, and
  states; semantic color is not confined to one accent or status indicators.
- Labels name the actual action rather than a generic verb.
- Relevant empty, loading, and error states are present, or their absence is
  stated as a known limit.

Where rendering matters, check it through the project's test runner as
[AGENTS.md](../AGENTS.md) requires, exercising the boundary being claimed rather
than a screenshot proxy for it.
