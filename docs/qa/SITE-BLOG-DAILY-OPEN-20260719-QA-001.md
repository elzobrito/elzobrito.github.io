# SITE-BLOG-DAILY-OPEN-20260719-QA-001

## Scope

Editorial and technical review of the Portuguese and English article pair for 2026-07-19.

## Primary sources

- Kimi, `Kimi K3 Pricing Explained: Plans and API Costs`, dated 2026-07-18: https://www.kimi.com/resources/kimi-k3-pricing
- Kimi API Platform, current model and price listing: https://platform.kimi.ai/
- Moonshot AI, Kimi K3 launch and model summary, dated 2026-07-16: https://www.moonshot.ai/

The 2026-07-16 launch is used only as clearly dated background. The fresh editorial development is the official access and pricing material published on 2026-07-18. Claims about context limits, multimodality, cache pricing, input pricing, and output pricing were checked against the official pages. Cost examples are direct arithmetic from published per-token rates and are labeled as examples rather than measured workloads.

## Validation

- `npm test`: passed; Astro reported 31 checked files with 0 diagnostics and built 95 pages.
- Public artifact audit: passed; 106 files, 11 required routes, and 0 forbidden matches.
- Frontmatter: all required fields are present; `published` is `2026-07-19`; locales are correct; `featured` is false.
- Translation mapping: `o-preco-real-de-um-milhao-de-tokens` and `the-real-price-of-a-million-tokens` point to each other.
- Editorial adaptation: the English article preserves the thesis and evidence while using its own phrasing and rhythm.
- Public privacy scan of the two new posts: 0 occurrences of the prohibited process, local-path, governance, and internal-state terms.
- Source URLs: all three official pages returned HTTP 200.
- `git diff --check`: passed.

## Decision

Approved for publication.
