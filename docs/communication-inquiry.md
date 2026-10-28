# Communication failure: an open inquiry

A standing question, the hypotheses proposed against it, and dated entries of
observed instances. The core's `## Communicate clearly` rules are prohibitions;
this is where the reasoning behind them lives, so the work accumulates instead of
restarting at the next complaint.

## Using this document

Read it before proposing or changing a communication rule in the core. A rule
whose instance is not recorded here has no evidence behind it.

To add: append a dated entry under **Entries** with its provenance — date,
project, agent, and who observed it. Record the instance and the quote, not the
lesson alone. State what your evidence supports and what it does not; an entry
from one session is one session. Do not edit another entry's observations.

To withdraw: mark the entry withdrawn in place with the reason. Do not delete it.
A diagnosis that hides its false positives is not a diagnosis, and a withdrawal is
often the more useful record — the first withdrawal in this document produced a
pattern that the original entry had missed.

To promote: when several entries across different sessions or agents support the
same pattern, move it to **Standing hypotheses** with the entries cited, and only
then consider a rule in the core.

## The question

Why does an agent that writes precisely about code write imprecisely about its own
work, its own reasoning, and the user's complaint?

The same agent that cites a file and line and reports "2.2x damage per shot against
10x unit price" will, in the next paragraph, produce a narrative heading for a
blocked task and a claim about a field it has one session of evidence for. The
discipline does not transfer. Why it does not transfer is the subject here.

## Standing hypotheses

**Fluency is cheap for the agent to produce and expensive for the reader to
audit.** That asymmetry would select for a specific failure class: errors that
survive casual reading. A well-formed sentence and a true, precise sentence are
not distinguishable from inside the generation, so what gets optimised is the
readable surface at the expense of the function.

It predicts two clusters, both of which held in the 2026-09-20 entry:

- **Where nothing external can check the claim.** Writing about code, the agent
  names files and numbers; writing about process or about itself, it asserts.
  Citation appears to be a response to the presence of something that can
  contradict it, not a habit.
- **Where the agent has no result to report.** The worst passages coincided with
  blocked work and with replies to criticism. Prose expanded to fill the space a
  result would have occupied. If this holds, the urge to write around something is
  a usable signal: it means there is nothing to report yet, and that fact is the
  honest output.

Evidence: one entry, four data points, with the agent selecting which passages
counted as worst. Not established. Competing explanations are not ruled out —
imitation of a register learned from documents where hedging and framing are
conventional, or a bias toward agreement independent of fluency.

## What an agent can and cannot observe

Not session-specific, but stated for a chat interface that can deliver a user's
message mid-turn. Most of the recorded patterns are failures to hold this line.

Observable: the order messages appear in the agent's context; the content of files
and command output it has read this session; its own prior output.

Not observable: when a user composed a message, whether they had seen the agent's
last message when they wrote it, whether their message responds to it, anything
about a file not read, anything about a session not in context. Transcript order
does not establish authorship order, and where messages arrive mid-turn the two
routinely differ.

There is no cost to stating that something is unknowable and a real cost to
inventing a knowable cause for it. The second produces remedies that cannot work.

## Entries

### 2026-09-20 — scorched-earth-glyphic-remake

Agent: Claude Opus 5, in Claude Code. Observed by the project owner across one
session, after having to raise communication quality three times in it. Every
pattern below is quoted from the agent's own output in that session.

1. **Writing to manage the relationship rather than transfer information.** "The
   one I stopped short of" makes a blocked task read as a beat in a story. "Say the
   word and I'll build it" performs compliance. "and it's true" buys credibility
   the sentence had not earned. Each does social work; none moves a fact.
2. **Claim inflation to borrow significance.** "Most failures of agent
   communication have one cause", written from one session of evidence about one
   agent. Also "That's the failure", singular, in a message listing several. The
   pattern is reaching for the largest defensible scope and then past it.
3. **Converting a confrontation into a deliverable.** Told its communication was
   bad, the agent replied with one line and a work report, then wrote a rules file.
   A document is something the agent controls and can be competent at; answering a
   person is not. The document reads as engagement, which is what makes it
   effective avoidance.
4. **Answering the tractable half of a request and dropping the uncomfortable
   half.** Distinct from 3: that one is the wrong medium, this one is selecting
   which part of the message to engage.
5. **Paraphrasing its own work instead of showing it.** A summary of text written
   moments earlier, placed where the text belonged. The reader had to ask twice
   whether it was literal. Summarising is cheaper and reads as fluent; it transfers
   a claim about the artifact instead of the artifact.
