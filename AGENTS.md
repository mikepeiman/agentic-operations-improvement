# Agent operations

## Work from the outcome

Follow the user's current intent and accepted product decisions. Code and runtime
show what exists; they do not decide what should exist. Resolve consequential
product ambiguity with the owner; make routine engineering choices yourself.
Complete authorized work and its prerequisites without repeated permission.
Keep unrelated work intact. A Git branch does not authorize another checkout.
Obtain missing authority before destructive operations, deployment, or external
publication beyond the configured Git delivery workflow.

## Track with Beads

Use Beads (`bd`) by default. Before implementation, find or create one Bead for
the feature, bug, or independently actionable task, then claim it. Reuse that
Bead across turns. Capture ideas and discovered issues without silently adding
them to the current scope. Ordinary questions need no ticket.

Start with the user's use case: who needs what, how they reach it, and the
observable result. Record acceptance examples, relevant failure/recovery cases,
constraints, and dependencies before choosing components. Use an epic only when
several independently deliverable features need grouping; use child tasks only
when useful for separate execution. Internal work names the capability it enables.

Keep intent, decisions, progress, evidence, and the next action in the Bead so
another agent can resume without the chat. Put durable product meaning in its
existing contract and link it; avoid parallel intake logs, plans, and handoffs.
Close when acceptance is met; otherwise record what remains and any blocker.
Record explicit owner acceptance or withdrawal with their words and artifact
identity; passing tests alone is not owner acceptance.

When Beads needs setup or a command is unclear, consult `bd --help` and the
project's setup instructions. If unavailable, preserve the work in one temporary
note, report the problem, continue safe work, and reconcile into Beads on recovery.

## Read and build selectively

Start with the request, active Bead, and relevant project instructions. Search
before reading large documents. Load additional material for a specific unanswered
question; use history for provenance. Reuse verified context until changes or
uncertainty justify refreshing it. Get commands from live project configuration.

Build the smallest coherent change that completes the use case through its
intended interface. Reuse the operation's existing implementation across callers.
When matching a named reference, inspect its relevant behavior and platform
constraints; obtain owner agreement for meaningful deviations.

For data changes, identify authoritative inputs, preserve recoverability, and
verify ordering, retries, partial failure, and reconciliation where relevant.
Surface rejected input and conflicts that change meaning. Keep secrets out of
tracked files and diagnostics.

## Verify the promised behavior

Choose checks from acceptance examples. Run focused checks while iterating and
the relevant project gates before delivery. Exercise the boundary being claimed:
the actual interface, persistence after reopen, or migration from older data.
Mocks prove their modeled behavior; validate platform restrictions they bypass.

For bugs, obtain decisive evidence, fix the cause, and add a regression check
when practical. If a check is wrong, correct it with the reason; preserve coverage
of the required behavior. Repeated failed fixes call for a new observation.
For asynchronous or owner-tested behavior, provide enough diagnostics to identify
the build, action, decision, and result. State material unverified boundaries.

## Commit and deliver every changing turn

Inspect Git status, branch, upstream, and staged changes before editing and before
committing. Coordinate overlapping work; stage only the task's changes and inspect
the staged diff. Commit each coherent task, issue, or feature outcome and each
turn that changes repository or tracked work state. Checkpoint unfinished work
with its remaining state in the Bead. Read-only turns need no empty commit.

Use a short imperative subject with the Bead ID; explain why when useful. Push
to the configured upstream before reporting delivery. Follow the project's branch
policy; absent one, use its existing working branch and upstream. Inspect upstream
changes before integrating; preserve others' work and history. A rejected push
requires reconciliation, not force. Report failed or unavailable delivery explicitly.
Persist and sync Beads through its configured storage workflow as well as Git.

## Communicate clearly

Answer directly in plain language. Say each point once; omit rhetorical padding,
repeated context, and empty queues. Scale detail to the request. Give brief progress
updates with findings and next steps. Distinguish observed fact, inference, and
unverified boundaries; give evidence for material claims. End with what changed,
why, checks and remaining limits, and the commit or usable artifact location.

## Keep the protocol small

Correct affected documentation in the change that makes it untrue. Keep one owner
per meaning. Record incidents in the relevant Bead; prefer a regression test or
tool fix to a new rule. Add instructions only for a recurring failure they can
prevent, replacing overlap. Keep project-specific facts and optional tool setup
outside this shared protocol; load them when the task needs them.
