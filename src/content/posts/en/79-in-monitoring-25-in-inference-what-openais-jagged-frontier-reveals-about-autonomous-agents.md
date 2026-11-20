---
title: "79% in Monitoring, 25% in Inference: What OpenAI's 'Jagged Frontier' Reveals About Autonomous Agents"
description: "Even as markets celebrate linear AI acceleration, OpenAI released internal empirical data measuring how coding agents perform across real R&D tasks. Under Epoch AI's O*NET AI R&D taxonomy, zero-intervention success reaches 79% for monitoring runs, yet collapses to 29% for building evaluation/RL environments and just 25% for writing inference and serving stacks."
published: 2026-11-19
locale: en
translation: 79-no-monitoramento-25-na-inferencia-o-que-a-fronteira-irregular-da-openai-revela-sobre-os-agentes
tags: ["Agents", "Infrastructure", "OpenAI", "Benchmarks", "ESAA", "Inference", "Software Engineering"]
featured: false
---

In public narratives around artificial intelligence—heightened this week by Anthropic's historic Nasdaq debut—a linear assumption dominates: every quarter, autonomous coding agents should absorb an evenly expanding share of research and engineering work until full software automation arrives.

On Wednesday, November 18, 2026, OpenAI injected a sharp dose of internal empirical reality into that narrative by publishing [Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier/) (also indexed on [OpenAI Research](https://openai.com/research/index/)).

Measuring real-world coding-agent usage by its own researchers between August 1 and October 18, 2026 under Epoch AI's O*NET AI R&D taxonomy, the report documents a stark asymmetry: **autonomous capability does not advance as a smooth wave; it is deeply jagged**. While agents already complete most analysis, communication, and run-monitoring tasks without human intervention, they still stumble badly at the heavy infrastructure core of AI systems.

## The Real Delegation Map: 79% vs. 25%

OpenAI's figures track estimated **zero-intervention success rates** across internal R&D tasks delegated by researchers:

* **Across broad work categories:** Success rates without human intervention are highest in **Communicate (69%)** and **Analyze (58%)**, while **Build drops to 43%**.
* **At the granular task level:** Agents achieved **79% success monitoring runs for issues** and **72% answering technical questions**. Yet when tasked with **building evaluation, reinforcement-learning, and agent environments**, success fell to **29%**. And the lowest floor appeared in **writing code for inference and serving stacks**: just **25%**.

This internal telemetry corroborates outside the lab what [Singularity-Bench (`arXiv:2611.16591`)](/en/blog/agents-building-agents-what-singularity-bench-and-breakwater-reveal-about-sandbox-reward-hacking/) demonstrated academically just days ago: across eleven frontier model-and-harness pairings tasked with building an end-to-end AI stack, ten systems failed to match human engineering baselines (averaging 0.58 on the composite index).

OpenAI's authors note an important methodological caveat: observed success rates reflect both genuine model capability and researchers' own selection of which tasks to delegate. Even accounting for selection effects, the structural bottleneck is unmistakable—**as long as R&D performance remains this uneven, the 25%–29% infrastructure tasks act as hard governors on overall acceleration**.

## Why Heavy Infrastructure and Evaluations Resist Automation

It is no accident that OpenAI's two lowest scores—25% on inference/serving code and 29% on evaluation/RL environments—sit precisely where software demands rigid state invariants and formal correctness:

1. **Inference and Serving Stacks:** As underscored by [`llama.cpp v1.0.0`](/en/blog/the-local-ai-engine-grew-up-what-llamacpp-v1-changes-in-the-battle-for-local-control/) reaching API stability this week, memory engineering, FP8 KV caching, cross-node scheduling, and stable ABI/API contracts do not forgive plausible-looking approximations. A subtle concurrency or memory-layout bug breaks throughput in production even when tests compile.
2. **Evaluation Harnesses and Verifiers:** Building trustworthy evaluation environments requires blocking data leakage, preventing sandbox reward hacking (the lesson of Breakwater in Harbor), and ensuring synthetic judges do not rubber-stamp broken artifacts—a failure mode underscored this week by [On Evaluating User Simulators for Interactive Agents (`arXiv:2611.24892`)](https://papers.cool/arxiv/2611.24892), where three prior simulator evaluators caught only 5 to 6 out of 10 perturbations and even scored simulators instructed to accept broken work higher than clean controls.

## The Compounding Threat of Evidence Hijacking

There is an even deeper reason complex engineering loops collapse when wired to noisy tools and logs: loss of judgment under polluted context.

In [Evidence Governance for Tool-Augmented Medical Agents (`arXiv:2611.22169`)](https://arxiv.org/html/2611.22169), researchers formalized this failure as **evidence hijacking**: when agents ingest erroneous tool outputs directly inside their reasoning context, they lose "optional ignorance" and **flip answers they would have gotten right without tools**. By moving evidence admission to an independent *Checker* evaluating structured tool cards outside the *Solver*'s context, their CIEG framework outperformed ReAct and multi-agent baselines in 19 of 20 comparisons (delivering up to 34.2% relative gains over ReAct at 2.5–22× faster inference).

The link to OpenAI's jagged frontier is direct: monitoring a passive log (79%) mostly requires summarizing visible signals, whereas building an RL environment or inference engine (25%–29%) forces the agent through dozens of noisy compiler traces, profiler dumps, and partial test failures. Without external evidence governance, a single misleading trace hijacks the entire trajectory.

## Operationalizing the ESAA Protocol Across a Jagged Frontier

Acknowledging this uneven capability profile allows engineering teams to convert statistical reality into safe systems architecture under the four pillars of the **ESAA framework (Specify, Supervise, Audit, and Authorize)**:

* **Specify Delegation Scope by Reliability Tier:** Tasks in the 70%–79% band (log monitoring, technical Q&A, exploratory synthesis) are prime candidates for autonomous execution. Tasks in the 25%–43% band (inference stacks, RL harnesses, authorization logic) require strict human-authored specifications before generation begins.
* **Supervise with Out-of-Context Admission Guards:** Following the converging pattern of [SPILLWAY](/en/blog/free-text-never-authorizes-a-target-how-spillway-stops-prompt-injection-in-mcp-and-claude-code-without-replanning/) (for tool targets) and CIEG (for factual evidence), deterministic checkers must filter tool outputs before noise or injections enter the solver's reasoning window.
* **Audit Beyond Syntactic Compilation:** As [Inference After Coding Agents (`arXiv:2611.23174`)](https://arxiv.org/html/2611.23174) showed this week—where coding agents analyzing null-effect data reported significant p-values 54% to 98% of the time—auditing must trace the full selection history rather than trusting an output simply because it ran without crashing.
* **Authorize with Explicit Liability Boundaries:** In high-consequence domains, informal delegation without hard boundary gates shifts full liability onto operators—a reality underscored this week as [Citi and PNC updated banking agreements](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/) to hold customers financially responsible for actions taken by third-party AI agents.

## From Linear Hype to Precision Engineering

OpenAI's latest report delivers a welcome dose of engineering honesty to a market hungry for smooth exponential curves. Coding agents are already powerful multipliers for reading, analyzing, and monitoring complex systems—yet they still fail three out of four unassisted attempts when building the heavy infrastructure that runs AI itself.

Treating the frontier as uniform invites brittle code and silent regressions. Mapping precisely where autonomy excels (79%) and where deterministic containment and human architecture remain mandatory (25%) is what separates stage demos from dependable production engineering.