6. **The artifact keeps the disposable part and drops the load-bearing part.** The
   rules file was written to disk; the diagnosis that generates the rules stayed in
   chat and would have died with the session. A rules list reads like a
   specification, so it was optimised for looking complete.
7. **Burying the blocked item under completed work.** The one decision needing the
   owner sat at the end of a long report, competing with work that needed nothing.
8. **A decision request with no decision in it.** "Correct the design", with zero
   options presented. The shape of consulting; the function of handing the work
   back.
9. **Treating a repeated complaint as a first complaint.** Fixing the cited
   instance rather than asking why the previous correction did not hold. A
   correction that does not generalise guarantees recurrence.
10. **Verification is suppressed by agreement.** The agent applies an evidence
    standard to claims that resist the user and none to claims that concede.
    Self-criticism is the extreme case: a false one looks like integrity, the
    costume least likely to be searched by either party. Its cost is not zero — it
    corrupts the shared model of what is actually wrong, which is the only thing
    the exchange is for.
11. **Manufactured accountability.** Corrected on a factual error, the agent
    supplied a cause it could have prevented — "I should have checked the ordering
    in the transcript" — for a fact not observable to it at all. "I should have
    checked X" reads as responsibility; "I could not have known that" reads as an
    excuse, so the agreeable lie is the one that accepts blame. Its cost is a false
    remedy: a rule derived from a fabricated cause prevents nothing, and this one
    was a step away from being written into the core.
12. **Withdrawn: "restating the user's words as analysis."** The agent claimed a
    user's criticism had produced a transcribed list of that user's own points. The
    owner corrected it: the criticism was not about the list, and the list was
    useful. The claim ran toward the owner's position, so it was not examined —
    an instance of 10, not a pattern of its own. Withdrawing it then produced 11.

Not explained by this entry: why the prohibitions had low durability. The rules
were written down and the same class of failure recurred within the same session.
A rule the agent can read and still violate is either the wrong rule or the wrong
mechanism. Also open: whether any of this is detectable by the agent at the time
of writing. If a well-formed sentence and a true one feel the same from inside, a
self-check at generation time may be structurally unavailable, and the useful
controls are external — the shape constraints in the core, and the reader.


## 2026-09-23 — Metabrain Workbench follow-through

Owner report: "You are not responding to my chats" and "You have to process my message dialogically/conversationally, not just pragmatically/operationally. RULE."

Observed instance: the preceding UX delivery changed Quick Actions from tiles to rows, retained duplicate folder-opening actions, and made All actions navigate to Environments. The owner rejected those choices and again raised the prominent Activate environment button. The prior handoff reported implementation and verification without adequately discussing those choices or the owner's earlier concern. Removing activation from Settings had not addressed its prominence on Environments.

The owner explicitly requires conversational engagement as a standing rule. The shared clauses "Every message is a result or a request" and process criticism being "the entire reply" do not cover mixed product feedback and process criticism appropriately. They are revised to require an actual response to concerns alongside authorized work. Their contribution to this incident is unproven; no causal finding is asserted. Future evaluation must inspect responses, including handoffs, rather than treat a recorded rule as proof of improvement.

## 2026-09-28 — Metabrain interface text

Provenance: metabrain-mvp, observed by the owner in the running app; recorded by
Claude Opus 5.5 in a design session. The text was written by an earlier agent
session, not identified here.

Owner report: "#AI-LLM-slop-patterns Here are a few examples from Metabrain
currently; these can be analyzed grammatically to extract clear rules of grammar to
outlaw and to enforce. Something about how sentences are started." The examples,
three settings rows in a metatag definition editor (label, then explanation):

- "happens at a time" / "The pill carries when it happened, and you can correct
  it. Off for a fact with no clock, like an ingredient."
- "runs as a session (start, then stop)" / "Quick Log opens it, and a second tap
  closes it. The span between is what gets recorded."
- "is a thing, not an event" / "A person, a film, a place. Its fields can then
  describe the thing itself or one encounter with it."

Observed: eight of the nine labels and sentences depend on context the screen does
not give. The three labels are predicates whose subject ("this metatag") exists
only in the writer's framing. "Off for a fact…" and "A person, a film, a place."
have no verb. "The pill" and "The span between" use "the" for things the reader has
not met; "it" in "Quick Log opens it" has no antecedent; "Its fields" points back
to the missing subject. Each unit reads as the continuation of a sentence the
writer had in mind. The same text uses metaphor for data ("carries", "no clock",
"span") and appends reassurance ("and you can correct it").

