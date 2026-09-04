---
title: "Hypotheses got cheap; the lab is still scarce"
description: "DeepMind’s Co-Scientist designs experiments while humans execute in the lab. The real advance is not full autonomy: it is the bottleneck moving from hypothesis generation to experimental capacity and verification."
published: 2026-09-04
locale: en
translation: a-hipotese-ficou-barata-o-laboratorio-continua-escasso
tags: ["Science", "Agents", "DeepMind", "Research", "Evaluation"]
featured: false
---

In July I documented a clear gap: [the agent ran the experiment but did not do the research](/en/blog/the-agent-ran-the-experiment-but-did-not-do-the-research/). In an open evaluation with budget and infrastructure, frontier systems automated engineering and failed at judgment—weak design, shallow literature, cosmetic responses to critique. This article does not cancel that diagnosis. It adds another axis from a different paper.

[Accelerating Scientific Research with Gemini in the Real-World](https://arxiv.org/abs/2608.26701) (arXiv:2608.26701, submitted 27 August 2026) describes an extension of **Co-Scientist**, a Gemini-based multi-agent system, with affiliations that include Google DeepMind. The paper’s thesis is not “AI took over the lab.” It is closed-loop validation with **graded** autonomy across materials science, biology, and computer science.

## What the paper actually shows

In materials, Co-Scientist interfaces with a semi-automated chemical vapor deposition (CVD) reactor and proposes routes and recipes. Physical execution—loading and unloading samples, running growth, characterization—stays with humans. A non-hazardous precursor route (C₂Cl₆) targets bottom-up growth of Ti₃C₂Tₓ MXene without the classical hydrofluoric-acid etching path; the resulting lamellar material shares key structural similarities with the MXene lattice, **but the paper states that further experiments are still needed to confirm the atomic structure**. For TMDs, the system adapts recipes to laboratory constraints in minutes and reports single-attempt monolayer growth of MoS₂, MoSe₂, and WS₂, with lab-in-the-loop integration.

In biology, domain experts refine task framing and perform the wet-lab work; Co-Scientist builds a system to predict swarming phenotypes of engineered *E. coli* across inducer (IPTG) gradients from sparse imaging, with quantitative match to unpublished morphological measurements. The paper’s own discussion limits the claim: interpolation along a known gradient, not extrapolation to genuinely novel biological regimes.

In computer science, after the research directive, the system operates fully autonomously and discovers an inference-time scaling architecture (Agent_H in the text) that outperforms six frontier models on HealthBench Hard and Professional (length-adjusted), with a significant though modest reduction in potential clinical harm under blinded physician evaluation. An end-to-end paper-generation study with 30 domain experts and 450 reviews reports reliability modules that reduce hallucination and plagiarism and improve research safety.

Table 1 in the paper makes the spectrum explicit: AI-designed recipes executed and adapted by human operators in materials; computational pipelines with iterative expert feedback in biology; autonomous program synthesis in CS. It is not a single “automatic scientist” mode.

## What is new relative to July

The July post concerned open-research agents that **executed** without **judging**. Co-Scientist, in this paper, changes the division of labor in physical domains: AI **designs** experiments and protocols; the human lab **executes** and verifies. In CS, autonomy rises because the “lab” is code and benchmarks.

The advance that matters for the editorial argument is not full autonomy. It is the shift of the bottleneck. When hypothesis generation and ranking get cheap and recipe design fits in minutes, the scarce resource becomes real experimental capacity—furnace, plate, imaging, repetition—and structural confirmation. The paper still admits uncertainty on the MXene and interpolation in biology. A cheap hypothesis is not a closed discovery.

That does not prove the July judgment problem has vanished. It proves something else: even when the loop closes with humans in the lab, physical science remains limited by what can be measured and confirmed, not only by what can be proposed.

## Limits the text itself marks

It is arXiv v1; peer-review status is not established here. “Structural similarities” ≠ confirmed Ti₃C₂Tₓ phase. Unpublished biological measurements constrain external reproduction. HealthBench and clinical-harm results are computational plus blinded physician evaluation, not clinical deployment. The paper’s introduction already records the point: systems that produce validated discoveries typically still need humans to decompose, verify, and **execute physical experiments**.

## Practical consequence

For anyone using agents in science or R&D, two questions must coexist. July’s: did the system choose the right experiment and calibrate what the evidence allows one to conclude? This paper’s: when design comes from the agent, are the lab queue, characterization, and structural confirmation sized for the load—or did the organization only accelerate the cheap side of the cycle?

[Proving readiness before acting](/en/blog/before-acting-an-agent-must-prove-it-is-ready/) and [the harness as exam](/en/blog/a-complex-harness-is-the-exam-rankings-do-not-run/) remain valid: the loop needs to expose evidence of what was proposed, what was executed, and what is still unconfirmed.

Hypotheses got cheap. The lab—and verification—are still scarce. Anyone who confuses the two will celebrate manuscripts and recipes while the discovery still waits for the next run in the furnace.
