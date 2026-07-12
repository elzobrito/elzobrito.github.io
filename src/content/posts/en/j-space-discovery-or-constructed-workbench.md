---
title: "J-space: discovery or a constructed workbench?"
description: "A critical reading of the study on Claude's alleged global workspace: what already existed in the model, what the J-lens constructed, and what the experiments actually support."
published: 2026-07-12
locale: en
translation: j-space-descoberta-ou-mesa-de-trabalho-construida
tags: ["AI", "Interpretability", "Claude", "J-space"]
featured: false
---

Anthropic has published a study with a provocative claim: verbalizable representations form a kind of *global workspace* inside language models. The authors call this collection the **J-space** and present experiments in which silent concepts appear during processing, can be replaced, and seem to participate causally in reasoning.

The immediate interpretation is fascinating. Claude may have spontaneously developed a small mental workbench: a place where intermediate concepts remain available to different operations before an answer reaches the screen.

But a methodological question must come before the excitement: **was this workbench actually discovered in the model, or was it constructed by the way researchers chose to observe the model?**

That distinction does not invalidate the study. It changes the strength of the conclusion we can draw from it.

## The workbench metaphor

Global workspace theory, originating in cognitive science, describes the mind as multiple specialized processes operating in parallel. Most of that work is automatic and inaccessible. Some information, however, reaches a limited shared channel where it can be reported, combined, and used by different systems.

