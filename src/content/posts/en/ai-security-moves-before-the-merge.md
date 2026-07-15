---
title: "AI security moves before the merge"
description: "New GitHub reviews bring contextual analysis into active coding and pull requests, expanding coverage without replacing deterministic checks."
published: 2026-07-15
locale: en
translation: seguranca-por-ia-chega-antes-do-merge
tags: ["AI", "Security", "Development", "Tools"]
featured: false
---

Security tools often arrive at one of two awkward moments: late, after a change has become a large pull request, or far away, in a dashboard competing with everyday development work. Two GitHub updates published yesterday try to move that review closer to the decision that introduces the risk.

One examines work-in-progress changes on demand. The other adds artificial intelligence detections directly to pull-request code scanning. Together, they point toward a layered design: contextual analysis to widen the field of view, deterministic checks for known rules, and human judgment to decide what should actually block a release.

## Reviewing code while it is still being written

The [`/security-review` command is now in public preview in the GitHub Copilot app](https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app/). It examines changes in the current workstream and returns findings scored by severity and confidence, along with suggestions that can be applied and reverified without leaving the app.

The feature targets common, high-impact vulnerability classes such as injection, cross-site scripting (XSS), insecure data handling, path traversal, and weak cryptography. The same AI-driven review was already available in Copilot CLI, the command-line interface. The change brings it into the visual environment where a developer follows and modifies an active session.

Location makes a practical difference. A flaw found while the intent behind a change is still fresh is usually cheaper to investigate than the same flaw discovered after review, integration, and testing. It also shortens the loop: change the code, review it, then check it again.

Convenience does not turn a result into proof, however. GitHub describes high-confidence findings, not a completeness guarantee. A reasonable use is to run the command before opening a pull request to remove evident problems, while keeping tests, peer review, and specialized analyzers as independent gates.

## Contextual coverage inside the pull request

The second update adds [AI security detections to pull-request code scanning](https://github.blog/changelog/2026-07-14-code-scanning-shows-ai-security-detections-on-pull-requests/). Its stated purpose is to reach languages and frameworks that do not yet have native coverage in CodeQL's built-in analyses. CodeQL is GitHub's static-analysis engine.

Alerts appear in the pull request and carry an `AI` label, making their origin distinct from CodeQL results. Analysis runs when a pull request is opened or updated, and findings can arrive progressively instead of waiting for every analysis source to finish.

The operational limits matter. The feature is in public preview for GitHub Code Security customers, requires CodeQL default setup, and must be allowed at the enterprise level and enabled for the organization. During the preview, runs also require a GitHub Copilot license and consume AI credits.

The findings are informational and do not block merges. That avoids turning a probabilistic detection into an automatic gate, but it leaves teams responsible for triage, response times, and resolution evidence. An alert can appear in exactly the right place and still become well-positioned noise if nobody owns it.

## AI and static analysis have different jobs

The interesting gain is not replacing CodeQL with a model. Query-based static analysis provides explicit rules, reproducible results, and traceability for vulnerability patterns we already know how to describe. AI analysis may interpret broader context and look for patterns in ecosystems without equivalent coverage, but its results need validation and may vary.

They are different instruments on the same workbench. A caliper precisely measures what it was designed to measure; visual inspection may notice an anomaly outside the expected dimension. Giving up either one reduces the available evidence.

For a development team, the practical response is a layered workflow:

- use the local review for fast feedback before sharing a change;
- keep CodeQL, tests, and dependency checks as reproducible controls;
- treat pull-request AI detections as expanded coverage;
- require technical confirmation before accepting or dismissing a material finding.

## The control point is moving

AI-assisted security is becoming less like a separate audit and more like a second set of eyes present during construction. That proximity may reduce the time between introducing and fixing a flaw, especially in stacks where static rules still leave gaps.

Its maturity will not be measured by the number of alerts a model can produce. It will be measured by whether teams preserve the distinction between a suggestion and evidence, understand execution costs, and close each finding with a verifiable decision. Moving review before the merge is a process improvement; making it dependable remains an engineering task.
