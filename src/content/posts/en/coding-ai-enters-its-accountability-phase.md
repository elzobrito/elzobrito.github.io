---
title: "Coding AI enters its accountability phase"
description: "GitHub's new Copilot impact dashboard moves beyond usage counts toward cohorts, delivery, and velocity, while exposing why contribution still needs careful context."
published: 2026-07-23
locale: en
translation: a-ia-de-codigo-entrou-na-fase-da-prestacao-de-contas
tags: ["AI", "Software development", "Metrics", "Agents"]
featured: false
---

Artificial intelligence adoption in software development has moved faster than our ability to explain its results. License counts and chat activity can show that a tool is present. They cannot tell us whether the software improved, shipped sooner, or became cheaper to maintain.

GitHub's [new Copilot metrics impact dashboard](https://github.blog/changelog/2026-07-22-new-copilot-usage-metrics-impact-dashboard/) tries to narrow that gap. Instead of stopping at active users, it groups people by adoption phase and connects each group to merged pull requests, merge velocity, and code volume. The interface change is modest, but the question is better: not merely "who opened the tool?" but "how did the work change?".

## From access to working patterns

The dashboard divides engaged users into three cohorts: code-first, agent-first, and multi-agent or Copilot app users. A passive segment covers people who have a license but are not engaged. Classification uses product activity over a rolling 28-day window.

For each group, administrators can see average pull requests merged per user per month, median merge velocity, the number and share of users, and average lines of code per day. Six-month trends show whether cohort size and pull request throughput are changing.

An organization could previously call a rollout successful because active-user numbers went up. It can now form more useful hypotheses. Do teams moving from occasional suggestions to agent-led work merge changes at a different rate? Does faster integration arrive without review bottlenecks or more corrections later?

That second question exposes the dashboard's boundary. Lines of code and pull requests measure motion, not value. A small repair may matter more than a large change, and a quick merge may reflect shallow review. These metrics can locate differences worth investigating. They should not become a scoreboard for individual productivity.

## Cost belongs to the whole system

On the same day, GitHub published a [comparison of Copilot and direct model API access](https://github.blog/ai-and-ml/github-copilot/copilot-vs-raw-api-access-what-are-you-actually-paying-for/). Its useful point goes beyond pricing: task cost depends on the model and on the surrounding system that selects context, exposes tools, preserves instructions, retries calls, and carries work through review.

An earlier GitHub evaluation attempted to [isolate the effect of that agent harness](https://github.blog/ai-and-ml/github-copilot/evaluating-performance-and-efficiency-of-the-github-copilot-agentic-harness-across-models-and-tasks/). It normalized the model, task, context window, reasoning effort, and tools across competing environments. GitHub reports similar task-resolution rates with lower token use in most tested configurations.

The limitations matter. The evidence comes from the vendor, some benchmarks contain fewer than one hundred cases, and the methodology reports the best of five runs for smaller sets. For TerminalBench 2.0, each configuration ran five times and the chart displayed run-to-run variation. The findings support a restrained conclusion: the system around a model can change cost and performance. They do not establish a universal winner.

## The grown-up question

Teams can apply the idea by joining three layers of evidence. Start with adoption: who uses the tool and how. Add flow: merge time, delivered changes, and cost per task. Then add quality: production failures, rework, security, maintainability, and reviewer experience. No layer can stand in for the others.

Coding AI is entering a less spectacular and more useful phase. The model still matters, but a persuasive demonstration is no longer enough for a sound decision. The grown-up question is whether the whole system improves real work when cost, variance, and consequences are visible.
