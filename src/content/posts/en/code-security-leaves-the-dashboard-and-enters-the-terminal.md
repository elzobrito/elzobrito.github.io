---
title: "Code security leaves the dashboard and enters the terminal"
description: "OpenAI has opened the Codex Security CLI and TypeScript SDK, bringing threat models, validation, scan history, and change review to local repositories and CI."
published: 2026-07-29
locale: en
translation: seguranca-de-codigo-sai-do-painel-e-entra-no-terminal
tags: ["AI", "Security", "Open source", "Developer tools"]
featured: false
---

OpenAI has turned Codex Security into something engineering teams can call from a terminal, place in CI, and integrate into developer tools. The new [`openai/codex-security`](https://github.com/openai/codex-security) repository publishes an Apache-2.0 CLI and TypeScript SDK for finding, validating, and fixing vulnerabilities in code.

This is more than a dashboard acquiring a command. It exposes parts of security review that scanners often blur together: the selected scope, achieved coverage, deferred areas, evidence behind each finding, and history showing whether a flaw is new, persistent, reopened, or resolved.

One boundary matters from the start. Codex Security already existed as a research preview. The newly open repository contains its integration layer, not the entire service performing the analysis. The CLI and SDK remain in beta, require Codex Security access, and call OpenAI services. Open source here means an inspectable and extensible interface to a hosted security agent, not a fully local scanner.

## From isolated alerts to attack paths

Codex Security is designed to behave more like a security researcher than a pattern catalog. According to the [official product documentation](https://help.openai.com/en/articles/20001107-codex-security), it begins by building a repository-specific threat model. It maps attacker entry points, trust boundaries, sensitive data, and high-impact paths instead of assigning equal weight to every suspicious fragment.

The threat model is visible and editable. A team can correct an authentication assumption, increase the criticality of a component, or describe a boundary that only exists in production. This matters because risk is not purely syntactic. A dangerous function may be unreachable by an attacker, while an ordinary-looking operation may cross tenants, permissions, or private data when placed in the real system flow.

Analysis follows three broad stages. Discovery uses project context to search for vulnerabilities. Validation then tries to reproduce the issue in an isolated environment, recording execution details and proof artifacts. Remediation proposes a minimal patch aimed at the root cause. The patch is not applied automatically; it remains subject to human review and can become a pull request.

That restraint is important. Producing a fix is not the same as proving that it preserves legitimate system behavior. The agent may demonstrate exploitability and suggest a repair, but regression testing, review, and the merge decision still belong to the team.

## What the CLI can inspect

The entry point is straightforward. With Node.js 22, Python 3.10, and the required access, teams install `@openai/codex-security`; authentication can use a ChatGPT account locally or an API key in noninteractive environments. A standard scan takes a repository path and writes results to a chosen directory.

The [CLI documentation](https://learn.chatgpt.com/docs/security/cli) supports narrower and broader questions. A scan can target selected services or packages, compare a base revision with `HEAD`, review staged and unstaged work, or use deep mode for a wider investigation. Architecture documents, existing threat models, and security policies can be supplied as knowledge sources.

Those options match different moments in software development:

- a repository scan establishes a security baseline;
- a path scan concentrates cost and attention on a critical service;
- a diff scan reviews a change before it lands on the main branch;
- a working-tree scan examines work that has not become a commit;
- deep mode spends more effort when the surface or risk justifies it.

Teams can also set an estimated model-cost limit with `--max-cost`. Requests already in flight may finish beyond that threshold, but the system keeps whatever results were produced before stopping. Review budget becomes an explicit parameter rather than an invoice discovered afterward.

## Coverage becomes an artifact, not a feeling

The most useful design choice may be the output contract. A scan produces a human-readable report, but it also writes structured integration artifacts: `scan-manifest.json`, `findings.json`, `coverage.json`, validation artifacts, and optional SARIF output.

The manifest records the target, scope, producer, and sealed artifacts. Findings include severity, confidence, locations, evidence, and remediation. Coverage records reviewed surfaces, exclusions, deferred work, open questions, and a state that can be `complete`, `partial`, or `unknown`.

That last field changes the claim a team can responsibly make. “The scanner found nothing” is weak evidence when half the system was out of reach. Separating the absence of findings from review completeness supports a narrower, more honest statement: no vulnerability was confirmed in the examined scope, while specified areas still require attention.

SARIF allows results to move into CI, while a pre-commit hook can inspect local changes and block high-severity findings or scan errors. Scans remain report-only by default. Teams decide when observation is mature enough to become an enforcement policy.

## History instead of a snapshot

Application security rarely fits into a single run. The CLI stores scans and offers commands to list them, inspect them, and repeat an earlier configuration. Two scans can be matched by root cause and compared to classify findings as new, persisting, reopened, resolved, or unknown.

This history matters because vulnerabilities move. A patch may remove a symptom while preserving its cause. Refactoring may relocate the same risk. A dependency update may reopen an attack path that appeared closed. Line-based comparison would create duplicates; root-cause matching moves tracking closer to how a researcher reasons.

Organizations with many repositories also get a bulk-scan path. It can discover projects from a GitHub account or organization, consume a prepared CSV, use multiple workers, and resume interrupted campaigns without rescanning completed repositories whose artifacts remain intact. A hardened Docker configuration separates inputs, credentials, and results when that distribution is included with the user’s access.

The TypeScript SDK makes the same capability available to developer products. An application creates a `CodexSecurity` client, runs it against a target, receives the report path, and closes the client. That small surface is enough to place security review inside a larger engineering tool without driving a terminal process manually.

## What remains outside the repository

Publishing the code does not remove the service dependency. The CLI and SDK remain beta software and require Codex Security access. Full-repository scans may also require Trusted Access for Cyber. Signing in or supplying an API key does not grant those permissions by itself.

Results should be treated as sensitive data. They may contain source excerpts, vulnerability details, and proof-of-concept material. The documentation recommends writing them outside the repository, keeping them private, and applying an appropriate retention policy. Carelessly publishing a scan directory can turn defensive analysis into an attacker’s guide.

Nor is there a promise of zero false positives. OpenAI reports substantial reductions in noise, overstated severity, and false positives during the beta, but those figures come from its own deployments. Every team still needs to refine the threat model, review evidence, and measure behavior in its architecture.

## The open interface matters because it exposes the boundary

Codex Security could already build context, validate issues, and suggest patches. The repository changes who can place those capabilities inside an engineering system and, more importantly, how their limits are represented.

A team can scan only a pull request diff, require SARIF in CI, reserve deep mode for exposed components, repeat the same review after remediation, and track areas that remained partial. A maintainer can begin in report-only mode and make the gate blocking only after confidence, cost, and coverage are understood.

This is a more mature use of agents in security. The useful output is not merely a claim that AI found a bug. It is the chain supporting that claim: which risk was plausible, which attack path was explored, what was reproduced, which surfaces were excluded, how the patch was proposed, and who chose to accept it.

By moving from the dashboard into the terminal, security has not become automatic. It has become more composable, auditable, and harder to mistake for an absolute seal.
