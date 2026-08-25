---
title: "The model is a brain in a jar"
description: "Two products can share a model and still feel like different systems. The difference is usually the harness: tools, memory, and the loop that turns reasoning into action."
published: 2026-08-25
locale: en
translation: o-modelo-e-um-cerebro-numa-jarra
tags: ["AI", "Agents", "Harness", "Software engineering"]
featured: false
---

Two artificial intelligence products can feel like different systems even when they share the same underlying model. In a chat window, the model answers and stops. Inside a developer tool, with files, a terminal, and a cycle that inspects its own results, that same model can spend hours on a software task. The gap is not only the neural network. It is the environment around it.

That environment has a name. An AI agent is the model plus the *harness*: the tools, memory, and rules that turn a prediction into action in the world. [Databricks puts it plainly](https://www.databricks.com/blog/ai-harness): the model reasons; the harness executes, remembers, constrains, and returns evidence. Without that layer, the model is capable and trapped. It is a brain in a jar.

## What the model cannot do alone

A model is the network: ChatGPT, Claude, Gemini, Grok, or an open set of weights. It reads context and produces a next step as text, code, or a tool call. It does not open a file by itself. It does not run native code. It does not browse the web. It does not move a cursor. When the conversation ends, working memory disappears with it.

That limitation matters because leading labs often sit within a few points of one another on the most visible benchmarks. When one product pulls clearly ahead of another, the rare explanation is “we swapped the brain.” The common one is that one of them grew hands, durable memory, and a loop that does not quit after the first reply.

I have [argued before](/en/blog/agent-engineering-is-not-vibe-coding-with-more-autonomy/) that the model is not the whole system. The harness processes input, coordinates tools, and returns results. Judging only the final text is like approving a database migration from the look of a screen.

## Three pieces inside the jar

A harness is not magic. In practice it concentrates three families of mechanisms.

The first is tools. With them, the model stops merely speaking and starts changing state. It reads and writes files. It runs code, preferably in a sandbox. It searches the web. In some products it operates the computer itself: moving a cursor, clicking, filling forms, as in [computer use](https://www.anthropic.com/news/3-5-models-and-computer-use). Much of that surface is built into the harness. For everything else already on the machine, the usual path is still the command line, the same interface a developer would use. Services that do not live on the laptop (a corporate database, a tracker, a CRM) arrive through connectors. The [Model Context Protocol](https://modelcontextprotocol.io/) exists so a tool can plug into any compatible harness without being rebuilt for each product.

The second piece is memory. The context window is working memory: powerful, expensive, and transient. When the session ends, it empties. The harness persists what cannot fit there. Project convention files, such as `AGENTS.md`, are injected at the start of each session so the model knows libraries, limits, and style. When the window starts to fill, the harness compacts: it summarizes what already happened, keeps what is still operational, and drops low-value detail. Instead of shoving the entire repository at the model, it makes the model search. Sometimes with literal search, sometimes with a semantic index. Only the slices the task needs come in. Compacting without preserving the role of each fragment, however, fabricates an incoherent history. That was the subject of a [recent piece](/en/blog/context-needs-a-type-system-too/) on truncation, compaction, and delegation.

The third piece is the loop. The model chooses the next step. The harness performs the action. The result returns as an observation. The cycle repeats for seconds or for hours. The classic form of that pattern is in the [ReAct](https://arxiv.org/abs/2210.03629) paper: reason and act in turns, with the environment returning evidence. Modern harnesses add continuous verification. The model runs tests as it builds. It takes a screenshot of what it rendered. Sometimes it spins up a second model only to review. A system that checks itself can run longer without leaving the path. A system that declares victory on the first generation looks magical until the first silent error.

## Why the distinction changes the question

Separating model and harness makes talk about “AI” less vague. Much of the visible gain in recent cycles did not come only from a larger brain. It came from better tools, memory treated as a system, and more honest verification loops. Models improve as well, of course. The boundary between the two layers is still porous: long-horizon planning and self-checking, which once lived only in the harness, are starting to be trained into the model. Project conventions, by contrast, remain outside the weights. They remain in the jar.

GitHub tried to [isolate that effect](https://github.blog/ai-and-ml/github-copilot/evaluating-performance-and-efficiency-of-the-github-copilot-agentic-harness-across-models-and-tasks/) by comparing agent environments with model, task, window, effort, and tools held constant. The evidence, with the caveats already [discussed here](/en/blog/coding-ai-enters-its-accountability-phase/), does not prove a universal winner. It does show that the surrounding system changes cost and performance. Databricks describes the same phenomenon: the same model rises or falls with the harness.

That is why “is AI good at writing code?” or “is AI good at support?” is the wrong question. We need two questions. Which model is in this scenario? And, if there is an agent, which harness wraps it? A brilliant model in a loose harness gets lost. A median model in a harness with fair tools, recoverable memory, and verification can look like a different product.

The brain-in-a-jar metaphor remains useful, but incomplete if we stop there. The brain gets more capable with each generation. What changes the work, though, is not only the brain. It is also the jar: the hands, the memory, and the loop that refuses to treat an answer as a fact.
