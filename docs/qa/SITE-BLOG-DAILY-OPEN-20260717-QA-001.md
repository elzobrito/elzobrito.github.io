# SITE-BLOG-DAILY-OPEN-20260717-QA-001

## Scope

Editorial and technical review of the new Portuguese and English article pair published for 2026-07-17.

## Primary sources

- Hugging Face, `Security incident disclosure — July 2026`, published 2026-07-16: https://huggingface.co/blog/security-incident-july-2026
- Google, `NotebookLM is now Gemini Notebook`, published 2026-07-16: https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/

Both URLs returned HTTP 200 during QA. Specific claims were checked against these pages. The article preserves Hugging Face's open assessment of partner or customer data impact, distinguishes company-reported evidence, and does not infer undocumented Gemini Notebook sandbox properties.

## Validation

- `npm test`: passed; Astro reported 31 checked files, 0 diagnostics, 91 generated pages, and the public audit reported 102 files with 0 forbidden matches.
- Frontmatter: required fields present; `published` is `2026-07-17`; locales are correct; `featured` is false.
- Translation mapping: `quando-agentes-atacam-e-cadernos-executam` and `when-agents-attack-and-notebooks-execute` point to each other.
- Editorial adaptation: English preserves the argument and evidence without mirroring Portuguese sentence by sentence.
- Source links: both primary URLs returned HTTP 200.
- Public privacy scan: no prohibited process, local-path, governance, or internal-state references after the final wording correction.
- `git diff --check`: passed.

## Decision

Approved for publication.
