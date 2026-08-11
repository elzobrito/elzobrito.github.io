---
title: "The benchmark now comes with assembly instructions"
description: "Nemotron 3.5 Lightning arrives with open weights and reproducible evaluation recipes, revealing how much a score depends on both the model and the environment that produced it."
published: 2026-08-11
locale: en
translation: o-benchmark-agora-vem-com-instrucoes-de-montagem
tags: ["Open models", "AI evaluation", "Reproducibility", "Research"]
featured: false
---

Performance tables give artificial intelligence models the reassuring appearance of a scoreboard. A larger number seems to settle the comparison, as if every result had been produced on the same track, with the same fuel and under the same weather. That is rarely the case.

The [NVIDIA Nemotron 3.5 Lightning 30B A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16), released on August 11, deserves attention for more than its downloadable weights. NVIDIA also published [recipes for reproducing its evaluations](https://github.com/NVIDIA-NeMo/Gym/tree/main/nemotron_recipes/lightning-3.5): scripts, configuration files, pinned versions, and instructions for rebuilding much of the table shown on the model card.

That second release is less eye-catching than a new model, but it may be more useful. It turns a vendor score from a claim into a hypothesis another team can test, with the cost and limitations exposed.

## Sparse in operation, dense in detail

Lightning has 30 billion total parameters and activates 3 billion for each pass. Its architecture combines a Mixture of Experts (MoE), Mamba-2, and attention layers. Rather than engaging every parameter for every token, specialized parts of the network are selected according to the input, lowering compute without shrinking the model's total representational capacity.

The BF16 version, using a 16-bit numerical format, is positioned as the reference checkpoint for fine-tuning, distillation, research, and creating quantized variants. A four-bit NVFP4 edition is offered for optimized serving. The card also states a maximum context length of one million tokens, while its own suggested single-H100 setup uses 256,000. That gap matters: an architectural ceiling and a practical deployment setting are not the same thing.

Nor do the published results tell a story of uniform dominance. In NVIDIA's measurements, Lightning scores 51.56 on SWE-bench Verified, below the 70.12 reported for Qwen 3.6 35B A3B and the 57.40 for Gemma 4 26B A4B. On IFBench, which measures instruction following, it reaches 71.88, above the compared Qwen score of 63.71 but below Gemma's 77.25. These are vendor-produced numbers under a shared harness. They are useful for forming questions, not for ending model selection.

In practice, a team adapting the model can start from the reference weights and measure what changes after quantization or specialization. A team focused on efficient serving should evaluate the optimized variant. Folding those two goals into one comparison usually produces weak conclusions.

## The recipe reveals what the table hides

The [reproduction guide](https://github.com/NVIDIA-NeMo/Gym/blob/main/nemotron_recipes/lightning-3.5/reproducibility.md) covers 13 evaluations for the instruction-tuned model, including scientific reasoning, long context, browsing, tool use, and software engineering. For the base model, it provides 21 short-context evaluations plus RULER for long context.

Each recipe fixes more than the benchmark name. The documentation specifies NeMo Gym and NeMo Evaluator versions, vLLM server settings, parallelism, cache formats, reasoning and tool-call parsers, repetitions, and scoring rules. Some evaluations also require containers, auxiliary datasets, external graders, and panels of judge models.

That inventory explains why “we ran the same benchmark” can conceal different experiments. A server version, cache format, or output parser can move the result. With sampled evaluations, two nominally identical runs need not agree to the final decimal place. When other models judge the answers, the composition of that panel becomes part of the measurement too.

The guide makes two unusually useful warnings. A limited run is a setup check, not a publishable score. And a gap between a reproduced result and the published one may come from either the model or the serving stack. Without controlling both, the cause remains ambiguous.

## Reproducible does not mean cheap or neutral

Publishing the recipe does not remove every barrier. Some evaluations require AWS infrastructure, container images, external files, search services, and model-judge panels. GDPval, which assesses realistic work products, can require nine reference sets generated in advance, each spanning hundreds of tasks. The guide is candid that this is the expensive route.

There is also a legal distinction. The evaluation scripts use Apache 2.0, while the weights are distributed under [OpenMDW 1.1](https://openmdw.ai/license/1-1/), a custom license that permits use, modification, and redistribution but carries its own terms. “Available weights” and “software under a familiar open-source license” should not be treated as automatic synonyms.

Even so, making the cost explicit is progress. An incomplete recipe lets methodological differences masquerade as differences in intelligence. A detailed recipe does not guarantee neutrality, but it shows where measurements can move and what resources would be needed to challenge them.

## A score gains provenance

For anyone selecting a model, the practical consequence is straightforward: do not compare only the final column. Ask which checkpoint was used, how it was served, how many repetitions were run, who judged the answers, and whether the configuration is available. If the real application uses different hardware, context limits, or tool policies, rerun the evaluation there.

Nemotron 3.5 Lightning does not solve the ranking problem. Its table is still a vendor-selected set of tasks, and reproducing it in full demands resources that few teams possess. But this release adds something many leaderboards omit: operational provenance.

When a number comes with the instructions needed to rebuild it, it stops asking for blind faith. It starts inviting audit—and that may be a more meaningful sign of maturity than winning one more row in a table.
