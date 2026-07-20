---
title: "The AI race moves down the stack"
description: "Alibaba's new architecture shows why agents depend on observability, routing, and hardware software as much as on the model."
published: 2026-07-20
locale: en
translation: a-disputa-da-ia-desceu-para-a-pilha
tags: ["AI", "Agents", "Infrastructure", "Open source"]
featured: false
---

Models dominate most conversations about artificial intelligence. Once an agent must work for hours, call tools, and share tasks with other agents, however, the model becomes only one part of the system. The most useful announcement in this window came from Alibaba Cloud because it makes the rest of that machinery visible.

At the [World Artificial Intelligence Conference (WAIC)](https://www.alibabacloud.com/blog/alibaba-cloud-unveils-agent-native-innovations-at-waic-2026_603377), the company introduced an architecture that separates three jobs: operating agents, serving models, and connecting software to hardware. It does not give agents a magical new ability. It tries to turn components that teams currently assemble one by one into an integrated stack.

## Agents get an operations layer

The suite brings together AgentRun, AgentLoop, and AgentTeams. AgentRun covers development, deployment, and operations; AgentLoop adds tracing, evaluation, and optimization; AgentTeams coordinates multiple agents and their governance.

Previously, a team could connect a model to tools and call the result an agent. That is enough for a short demo. Production raises less glamorous questions: which step failed, why a tool was called, how much an attempt cost, and when a person should stop the flow. Observability and control become core requirements because one agent's output may become another agent's input—or permission.

In practice, this layer resembles software operations more than a chat box. A support workflow, for example, could separate triage, document retrieval, and execution of an action. The design is trustworthy only if every handoff can be traced and coordination rules restrict what each participant may do.

## Inference becomes a traffic problem

The second component is TokenWorks, integrated with Platform for AI (PAI). It combines request routing, inference execution, compute reuse, and scheduling. The [service documentation](https://www.alibabacloud.com/help/en/pai/create-and-manage-workstations) shows that each group receives its own base URL and key, creating an operational boundary around models and applications.

That separation matters because agents create a different workload from a single chat. They repeat long instructions, maintain extended sessions, and may trigger several parallel calls. TokenWorks' [cache configuration](https://www.alibabacloud.com/help/en/pai/tokenworks-config-center) explicitly targets repeated prefixes such as fixed instructions and batch document processing. Instead of selecting a model and hoping the economics work, the infrastructure can decide where each call goes and what computation can be reused.

The improvement over a conventional deployment is not the elimination of cost or latency. It is the ability to manage them as traffic, with routes, groups, credentials, and inspectable policies.

## The code between model and chip

The third component is the open sourcing of T-Head SAIL, a software stack optimized for Zhenwu chips. According to the announcement, it spans operating systems, software development kits (SDKs), and interfaces compatible with established AI ecosystems.

It is too early to judge actual portability: the announcement does not identify a specific repository or provide independent evidence about migration effort. The direction still matters. An accelerator competes through more than compute capacity. It needs compilers, libraries, debuggers, and documentation before an application can leave the lab. Opening this layer is an attempt to lower the cost of adopting hardware outside the dominant ecosystem.

## The stack is the thesis

Alibaba also made Qwen 3.8-Max-Preview available on some of its platforms and said it intends to release the model weights. Because the announcement does not yet include those weights, technical documentation, or independent evaluations, the promise should not be treated as a completed open release.

What can already be assessed is the architecture around the model. Useful agents need capable models, but they also need traces, boundaries, routing, caching, and a software layer that can speak to the hardware. The AI race is moving down the stack because performance without operations is only a demo—and operations without portability merely replace one dependency with another.