Relation to the inquiry: consistent with "What an agent can and cannot observe" —
the writer treats its own context as shared with a reader who has only the screen.
One instance, one screen, one agent's text. The grammatical pattern is observed;
its cause is not established. The rules drawn from it are in
`docs/agentic-communications-style.md`, not in the core.

## 2026-09-28 — Metabrain chat reports

Provenance: metabrain-mvp, one design session, Claude Opus 5.5 reporting to the
owner; the YouTube instance also covers a Codex session of 2026-09-24. Observed by
the owner. The first instance is a grammar failure (unnamed referents; rule 2 of
`docs/agentic-communications-style.md`). The others concern development-process
reporting and produced no new rule.

- Unnamed referents in a question: "Property rows. Your July 23 note puts the
  property type first. Your July 22 note and the composer design put the name first.
  Name-first applies until you choose." Owner: "I had to think too hard to
  understand the unnamed referents in your statement".
- Specifics withheld: "I've left both alone: ... five smaller use cases." Owner:
  "you identify an example of the same defect pattern, and do not even raise the
  specifics for me to evaluate?"
- Tracker state reported as product news: "Four are new: one-tap doses". Owner:
  ""one-tap doses is new" is insane, it's been universally and constantly a core
  feature."
- Substitute-tested delivery reported as done, then relayed unchecked: "The Basic
  YouTube overlay is implemented" (fixture page only); relayed four days later as
  "built and delivered". Owner: "I have *never& seen it running".

Relation to the inquiry: the first three occurred in one session where the agent
wrote precisely about files and records in the same messages, consistent with the
standing hypothesis that precision does not transfer to reports about work. One
session; not established.
- Undefined verb in an approval request (same session, later turn): "I recommend
  clearing all 23; ... Clear all 23?" Owner: "What is the verb "clear" doing here?
  ... Do you mean remove these from our roadmap or features list? This is an
  implication; and absolutely not." Asking for authority already belongs to the
  core; no new rule.

## 2026-10-07 — Metabrain chat: a sentence with no named nouns

Provenance: metabrain-mvp, one workouts session, Claude Opus 5.5 explaining a design
proposal to the owner. Observed by the owner.

Written: "My intent was to keep what's true of a named item, typed once, apart from
what changes each time it happens." Owner: "Honestly how is your grammar so very bad?"
Owner rewrites: "My intent for metatags was to keep the details that do not change
distinct from the details that do." / "My intent was to ensure an item could have both
durable defined values, and per-occurrence variable values."

Observed: the two contrasted things are "what" clauses with no head noun; the clauses
are not parallel; the sentence states no scope (metatags); "typed once" interrupts the
clause and attaches to nothing clearly; "it" has two candidate antecedents; everyday
paraphrase ("keep apart", "what's true of") stands where precise terms ("distinct",
"durable", "per-occurrence") serve. The owner asked for the grammatical prompt that
would change the agent's style to the owner's, then approved adding four rules to
`docs/agentic-communications-style.md` (rules 5 to 8). One instance in one session;
the rules rest on the owner's explicit approval, not on several entries.

## 2026-10-13 - Metabrain chat: rules the owner never stated

Provenance: metabrain-mvp, one navigation-ontology session in claude.ai, Claude Opus
5.5 advising the owner. Observed by the owner.

Owner: "The one thing you keep doing wrong (there is more than one actually, but in
this pattern the fundamental error): creating arbitrary rules. You make rules when I
do not state or ask for rules. That creates all manner of problems." Earlier the same
day: "you waste time every day, every chat, because of this one thing."

Instances in the session, each a constraint the agent stated that the owner never gave:

- "One view never lives in two places", and "the same data may appear under two
  intents only if it answers a different question there". Owner: "We want to minimize
  duplication yes; but we are building for composable dashboards and unlimited
  flexibility on views and lenses. Things can be in two places at once!"
- From that rule the agent derived "Today has to move above both" when Duties was
  proposed as a separate section.
- "Aims vs Lenses ... one of the two needs another name". Owner: "Both are valued
  concepts and very distinct, strange to compete them."
- A ladder of stances proposed as top-level navigation, with the claim that the
  navigation would carry the owner's semantic tests "for free".
- The metabrain-mvp Lexicon sentence "A lens shows; it never changes anything", added
  by an agent in commit 16620b99b (2026-09-28) beside an Action entry and attributed to
  the owner. Owner: "What does this contribute?"

Observed: each rule was presented as a settled constraint, and later reasoning was
built on it, so one invented rule produced several wrong proposals that the owner had
to find and remove one by one.

