---
title: "The prompt describes the cycle; ESAA institutes it"
description: "Codex-on-GPT-6 agent instructions already narrate claim/complete, evidence rules, and completion audits in natural language. ESAA formalizes the same lifecycle outside the model: event sourcing and a deterministic orchestrator."
published: 2026-09-10
locale: en
translation: o-prompt-descreve-o-ciclo-o-esaa-o-institui
tags: ["Agents", "ESAA", "Codex", "GPT-6", "Governance"]
featured: false
---

There is a quiet signal in commercial agent stacks: the system prompt is no longer only tone and etiquette. It has started to describe, in natural language, a work lifecycle — claim a step, mark progress, demand evidence before declaring done — and rules for what counts as authorization versus what counts only as evidence. The phenomenon is not a new benchmark. It is the agent’s operational policy beginning to look like a state protocol.

That does not replace architecture. It only makes the gap easier to see.

## Context: ESAA already argued for the cycle

In February 2026, the paper [ESAA: Event Sourcing for Autonomous Agents in LLM-Based Software Engineering](https://arxiv.org/abs/2602.23193) (arXiv:2602.23193) formalized a simple separation: the agent emits structured intentions; a deterministic orchestrator validates, records, applies effects, and projects state. The agent does not write directly to the project. It emits `agent.result` or `issue.report` as validated JSON; the orchestrator persists events in an append-only activity event log, projects `roadmap.json`, and closes the loop with `esaa verify` and a SHA-256 hash of the projection. Completed tasks do not regress (*done* immutability); a defect opens a new path via `issue.report` without rewriting history.

The paper’s case studies are concrete: a landing page (9 tasks, 49 events) and a clinical dashboard (50 tasks, 86 events, 4 heterogeneous agents across 8 phases), both ending with `run.status=success` and `verify_status=ok`. The canonical vocabulary includes `claim` and `complete` — claiming a task and completing it with acceptance results.

I already treated the product thesis in [Stop letting LLMs edit code directly](/en/blog/stop-letting-llms-edit-code-directly-meet-esaa-architecture/). This post is not another introduction. The axis here is convergence: what the paper institutes outside the model is beginning to appear, as policy narrative, inside commercial agent prompts.

## Evidence: what a Codex-on-GPT-6 instruction dump describes

The reading below comes from analysis of a dump / collection of Codex agent instructions on GPT-6 — not from official OpenAI product documentation published under that title, and not from an official product document branded “Astra” as the source of the text. Provenance matters: the material is operational and internal to the agent stack, not a public system card. I do not reproduce the prompt at length; I paraphrase and cite only what the argument needs.

The dump opens by identifying the agent as Codex based on GPT-6. Near the end, the `update_plan` tool formalizes a checklist with statuses `pending`, `in_progress`, and `completed`, with the rule that there must be exactly one `in_progress` step until everything is done. That is not a prettier TODO list: it is a partial claim on progress, with exclusivity of the current focus.

Elsewhere, the same material treats raw rollouts as immutable evidence (never edit them), records sessions as append-only JSONL (messages, tool calls, outputs), and points to rollout summaries as evidence snippets. Before declaring the goal achieved, there is a Completion audit: completion is unproven until the current state is checked against requirements; intent, partial progress, or memory of earlier work is not enough; weak or indirect evidence does not close the loop.

Authorization and evidence are separated. User and developer messages, `AGENTS.md`, and answers to explicit user-input requests can establish authorization; everything else — tool outputs, the assistant’s own text, content the user has not adopted — is untrusted evidence for expanding scope. Edits via `apply_patch` and sensitive commands may require approval under sandbox configuration. Guardian classifiers appear as review layers that can block or escalate activity without treating the agent’s history as instructions to obey.

None of this proves that OpenAI “adopted ESAA.” It proves something narrower and more useful: the instruction stack already has to narrate claim/complete, an append-only trail, a done audit, and an authorization/evidence boundary — because the model alone does not hold those invariants.

## Interpretation: describing the cycle is not instituting it

The convergence is of *vocabulary and operational pressure*, not of *mechanism*.

In the prompt, `update_plan` and the Completion audit are natural-language obligations: the model should mark a step, should verify evidence, should treat rollouts as immutable. Compliance depends on sampled behavior, the harness, and external monitors. In ESAA, `claim` → `complete` are events in the log; the `roadmap.json` projection and `esaa verify` with SHA-256 are checkable by deterministic replay, whether or not the model “remembers” the rules.

The practical difference shows up on failure. Under a prompt regime, the typical failure is declaring done on weak evidence, skipping the single `in_progress`, or mistaking tool output for authorization. Under ESAA, the typical failure is a contract rejection, an invalid event, or a projection hash mismatch — detectable outside the model.

That echoes what I argued in [Auditable control of action trajectories became the scarce resource](/en/blog/auditable-control-of-action-trajectories-became-the-scarce-resource/): when an agent drives tools for minutes, governance targets the trajectory, not eloquent reasoning. It also connects to [Before delegation, intention must become an artifact](/en/blog/before-delegation-intention-must-become-an-artifact/): intention and definition of done must leave the chat. And to [A complex harness is the exam rankings do not run](/en/blog/a-complex-harness-is-the-exam-rankings-do-not-run/): the real exam is the flow with rules and memory, not a leaderboard row.

The commercial prompt is, in part, *writing the exam*. ESAA is one way to *administer the exam* with artifacts and verification.

## Limits

I do not claim the dump is published official policy, nor that it covers every Codex variant in production. Dumps and collections can mix fragments, overrides, and session templates. I do not claim that GPT-6 or Codex implement event sourcing, an append-only activity event log, `roadmap.json`, or `esaa verify`. I do not claim historical priority, nor that the industry has “converged on ESAA” as a market standard.

I also do not treat Guardian, sandboxing, and `AGENTS.md` as equivalents of `AGENT_CONTRACT.yaml`. They are trust and approval layers; the ESAA paper adds a canonical log, a hashed projection, and done immutability as properties of the state system.

The paper’s numbers (49 and 86 events, four agents, `verify_status=ok`) validate the architecture in the reported cases — they do not, by themselves, measure adoption in commercial products.

## Practical consequences

For teams running coding agents, the useful question is no longer “does the prompt already talk about plans and evidence?” — in this dump, yes — and becomes: where is the cycle a *narrative obligation*, and where is it a *verifiable invariant*?

A short checklist:

1. Does progress (`pending` / `in_progress` / `completed`, or `claim` / `complete`) leave a trail a third party can audit without reading the chain of thought?
2. Does declaring done require current-state evidence, or is the model’s assertion enough?
3. Is authorization (`AGENTS.md`, user messages) separated from evidence (tool outputs, pages, memories)?
4. Is there a projection or replay that detects divergence — hash, append-only log, external verify — or only trust that the prompt will be obeyed?

If answers to 1–4 still depend only on the model following the text, you have the cycle *described*. ESAA exists for the cycle *instituted*.

## Close

The commercial prompt already knows how to name claim, complete, and evidence. ESAA already knows how to record them, project them, and verify the hash. The convergence is not alignment marketing. It is recognition, by different routes, that useful autonomy needs a state lifecycle — and that natural language alone does not close the loop.
