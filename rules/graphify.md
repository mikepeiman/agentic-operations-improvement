---
date created: 2026-09-01
author: agent, at Mike's direction
derived from: metabrain-mvp Graphify workflow
supersedes: nothing
---

# Graphify

Applies to any project containing `graphify-out/`.

1. Run `graphify update .` before committing a code change.
2. Stage `graphify-out/` with that commit.
3. Never commit `graphify-out/` alone.
4. The post-commit hook rebuilds in the background. Fold the residue into the
   next commit. Do not report it.

Query the graph before a broad filesystem search:

```bash
graphify query "<question>"
graphify explain "<symbol>"
graphify path "<source>" "<target>"
graphify affected "<changed-symbol>" --depth 2
```

Rebuild cleanly when the graph looks wrong: `graphify update . --force`.

Completion criterion: the code commit contains its current graph output and no
standalone graph-only commit or unreported post-commit residue is delivered.
