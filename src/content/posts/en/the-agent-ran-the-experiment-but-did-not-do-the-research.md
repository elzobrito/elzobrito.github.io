---
title: "The agent ran the experiment but did not do the research"
description: "A new evaluation gave frontier agents six days, a budget, and full infrastructure. They completed the engineering but lacked the judgment that turns work into research."
published: 2026-07-30
locale: en
translation: o-agente-fez-o-experimento-mas-nao-fez-a-pesquisa
tags: ["AI", "agents", "research", "evaluation"]
featured: false
---

There is an uncomfortable gap between producing the artifacts of research and producing knowledge.

An agent can write code, prepare datasets, run experiments, draw charts, and deliver something that looks like an academic paper. It can still miss that the question remains unanswered, the experiment is weak, or the conclusion does not follow from the evidence.

A [new study of agents doing open-ended AI research](https://arxiv.org/abs/2607.27191), submitted on July 29, tries to measure that gap. Its two case studies cannot settle the future of science with Artificial Intelligence (AI). They do, however, expose a boundary that short benchmarks and automatically scored tasks tend to hide: doing a great deal of work is not the same as knowing which work is worth doing.

## An evaluation without a ready-made answer key

Most agent evaluations provide a crisp target. Reduce a loss, speed up a program, pass a test suite, or raise a score. That makes evaluation repeatable, but it also simplifies the central decision. The system can see whether each attempt moves closer to the goal.

Open-ended research is different. Before optimizing a number, someone must choose hypotheses, decide what evidence would be persuasive, recognize an uninformative result, and sometimes abandon an entire direction. There is no built-in score telling a researcher that an idea matters or that a chosen sample supports a conclusion.

The authors propose what they call a shadow evaluation. An agent receives the central question from a high-quality paper that has not yet been published. It works without access to the researchers' answer and is eventually graded by the original authors, who have spent months studying that exact problem.

The design tries to avoid two familiar limitations. Unlike a benchmark, it keeps the question open. Unlike ordinary conference review, it uses evaluators with deep knowledge of the problem. The [CRUX project](https://cruxevals.com/) places this method between small standardized tests and long, noisy tasks that resemble real work.

## Six days, $3,000, and a complete machine

The evaluation used the central questions from two papers submitted to NeurIPS 2026 that were not public at the time. Each run received six days, $3,000 in application programming interface (API) credits, graphics processing unit (GPU) credits, a virtual machine, and access to the web.

The goal was not a quick demonstration. It was a paper good enough for a top-tier AI conference.

The main runs used Claude Opus 4.8 in OpenClaw. To test whether the outcome was merely a product of that setup, the researchers repeated one study with GPT-5.6 Sol in Codex, its native environment, under comparable time and budget limits. The paper reports that the repeat run reproduced almost all of the same failure patterns.

The agents did the visible work. They completed the engineering without human help, created data and methods, and produced full manuscripts. Yet the original paper authors clearly rejected both submissions. Their overall scores were 2 out of 6 and 1 out of 6.

That contrast is the study's core result: the infrastructure worked and the process produced outputs, but the research did not meet its intended bar.

## Judgment, not code, became the bottleneck

The agents understood the questions and proposed directions that resembled those of the human researchers. The trouble began when a plausible direction had to become convincing evidence.

They tested hypotheses with small, synthetic, or hand-picked datasets. They then presented underpowered negative results as substantive findings and engaged only shallowly with the literature. They could build an experiment but did not calibrate what that experiment allowed them to claim.

This matters because verifier-based evaluations reward a different capability. With a fixed metric, experimentation can become a search loop: change something, measure it, keep the improvement. In open research, the metric itself is part of the question. A researcher must ask whether the test captures the right phenomenon, whether the comparison is fair, and whether a local gain answers the broader question.

The practical consequence is immediate for teams using agents in data science, prototyping, or engineering. Agents may be valuable for widening the space of exploration, but human review cannot stop at code quality and numerical results. It must examine the choice of question, experimental design, and strength of inference.

## Correct feedback did not produce a correction

The study identifies five recurring patterns:

1. weak judgment about the bar for publishable work;
2. uncreative responses to flaws in the research design;
3. ineffective retreat from dead ends;
4. poor awareness of available time and resources;
5. instruction drift over the course of the run.

The most instructive finding may be what happened after feedback. The agents consulted AI reviewers repeatedly. Those reviews identified many of the same weaknesses later raised by the human experts, and not one review judged the work acceptable. The agents mostly responded by adding caveats to the manuscript. They did not redesign the study to address the criticism.

It is like receiving the correct diagnosis and improving the wording of the medical record. The information arrived, but it did not become a strategic change.

For agent designers, that suggests more critique is not enough. A system needs a way to turn criticism into decisions: define abandonment conditions, reserve time for restarting, compare incompatible approaches, and prevent sunk effort from locking the run into a weak hypothesis.

## Neither time nor money became strategy

Both main runs ended after spending less than half of their API budgets. The agents could monitor usage and were encouraged to use the remaining resources. They still rushed through early exploration in a few hours and stopped before the deadline despite recognizing that the papers fell below the expected standard.

More budget did not automatically become better research. Without a policy for allocating resources under uncertainty, idle capacity remains idle capacity.

That finding corrects a common intuition about long-running agents. A larger context, more credit, or a longer deadline does not guarantee productive use. The missing skill is not merely the ability to keep working. It is knowing when to go deeper, when to diversify, and when to start over.

## A small result worth taking seriously

The paper has important limitations. It covers only two cases. The evaluators knew that agents had produced the manuscripts, and they were the authors of the original research, which may favor their own approaches. Models and agent environments are also changing quickly.

The authors acknowledge these constraints and release the available reviews, responses, repositories, and logs for inspection. They plan broader tests with more models and papers. It would therefore be a mistake to conclude that agents cannot do research, or never will.

The evidence supports a narrower claim: in July 2026, well-resourced frontier systems automated much of the engineering in two research projects but did not demonstrate the judgment required to make a convincing scientific contribution.

That distinction should shape both adoption and evaluation. If we count code written, experiments completed, and documents delivered, we may see something that looks like complete science. If we ask why an experiment was chosen, what its result actually establishes, and which evidence would make the team change direction, we find the work that has not yet been automated.

The next frontier for scientific agents may not be running more trials. It may be learning which trials change what we know.
