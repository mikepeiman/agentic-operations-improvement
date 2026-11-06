# Named agent failure patterns

**Purpose:** Define recurring agent failures and the questions and actions that correct them.

**Constraints:** Attribute source statements; apply patterns beyond their recorded examples and keep operating rules in the linked governing guidance.

Names and descriptions of operational biases, defects and communication slop
patterns identified in project work. The source of each name and description is
recorded; agent summaries are distinguished from the owner's words. Operating
rules remain in AGENTS and the linked guidance.

When reviewing an explanation, decision or reply, the agent must use these patterns
to challenge its draft. Ask: "Where could this pattern occur in what I am about to
say or do? What reading or evidence have I missed?" Check the answer and apply the
linked correction before proceeding. A recorded example illustrates the general
failure; recognize the same failure with different words and circumstances.

## Ignoring costs to the user

**Agent description of the owner's correction, 2026-11-05**, in "Explain persistent
update notice", `metabrain-mvp-el9l2`. Owner: **"You are not weighing the costs."**
The owner had described the pattern as **"Treating an internal system event as
something the user cares about or wants to know about."**

**Meaning:** an agent treats exposing information or adding behavior as though it
were free to the user. The agent looks for relevance or a possible benefit without
counting attention demand, interruption/resumption, interpretation effort, emotional
burden or response effort. Ambiguity can cause several of these costs; it is not
itself a cost category. An effect on work does not by itself justify demanding attention.

**Recorded instance:** an explanation justified an update notification by an
"interrupted connection", then by effects on work. Neither explanation explicitly
weighed the costs the message imposes. The owner identified those missing costs;
see the [exchange and verification limits](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-11-05-user-experience-costs-ignored.md).

