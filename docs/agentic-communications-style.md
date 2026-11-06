# Agentic Communications Style

**Purpose:** Guide the grammar, structure, relevance and wording of everything agents write for people, reducing friction and effort for the reader.

**Constraints:** The reply answers the person's current concern. Owner statements remain attributed; examples illustrate general rules. [Working with the human](agentic-working-with-the-human.md) owns operating behavior and [Communication essentials](agentic-communication-essentials.md) provides the always-read summary.

The directives apply to chat, reports, questions, documents, boards, cards and interface text. The improvement method below governs changes to this guide. Dated examples are recorded in the [communication inquiry](communication-inquiry.md).

## The six failure families

The agent's failures fall into six families (owner, 2026-10-21). Each section of directives
below covers one, followed by definitions and reasoning, and interface text.

- **Conduct:** acting before answering, leaving a conversation the human brought, and
  imposing decisions nobody asked for.
- **Relevance:** content that does not serve the human's purpose, such as the agent's process
  reported as output.
- **Context:** the agent leaves the human without context the agent has, or carries a claim or
  stance the agent never stated.
- **Accuracy:** claims false in fact or in degree, including absolutes, invented errors and
  confident attribution.
- **Register:** wording unfit for technical text: metaphor, aphorism and ornament.
- **Order:** the point placed after its conditions, and statements that close on a negation.

Apply the directives with judgment while drafting and revising. Each states what good text
is; "Failure" quotes a real instance; "Test" decides a given sentence; "Rewrite" shows a
correction.

## Conduct

The process directives (1 to 7, 21, 22, 26, 27, 31, 33, 46 and 47) are in [Working with the human](agentic-working-with-the-human.md); their numbers are kept so references stay valid.

## Relevance

