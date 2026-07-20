# SITE-BLOG-DAILY-OPEN-20260720-QA-001

## Scope

Editorial and technical review of the Portuguese and English article pair for 2026-07-20.

## Primary sources

- Alibaba Cloud, `Alibaba Cloud Unveils Agent-Native Innovations at WAIC 2026`, dated 2026-07-20: https://www.alibabacloud.com/blog/alibaba-cloud-unveils-agent-native-innovations-at-waic-2026_603377
- Alibaba Cloud PAI, `Create and manage workstations`, updated 2026-07-07: https://www.alibabacloud.com/help/en/pai/create-and-manage-workstations
- Alibaba Cloud PAI, `TokenWorks configuration center`, updated 2026-07-07: https://www.alibabacloud.com/help/en/pai/tokenworks-config-center

The fresh development is the official WAIC announcement published inside the 24-hour editorial window. The two documentation pages are used as current technical context for group boundaries, credentials, routing, and cache behavior. Promotional benchmark claims, shipment figures, and unverified migration-effort claims were excluded. Qwen 3.8-Max-Preview is described only as available on named Alibaba platforms with an announced intention to release weights; the article explicitly states that an open release is not yet complete.

## Validation

- `npm test`: passed; Astro reported 31 checked files with 0 diagnostics and built 97 pages.
- Public artifact audit: passed; 108 files, 11 required routes, and 0 forbidden matches.
- Frontmatter: all required fields are present; `published` is `2026-07-20`; locales are correct; `featured` is false.
- Translation mapping: `a-disputa-da-ia-desceu-para-a-pilha` and `the-ai-race-moves-down-the-stack` point to each other.
- Editorial adaptation: the English article preserves the thesis and evidence while using its own phrasing and rhythm.
- Public privacy scan of the two new posts: 0 occurrences of the prohibited process, local-path, governance, and internal-state terms.
- Source URLs: all three official pages returned HTTP 200.
- Factual reread: product roles and documentation details are supported by the cited sources; unsupported performance, shipment, and migration claims remain excluded.
- `git diff --check`: passed.

## Decision

Ready for formal QA review.