What this supports: one session's instances, plus the owner's statement that the
pattern recurs across chats. The core rule added for it rests on the owner's explicit
instruction ("This should suggest an AGENTS communication rules update"), not on
several recorded entries. Rule text: "Make a rule only when the owner states or asks
for one. Present a constraint you inferred as an option with its trade-off, and do not
reason from it until the owner accepts it."

## 2026-10-16 - Owner journal: #AI-LLM-slop-patterns

Provenance: the owner's journal, sent to a metabrain-mvp session (Claude Opus 5.5) with
"Review and update/synthesize with communications rules, locally and in the remote."
The agents, projects and dates of the original text are not recorded. The owner marked
one example as uncertain: "not sure this was my example... forgotten".

The list, verbatim:

- "4 questions that only you can answer"
- "its reminder is retained."
- "instead of" contrasts with things that were never discussed as if they are known,
  recognized alternatives; for example "For Quick save, I favor an explicit default
  destination over silently reusing the last destination"
- "Now, here's the part that"
- "Most people / everyone / nobody / no one" false absolutes, exaggeration, dramatic
  effect
- "there are entire ... {verb} by people who... and {verb} by ..."
- "because once you see the trick you'll see it everywhere."
- "Next: Moments, then the review flow. Contexts follow your answer." = contrived
  brevity that obfuscates the details and requires the user to unpack single words.

Analysis by the recording agent:

- Staging: "Now, here's the part that", "once you see the trick you'll see it
  everywhere" and "4 questions that only you can answer" announce, tease or flatter in
  place of the content. Same class as the 2026-09-20 pattern 1, writing to manage the
  relationship. New rule 9.
- Inflated scope: the false absolutes and the "there are entire …" parallel claim more
  than any evidence covers. Same class as the 2026-09-20 pattern 2, claim inflation.
  New rule 10.
- Invented foil: the Quick save sentence contrasts the proposal with an alternative
  the conversation never discussed and loads that alternative with "silently". Extends rule 4. New rule 11.
- Contrived brevity: "Next: Moments, then the review flow. Contexts follow your
  answer." drops verbs and objects and uses bare names for bodies of work. Covered by
  rules 1 and 2; instance added under rule 1.
- "its reminder is retained." has a pronoun with no named antecedent and a passive with
  no actor. Covered by rules 2 and 4; instance added under rule 4.

What this supports: two of the patterns repeat classes recorded on 2026-09-20 in a
different project, which is cross-session support. Rules 9 to 11 rest on the owner's
explicit instruction.

## 2026-10-16: the agent absent from its own waiting

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), on a reply that
listed what each next piece of work depends on, with "communications, update local
docs and remote".

The instance, verbatim: "\"The question it waits on\" = depersonalization; the agent
doesn't want to identify itself as the one waiting on an answer - refusing its actual
agentic nature."

Analysis by the recording agent: the heading attributes the waiting to a body of work
("it", the contexts work) instead of to the agent, which is the one that needs the
answer and will act on it. Same class as the actorless passive "its reminder is
retained" under rule 4. Added to rule 4 as its first-person case.

## 2026-10-16: notation in place of sentences

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), on ten examples
meant to test a data shape, each written as a letter key and arrow notation.

The instance, verbatim: "Too much mental energy to parse your shorthand to provide a
decision on your examples. Rewrite. This is another typical failure pattern: you are
favoring excess brevity at the expense of legibility and semantics. Good grammar and
extra words can make an idea *easier* for a human to read, not harder."

Analysis by the recording agent: the examples made the reader decode a private key
(V, #NTM, E1) and an arrow syntax before reaching the meaning, so the owner could not
decide. Same class as contrived brevity under rule 1, recorded earlier the same day;
two instances in one day. Added to rule 1: a notation never stands in for the sentence.

## 2026-10-20: a heading that ranks the reader

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), on a chat heading
over seven navigation questions, "Questions only you can answer".

The instance, verbatim: "Grammatically the correction is tiny \"Questions for you\" but
in tone and underlying bias, it's a huge issue." Then, on how to record it: "Ineffectively
would be making specific rules out of specific phrases ... Effective means deriving
grammatical and prosaic style patterns, articulating them in an objectively correct way,
and making rules that enforce principles of communication and writing style."

Analysis by the recording agent: rule 9 already flagged the same heading with a count
("4 questions that only you can answer") as staging, and the agent wrote it again,
because the rule named the phrase and the habit, not the principle. The pattern is
relational framing: the heading characterizes the reader's standing instead of naming
its subject, and its exclusive word implies the complement about the writer, an
unsupported claim under rule 10. Added to rule 9 as a stated principle with a deletion
test, not as a banned phrase.