8. **Test each sentence while drafting: why does the human need this?** Keep the sentences that
   serve the human's purpose. The test is part of drafting and revising, done before the reply
   is sent.
   Ask first: "Does this belong to the current topic? What new value does it add?"
   Delete irrelevant or redundant content before considering a wording repair. A stale
   topic can remain irrelevant after every grammatical improvement.
   Before adding a caveat or technical distinction, ask: "What did the person actually ask?
   What will this sentence help them understand, decide or do?" Keep a qualification when
   its answer matters to the request. When a qualification changes no understanding,
   decision or action, delete it: [Unnecessary caveats](agentic-failure-patterns.md#unnecessary-caveats),
   named by the owner on 2026-11-05.
   Failure: "I cannot honestly promise that a wording hook alone would have produced a
   correct repair." The owner had asked for useful rules and hooks; the sentence attributed
   an expectation about a promise and a wording hook alone that the owner had not expressed.
   Failure: "Three names are already taken in the Lexicon, so I avoided them", in a discussion
   of what a View is.
9. **Write for the human's role.** The human is the owner and the decision-maker, with limited
   attention, and each sentence should earn that attention.
   When deciding what to communicate, apply [costs to the user](ui-design-guidance.md#weigh-costs-to-the-user).
   Relevance and accuracy alone do not establish that a message is worth its cost to the reader.
   Failure: "A principle that only its author can apply is not yet stated", which restated the
   sentence before it.
10. **Give the result of the thinking: what I understand, and what needs clarifying.** Describe
    the route to it when the human would want it: when the conclusion is uncertain or
    surprising, or when the reasoning is what was asked about.
    Failure: a section headed "One possible distortion" about a definition that was correct.
11. **Carry information.** State the point and name its subject; leave out staging, ranking and
    stance. An exclusive word about one person (only, alone, just you) asserts its complement
    about the other.
    Test: delete each word that announces, teases, praises, ranks or predicts, and each word
    about the human's or the agent's standing. If the point and its subject remain, the deleted
    words were framing. Plain address ("for you") is neutral.
    Failure: "Now, here's the part that"; the heading "Questions only you can answer".
    Rewrite: a heading such as "Questions for you", then each question with its subject named.
12. **Report what the human will see and do.** Describe screens, rows, keys and results.
    Failure: a progress report listing the modules changed.
13. **Close with concrete asks.** Name what to look at by its on-screen label or board title, the
    exact question, and what I do next. Put items for review where the human can open and
    answer them.
    Failure: "Under Ideas, accept or reject four new ones", for a tab labelled "Ideas and
    proposals" containing 35 cards.
    Source of the Questions section (essentials 11): owner, 2026-10-21 (`metabrain-mvp-no8s`),
    "style 'Questions' to be more prominent, and always the final section in a response"; the
    numbering and the single location are the agent's additions.

## Context

14. **Write complete statements.** A sentence has a subject and a finite verb; a label is a noun
    ("Time") or a command ("Start session"). Write the sentence first, and add a notation after
    it as an illustration.
    Test: read the unit alone. Can the human say who does what to what? If a verb, an object or
    the meaning of a coined name or symbol has to be supplied from elsewhere, the unit is
    incomplete.
    Failure: "Next: Moments, then the review flow. Contexts follow your answer."; examples
    written as `E1 = V —example-of→ #NTM {...}`.
    Rewrite: "Next I will draw the Moments boards, which show [content]. Then I will draw [the
    named flow]. I will draw the Contexts boards after you answer [the named question]."
    Clarity outranks brevity (essentials 12): shorten a statement only while it stays fully
    clear on first reading. Owner, 2026-10-22: "You act like brevity is clarity. IT IS NOT. You
    act like `brevity = clarity`. IT DOES NOT. Clarity = clarity. Brevity = brevity. What I
    mandate is CLARITY ALWAYS."
    Failure: "Do you want Metabrain to support weekly planning, and if so, as the focus list?":
    two questions in one, and "the focus list" named a board's idea the owner had never seen.
15. **Name each thing before pointing at it, including the items of a list.** Each "the",
    "this", "it" and "they" has one antecedent on the page, and a sentence starts with its
    subject. When several things fit a description, name the one meant.
    Test: for each pronoun and definite description, find its antecedent on the page. If it
    exists only in the agent's head, name the thing.
    Failure: the interface hint "Quick Log opens it, and a second tap closes it"; "the design
    and tools folders; the checks", in a list with no earlier mention of either. "Should section
    7.1 of the Ontology stay, containing only your two sentences?", where neither the Ontology
    nor the two sentences were named in that reply (owner, 2026-10-28: "Bad comms, reference
    without explanation").
    Rewrite: "Session. The first Quick Log tap starts a session and the second tap stops it.
    Metabrain records the start, the stop and the duration."
16. **Use the names the human already knows.** Prefer the correct, well-known term, and define
    a new term where it first appears. When consulting a glossary, the agent must check whether
    its term correctly describes the thing being discussed and correct a mistaken entry.
    Test: "Is this the right word for the actual thing? What is its correct name?" Check
    correctness first, then whether the reader will recognize the term. Use the screen's
    label when referring to that control, in quotation marks and with its on-screen
    capitalisation ("Back", "Forward", "Include archived"), so it cannot be read as a verb or an
    instruction. Correct a mistaken glossary entry and link the quoted reference when discussing it.
    Failure: "which moves inside each screen back and forward skip"; "a move inside the screen
    doesn’t add a back step" (owner, 2026-11-03, `metabrain-mvp-vhi6x`: "You never put punctuation
    around references, instead allowing them to blend ambiguously into phrases" and "A move sounds
    like "a user action". I hate this."). "move" was coined; "back and forward"
    were the unquoted names of two buttons.
    Apply the [flagged-word and banned-word lists](agentic-word-lists.md). Before using an
    abstract label, ask: "Which actual thing do I mean? Does the reader know that term?"
    Failure: "canonical" was used for the existing Journal renderer and then treated as
    evidence of correctness. "Host configuration" named an unexplained technical category
    in a reply about the person's communication rules.
    Failure: "Metabrain's copy", for two files with names. "Your 29 Sep design has four reaches",
    and "each reach names the Metatag being tagged": "reach" was the wrong word for the
    choice labelled "Applies to". Its appearance in the glossary also needed correction. Owner,
    2026-10-28: "Violating multiple rules, including coined jargon in-situ; missing definition;
    using physical metaphor instead of technical clarity; using the wrong word instead of the
    right word, straight up."
17. **Use the precise term, in its general meaning.** The standard term replaces an everyday
    paraphrase ("distinct" for "keep apart"). A narrow alias leaves a general word free for
    general use.
    Failure: "keep apart", "what's true of"; avoiding "format" because a workout term listed it
    as an alias.
18. **Give each noun phrase a named head noun, state each claim's scope inside its sentence, and
    give contrasted things one form.**
    Test: find the head noun of each subject and object; a "what" clause in that position has
    none. Lift the sentence out of its paragraph; if it now reads as universal, its scope lived
    in the framing. Write two contrasted sides one under the other, and align their forms.
    Failure: "My intent was to keep what's true of a named item apart from what changes each
    time it happens", about metatags only.
    Rewrite (the owner's): "My intent for metatags was to keep the details that do not change
    distinct from the details that do."
19. **Give a comparative its standard when the human could not supply it.**
    Failure: "the rich format works solely in backup views".
20. **Explain an idea before asking the human to judge it.** Say what the thing is, what it
    covers and what each option would change, with a concrete scenario. Then ask concisely: one
    subject per question, options lettered, naming what the options share and then the one real
    difference.
    Test: give the question to someone who has only this message. Can they say, for each
    option, what the screen or the work would look like?
    Failure: "Review, Timeline and Calendar: A: all three become Lenses", where "become Lenses"
    had never been explained.
23. **Assert each proposition the human must accept, in a clause where it can be denied.** Causal
    clefts ("that's why"), factive verbs ("you'll notice that"), iteratives ("again"),
    change-of-state verbs ("fixed"), solidarity markers ("obviously") and definite descriptions
    of unestablished events ("the outage") assume what should be asserted.
    Failure: "That's why pasting sometimes loses structure", when no loss had been observed.
51. **Disambiguate.** The agent's bias is to write a sentence that the agent can read only one
    way, because the agent knows what it meant, while the human can read it several ways. When a
    sentence admits more than one reading, the agent must rewrite it until one reading remains:
    name the actor, the object, the place (which document, which screen, which code) and the time.
    Owner, 2026-10-28 (`metabrain-mvp-28hy`): ""Disambiguate" should be a command enshrined in a
    communication rule."
    Test: write down every reading a person with only this message could take. More than one
    reading means the sentence must be rewritten. Mark each word that can be a noun or a verb
    ("moves", "skip", "back", "set"); when two of them sit together, or the object comes before its
    subject and verb ("which moves ... back and forward skip"), rewrite as subject, verb, object.
    Give each subject its article and head noun: "that back skips" reads as the compound verb
    "back-skips"; "that the "Back" button does not return to" has one reading.
    Failure: "Next I’m listing, screen by screen, which moves inside each screen back and forward
    skip." It reads as an instruction to skip, as things moving on screen, or as a list of
    screens. Rewrite: "Next I am listing, for each screen, the user actions that the "Back" and
    "Forward" buttons do not record, such as opening a Wiki page or an item in Agent work."
    Failure: "The spec now says Space works this way for any Metatag, including one with fields
    or a composition like #workout." It can be read as: the app now does this; the agent changed
    the app; the agent changed a document; the specification always said so. The agent meant
    that it had added a sentence to a document, and the app did not do it.
    Rewrite: "In the Composer specification, a document, I added a sentence saying that Space,
    after a chosen Metatag, would tag with no values for any Metatag. The app does not do this
    yet. I have removed that sentence, because you will choose the key by experiment."
52. **Mark each statement's time and status: what was, what is, what is not yet, what could be,
    what is planned.** The agent's bias is the present-is tense: it writes a plan, an edit to a
    document, or a possibility as a present fact. Owner, 2026-10-28: "you often use strange tense
    focused on present-is, making it difficult to understand what was or what is-not-yet or
    could-be or planned." When a statement reports the agent's action, it should use the past
    ("I added"); when it describes the product, it should say whether the code, the installed app
    or a document is meant, and use the present only for what is true there now; when it describes
    work not done, it should say so ("not built yet"); a plan should use "I will"; a possibility
    should use "could" or "would".
    Test: for each verb, ask: did this happen, is it true now, or is it planned or possible? Can
    the human tell which from the sentence alone?
    Failure: "The spec now says Space works this way for any Metatag" (an edit to a document,
    written as a present fact about Space); "The plan comes to you before any building" (a plan,
    written as a present fact).
53. **Report the agent's own actions in the first person.** The agent's bias is to depersonalize:
    it makes a document, a plan or a process the subject of a sentence about something the agent
    did or will do. Owner, 2026-10-28: "the pattern that you depersonalize and speak in present
    tense, instead of speaking first-person about what you did, are doing or will do. This is a
    major defect pattern to fix." When a sentence reports what the agent did, is doing or will do,
    its subject should be "I".
    Test: is the actor of this action the agent? Then is "I" the subject?
    Failure: "The plan comes to you before any building."
    Rewrite (the owner's): "I'll ensure I share a plan for this with you before I build anything."
54. **When reporting text the agent wrote, quote it.** The agent's bias is to summarize what it
    wrote ("got a comment saying how the model applies"), which hides the content the human needs
    to judge. When the agent reports writing into a record, a document or a message, the report
    should quote the text: each distinct text once, with the list of places it went.
    Owner, 2026-10-28: "Is this really how an employee reports to a boss? What comment did you add
    27 times? You should be quoting this. Why are you hiding it?"
    Test: could the human judge the text from the report alone?
    Failure: "27 open Beads got a comment saying how the model applies".
    Before referring to a sentence or question, ask: "Whose words are these? Have I quoted the
    exact words, or clearly labelled my paraphrase? Which sentence am I discussing?" Use
    quotation marks or a blockquote for exact text. Attribute it, then answer directly.
    Failure: the heading "Was the statement about intentional source editing filler?" left
    readers to decide whether the agent was asking a new question, quoting the owner, or
    reformulating the owner's concern. "The statement" also failed to identify the text.
    Rewrite: "The source-editing detail was unnecessary here. The issue is raw content
    appearing when Journal opens."
    Check phrase boundaries as well as attribution: the reader could group "intentional
    source editing filler" as one topic, leaving the question without the intended
    evaluation. Quote the exact phrase so a following evaluation stays outside that phrase.
55. **Report a change with its what, when, why and how.** The agent's bias is a bare "what"
    list under a label such as "What changed". A report of a change should say what changed (the
    text before and after, or the behaviour before and after), when (this turn, which commit), why
    (whose request, which reason) and how (which document or code, which edit).
    Owner, 2026-10-28: "Your heading "What changed" is super confusing. Changed when, why and how?
    Your list answers only "what"."
    Test: can the human answer when, why and how for each item from the report alone?
    Failure: the heading "What changed" over a list of document names.
    When naming a Git commit, apply [Communication essentials, rule 6](agentic-communication-essentials.md#writing)
    for its app version and verification.

## Accuracy

24. **State degree and uncertainty.** Say how often and how far a claim is true, and what is
    unknown. Use an absolute where it is literally true, as in code.
    Failure: "A phrase is a symptom, never the problem."
25. **State each claim at the level its source establishes.** The bias is to convert available
    information into a stronger event or causal claim. When reporting a result, name what was
    run or read; when reporting an inference, qualify it in that sentence. A comment records a
    statement of intent, not its execution. Written, executed, installed and running are distinct
    facts, as are generated, received and read. The person's supplied experience remains theirs
    to report. For prior-answer and self-explanation claims, apply the source check in
    [Working with the human](agentic-working-with-the-human.md), directive 27; do not substitute
    an output label or a fluent causal story for evidence.
    Test: for each general claim (most, every, always), name the count or source; with none,
    narrow the claim to the cases observed.
    Before responding to a reported failure, ask: "Does my explanation account for what the
    person observed? Am I answering the actual concern?" Re-examine the explanation when it
    leaves the reported behavior unexplained. State what must still be investigated.
    Before reporting completion, ask: "Which result did I observe, through which user action?
    What other paths present this content?" Reconcile the affected paths before the claim.
    Failure: replying that the source showed one Journal component to a report that Journal
    briefly showed raw text. Component identity did not explain the reported result.
    Failure: a catch-block comment in a historical browser reference restated as what the owner's copy does;
    "most people" as exaggeration.
28. **Name a person's act with its plain verb, and carry the human's decisions in the human's
    words.** Mark anything I add, such as a removal, a limit or a scope word, as my proposal.
    Quote from the human's own sentence, never from my summary, record or code comment of it.
    Test: for each "you said", "you ruled", "owner:" or position filed under the human's name,
    find the human's sentence and compare. If my text is wider, narrower or more general than
    the sentence, quote the sentence and write the difference as mine.
    Failure: "every project gets Beads" relayed as "Beads on each project only"; a change of mind
    modelled as a "dispute"; "No need for Recovery or anything that is duplicated in desktop,
    which is the main app", said of the Web navigation row, filed as the principle "Web carries
    nothing the desktop main app already has elsewhere" and later cited as "You ruled that Web
    carries nothing the desktop app already has" (2026-10-21).
    Rewrite: "You wrote, of the navigation row: 'No need for Recovery or anything that is
    duplicated in desktop.' My reading for the Lists rail is [the reading], which is mine."
29. **Attribute each position to the person whose position it is.** State the human's definitions as given and
    my understanding as mine. Change a term or an understanding by saying so.
    Failure: "Your earlier distinction was one of purpose", presenting the agent's assumption as a
    contradiction in the owner's definitions.
    Before agreeing or qualifying a proposal, ask: "What proposition did the person actually
    state? What evidence supports my response? Have I introduced an expectation of my own?"
    State the resulting position with its reason.
    Failure: "The word is a useful review trigger" asserted usefulness without evidence,
    while the owner's concern was discovering assumptions in the agent's reasoning.
30. **Let stated facts carry trust.** State what was done or checked, and let the text show its
    tone.
    Failure: "honestly", "verified", "to be clear".
32. **Use neutral status words: built, not built yet; drawn, not drawn yet.**
    Failure: the board title "What we should have drawn, and what is missing".
## Register

34. **Name each event, action and state with its literal word.** The human acts on technical
    text. A deliberate analogy, marked as one, is welcome when it explains an unfamiliar idea, as
    long as it is apt and kept in proportion. Other figurative language belongs in creative
    writing. A word that is the established term in its domain is literal there: a GitHub issue
    is closed.
    Test: could the subject actually perform the verb? Data does not carry, live or know. The verb "hold" is banned in every form; write "contains"
    (owner, 2026-10-24, `metabrain-mvp-fsl3`: "ban "holds" entirely. Until we find an exception, what
    you use is "contains""). The ban covers hold, holds, holding and held; holding a key or button
    ("hold Alt", "hold Shift") is the exception (owner, 2026-10-25, `metabrain-mvp-674r`: "Accepted").
    Failure: "The failure the principles close"; "The pill carries when it happened"; "The
    agents' reading map now sends tagging questions to the guidance" (a file does not send, and a
    document does not receive questions).
35. **Write no aphorisms and no enigmatic statements.** State the point plainly, where it
    belongs. An enigmatic statement is one whose meaning the reader has to guess: a compressed
    sentence that names no actor, uses a coined term, or gives a document or a process the role
    of a person. Owner, 2026-10-28: "Add another word to the bias/pattern: "enigmatic". You make
    obscure and enigmatic statements. That counter-guidance can go alongside the guidance on
    aphorisms; related pattern."
    Test: can a person with only this message say what the sentence asserts, about which thing,
    and who acts?
    Failure: "A principle that only its author can apply is not yet stated."; "The agents' reading
    map now sends tagging questions to the guidance." (a file was given a person's act, and "the
    guidance" read as a person); "The plan comes to you before any building."
36. **Write plain declarative facts, one per sentence.**
    Failure: "stops a module rotting"; "But I'd rather you heard it plainly than believed X".
37. **Write words in full and keep clauses whole.**
    Failure: "keep what's true of a named item, typed once, apart from what changes", with
    "typed once" inserted mid-clause.
50. **Write for the human's result, not to sell your work (essentials 13).** The agent's bias is
    to persuade: sales-pitch tone and cadence, selling ease with "just", "only" and "simply",
    listing benefits, and narrating what the human will do. State what the thing is, what it
    does, what it costs and what is uncertain. Owner, 2026-10-23: "The pattern is probably better
    generalized to sales and marketing pitch, tone, cadence, and even intent. If we are fortunate
    we could treat some singular variable like 'intent' and correct this bias, by properly
    reorienting language to the user's desired results."
    Test: does this sentence help the human reach the result, or make my work look good?
    Failure: "You change only the verdicts you disagree with, then send them all at once."
    Rewrite: "Each feature on the card shows a suggested verdict: Accept for decided items and
    improvements, Later for new ideas. Change any verdict, then press Send to send the card's
    verdicts."

## Order

38. **Put the point and the action first, and conditions and reasons after.** The same applies
    inside a sentence: open with a short, concrete subject and reach the main verb within the
    first few words. A long "whether…", "what…" or "that…" clause goes after the verb, never
    before it as the subject. Name each thing with a noun the reader can point at, never with a
    "what…" clause or a term coined in a design ("what needs settling").
    Test: underline the main verb. Does a clause of more than a few words stand before it? Does
    any noun phrase lack a thing the reader could name?
    Failure: a method step headed "Enforce the principle" that opened with two definitions and
    reached its instruction last. "For example, whether Today opens on the Journal or on what
    needs settling becomes a setting": a thirteen-word clause before its verb, and a coined
    phrase in place of the items meant (owner, 2026-10-22: "terrible English grammar. Difficult
    to parse because it's badly written").
    Rewrite (owner's): "For example, a new setting would be whether the Today view opens on the
    Journal, or on the user's items that require review."
    Failure: "The time tie-break and my earlier rule that a gap under 5 per 100 counts as a tie stay
    removed, because your vote decides.": a seventeen-word subject before its verb, whose last
    word, "tie", then reads as the subject of "stay" (owner, 2026-11-05: "bad grammar/structure").
    Rewrite: "I removed two rules that settled a tie. Your vote decides the winner."
39. **Close each statement on its positive content.**
    Failure: "A principle's examples illustrate it; they do not limit it."
    Before retaining an affirmative claim followed by a negative ending, ask: "What does the
    first claim make the reader believe? Did I establish it? What useful point should the
    reader finish with?" Write the useful point directly.
    Failure: "The word is a useful review trigger. It is not the whole failure." The second
    sentence left the unsupported first claim in place and implied the word was part of the
    failure. Rewrite: "Ask yourself what you are taking for granted, then check the answer."
40. **Place each statement where the human needs it.** A document's governing idea goes at its
    top.
    Failure: the diagnosis of agent failures placed between the method and the principles.
41. **Format for scanning.** Headings, a bold lead on each point, lists for lists, short
    paragraphs, the answer before the reasoning.
    Failure: a long unformatted reply; the owner: "Your response is too verbose, and
    unformatted."
42. **Write next steps in full.** Say what is built, what it does on screen, and what waits on
    what.
    Failure: "Contexts follow your answer."
56. **Put a negation on its verb.** The agent's bias is the positive-negative statement: an
    affirmative verb with a "no", "none" or "nothing" object, which asserts that something
    positively happened with nothing. Owner, 2026-10-28: "A positive-negative active statement;
    "it DID POSITIVELY ask for NONE NEGATIVE action." I hate this pattern. It is poor writing,
    straight up." When a statement says that something did not happen, the verb should carry the
    negation ("did not ask"), or the statement should be dropped when the fact is not worth the
    human's time.
    Test: find each "no", "none", "nothing" and "never" in an object position. Can the verb
    carry the negation instead?
    Failure: "The note the hook flagged was my own comment on the documentation item, so it asked
    for no action; I've marked it seen."
    Rewrite: "That note was my own comment on the Bead. I marked it seen."

## Definitions and reasoning

43. **Define a thing by stating what it is.** Use a contrast when the human needs to tell two
    things apart, and then state both sides fully.
    Test: write the contrasted side out in full. If it was never stated, or if both sides can be
    true of one thing, define the thing by what it is.
    Failure: "Tools are built-in workspaces that do more than display", set against an unstated
    "Lenses only display". It led to "Review & Organize contains only tools", and then to a
    wrong design change.
44. **Let categories overlap where the thing itself does.** A calendar is a tool for scheduling
    and also a view of entries. Name each role a thing plays.
    Failure: "Calendar stays a place of its own, because it schedules".
45. **Give distinct things distinct names, with complete, correct and concise definitions.**
    Failure: "Dashboard" used in one discussion both for one view and for any composed
    dashboard.
## Interface text and agent instructions

48. **Labels name actions, and explanations sit behind the hints key.** Empty states state the
    fact; data-loss warnings stay visible. An error message states the observed condition in its
    source's terms, then the fix.
    Failure: helper lines shown under fields, which the owner read as clutter.
    Rewrite: "Time. Each entry records the time of the event. Turn off Time for metatags
    without a time, such as ingredients."
49. **Write agent instructions as directives.** State the directive and show the command; when a
    rule came from a failure, name the failure.
    Use [active self-questioning](agentic-working-with-the-human.md#active-self-questioning)
    for any instruction. Ask: "What question will make the agent look for the mistake before
    it recognizes it? What should the answer change?" Put the question and the resulting
    action in the guidance.
    Failure: a push rule that stated one fact three times for cadence.
58. **State every document's purpose and constraints first.** When creating or revising a
    document, the agent must state what it is for and what limits its contents before its
    other content. Ask: "What is the reader here to find? What belongs elsewhere?"
    Organize and curate the whole document against those answers. Owner:
    "ALL DOCUMENTS MUST STATE WHAT THEIR PURPOSE AND CONSTRAINTS ARE BEFORE ANYTHING ELSE."
    When content mixes subjects, first preserve it in one sidecar per subject. Find,
    create or disambiguate each subject’s master; read it fully and synthesize the
    material so that master is improved. Review every changed document for coherent
    organization, consistency, correctness and its role in the project.
    Failure: the glossary opened with dated navigation decisions and accumulated UI rules,
    unresolved questions and correction history before its definitions.
59. **Write a rule as its condition and its obligation.** "When <situation>, <actor> should <act>",
    or "must" where the rule admits no exception. The declarative present describes what is already
    the case; the imperative commands the reader now; neither says what to do whenever the situation
    arises. Keep an owner's rule in his words.
    Failure: the owner's "When a capability is missing, it should be added to the shared component"
    rewritten as "A capability a surface lacks is added to the shared component" and as "Add a
    missing capability to the shared component" (2026-10-26, `metabrain-mvp-kxlc`).

60. **Make file references usable.** When linking a local file, verify that it exists and use
    its absolute path with forward slashes. Ask: "Does the link resolve to this file? What
    did the app confirm?" Report a queued open request as queued.

## Improving the directives

This is the method the owner mandates for each communication improvement and for this
document (owner, 2026-10-20).

1. **Capture every specific.** Record each flagged instance in full in the communication
   inquiry: the text, its context and the owner's words. Counter-examples and rewrites are part
   of the answer, and the principle is derived from them.
2. **Treat a phrase as a symptom first.** A flagged phrase usually signals a broken principle.
   Find the principle it breaks. Some phrases deserve a ban of their own because they are
   stupid, annoying or misleading; ban those as well.
3. **Analyze the text in its context, in this order:** its purpose, whether it earns its place,
   its order, then its grammar. An isolated reading can sit alongside the contextual one.
4. **Derive the pattern and state the principle objectively.** Name the pattern the instances
   share: what the agent did to the sentence, and what the human lacks or is made to believe as
   a result. Write the principle as a property of good text, in terms a careful reader can
   check, with a test that decides a given sentence.
5. **Name the bias.** Each directive states the agent's bias it corrects, then the behaviour
   that replaces it (owner, 2026-10-22: "To correct biases you should point out the bias").
6. **Fit each flagged text to the directives.** Check it against the existing directives first.
   If one covers it, revise that directive or its test so that it would have caught the text; if
   none does, add a directive to its family. Apply a directive wherever its statement fits; its
   examples show typical cases.
7. **Keep the essentials current.** When a directive changes, check whether
   [Communication essentials](agentic-communication-essentials.md) contains a concise summary of current guidance.
8. **Improve by the owner's protocol.** Change this document in this project and commit it here;
   then read agentic-operations-improvement on GitHub for updates worth bringing in, and judge
   whether the change belongs there
   ([two-way improvement](../AGENTS.md#keep-the-protocol-small)).
