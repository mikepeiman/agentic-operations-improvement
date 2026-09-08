# Simulated verification must reproduce platform constraints

## Rule

When a test or verification harness simulates a platform API (browser, OS,
network), it must reproduce the API's REAL constraints, not just its happy
path. Before claiming a behavior "verified", check which platform
restrictions the simulation bypasses — and emulate them (or verify against
the real platform) if they could change the outcome.

## Incident

2026-09-07, metabrain-mvp (Curatio-ZLM). The HTML5 drag-and-drop e2e
dispatched synthetic DragEvents on a constructed DataTransfer, whose
`getData()` works during `dragenter`/`dragover`. A real browser hides the
dragged data during those phases (only `dataTransfer.items` types are
readable; data becomes available at `drop`). The ported MIME dispatch used
`getData` for its type checks, so every real drag was refused at dragenter —
while the e2e kept passing. The reference source even documents this
(modelviewcomunication.js:111-112); the verification gap, not the source,
hid the defect. Found only when the user tested in real Chrome
(IN-20260907T1540-01, metabrain-mvp Bead b7w, fixed in ZLM v0.3.9).

## Checklist for simulated platform verification

- Enumerate the platform's PHASED/stateful APIs (availability of data or
  capabilities changes between phases — e.g. drag data only at drop).
- Emulate restricted phases (stub getData to return empty; omit data), not
  just the unrestricted ones.
- Verify at least one assertion per phase under the restriction.
- When the real platform is reachable (Chrome for Testing + puppeteer),
  prefer driving it over simulating it.