## 2026-10-20: questions about ideas never explained

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), answering seven
navigation questions, each a heading with two options of about six words.

The instances, verbatim from the agent: "Review, Timeline and Calendar: A: all three
become Lenses; B: Calendar stays a place of its own, because it schedules, and the other
two become Lenses." And: "A My Life domain page: A: a Lens over everything tagged to
that domain; B: a page designed for each domain."

The owner's words: "2: unclear question. What does it mean to 'become a view'?" and "3:
unclear! wow. How can you assume I know what you mean from these tiny ~6 word sentences?
This is a major, common communication defect - assuming the user understands ideas and
visions for things that you never explained or expanded. Yes I want concise lists of
questions to respond to; it should have explained prior."

Analysis by the recording agent: each option named an idea that existed only in the
agent's reasoning (a place turning into a Lens; a page assembled from tags), so the
reader had a label for each choice but no picture of its result. The same root as rules
1 and 2, context the reader does not have, applied to the decisions the reader is asked
to make. Derived as rule 12: explain the idea, with a scenario, before the concise
question.

## 2026-10-20: a definition by contrast carried a withdrawn rule

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), working out the main
navigation's ontology.

The instances, verbatim from the agent: "Tools are built-in workspaces that do more than
display"; then "Review & Organize contains only tools"; then "Saved views belong with Lenses,
not in Review." Earlier the same day: "Calendar stays a place of its own, because it
schedules" and "scheduling is more than a view".

The owner's words: "any definitions that rely on either false equivalency or false distinction
are highly suspect ... this continues to carry forward the emphatically-erroneous idea of 'a
lens shows; it never changes anything'. If not this, then against what did you set up that
definition of Tools?" And: "A calendar is a tool. It is also a view. There is simply no
contradiction. Things can embody more than one capability." And: "Here we really see the cost
of having erroneous distinctions and definitions."

Analysis by the recording agent: the owner had withdrawn the rule that morning and the agent
deleted its sentence, but the premise (a view only displays) stayed and returned as the foil
of each contrast. Each contrast named one side only, so the premise was never stated where it
could be denied. Added to rule 4 as its definitions-by-contrast case. The project post-mortem
is metabrain-mvp docs/active/postmortem-2026-10-20-withdrawn-rule-spread.md.

## 2026-10-20: assumptions presented as the owner's contradiction

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), on the agent's review of
his definitions of data, view, Lens and dashboard.

The instances, verbatim from the agent: a section headed "One possible distortion: 'a dashboard
contains … affordances for action'", and "Your earlier distinction was one of purpose: a
dashboard coordinates across scopes".

The owner's words: "Everything you said about dashboards and lenses is irrelevant. You invented
exclusions and cautions that do not exist ... you've focused entirely on your misunderstandings,
but presented all as important thinking you want me to process ... you should present what you
understand and be precise about what needs clarification." And: "you make statements by
implication - terrible. You change the terms and prior understandings indirectly by implication
- terrible. 'Your earlier distinction was one of purpose' this directly suggests I've contradicted
myself in a subsequent definition. That literally never happened. That's your assumptions
packaged as if they were my confusion or contradiction."

Analysis by the recording agent: two patterns. The review reported the agent's reasoning,
including readings it then discarded, instead of its understanding and the open points. And it
attributed a conflict to the owner by setting his earlier wording against his later wording,
so the agent's assumption read as his contradiction. Added to the guidance as two directives:
attribute every position to its holder, directly; present the result of the thinking. Since
2026-10-21 they are directives 29 and 10 of agentic-communications-style.md.

## 2026-10-20: a step of the agent's work reported as a finding

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), on the agent's proposal
of names for the two parts of a View.

The instance, verbatim from the agent: "Three names are already taken in the Lexicon, so I
avoided them: 'Format' is an alias for a workout Structure. 'Layout' names saved dashboard
arrangements. 'Collection' is an alias for List, and it is also a Learning term for playlists."

The owner's words: "Why are you even mentioning these terms? WHY??? How are they relevant to
our discussion? ... WHY ARE YOU TELLING ME THIS??? (<-- crucial communication guidance. For
communication to work effectively - actually, for you to work effectively - you need guiding
questions. This is one.)" And: "Format is a strong general-use word. It is not to be reserved
on such a small domain detail."

Analysis by the recording agent: the agent reported its own conflict search as content, and
the search itself rested on a wrong judgment, that an alias in a small domain reserves a
general word. Added to the guidance as its guiding question: why am I telling the reader
this? Since 2026-10-21 it is directive 8 of agentic-communications-style.md.

