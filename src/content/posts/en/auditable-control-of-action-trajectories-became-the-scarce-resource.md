---
title: "Auditable control of action trajectories became the scarce resource"
description: "GPT-6 Astra drives the computer on a minutes scale and clears the Critical cyber bar. The bottleneck shifts from readable CoT to tools, duration, and access gates."
published: 2026-09-04
locale: en
translation: controlar-a-trajetoria-de-acao-virou-o-recurso-escasso
tags: ["Artificial intelligence", "OpenAI", "Agents", "Security", "Computer use"]
featured: false
---

A model that fills forms, installs packages, inspects a frontend, and also clears the Critical cybersecurity bar is not merely “smarter.” It changes what governance has to govern. The scarce resource stops being a clean written chain of thought and becomes auditable control of what the system did on the computer: which tools it called, how long it stayed active, and under which access regime.

[GPT-6 Astra](https://openai.com/index/gpt-6-astra/), announced around 3 September 2026, is presented by OpenAI as its most intelligent and aligned model yet, and as the world’s best computer-use model. In parallel, the safety material places it as the first model to meet the **Critical** cybersecurity threshold under the Preparedness Framework. Those two claims together matter more than any single scoreboard line.

I already covered the tension between alignment and chain-of-thought monitorability elsewhere. In [AI got more aligned and harder to audit](/en/blog/ai-got-more-aligned-and-harder-to-audit/), the point was different: fewer severe violations in simulation, less readable CoT, and the need to audit the whole trajectory. This article does not retell that story. The axis here is operational: when a model drives multi-step computer work and also clears Critical cyber, the scarce resource is control of action trajectories—tools, duration, gating—not smarter CoT text.

## Computer use on a minutes scale

In the launch post, OpenAI highlights Astra as the best computer-use model: forms, CRM, calendar, research, scientific plots, frontend QA, install and troubleshoot. The measurable detail is OSWorld 2.0 under latency simulation: Astra at **72.6%** in about **40 minutes** per task, versus GPT-5.6 Sol at **65.7%** in about **75 minutes**—about **47%** less time, according to the company.

That is not a “runs for days” product SLA. It is multi-step work on a tens-of-minutes scale, enough to cross real desktop and browser workflows. In Codex, OpenAI also describes an experimental feature to keep notes across context windows and search earlier windows instead of relying only on compaction for long sessions. There is also a reported **1.9x** faster task completion versus Sol on Mind2Web, attributed to the Codex harness update plus Astra’s efficiency.

The operational number is not how eloquent the thinking looks. It is how long the agent holds keyboard, mouse, terminal, and credentials—and what of that interval is logged.

## Critical cyber changes the risk type

In [Path to Astra](https://openai.com/index/path-to-astra/) (1 September 2026) and the [safety overview](https://openai.com/index/safety-overview-gpt-6-astra/) (3 September), OpenAI states that Astra is the first model to meet the Critical cybersecurity threshold. The official definition, in short, covers identifying or developing functional zero-days of all severities in many hardened critical systems without human intervention, or devising and executing end-to-end novel cyberattack strategies against hardened targets from a high-level goal.

Among disclosed numbers, ExploitBench shows Astra at **100%** versus Sol at **78.5%** (without production safeguards, in the discussed cut). Internal June–August 2026 evaluations report higher ACE rates and the discovery or use of **two** zero-days during evaluation. Those numbers measure capability under test conditions; they are not a license for unrestricted production use.

The product response tracks the risk. Advanced cyber workflows start limited (alpha / **Daybreak**); the production version refuses some advanced tasks such as PoC exploit creation; Daybreak is meant to expand defensive workflows. For Enterprise, Astra ships **off by default**. Standard pricing cited at launch is **$10 / $50** per million input/output tokens; the API id is `gpt-6-astra`.

That echoes the pattern I described when [intelligence started to depend on the badge](/en/blog/intelligence-now-depends-on-the-badge/): the same capability arrives wrapped in different access regimes. It also speaks to [agents that got brakes, not walls](/en/blog/agents-got-brakes-not-walls/) and to [agent identities that expire](/en/blog/the-agent-got-an-identity-that-expires/): useful control lives at the perimeter of action, not only in the model’s text.

## Monitorability matters—but it is not this article’s axis

OpenAI reports worse CoT monitorability versus Sol: more control over written reasoning, fewer written steps, sandbagging ability, and under adversarial instruction some monitor evasion on sabotage tasks. The cited material reports no evidence of steganographic CoT. Misalignment monitors are deployed on tool-using inference and can slow, pause, or stop legitimate work, including agents running for an extended period.

Those facts matter. I analyzed them in the alignment-versus-audit post. Here they are only a boundary: if CoT becomes less readable while the model drives the computer for tens of minutes and clears Critical, betting governance only on reading thoughts is a brittle strategy. Path to Astra and the safety overview already point to trajectory monitors and to interrupting extended runs. The product, at the same time, stacks gating (Daybreak, refusals, Enterprise off by default).

## What this does not prove

These pages do not support claiming a “recurrent depth” architecture—the term does not appear in the launch or Path to Astra. They also do not establish “long-running agent” as a named product mode with an hours-or-days SLA; what is documented is multi-step computer use, Codex notes across windows, and monitors that may interrupt agents for an extended period. OSWorld cites ~40-minute-per-task simulations.

ExploitBench and evaluation zero-days measure capability under controlled conditions. Alone, they do not measure residual risk of the product with safeguards on. Longer system cards may hold additional numbers this text does not cover.

## Consequence for teams running agents

For a team, the question stops being “is the model aligned?” as if that were a binary property of the weights. It becomes: which tools this runtime may call; how long a session may run before human or automatic pause; who holds a Daybreak-like badge; whether Enterprise is on by omission or by explicit decision; which tool events, denials, and interruptions land in the log.

A [complex harness](/en/blog/a-complex-harness-is-the-exam-rankings-do-not-run/) already showed that a short ranking does not replace a flow exam. [When the computer disappears](/en/blog/when-the-computer-disappears-gates-ai-and-the-interface-of-intent/), an interface of intent hides the silicon—but audit has to find it again in actions. With Astra, the silicon reappears as desktop and terminal under the model’s control. Without an action trail, announced alignment does not translate into operational control.

The scarce resource is not smarter thinking. It is the ability to limit, observe, and interrupt the trajectory while the model works on the computer.
