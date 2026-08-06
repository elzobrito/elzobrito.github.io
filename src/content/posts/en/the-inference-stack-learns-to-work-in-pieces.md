---
title: "The inference stack learns to work in pieces"
description: "Two vLLM changes separate request preparation, model execution, and GPU dependency, making infrastructure easier to test without hiding its limits."
published: 2026-08-06
locale: en
translation: a-pilha-de-inferencia-aprende-a-funcionar-por-partes
tags: ["AI infrastructure", "Open source", "vLLM", "Inference"]
featured: false
---

Serving a model looks like one task: accept a conversation, turn it into tensors, run inference, and return text. That sequence actually contains several contracts. The more tightly they are bound to one process and one kind of hardware, the harder each part becomes to test, replace, or diagnose.

Two vLLM changes merged on August 6 loosen that coupling from different directions. One [adds a standalone renderer to the Rust frontend](https://github.com/vllm-project/vllm/pull/50289), preparing requests without starting an inference engine. The other [introduces a CPU backend for Multi-head Latent Attention](https://github.com/vllm-project/vllm/pull/49453), making DeepSeek-V2 and V3 style models runnable without a GPU. Neither completes the whole architecture. Together, they show why mature infrastructure needs to work in smaller pieces.

## Request preparation does not require model execution

Before a model generates tokens, a server validates the request, applies a chat template, tokenizes the input, and builds the internal representation consumed by the engine. The new `vllm-rs render` command reuses that preparation path without starting or connecting to an inference engine.

The service provides dedicated routes for rendering chat and completion requests, alongside health and model endpoints. This creates a useful testing boundary: teams can check whether messages, parameters, and templates become the expected request without loading weights or occupying accelerators. It also points toward architectures in which request preparation stays close to the API while expensive execution runs in a separate component.

Its limits matter just as much. This stage handles text only. Its output is also an internal Rust structure, not yet the wire format consumed by vLLM's distributed Python path. The renderer can already isolate and test preparation, but it is not a finished cross-service protocol.

## CPU correctness before CPU speed

The second change moves a hardware boundary. Multi-head Latent Attention (MLA) compresses the key-value cache used during generation. vLLM already had shared MLA scaffolding and a CPU decode kernel, but it lacked the complete path needed to run DeepSeek-V2 and V3 style models on that platform.

The new backend uses PyTorch's Scaled Dot-Product Attention (SDPA) for prefill. Decode reuses the existing CPU kernel, while a small PyTorch fallback writes the latent cache. The result is deliberately a reference path built for correctness first. People without a compatible GPU can initialize and explore these models, and developers gain a more accessible environment for tests and debugging.

This does not make CPU serving a replacement for an accelerated deployment. The change explicitly says performance is not its goal. Prefill is intentionally slow, chunked prefill and prefix caching are disabled, and some dimensions remain fixed. Its immediate practical value is compatibility, testing, and fault isolation rather than high request throughput.

## Portability exposes hidden assumptions

Validation on ARM-based Macs uncovered two bugs in existing CPU code. A fused multiply-add operation discarded its return value, leaving attention scores at zero. Another accumulator could begin with uninitialized memory. Implementation details on x86 happened to conceal both problems.

That episode reveals a benefit that speed benchmarks miss. Moving the same algorithm across hardware forces implicit assumptions into the open. Portability is not only a longer list of supported machines; it is a way to test a software contract under different conditions.

## The unit of progress gets smaller

Both changes shrink the minimum unit that must work at once. Request transformation can be tested without model execution, and an attention path can be checked without assembling a GPU stack. Decomposition does not remove complexity, but it places complexity behind boundaries that can be observed and compared.

For teams building on open models, the consequence is practical. Template tests can become cheaper, compatibility failures can be reproduced on more machines, and API and execution components can evolve at different speeds. The inference stack did not simply grow another pair of features. It began to acknowledge that its parts have separate responsibilities, and that each part should prove itself before demanding the rest of the system.
