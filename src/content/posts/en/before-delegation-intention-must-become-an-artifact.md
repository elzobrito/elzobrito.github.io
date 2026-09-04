---
title: "Before delegation, intention must become an artifact"
description: "Anthropic’s AI-native SDLC playbook puts intent.md at the center: why, outcome, and constraints leave the chat and enter version control before an agent writes code."
published: 2026-09-04
locale: en
translation: antes-de-delegar-a-intencao-precisa-virar-artefato
tags: ["Software development", "Agents", "Claude", "Governance", "SDLC"]
featured: false
---

Delegating work to an agent without a written intention is easy. The hard part is discovering, weeks later, what was actually requested, under which constraints, and with what definition of done. Anthropic’s [AI-native SDLC playbook](https://claude.com/blog/the-ai-native-sdlc-playbook), published on 21 August 2026, treats that problem as engineering, not prompt style: intention becomes a versioned file before implementation.

The document, by Louis Claxton on the Claude blog, does not launch a product named `intent.md`. It describes an operating pattern. The opening argument is sober: code is no longer the bottleneck; the stages that still run at human speed—plan, review, test, deploy—come to dominate elapsed time. When agents produce most of the diff, controls designed for humans writing line by line no longer fit.

## What the playbook calls an AI-native SDLC

Anthropic describes the traditional cycle in six stages—plan, design, build, test, deploy, maintain—and contrasts it with a loop that embeds AI at each point. Alternative labels appear in the text itself: agentic SDLC, AI SDLC. The common thread is not “the agent does everything.” It is the committed artifact.

Each stage ends by writing something the next stage reads: `intent.md`, `spec.md`, `plan.md`, the diff with tests, review findings on the pull request, an incident record. The commit chain becomes the audit trail: who asked for what, what the agent produced, who approved. Humans remain accountable for judgment. Attention concentrates at the gates and on the artifacts, rather than restarting every phase from scratch.

In the playbook’s table, the Plan stage stops being hand-written requirements after committees and becomes: Claude synthesizes pain points from the sources and captures them in `intent.md`, human-readable and machine-actionable.

## intent.md is not a prettier ticket

The flow is concrete. An idea enters through a person, a ticket, or an alert. The person describes the problem in their own words. Claude asks the questions an analyst would ask—scope, users, constraints, success—until the idea is less vague. The result is written with the organization’s template and saved as `intent.md`. The product owner reviews and corrects it before the commit.

The playbook’s own example lists fields: problem, proposed outcome, affected users and systems, constraints, open questions. It is not mission-statement poetry. It is the minimum needed for an agent and a human to share the same “why” without relying on chat-session memory.

After acceptance, `intent.md` triggers design: Claude produces `spec.md` guided by brand, security, compliance, and UX skills. Accepting the spec triggers plan mode in Claude Code: the engineer interrogates the plan—what could break, which step is riskiest, which options were discarded—until someone who never saw the conversation could implement from `plan.md` alone. Only then comes code.

The operational phrase the playbook places at the center of Plan is: give agents the why first. Without that, automation accelerates misalignment between the originator and what lands in the repository.

## Institutional knowledge becomes a file, not a habit

Beyond intention, the playbook pushes team knowledge onto surfaces the agent actually reads: `CLAUDE.md` for conventions and commands; skills for policies that must apply consistently; hooks for what must be deterministic (block a protected path, require release authorization). The distinction matters: a skill is advisory control; a hook is the layer that allows, asks, or blocks.

In Maintain, the loop closes. A deterministic script watches metrics; when bands breach, it invokes Claude to diagnose or propose; the finding can return as a new `intent.md`. Claude Tag appears as an on-call channel. Autonomy is tiered: log, diagnose, propose a pull request or a pre-approved runbook—not a single leap to production without a gate.

That connects to what I have written about an [interface of intent](/en/blog/when-the-computer-disappears-gates-ai-and-the-interface-of-intent/) and about [agents becoming platforms with skills, plugins, and local control](/en/blog/agents-become-platforms-skills-plugins-and-local-control/). It also speaks to [proving readiness before acting](/en/blog/before-acting-an-agent-must-prove-it-is-ready/) and to [brakes that are not walls](/en/blog/agents-got-brakes-not-walls/): committed intention is the brake that exists *before* the edit.

## What the playbook does not prove

It is a best-practice narrative from Anthropic’s Applied AI team and customers, not a controlled external study. The expectation that time to a committed `intent.md` falls from weeks to hours is a leading indicator proposed in the text, not an independently published measurement. The filename is not an industry standard; it is the playbook’s convention. Organizations with Jira, ServiceNow, or regulatory tools can—and the text itself admits—keep the legacy system as source of truth, as long as there is a clear link to the markdown.

It also does not, by itself, solve judgment quality. A well-formatted `intent.md` can still ask for the wrong thing. What changes is the evidence: the error sits in the repository, with author and history, instead of evaporating at the end of a session.

## Practical consequence

For teams already using coding agents, the question stops being “which model produces the best diff?” and becomes: is there an intention artifact the next stage can read without the original conversation? Are spec and plan committed? Have policies become skills, and has the non-negotiable become a hook? When production breaches a band, does the finding re-enter as intention or vanish into an orphan ticket?

A [complex harness](/en/blog/a-complex-harness-is-the-exam-rankings-do-not-run/) already shows that the real exam is a flow with rules and memory. Without versioned intention, the flow starts too late: in the middle of the code, when correcting the “why” is already expensive.

Before speeding up delegation, intention has to leave the chat and enter the artifact. Without that, the agent only automates the distance between what was asked and what was built.
