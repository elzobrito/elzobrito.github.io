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

- Content commit: `a638cb98dea58f5b79190e4e34655c7834aa5597`.
- Push: `main` advanced from `b0d9eb9` to `a638cb9` on `origin`.
- Workflow: `29749097928`, `Deploy static hub to GitHub Pages`, completed with `success`: https://github.com/elzobrito/elzobrito.github.io/actions/runs/29749097928
- Portuguese URL: HTTP 200, expected title, canonical, English alternate, Portuguese alternate, and `x-default`: https://elzobrito.github.io/blog/a-disputa-da-ia-desceu-para-a-pilha/
- English URL: HTTP 200, expected title, canonical, Portuguese alternate, English alternate, and `x-default`: https://elzobrito.github.io/en/blog/the-ai-race-moves-down-the-stack/
- A trailing space reported during the content commit was corrected under `SITE-BLOG-DAILY-OPEN-20260720-FIX-001`; `npm test` and `git diff --check` passed after the correction. The correction and final governance evidence are included in the final evidence commit.
