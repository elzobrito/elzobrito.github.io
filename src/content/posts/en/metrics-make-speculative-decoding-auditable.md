---
title: "Metrics make speculative decoding auditable"
description: "llama.cpp now exposes speculative-decoding counters through /metrics, bringing an inference optimization closer to the observability needed to decide whether it pays off."
published: 2026-08-05
locale: en
translation: metricas-tornam-a-inferencia-especulativa-auditavel
tags: ["Local AI", "Open source", "llama.cpp", "Observability"]
featured: false
---

An optimization becomes a product improvement only when someone can see its effect. On August 5, [llama.cpp added speculative-decoding counters to its `/metrics` endpoint](https://github.com/ggml-org/llama.cpp/pull/26389). The change also brings parameter names into exact alignment with vLLM, another widely used inference server.

This is neither a new model nor a promise of automatic speed. It is a quieter change: people operating a local server now have signals for checking whether an attempt to accelerate generation is actually helping.

## What the counters make visible

In speculative decoding, an auxiliary model proposes tokens and the main model verifies them. When proposals are accepted, generation can advance in chunks; when they are rejected, the benefit falls. The outcome depends on the model, workload, configuration, and hardware. Enabling the feature is therefore not evidence that latency improved.

Putting counters for that path into `/metrics` lets a server feed an existing telemetry collection system. A team can relate speculative-decoding activity to latency, accelerator use, and request rate in its own environment. The meaningful unit is the relationship, not any isolated number: a high counter does not demonstrate a benefit if response time does not move with it.

That makes a controlled comparison practical. Run the same workload with and without speculative configuration, retain the endpoint series, then compare latency percentiles and served capacity. A consistent improvement gives the optimization an operational basis; no improvement means it is no longer a mysterious setting maintained on faith.

## Compatible names remove friction

The change says its parameter names now match vLLM's exactly. That does not make the projects identical, but it removes a concrete source of friction for teams that switch between, compare, or monitor different servers. Dashboards, alerts, and operating procedures need less mental translation between similar vocabularies.

There is a wider lesson. AI infrastructure often announces performance through models and kernels, while production work begins afterward: deciding when to enable a technique, detecting regressions, and explaining the result to the people who maintain the service. Metrics with recognizable conventions are part of that contract.

## Speed that can be challenged

The most useful part of this update is not a claim that inference is faster. It makes that claim testable. For a team running models locally, the conversation can move from “we enabled an optimization” to “we measured its behavior on this workload, this hardware, and this latency budget.”

As inference servers accumulate acceleration techniques, observability stops being finishing polish. It is what separates a possibility in code from a defensible technical decision.
