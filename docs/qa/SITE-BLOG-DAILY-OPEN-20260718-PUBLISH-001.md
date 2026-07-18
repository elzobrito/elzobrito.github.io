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

- Content commit: `c4f554729c98e248762794c248911e0b3ffa93d7`.
- Push: `main` advanced from `43a9f90` to `c4f5547` on `origin`.
- GitHub Actions workflow: `Deploy static hub to GitHub Pages`, run `29647384099`, conclusion `success`.
- Workflow URL: https://github.com/elzobrito/elzobrito.github.io/actions/runs/29647384099
- Portuguese URL: https://elzobrito.github.io/blog/quando-a-ia-deixa-de-chutar-a-documentacao/
- English URL: https://elzobrito.github.io/en/blog/when-ai-stops-guessing-the-docs/
- Both public URLs returned HTTP 200 with the expected title, self-referencing canonical, reciprocal `pt-BR`/`en` hreflang, and Portuguese `x-default`.
- The workflow emitted the existing non-blocking notice that Node.js 20 actions are forced onto Node.js 24.
