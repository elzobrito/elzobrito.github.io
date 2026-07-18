# SITE-BLOG-DAILY-OPEN-20260718-QA-001

## Scope

Editorial and technical review of the Portuguese and English article pair for 2026-07-18.

## Primary sources

- Google Developer Knowledge release notes, `AnswerQuery` generally available, dated 2026-07-17: https://developers.google.com/knowledge/release-notes
- Google Developer Knowledge, `Answer queries with grounded generation`, updated 2026-07-17: https://developers.google.com/knowledge/answer-query
- GitHub Changelog, `Copilot code review: Customization and configurability improvements`, dated 2026-07-17: https://github.blog/changelog/2026-07-17-copilot-code-review-customization-and-configurability-improvements/
- GitHub Changelog, `Repository-level GitHub Copilot usage metrics generally available`, dated 2026-07-17: https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available/

All four source URLs returned HTTP 200. Specific product, endpoint, firewall, runner, instruction-file, and citation claims were checked against the corresponding official pages. The article distinguishes activity metrics from quality outcomes and does not infer accuracy from grounded generation or general availability.

## Validation

- `npm test`: passed; Astro reported 31 checked files with 0 diagnostics, built 93 pages, and the public audit reported 104 files with 0 forbidden matches.
- Existing non-blocking loader warning: duplicate IDs for the 2026-07-17 PT/EN pair appeared during content sync; the build generated one route for each and this run did not alter those files.
- Frontmatter: required fields present; `published` is `2026-07-18`; locales are correct; `featured` is false.
- Translation mapping: `quando-a-ia-deixa-de-chutar-a-documentacao` and `when-ai-stops-guessing-the-docs` point to each other.
- Editorial adaptation: English preserves the thesis and evidence without copying Portuguese sentence structure mechanically.
- Public privacy scan of the two new posts: 0 occurrences of the prohibited process, local-path, governance, and internal-state terms.
- `git diff --check`: passed.

## Decision

Approved for publication.