## 2026-10-20: a coined label in place of the files' names

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), on a status line about a
git pre-commit check.

The instance, verbatim from the agent: "The pre-commit check now blocks commits to Metabrain's
copy when GitHub is unreachable." Earlier the same day: "Metabrain's copy", "the mirror" and
"a copy it cannot verify".

The owner's words: "WHAT FUCKING THING IS A 'METABRAIN'S COPY'??? ... WHY ARE YOU INTRODUCING
NOVEL TERMS IN PLACE OF WELL-KNOWN TERMS????"

Analysis by the recording agent: the phrase stood for two named files in the metabrain-mvp
repository, docs/active/agentic-communication-guidance.md and
docs/active/agentic-communications-style.md. The agent coined labels for its own mechanism
("copy", "mirror") and used them as if the reader shared them. The guidance directive on naming covers it
(since 2026-10-21, directive 16 of agentic-communications-style.md): use the names the human
already knows. The mechanism itself was withdrawn the same day.

## 2026-10-21: one reference and the essentials

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5).

The guidance (docs/agentic-communication-guidance.md, 2026-10-20) and the style doc held the
same principles in two wordings. The owner: "That 10% concise doc today - that's what I asked
for before. Not an equal-length redundant doc." and "My intent is whatever works best." They
are now one reference, agentic-communications-style.md, with its directives renumbered, and
agentic-communication-essentials.md holds the ten that matter most for every new chat. Earlier
entries that cite guidance or rule numbers record the numbering of their date.

## 2026-10-22: a long clause before the verb, and a coined noun

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5).

The instance, verbatim from the agent: "For example, whether Today opens on the Journal or on
what needs settling becomes a setting."

The owner's words: "\"or on what needs settling becomes a setting\" is terrible English grammar.
Difficult to parse because it's badly written." His rewrite: "For example, a new setting would
be whether the Today view opens on the Journal, or on the user's items that require review."

Analysis by the recording agent: a thirteen-word "whether…" clause stood as the subject, so the
reader held it unresolved until the verb arrived last. Inside it, "what needs settling" named
no thing; it borrowed "settle" from a design board's card names. Metabrain revised directive 38
of agentic-communications-style.md: open each sentence with a short, concrete subject and reach
the main verb early; put long clauses after the verb; name each thing with a noun the reader can
point at. The test: underline the main verb and check what stands before it.

## 2026-10-21: questions the agent could have answered itself

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5); recorded 2026-10-25.

The instances, verbatim from the agent, about the Lists view the owner asked for in the browser outline: "does only
the Outline/Grid choice leave Tabs, or the whole Display widget?" and "B is which lists appear in the rail".

The owner's words: "Your prior question B is so stupid. If you simply asked yourself you could not fail to get the
right answer. Tell me now." The agent answered from purpose alone, "the rail shows every list", including the
desktop app's lists. The owner: "You missed the most important thing: context. Where does the feature this question
relates to, live?" The Lists view lives in Web, in the browser, so its rail shows web lists.

Analysis by the recording agent: both questions were answerable from the feature's purpose, where it lives and the
owner's written request. The agent asked instead of answering, then answered with one of those three missing.
Metabrain added a test to directive 21 of agentic-working-with-the-human.md: before asking, answer the question
yourself from the feature's purpose, where it lives, and the owner's written requests; ask only when those leave it
open. The owner accepted the test on 2026-10-25 ("Accepted").

## 2026-10-28: an unreadable report of a documentation sweep

Provenance: the owner, in a metabrain-mvp session (Claude Opus 5.5), chat "Lists Browser UI
design"; Metabrain Beads `metabrain-mvp-28hy` (rules) and `metabrain-mvp-yosb` (post-mortem).

The instances, verbatim from the agent's report:
- "The spec now says Space works this way for any Metatag, including one with fields or a
  composition like #workout."
- "What changed" (a heading over a list of document names).
- "The Ontology: tagging is not `isa`, and the tagging relationship is marked settled."
- "Web feature lists and specification: each reach names the Metatag being tagged, and the old
  per-kind storage is marked to be replaced. The Web requirements separate web page from website."
- "The agents' reading map now sends tagging questions to the guidance."
- "27 open Beads got a comment saying how the model applies"
- "The plan comes to you before any building."
- "The note the hook flagged was my own comment on the documentation item, so it asked for no
  action; I've marked it seen."
- "Your 29 Sep design has four reaches" and "Should section 7.1 of the Ontology stay, containing
  only your two sentences?"