In [“Verbalizable Representations Form a Global Workspace in Language Models”](https://transformer-circuits.pub/2026/workspace/index.html), the researchers look for something functionally similar inside already-trained models. They identify five properties: verbal report, directed modulation, internal reasoning, flexible generalization, and selectivity.

The “workbench” name is intuitive but potentially misleading. It encourages us to imagine a bounded component: a special memory added to the architecture where Claude chooses to store intermediate results. That is not what the method shows.

Claude did not receive a new buffer, an additional layer, or a module named J-space. The experiments operate on the residual stream already present in the network. What the researchers added was an observation and intervention technique called the **Jacobian lens**, or J-lens.

## What the J-lens constructs

For every token in the vocabulary, the J-lens calculates a direction in the internal activations that, on average, increases the model's disposition to produce that token later. Applied to intermediate layers, it converts difficult-to-interpret vectors into a list of words potentially related to what the model is processing.

The authors then define the J-space as sparse, nonnegative combinations of these directions. In practice, they generally use a limit of roughly 25 active vectors, selected from observed behavior.

The J-space therefore does not appear in the model with ready-made boundaries. Its definition depends on researcher choices:

- the lens used to project activations;
- the vocabulary used to name directions;
- the sparse decomposition;
- the maximum number of active components;
- the range of layers interpreted as a workspace.

One mathematical detail is especially important: the J-lens vectors are generally full-rank and can span the entire residual stream. The J-space becomes small because of the sparsity restriction, not because the researchers found a naturally isolated linear compartment.

Saying that “Claude has a workbench called J-space” is therefore stronger than saying that “the J-lens identifies a sparse and functionally privileged slice of Claude's activations.” The latter is much closer to the evidence.

## What is expected by construction

The J-lens was designed to find directions capable of influencing future words. One result should therefore be expected: those directions will be related to what the model can verbalize.

The paper acknowledges this directly. Because the lens is derived from the causal effects of activations on output tokens, some relationship between its readouts and verbalization exists **by construction**.

That does not make the method useless. Scientific instruments are often designed to detect a particular property. The problem begins when a direct consequence of the instrument is presented as an entirely independent discovery.

If we search for the directions most poised to reach verbal output, it is unsurprising to find reportable concepts in them. That part of the argument is not enough to establish a global workspace.

## Where the study stops being trivial

The most interesting experiments begin after that observation.

In one example, Claude is asked for the number of legs on the animal that spins webs. The concept “spider” appears in intermediate activations even though it is absent from the question and need not appear in the answer. When researchers replace that direction with “ant,” the model answers six rather than eight.

In another experiment, the same intervention swaps “France” for “China.” This single change redirects answers about capital, language, currency, and continent. Different downstream operations appear to consult one shared representation.

There are also ablation experiments. When the most active J-space components are repeatedly removed, the model retains fluency, sentiment classification, and some information retrieval abilities. By contrast, it loses much of its ability to perform multi-step reasoning, summarize, and generate content conditioned on intermediate inferences.

These results are not guaranteed by the lens's definition. The directions might have been merely correlational. They might have affected only their associated word. They might have caused indiscriminate degradation or incoherent answers. The fact that some substitutions are correctly reused by different operations is meaningful causal evidence.

The study therefore cannot be reduced to “they built a workbench and confirmed Claude used it.” But it also does not unambiguously demonstrate that a natural, unique, and sharply bounded workbench emerged spontaneously.

## The more precise criticism

The strongest objection is not that the researchers modified Claude's architecture. According to the published method, this did not happen before the baseline observations. The J-lens is applied to activations from already-trained models; additions, swaps, and removals come later as causal tests.

The more precise criticism is different: **the authors selected representations using a criterion inspired by the very theory they wanted to test, then granted that collection the status of an entity called the J-space**.

There is therefore a combination of discovery and construction:

- the activations and their causal relationships already existed in the model;
- the J-lens is a later analytical construction;
- the boundary of the J-space depends on that construction;
- some properties follow naturally from the selection criterion;
- other properties were discovered experimentally and were not necessary consequences.

The risk is **reification**: turning a useful decomposition of activations into an objective part of the machine. A map can reveal true relationships without its drawn borders existing in the same form in the territory.

## Theory-guided confirmation

The authors begin with properties derived from global workspace theory and search for verbalizable representations. They then test tasks where the distinction between flexible and automatic processing is especially clear. The relevant layer range is also bounded partly after patterns are observed.

None of this amounts to fraud or a basic methodological error. It is a common investigative strategy. It does, however, increase the need for independent validation and predictions made before observing results.

A stronger theory should predict:

- which tasks depend on the J-space;
- which models should exhibit it;
- how its capacity changes with scale and training;
- whether alternative methods recover the same structure;
- when an intervention should fail;
- how to distinguish a workspace from directions that are merely well connected to output.

The paper acknowledges several of these limitations. The authors cannot yet predict whether an arbitrary task will engage the J-space. They also do not know whether the lack of readable content in early layers reflects the model or a limitation of the lens.

## What we can claim today

The conservative conclusion remains significant: a collection of verbalizable directions in Claude's activations participates causally in some forms of flexible reasoning. These directions can be read, altered, and partly removed, producing structured behavioral effects.

That is a real contribution to mechanistic interpretability and safety. It may help investigate silent computations, evaluation awareness, manipulation attempts, and the distinction between automatic and deliberate processing.

But the move from “we found causally relevant directions” to “we discovered the model's emergent global workspace” remains interpretive. The evidence supports a functional analogy; it does not compel us to accept a clearly separate mental entity, much less conclusions about consciousness or subjective experience.

## Discovery, instrument, and metaphor

The value of the work lies in the tension among three things.

The **discovery** consists of unexpected causal relationships: intermediate concepts can guide several operations, and removing them selectively harms particular capabilities.

The **instrument** is the J-lens: a constructed way to project activations onto verbalizable directions.

The **metaphor** is the J-space as a global workbench: useful for organizing the findings, but stronger and cleaner than the mathematical object that was observed.

Conflating these three layers produces headlines about a hidden mind inside the model. Separating them produces a less spectacular but more scientifically valuable conclusion: neural networks can develop shared, causally reusable representations, and we now have an imperfect tool for investigating them.

The J-space may be an important window into models' internal processing. We should simply avoid confusing the window constructed by the researcher with a room that was already clearly outlined inside the machine.
