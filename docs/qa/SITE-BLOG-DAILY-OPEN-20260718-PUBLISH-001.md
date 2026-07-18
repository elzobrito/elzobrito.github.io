# SITE-BLOG-DAILY-OPEN-20260718-PUBLISH-001

## Release scope

- Portuguese post: `quando-a-ia-deixa-de-chutar-a-documentacao`
- English post: `when-ai-stops-guessing-the-docs`
- Publication branch: `main`
- Commit message: `Publish daily AI briefing 2026-07-18`

## Pre-push evidence

- `git fetch origin`: completed.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0`; local HEAD was not behind.
- `npm test`: passed; 93 pages built and 104 public files audited with 0 forbidden matches.
- `git diff --check`: passed.
- Staging is restricted to the two posts, the two QA records, and ESAA artifacts produced by this daily flow.

## Deployment evidence

To be recorded after the scoped commit, push, Pages workflow, and public HTTP verification.
