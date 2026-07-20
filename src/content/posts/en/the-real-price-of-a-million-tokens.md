---
title: "The real price of a million tokens"
description: "Kimi K3's pricing shows why long context depends less on the advertised limit than on caching, output, and application design."
published: 2026-07-19
locale: en
translation: o-preco-real-de-um-milhao-de-tokens
tags: ["AI", "Models", "APIs", "Infrastructure"]
featured: false
---

A one-million-token context window sounds like a solution to memory in artificial intelligence systems. It can hold a large repository, a contract collection, or months of conversations. Yet maximum capacity and sustainable use are different things. The most useful update in this news window is not another benchmark result. It is a price sheet that makes the distinction tangible.

Moonshot AI introduced Kimi K3 on July 16. The company's [official pricing and access guide](https://www.kimi.com/resources/kimi-k3-pricing), published July 18, now makes it possible to discuss the model as infrastructure rather than as a demo. Through the application programming interface (API), K3 accepts up to 1,048,576 context tokens. Input costs $3 per million tokens when it misses the cache and $0.30 when it hits; output costs $15 per million.

## A long window is not free memory

The change from Kimi K2.7 Code and K2.6 is straightforward. The [API platform](https://platform.kimi.ai/) lists 256,000-token windows for those models and one million for K3, roughly quadrupling the available space. K3 also combines text and image input and is positioned for long-horizon software engineering, knowledge work, and reasoning.

The limit only says how much a request may contain. It does not say how much a request should contain. Repeatedly sending one million uncached tokens would cost about $3 in input alone for every call; generating 100,000 tokens would add $1.50. This is simple arithmetic, not a suggested workload, and it illustrates why “it fits” does not mean “send everything.”

For a development team, placing an entire repository into every interaction may raise cost and latency while making the relevant files harder to distinguish. Sound architecture still needs file selection, history compression, and a boundary between stable material and information that changes on each turn.

## Caching becomes an architectural choice

The tenfold gap between fresh and cached input is the table's most consequential detail. When a document collection or source tree remains stable across requests, reusing that context cuts input pricing from $3 to $0.30 per million tokens. Caching is no longer a minor optimization; it shapes how an application organizes sessions, prefixes, and shared data.

This favors workloads with a large stable core and a small changing question: reviewing several changes against the same standards, examining multiple cases over one document set, or iterating on a repository without treating every byte as new. A workflow that rebuilds its entire context on each call gives up much of that economic advantage.

There is another asymmetry. Output is five times the price of uncached input and fifty times the price of cached input. Very long answers can cost more than supplying the working material. Output limits, structured responses, and short stages are therefore infrastructure controls as much as user-experience choices.

## A larger window changes the question

Kimi K3 still needs task-specific evaluation. Vendor-reported numbers do not replace independent testing, and a broad context window does not guarantee equal attention to every passage. The concrete benefit is narrower: codebases and documents that previously had to be split can remain together when continuity matters.

The useful question is no longer “how many tokens can the model accept?” It is “which tokens must remain, which can be retrieved when needed, and which are we paying to repeat?” Long context removes a meaningful constraint. Engineering begins when we decide not to fill all the space it gives us.