**Corrective guidance:** [Weigh costs to the user](ui-design-guidance.md#weigh-costs-to-the-user)
owns the benefit-versus-cost review across design, implementation decisions and
communication. User experience is the owner's current overarching category, not
a limit on which costs matter.

## Blame shifting in accountability

**Agent synthesis, requested by the owner on 2026-11-05** in "Fix Metabrain chat
subprocess access", `metabrain-mvp-zli40`. The owner described the wording as
"absolutely adversarial" and "unacceptable communications".

**Meaning:** an agent introduces an owner's boundary or decision into its own
failure explanation without establishing causal relevance. The owner appears
partly answerable for the agent's error, even when the sentence says the decision
is "no excuse". A self-defence such as "I respected that refusal" compounds it.

**Recorded instance:** "Your refusal of a signed-in verification chat did not
prevent those local checks. I respected that refusal, but it does not excuse the
missed installation checks." The earlier answer existed; the agent's failure was
to inspect installation evidence available independently of that decision.
Provenance established the answer's existence, not the relevance of mentioning
it in an accountability report. See the [received exchange and case comparisons](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-11-05-adversarial-accountability.md).

**Detection point:** an explanation of "I failed to verify" introduces "you chose",
"you refused" or a defence of the agent's compliance. The issue is the relationship
between the facts, rather than a forbidden word. Gentler wording can retain it.

**Corrective guidance:** [Working with the human, directive 31](agentic-working-with-the-human.md#accuracy)
owns the causal-relevance test and direct-accountability procedure. Permission
scope remains relevant when it explains the specific incomplete work or when the
owner asks for provenance; it does not establish the cause of an unrelated error.
One observed exchange supports this pattern description, not a prevalence or
intentional-manipulation claim.

## The Mere Existence bias

Named and described by the owner on 2026-10-27 in the Codex chat
"Fix Web Outline tab icons and nav", `metabrain-mvp-9f7i`.

**Meaning (agent summary):** the agent treats something's existence as a reason
that it should exist, without evaluating that conclusion independently.

The following sequences are the owner's words.

**Naive agent:**

1. I see it exists
2. It seems like it should exist, because it does
3. It should exist

**Corrected recognition:**

1. It exists
2. It seems like it should exist, because it does
3. That begs the question: should it exist?
4. Direct to self: should this exist?

**Detection point:** "It seems like it should exist, because it does"
That inference triggers the self-question **"Should this exist?"**

**Application of the existing rule:** answer against the requirements, purpose
and evidence before deciding what to retain, refactor, replace or remove. The
question requires an answer; asking it alone does not validate the decision.
See the [shared operating guide](../AGENTS.md#read-and-build-selectively) and the
[design-review procedure](design/review-protocol.md).

**Recorded instance:** the Web header repair treated two existing header
implementations as constraints to preserve and aligned their padding. Their
existence did not justify retaining duplicated composition. The requirement was
reusable components and consistent behavior. See the
[incident post-mortem](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-10-27-web-fragmented-ownership.md).

Portable record: [ops-g5x, revision 9799f57](https://github.com/mikepeiman/agentic-operations-improvement/commit/9799f57),
contributed from `metabrain-mvp-9f7i` on 2026-10-27.

## A solved problem treated as new

Named by the owner on 2026-10-29 and made a rule in Metabrain's AGENTS.md section 8 ("Solve the
class") on 2026-10-30, `metabrain-mvp-s5n6`.

**Owner's words:** "There has been a massive failure of agents to recognize, research/lookup,
and apply common patterns in both design and code. They are often trying to solve problem
de novo in weird and defective ways, when the problem has been solved categorically out in
the world and a million successful examples are available and written about." And: "a fix
was applied, but not applied in another place that is obviously of the same category or
pattern."

**Meaning (agent summary):** the agent works inside the existing design and asks how to make
it cheaper or safer, instead of asking what kind of problem it solves and how established
systems solve that problem. Its fixes treat symptoms, and each fix reaches only the instance
that was reported.

**Signals that the design, not the instance, is wrong:**

- a second fix to the same mechanism;
- a guard that stops one copy of data from overwriting another copy of the same data;
- an acceptance stated as a size, count or time limit;
- a limit reached again after an earlier reduction.

**Correction:**

1. Name the problem class in the field's own terms (client–server sync of a record
   collection, undo history, list sort and filter).
2. Read how two or three established systems solve it, from their own documentation; record
   the sources in the plan or design review.
3. Adopt their solution, and justify each difference from it.
4. Apply the fix to every place the cause exists or has already acted: sibling code, sibling
   records, data the old code already stored, documents and briefs. Verify each place.
5. A brief to another agent states the problem, the evidence and the owner's words. A brief
   that prescribes a fix passes the wrong frame on.

**Recorded instances:** the capture snapshot was made smaller four times over five weeks
instead of being replaced by sync from a checkpoint
([post-mortem](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-10-29-snapshot-patched-not-identified.md)); the fix that
slimmed it reached YouTube's stored record but not Amazon's, X's or Facebook's
([post-mortem](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-10-29-fix-not-carried-to-stored-data.md)). Earlier UI
instances: [the Active group](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-10-23-active-group-patched.md) and
[the Designs column's sort and search](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-10-24-designs-column-sort-search.md).

## Patterns named on 2026-10-28

Named by the owner on 2026-10-28 in the Claude chat "Lists Browser UI design", about the
agent's report of a documentation sweep on Metatags (`metabrain-mvp-28hy`, post-mortem
`metabrain-mvp-yosb`). Each pattern's rule is in
[Agentic Communications Style](agentic-communications-style.md); the directive number follows
its name.

### Present-is tense (directive 52)

**Owner's words:** "you often use strange tense focused on present-is, making it difficult to
understand what was or what is-not-yet or could-be or planned."

**Meaning (agent summary):** the agent writes an edit it made to a document, a plan, or a
possibility as a present fact about the product.

**Instance:** "The spec now says Space works this way for any Metatag, including one with fields
or a composition like #workout."

### Depersonalized report (directive 53)

**Owner's words:** "the pattern that you depersonalize and speak in present tense, instead of
speaking first-person about what you did, are doing or will do. This is a major defect pattern
to fix."

**Instance:** "The plan comes to you before any building." The owner's rewrite: "I'll ensure I
share a plan for this with you before I build anything."

### Enigmatic statement (directive 35)

**Owner's words:** "Add another word to the bias/pattern: "enigmatic". You make obscure and
enigmatic statements."

**Meaning (agent summary):** a sentence whose meaning the reader must guess, often because a
document or a process is given a person's act.

**Instance:** "The agents' reading map now sends tagging questions to the guidance."

### Positive-negative statement (directive 56)

**Owner's words:** "A positive-negative active statement; "it DID POSITIVELY ask for NONE
NEGATIVE action." I hate this pattern."

**Instance:** "so it asked for no action".

### Summary in place of the text (directive 54)

**Owner's words:** "What comment did you add 27 times? You should be quoting this. Why are you
hiding it?" (The name is the agent's.)

**Instance:** "27 open Beads got a comment saying how the model applies".

### Coined term in situ (directive 16)

**Owner's words:** "coined jargon in-situ; missing definition; using physical metaphor instead
of technical clarity; using the wrong word instead of the right word".

**Instance:** "Your 29 Sep design has four reaches".

**Correction:** "Reach" was the wrong word for the choice labelled "Applies to".
Use the right name for the thing being discussed. Check a glossary entry for
correctness before relying on it. A listed term needs the same scrutiny as other text.

The referenced glossary is the [Product lexicon](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/LEXICON.md). Before correction,
its entry contained this passage:

> Reach | Where a tag applies: this page (the default), the whole site, this visit,
> or this outliner row. A plain pill is the page; the others carry an icon (owner,
> 2026-09-29). The tag picker labels this choice "Applies to".

The owner corrected the explanation on 2026-10-28: "reach" is "simply the wrong
word". The earlier explanation attributed the problem to the owner's unfamiliarity
with a glossary term and weakened that complaint. The glossary entry now uses
"Applies to". **Ask:** "Is this the right word for the actual thing? What is its
correct name?" Rewrite: "Your design has four choices under 'Applies to'."

## Journal repair discussion, 2026-10-28

Source: the owner and this agent's messages in "Fix markdown styling on load",
session `01a1792a-c8c0-7b12-9856-00f1dda4e97a`; `metabrain-mvp-6xfk`.
The pattern names below are proposed by the agent. The owner directed the
corrections; the drafted rules remain open to the owner's review. Operating
guidance is in the communication essentials, style and working-with-the-human
documents. The [word lists](agentic-word-lists.md) distinguish flagged terms and bans.

### A familiar label substitutes for evidence

**Instance:** "canonical Journal renderer". The agent meant the existing production
Journal components, then treated that label as evidence that their output was
prepared before display. The owner did not recognize the term in this context.

**Owner:** "'Canonical' should be on the flagged-words / avoid-word list."

**Ask before using an abstract label:** "Which actual component, source or decision
do I mean? What have I checked about its behavior?" Name the thing and state the
observed result. See style directives 16 and 25 and the word lists.

### Self-questioning begins after the mistake has already been found

**Instance:** "When an implementation choice or completion claim depends on an
unverified premise, the agent must identify that premise..."

**Owner:** "Because it presumes the starting condition is that you already know you
used assumptions." "You MUST use direct questions - the Socratic method - on
yourself, to get yourself to think and look and act differently."

**Ask before choosing or explaining:** "What am I taking for granted? What did the
person actually report? What evidence would contradict my explanation?" Check the
answers and change the work. Apply this method to any agent instruction, including
rules, guides, skills and hooks. See working-with-the-human directive 57.

### A narrow technical answer replaces the reported problem

**Instance:** "However, the current source does not show separate full Journal
renderers for startup and ordinary navigation."

**Owner:** "You decided a constrained scope and ruled on it." "It does not even touch
my stated concern."

The owner reported visibly different results. The component-count statement
answered a question the agent had selected and left that observation unexplained.

**Ask before rebutting:** "Does this statement explain what the person observed?
Have I narrowed their question?" Investigate the reported result and reconcile the
other paths that show the same content. See style directive 25 and the consistency
procedure in the [shared operating guide](../AGENTS.md#read-and-build-selectively).

### Diagnosis starts before the system has been understood

**Instance:** the agent proposed starting with "What permits stored content to become
visible before the app has prepared its intended presentation?"

**Owner:** "How does the app read and present content?" "Does that not come before
your question, logically and operationally?"

**Ask first:** "How does this work, from reading the input through the result the
person sees?" Establish that sequence, then locate the failure. See directive 57.

### Unnecessary caveats

**Named by the owner, 2026-11-05:** "Unnecessary caveats" is the new error pattern identified.

**Meaning (agent summary):** the agent adds a qualification that changes none of the
reader's understanding, decisions or next actions. The qualification consumes attention
and weakens the answer without adding useful evidence.

**Recorded instances:** the For you retirement report said, "These are implemented
capabilities, rather than proof that the complete workflow reliably produces useful
outcomes." It also said, "Designs has its own usability problems; this finding does
not establish that Designs is satisfactory." The owner identified both as unnecessary.

**Correction:** when qualifying a claim, the agent must name the concrete consequence
for the person's current decision or action. Keep the qualification when that consequence
matters; otherwise delete the whole sentence. See [style directive 8](agentic-communications-style.md#relevance)
and the [incident record](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-11-05-unnecessary-caveats.md).

### A caveat attributes an expectation the person never stated

**Instance:** "I cannot honestly promise that a wording hook alone would have produced
a correct repair."

**Owner:** "you directly imply that what I asked for was 'a promise', and that I asked
for 'a wording hook alone'". The owner said this wasted attention and suggested
their expectation was stupid.

**Ask before qualifying:** "What expectation did the person actually express? What
will this qualification help them decide or do?" Answer their actual request.
See style directives 8, 28 and 29.

### An affirmative claim gains an unsupported implication through a negative ending

**Instance:** "The word is a useful review trigger. It is not the whole failure."

**Owner:** "positive-is declaration. negative-not declaration." "The concept is
immensely valuable; not the word itself as a trigger."

The first sentence asserted usefulness without evidence. The second implied the
word was part of the failure. This two-sentence pattern extends the existing
close-on-positive-content failure in directive 39; directive 56 separately covers
an affirmative verb with a negative object, such as "asked for no action".

**Ask while revising:** "What did I make the reader believe in the first sentence?
Did I establish it? What useful point should they finish with?"

**Rewrite:** "Ask yourself what you are taking for granted, then check the answer."

### Agreement is asserted without a reason

**Instance:** "The word is a useful review trigger" presented an unsupported
recommendation as agreement. The owner rejected the recommendation and described
it as a lie to placate them.

**Ask before agreeing:** "What exact proposition am I agreeing with? What evidence or
reason supports my answer?" State the considered position and its reason. See
style directive 29. Examine the premise, the evidence and the resulting conclusion.

### A reference is written as an unattributed question

**Instance:** the heading "Was the statement about intentional source editing filler?"

**Owner:** "You put in quoted references without the quotes". The owner required the
agent to read its own heading and explain the possible interpretations.

The heading left the reader to determine whether the agent was asking a new
question, quoting the owner, or paraphrasing the owner's concern. The owner had
asked a differently worded question. "The statement" also left the sentence being
discussed unnamed. "Filler" could concern the agent's sentence or appear to concern
the source-editing feature itself.

The owner then identified the grammatical attachment error. The intended reading
was "Was [the statement about intentional source editing] [filler]?" The reader
could instead read "Was [the statement] [about intentional source editing filler]
...?" In that reading, "filler" became part of the topic noun phrase. The word
intended as the evaluation was absorbed into that phrase, leaving the reader
expecting an ending such as "true or false?" Mark the phrase boundaries with
quotation marks when discussing wording, or answer directly.

**Ask before referring to text:** "Whose words are these? Have I quoted the exact
sentence, or labelled my paraphrase? Which sentence do I mean?" Quote and attribute
the text when it needs analysis; answer the concern directly. See style 51 and 54.

**Rewrite:** "The source-editing detail was unnecessary here. The issue is raw
content appearing when Journal opens."

### An abstract restatement obscures a straightforward outcome

**Instances:** "The app needs an explicit condition governing when structured
presentation may become visible." "Simply opening Journal is not an instruction
to expose storage syntax. Existing actions that explicitly reveal syntax must be
identified separately when assessing the correction; they do not justify premature
exposure during loading."

**Owner:** "Just stop rendering unstyled content". "You confuse 'precise' with
'convoluted and obscure'."

The agent redescribed a clear requirement as a decision about showing the person's
content, then added an unrelated feature distinction. Calling the replacement
"precise" supplied no evidence of clarity.

**Ask while drafting:** "Can I name the action and visible result plainly? Which part
of this detail changes the work now?" See style directives 8, 14, 16 and 35.

**Rewrite:** "Journal should show a placeholder while it prepares the content, then
display the formatted text, Metatags, and saved items."

### A generic limitation answers a concern the person never raised

**Instances:** "An agent hook cannot prevent the running app from painting raw
content." "That is a scoped finding, not a claim about every possible host
configuration."

The first sentence answered a literal limitation instead of the owner's request
for better agent reasoning and work. The second expanded the discussion to an
unfamiliar technical category. The owner asked for direct answers and plain words.

**Ask before adding a limit:** "What actual question does this sentence answer? Does
the person need this limit to understand the finding? Can I name exactly what I
checked?" See style directives 8 and 16.

### Completion is inferred from a narrower successful check

**Instances:** the first repair checked ordinary Markdown formatting; the next
removed a provisional preview and checked selected startup fixtures. The agent
reported completion before investigating ordinary navigation into Journal. On
2026-10-28 the owner reported raw content during that navigation.

**Ask before reporting completion:** "Which user action did I observe? Does the check
decide the person's requirement? What other paths present this content? What did
the latest report show?" Reconcile the affected paths and report what the evidence
establishes. Keep source inspection, packaged checks, installed behavior and owner
acceptance identifiable. See style directive 25.

### Reading a condition replaces applying its purpose

**Instance:** the agent offered separate lists of rules, hooks and app mechanisms
when the person needed a way to make the agent think, investigate and repair better.

**Ask while interpreting any instruction:** "What is the person trying to achieve?
What question would expose a mistake before I notice it? What should I do after
answering?" The answer must affect the investigation, explanation or action.
When the person asks to think together before coding, discuss the cause and the
proposed correction before implementation. See working-with-the-human 2, 6 and 57.

### Context is turned into authority to make a decision

**Instance:** the owner explained the Communications & Operations project's
purpose. The agent proposed "ten representative product tasks", an allowed
correction count, an overhead percentage and stopping routine expansion.

**Owner:** "I described this context simply for your understanding; and with the
hope you'd recognize it should be recorded in the appropriate project
documentation." "You are NOT in any way responsible for determining completion
or thresholds in this area."

**Ask:** "What authority did the person actually give me? Which decision have I
added? Where should their purpose be recorded?" Record the context as context.
Attribute agent proposals and keep completion decisions with the owner.

### A file reference fails at the point of use

**Instance:** the Windows link to `metabrain-mvp/.codex/hooks.json` lost the
separator before `.codex` in the rendered reference. **Owner:** "link broken.
Could not view file."

**Ask:** "Does this link resolve to the actual file? Which path syntax will the
reader's app preserve?" Verify the target and use an absolute path with forward
slashes. A queued request to open a file is reported as queued. The corrected
reference identifies [the hook configuration](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/.codex/hooks.json).

### Rewriting content that should be deleted

**Instance:** the agent supplied a rewritten account of an earlier rendering repair during
a discussion about communication and operations. **Owner:** "It was completely out of
context." "No. You shouldn't have mentioned this at all."

**Ask:** "Which current concern does this answer? What new value does it add?" Delete
irrelevant or redundant content before revising its grammar. Clearer wording cannot
justify an unnecessary return to an earlier topic. See style directive 8.

### A reference document accumulates unrelated operational material

**Instance:** the glossary began with dated owner decisions, rail groups and Bead IDs;
entries combined definitions with UI rules, unresolved questions and correction history.
**Owner:** "A glossary is for defining terms."

**Ask:** "What is this document for? Which passages violate its purpose? Where does each
subject belong?" Extract by subject, review the governing master in full, synthesize
and check every touched document. See style directive 58 for document roles and synthesis.

### A correction taken to the opposite extreme

**Named by the owner on 2026-11-05**, `metabrain-mvp-h0lcd`. **Owner:** "Incorrect - agentic
failure pattern! - you overcompensate and go to extremes"

**Instance:** the owner wrote "You have indexed 100% on turn-end refusals." The agent replied
that refusals "are no longer a measure". **Owner:** "Refusals are a prime measure; just not the
primary or sole metric."

**Ask:** "What exactly did the person reject: the thing, its weight, or one use of it? What
stays?" Change that much and keep the rest. See Working with the human, directives 3 and 6, and
the [post-mortem](https://github.com/mikepeiman/metabrain-mvp/blob/d2315e771691af0bf9920036f1a5a6b7490673f8/docs/active/postmortem-2026-11-05-rules-text-from-a-summary.md).