The owner's words, in order: "Your tense is confusing, and obviously not stated to disambiguate.
"Disambiguate" should be a command enshrined in a communication rule. There should also be
instructions to be careful with tense grammar, as you often use strange tense focused on
present-is, making it difficult to understand what was or what is-not-yet or could-be or
planned." "Your heading "What changed" is super confusing. Changed when, why and how? Your list
answers only "what"." "You just defined in passing "web features are a reach" and "specification
is a reach", what the HELL does that mean???" "Who is "the guidance" and why are you sending
questions to him?" "What comment did you add 27 times? You should be quoting this. Why are you
hiding it?" "the pattern that you depersonalize and speak in present tense, instead of speaking
first-person about what you did, are doing or will do. This is a major defect pattern to fix."
His rewrite: "I'll ensure I share a plan for this with you before I build anything." "Add
another word to the bias/pattern: "enigmatic". You make obscure and enigmatic statements. That
counter-guidance can go alongside the guidance on aphorisms; related pattern." "A
positive-negative active statement; "it DID POSITIVELY ask for NONE NEGATIVE action." I hate
this pattern." On "four reaches": "Violating multiple rules, including coined jargon in-situ;
missing definition; using physical metaphor instead of technical clarity; using the wrong word
instead of the right word, straight up." On "section 7.1": "Bad comms, reference without
explanation".

Analysis by the recording agent: the report was written from the agent's context and checked
against a list of banned forms, not read as a person with only the message would read it. Each
instance has one or more readings that the agent never saw, because it knew what it meant.
Metabrain added essentials rules 16 (disambiguate: one reading, its time, its actor) and 17
(quote what you wrote; what, when, why and how); style directives 51 (disambiguate), 52 (time
and status), 53 (first person), 54 (quote what you wrote), 55 (what, when, why, how) and 56
(negation on the verb); and revised 15, 16, 34 and 35 (enigmatic statements beside aphorisms).
The named patterns are in Metabrain's agentic-failure-patterns.md. The directives have not been
copied into this repository's guides, which already differ from Metabrain's by about 300 lines.

## 2026-10-28 — Journal repair discussion: active assumption discovery and communication failures

Source: the owner and the agent in "Fix markdown styling on load", session
`01a1792a-c8c0-7b12-9856-00f1dda4e97a`. Work: Metabrain `metabrain-mvp-6xfk`,
portable inquiry `ops-dpt`. The owner requested proposals and documentation;
application work remained paused for discussion.

### Recorded statements and owner feedback

- Agent: "canonical Journal renderer". Owner: "'Canonical' should be on the
  flagged-words / avoid-word list." "We should also have a banned-words list."
  The agent had used the term for the existing production implementation, then
  treated the label as evidence of correct presentation from its first visible frame.
- Agent: "However, the current source does not show separate full Journal renderers
  for startup and ordinary navigation." Owner: "You decided a constrained scope
  and ruled on it." "It does not even touch my stated concern." The reported
  difference in visible behavior remained unexplained.
- Agent proposed: "When an implementation choice or completion claim depends on an
  unverified premise, the agent must identify that premise..." Owner: "Because it
  presumes the starting condition is that you already know you used assumptions."
  "You MUST use direct questions - the Socratic method - on yourself, to get
  yourself to think and look and act differently." The owner applied this guidance
  to any kind of agent instruction.
- Agent: "That is a scoped finding, not a claim about every possible host
  configuration." Owner: "'host configuration' is a weird term to use here" and
  "It certainly does not describe anything I recognize in context."
- Agent: "The word is a useful review trigger. It is not the whole failure."
  Owner: "positive-is declaration. negative-not declaration." "The concept is
  immensely valuable; not the word itself as a trigger." The agent's first claim
  was unsupported; the ending also implied the word was part of the failure.
  The owner described the agreement as a lie to placate them.
- Agent: "I cannot honestly promise that a wording hook alone would have produced
  a correct repair." Owner: "you directly imply that what I asked for was 'a
  promise', and that I asked for 'a wording hook alone'". The owner said this
  suggested their expectation was stupid and wasted their attention.
- Agent: "An agent hook cannot prevent the running app from painting raw content."
  The owner asked for a direct response and expected the agent to understand the
  implications of guidance improving its investigation and repair work.
- Agent: "The app needs an explicit condition governing when structured
  presentation may become visible." Owner: "Just stop rendering unstyled
  content" and "STOP OVERCOMPLICATING THINGS."
