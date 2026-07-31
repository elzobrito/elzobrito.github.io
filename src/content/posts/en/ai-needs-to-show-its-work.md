---
title: "AI needs to show its work"
description: "OSReward and AskChem point to the same shift: dependable agents must preserve the path of an action and the provenance of every claim."
published: 2026-07-31
locale: en
translation: a-ia-precisa-mostrar-o-caminho
tags: ["AI", "Agents", "Evaluation", "Science"]
featured: false
---

A correct answer is useful. An answer that lets us reconstruct how it was reached is far more valuable when artificial intelligence controls a computer or synthesizes scientific literature.

Two papers submitted on July 30 approach this problem at different scales. [OSReward](https://arxiv.org/abs/2607.28609) asks whether multimodal models can reliably judge an agent's full trajectory. [AskChem](https://arxiv.org/abs/2607.28618) reorganizes chemistry search so that each claim carries its own provenance. In both cases, the final answer is no longer the only object that must be trusted.

## Did the agent finish, or did it merely look finished?

A computer-using agent produces a sequence of states, actions, and decisions. It may open the right page, fill almost every field, and still fail on the final click. If an evaluator sees only the last screen or accepts a plausible account of the run, incomplete work can receive credit.

OSReward turns this into a test of vision-language models used as judges. Its trajectories come from different agent backbones following human-verified instructions across platforms, with ground-truth verdicts established through multi-stage human annotation. The project also separates genuinely difficult cases and more granular evaluations of efficiency and alignment.

Its most consequential finding is a leniency bias: even advanced models sometimes label failed runs as successes. The authors report that the few judges reliable enough to trust are expensive to use at scale, while affordable open models still lag. To narrow that gap, they release OS-Shepherd-100K and open 9-billion and 35-billion-parameter reward models. In their experiments, these models match commercial judges at 30% to 60% lower cost than frontier alternatives.

This changes a practical engineering decision. Evaluating agents is not simply comparing a screenshot with a task description. It requires inspecting the path: which states were reached, which actions actually happened, and where an appearance of completion concealed a failure. The paper is explicitly described as work in progress, so its numbers should not be treated as a final product ranking. Its more durable contribution is making the judge itself an object of evaluation.

## From ranked papers to verifiable claims

Scientific search has a related problem. Search systems usually return ranked documents. A researcher or agent must still locate the relevant passage, establish whether it supports the answer, and combine findings scattered across papers.

AskChem changes the unit of retrieval. Instead of returning only a paper, it converts each publication into atomic, typed claims connected to the source's digital object identifier (DOI) and to a quotation or explicit evidence location. The system contains 2.4 million claims from 147,000 papers, organized through taxonomies and an evidence graph with relations such as support, extension, and contradiction. It also provides a web interface, REST API, software development kit, and Model Context Protocol (MCP) access.

On AskChem-Bench, a GPT-5.5 reader grounded in the system produced resolvable DOIs in 100% of cases, compared with 88.3% without retrieval, and achieved the highest citation density among five tested systems. The benchmark contains only 30 chemistry questions, so this demonstrates the architecture in its evaluated domain rather than establishing a universal solution for scientific review.

The practical gain comes from granularity. If a synthesis says that a catalyst achieved a particular yield under specified conditions, the reader can follow that sentence to its evidence. Conflicts also become easier to see: incompatible claims no longer remain buried inside long documents but appear as related nodes in a graph.

## Evidence must travel with the action

Both projects address the same failure mode. AI systems compress long processes into short outputs: a trajectory becomes “completed”; dozens of papers become a paragraph. Compression is useful, but it can erase the very information needed to audit the result.

A more dependable architecture preserves two links. One connects an operational result to the sequence of states and actions that produced it. The other connects each claim to the source and passage that supports it. Users should not have to inspect everything every time, just as programmers do not recompile an application before every run. But the path must remain available when a doubt, contradiction, or high-impact decision appears.

The next quality leap for agents may look less like a more eloquent answer and more like a well-structured receipt. Reaching the destination is not enough. The route must remain verifiable.
