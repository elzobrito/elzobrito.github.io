---
title: "Fast state is not trusted state"
description: "Message threads and a Git backend for thousands of agents show why performance depends on moving state without surrendering the source of truth."
published: 2026-11-03
locale: en
translation: estado-rapido-nao-e-estado-confiavel
tags: ["AI agents", "Infrastructure", "APIs", "Git", "Distributed systems"]
featured: false
---

Artificial intelligence agents are moving beyond isolated model calls. They maintain long conversations, use tools, open several workstreams, and produce changes in parallel. Two developments from the past 24 hours, although aimed at different layers, reveal the same tension: scaling requires moving and reusing state, while correctness requires knowing where the source of truth lives.

Anthropic released [message threads for the Claude API](https://platform.claude.com/docs/en/build-with-claude/message-threads) in beta. OpenAI introduced [Pando, a Git-compatible backend built for agent-scale work](https://openai.com/index/scaling-git-at-openai/). One reduces the cost of resending conversations; the other avoids rebuilding Git packs for every client. Neither gain comes from pretending state has disappeared. Both come from representing its dependencies more carefully.

## The conversation moves to the server, but does not belong to it

With Anthropic's Messages API, an application would normally resend the full history on every turn. The server has to receive, validate, and tokenize that prefix again even when only the latest message has changed. Long conversations therefore mean larger requests and potentially higher time to first token.

With message threads, the first call sends the history, system instructions, and tools. Later calls send only the new messages and the identifier of the previous response. The API rebuilds the conversation before invoking the model. For a long agent loop, this resembles replacing repeated full-file transfers with a chain of incremental changes.

The failure contract matters more than the happy path. The feature is in beta, is not eligible for zero data retention or HIPAA workloads, and keeps ephemeral state: a thread expires five minutes after its last request and is deleted no more than one hour after its last use. A continuation can also return `404` for other reasons, including when the previous response was served but not stored.

Anthropic's documentation therefore says the application remains the source of truth. It must retain every message and be able to replay the full conversation. The server provides a fast path, not a durable ledger.

That distinction prevents a common agent-architecture mistake: treating a cache, session, or transport convenience as persistent memory. If a process must survive a restart, support an audit, or resume hours later, its history needs to exist outside the thread.

## Git scales by declining to order what needs no order

Pando faces the same problem at a different layer. OpenAI says increased parallel work with Codex produced more branches, pushes, merges, fetches, and clones. At times, reliability in the infrastructure serving its monorepository fell below 90 percent.

Rather than replace the Git protocol, the team rebuilt the backend. Pando stores incoming packfiles as immutable objects, records reference versions in a metadata service, and lets updates to independent branches proceed in parallel. A client reading several branches may see them at different moments; updates to any single reference, however, remain serializable.

This is a deliberate tradeoff. A globally consistent snapshot of millions of references would impose coordination costs for a property that users and agents rarely require. The essential guarantee is the causal history needed to fetch a branch and contention when two writers try to move the same reference, not when they work on unrelated references.

On reads, Pando reuses existing packfiles served through regional caches instead of calculating and compressing a bespoke pack for every client. On writes, it validates the pack while streaming it to object storage, without unpacking it into a local repository. OpenAI reports that the architecture supports many thousands of concurrent clients on its monorepo, while correctly labeling its published simulations as synthetic teaching models rather than production benchmarks.

In practical terms, the design favors teams and agents working on separate branches while generating heavy continuous-integration traffic. Git compatibility preserves existing clients and habits; the architectural change is concentrated in the service coordinating objects and references.

## Reusable state is becoming a performance primitive

For years, optimizing AI applications mostly meant reducing inference latency or choosing a smaller model. In agent systems, cost also accumulates in transporting context, rebuilding history, negotiating repositories, and coordinating writers.

The parallel is revealing:

- a message thread points to the previous response and sends only the new portion of the conversation;
- Pando records causal versions of a reference and reuses the packs that produced its history;
- both accelerate the common path without promising a global, permanent, infallible view;
- both require an explicit recovery strategy when the fast path is unavailable.

This changes practical engineering decisions. An application adopting message threads should test full-history replay after expiry, dropped streams, and mismatched fixed parameters. A development platform with many agents should isolate branches, define who may update each reference, and treat integration as a governed stage rather than a side effect of concurrency.

The day's most interesting advance is neither magical memory nor conflict-free Git. It is an engineering lesson: fast systems do not eliminate state. They make explicit which state can be reused, for how long, and under which causal relationships. Reliability begins when the fast path fails and the process can still reconstruct the truth.