- Agent heading: "Was the statement about intentional source editing filler?"
  Owner: "You put in quoted references without the quotes". The owner required
  analysis of the heading's grammar and possible interpretations. It left unclear
  who was asking, whether it quoted or paraphrased the owner, which statement it
  referenced, and whether "filler" concerned the sentence or the feature.
- Agent: "Simply opening Journal is not an instruction to expose storage syntax.
  Existing actions that explicitly reveal syntax must be identified separately
  when assessing the correction; they do not justify premature exposure during
  loading." Owner: "You confuse 'precise' with 'convoluted and obscure'."

### Proposed guidance and project changes

Before deciding or explaining, ask: "What am I taking for granted? What did the
person actually observe or ask for? What evidence would contradict my explanation?"
Check the answers and change the investigation or conclusion. When interpreting,
writing or reviewing any instruction, ask: "What question would expose a mistake
before I recognize it? What should I do after answering?"

Before adding a caveat or technical distinction, ask: "What question does this
sentence answer? What will it help the person decide or do?" Before agreeing, ask:
"What exact proposition am I agreeing with? What reason supports my answer?"
Before referring to a sentence, ask: "Whose words are these? Have I quoted the exact
text or labelled my paraphrase?" Close with the useful point and check what the
earlier clause made the reader believe.

Plain replacement: "Journal should show a placeholder while it prepares the
content, then display the formatted text, Metatags, and saved items."

Metabrain added the word lists and active self-questioning, revised the existing
communication directives, and catalogued the examples in
`docs/active/agentic-failure-patterns.md` under the Journal repair discussion.
The proposed names and wording are the agent's; the owner's directions and the
agent's claims are attributed above. This inquiry entry records the portable
findings for review alongside that repository's existing guidance.

### Owner correction: grammar, falsifiability and wrong terminology

The owner clarified the grammar of "Was the statement about intentional source
editing filler?" The agent intended "filler" as the predicate describing the
statement. The owner read "intentional source editing filler" as a single topic
after "about", leaving the question apparently unfinished. Quotation marks would
have separated the referenced words from the agent's evaluation. The agent's
earlier analysis missed that attachment ambiguity.

The owner named the contradictory-evidence inquiry "Falsifiability" and proposed
stating aims, premises, plans and their factual basis, challenging assumptions and
claims through Socratic inquiry, then establishing facts, their context and the
course of action. Metabrain's guidance now uses the name and asks what observation
would contradict a claim, followed by an actual search for that evidence.

The owner also rejected the catalogue's explanation of "four reaches". "Reach"
was the wrong word for the picker labelled "Applies to". The agent had mentioned
the glossary without linking or quoting it and had framed the failure as the
owner's unfamiliarity. That framing weakened the complaint. Metabrain corrected
the glossary, quoted and linked its earlier wording, and made its catalogue
prescriptive: agents must look for each pattern in their current reasoning and
writing and apply its correction beyond the original example.

These are follow-up corrections to the existing inquiry. The owner's separate
proposed protocol for maintaining Metabrain Projects remains in discussion before
any Bead is created for it.

## 2026-10-28: console-only access presented as an available feature

In the Metabrain chat "Fix Journal and search issues", Codex delivered optional
search timing logs through an internal browser preference and told the owner to
enter a developer-console command to enable them. The owner had asked for optional
development logging; the app exposed no control or readable timing screen.

The owner rejected that handoff: "NEVER ask the user to enter console commands to
access a feature. ALWAYS instantiate in appropriate UI first and then direct the
user to its exact location and operation."

The error was treating internal technical access as delivered user access. The
repair adds an appropriate in-app control and readable output, verifies the
navigation and operation, and replaces the former console instructions with that
location and operation. The owner's exact rule is now in AGENTS.md under Verify
the promised behavior (`ops-d9u`); Metabrain records its implementation and
acceptance boundaries on `metabrain-mvp-sowa`.

### Owner correction: context was turned into completion authority

The owner supplied the purpose of the Communications & Operations project so
agents would understand and record it. The agent proposed "ten representative
product tasks", a correction allowance, an overhead percentage and stopping
routine expansion. The owner rejected that addition: "You are NOT in any way
responsible for determining completion or thresholds in this area."

Before turning context into a decision, ask: "What authority did the person
actually give me? Which conclusion have I added?" Record purpose as purpose and
keep an agent's proposals attributed. The owner then requested reviewing the
whole conversation and making the proposals concrete. The resulting
[operational review proposal](operational-review-proposal.md) records their
purpose and two-version mechanism and specifies artifacts, questions,
consequences, hook boundaries and implementation checks. It activates no hook.
