---
title: "When AI stops guessing the docs"
description: "Grounded answers, configurable reviews, and repository metrics point toward more verifiable AI development tools."
published: 2026-07-18
locale: en
translation: quando-a-ia-deixa-de-chutar-a-documentacao
tags: ["AI", "Development", "Tools", "Governance"]
featured: false
---

Coding assistants are usually judged by the answer they produce. The most useful developments in this window suggest a different test: where did the answer come from, in what environment was it checked, and what effect did it have on actual work? This is less dramatic than a new model launch, but it matters more when a convincing demo has to become a dependable tool.

Google has stabilized an interface for answering questions from its official developer documentation. On the same day, GitHub gave teams more control over Copilot's review environment and introduced usage reports at repository level. Together, the releases connect three pieces that are often treated separately: evidence, execution, and measurement.

## Documentation becomes a queryable source

On July 17, Google made the Developer Knowledge API's [`AnswerQuery` method generally available](https://developers.google.com/knowledge/release-notes). It accepts a technical question and produces an answer grounded in Google's developer documentation corpus.

The response format is the important part. Google's [method guide](https://developers.google.com/knowledge/answer-query) shows that the answer includes citations mapped to text spans and references carrying the original document's title and URL. The method had previously been in public preview. General availability signals a stable product interface; it does not make every generated answer automatically correct.

For agent builders, this is an alternative to open-web search or a private snapshot of documentation that quietly becomes stale. An assistant can explain how to create a BigQuery dataset while identifying the official passage behind the instruction. Citations do not remove the need for review. They make review practical.

The boundaries still matter. The corpus covers a defined collection of Google domains, and a grounded system can still retrieve an incomplete passage or misread the question. A sound product keeps the answer distinct from its sources, exposes the references, and asks for confirmation before consequential operations.

## Code review gets its own environment

GitHub applied the same move toward verifiability to execution. [Copilot code review now supports a dedicated configuration](https://github.blog/changelog/2026-07-17-copilot-code-review-customization-and-configurability-improvements) at `.github/workflows/copilot-code-review.yml`, allowing a repository to install dependencies, prepare tools, and select runners for review. Instructions are now read from the pull request's head branch, so teams can test them before merging. The reviewer also recognizes files such as `REVIEW.md`, `GEMINI.md`, and `CLAUDE.md`.

This addresses a familiar weakness. Asking an agent to assess tests without supplying the dependencies, compiler, or project conventions is like requesting a mechanical inspection from a photograph. A reproducible setup lets the reviewer consult the working system instead of inferring everything from the diff.

There is a concrete security boundary too. Network access now sits behind a firewall by default and can be configured independently from the coding agent. GitHub notes that this firewall is not currently supported on self-hosted runners. Teams using their own infrastructure should therefore not assume they receive the same isolation as hosted runs.

## Activity is not quality

Also on July 17, the [Copilot metrics API added daily repository-level reports](https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available). Two endpoints, one for organizations and one for enterprises, report pull requests created or merged by the coding agent and reviews performed by Copilot, including suggestion counts by comment type.

Reporting previously stopped at organization and user level. The finer view can reveal where the tool is actually participating in delivery and where a team may need better configuration or support. Yet pull request and comment counts measure activity, not quality. A repository receiving more suggestions is not necessarily safer, faster, or healthier.

Responsible evaluation connects these reports to outcomes the platform does not settle on its own: time to merge, regressions, rework, incidents, and maintainers' experience. The useful question is not “how much AI did we use?” but “under which conditions did it improve an outcome we care about?”

## The next advantage is inspectability

These releases share a quiet thesis. AI development tools mature when they leave evidence that people can inspect: a source that can be opened, an environment that can be reproduced, and activity that can be compared with outcomes.

Better models still matter, but day-to-day trust is built at the edges. A referenced answer beats an eloquent assertion; a review with real tooling beats a guess about a diff; and a contextual metric teaches more than an adoption leaderboard. The next leap may be less about making machines sound certain and more about making correctness cheaper to check.
