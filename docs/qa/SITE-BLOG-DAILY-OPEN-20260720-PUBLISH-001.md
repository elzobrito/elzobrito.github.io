# SITE-BLOG-DAILY-OPEN-20260720-PUBLISH-001

## Release scope

- Portuguese post: `a-disputa-da-ia-desceu-para-a-pilha`
- English post: `the-ai-race-moves-down-the-stack`
- Publication branch: `main`
- Commit message: `Publish daily AI briefing 2026-07-20`

## Pre-push evidence

- POST and QA tasks: approved and `done`; PUBLISH task is `in_progress` under `agent-qa`.
- `git fetch origin`: completed.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0`; local HEAD is not behind.
- `npm test`: passed; 97 pages built and 108 public files audited with 0 forbidden matches.
- Three official source URLs returned HTTP 200.
- `git diff --check`: passed.
- Staging is restricted to the two posts, the two QA records, and ESAA artifacts produced by this daily flow.

## Deployment evidence

Pending push, GitHub Pages workflow success, and public HTTP verification.
