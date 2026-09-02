---
title: "A complex harness is the exam rankings do not run"
description: "Gemini 3.8 Flash joined the small group of models that can do daily work: it survived a complex harness, with a large context, without losing the thread. That is the same threshold Grok 4.5 crossed when it became usable for programming."
published: 2026-09-02
locale: en
translation: o-harness-complexo-e-o-exame-que-o-ranking-nao-faz
tags: ["AI models", "Gemini", "Grok", "AI agents", "ESAA", "Programming"]
featured: false
image: /images/posts/agy-gemini-38-flash.png
---

Google launched Gemini 3.8 Flash today, its third Flash in six weeks, and presented it as the company's best reasoning and coding model at workhorse speed and price. That sentence belongs in a press release. It does not, by itself, belong in an article.

What changed for me was not the version number. It was the model crossing a threshold I had already seen once. When Grok 4.5 started to be useful for programming, the difference was not a row in a table. It was that I could let it close the loop: read the real state of the machine, execute, fail, correct, and continue. I [documented that during the migration to Linux](/en/blog/how-grok-build-helped-me-use-linux-for-real/). Gemini 3.8 Flash reached, in my experience, that same point.

It joined the small group of models that already execute day-to-day work.

## The launch describes a workhorse, not a frontier model

According to [Google's announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/), Gemini 3.8 Flash is the house workhorse: gains in software engineering, agentic tasks, and multi-step reasoning, at the same introductory price as 3.7 Flash, $0.75 per million input tokens and $3.75 per million output tokens through 31 December 2026. From 1 January 2027 the listed rate rises to $1.50 and $7.50. The API id, already generally available, is `gemini-3.8-flash`. There is, as of today, no Gemini 3.8 Pro.

Google says the model "works harder": on complex tasks it takes extra reasoning steps and calls tools iteratively. The [official eval table](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-flash) shows where the gain actually sits. Terminal-bench 2.1 rises from 81.6% on 3.7 Flash to 90.8% on 3.8. SWE-Bench Pro barely moves: 60.4% to 61.6%. The jump is in the long loop, not in the classic issue exam. On [Datacurve](https://deepswe.datacurve.ai/) DeepSWE v1.1, updated today, `gemini-3.8-flash` at high scores 74% ±1% pass@1, against 65% ±2% for 3.7 Flash, tied with Claude Opus 5 at max. DeepMind's methodology records that row as self-computed, mini-swe-agent harness, thinking high. Average cost on that board is $2.36 per task, against $11.84 for Opus 5, and it spends more tokens than 3.7: 143k versus 107k. That confirms the announcement and, at the same time, explains the bill: the workhorse got better because it spends longer in the harness, not because the token got cheaper.

There is a Cyber variant, restricted to defenders in the Fairwind program, trained for vulnerability discovery and patching. Google says some of the shared core's coding gains came from that training. That is the company's own hypothesis, not a result I have reproduced.

Distribution matters more than the slogan. 3.8 Flash ships in the Gemini API, Google AI Studio, Android Studio, Gemini Enterprise, and, for people who write software, [Antigravity](https://antigravity.google/blog/introducing-google-antigravity/), Google's agentic platform. In my case it showed up today in the Antigravity CLI (`agy`), next to 3.7, 3.6, 3.1 Pro, two Claude models, and a GPT-OSS, with an effort control set to low, medium, or high.

![Gemini 3.8 Flash in the Antigravity CLI 1.1.24 model picker, with effort set to high.](/images/posts/agy-gemini-38-flash.png)

That is already a product fact: Google's workhorse now occupies the same kind of surface where a developer swaps brains in the middle of a flow.

## Grok 4.5 was the threshold, not the scoreboard

[Grok 4.5](https://x.ai/news/grok-4-5) arrived in Cursor on 8 July 2026, and xAI published the announcement on 16 July, with the same product thesis spoken by another lab: a model trained for code and agentic tasks, alongside Cursor, available in Grok Build and the API, at $2 and $6 per million tokens. xAI published DeepSWE, Terminal Bench, and SWE-Bench Pro. As usual, each measurement's harness is not the same. The successor, [Grok 4.6](https://x.ai/news/grok-4-6), shipped on 12 August and is the Grok that xAI now recommends for code. 4.5 remains available. There is, as of today, no official coding head-to-head between Grok 4.5 and Gemini 3.8 Flash: 3.8 had not been announced when those charts were assembled.

[Artificial Analysis](https://artificialanalysis.ai/articles/gemini-3-8-flash) scored Gemini 3.8 Flash (high) at 59 on the Intelligence Index, three points above 3.7 Flash (high, 56). On the same index, [Grok 4.5 (high)](https://artificialanalysis.ai/models/grok-4-5) sits at 56. Grok 4.6 (high) is already at 61. 3.8 Flash (high) ties Grok 4.6 at medium effort, also 59. On the [Vals Index](https://www.vals.ai/home) of 1 September, an independent composite, Gemini 3.8 Flash appears at 62.25% and Grok 4.6 at 59.17%. It is still an index, not SWE, and it does not include 4.5.

Those numbers describe a neighborhood, not an identity. They also hide a detail Artificial Analysis makes explicit: cost per task for 3.8 Flash (high) landed at $0.58, about 40% above 3.7 Flash, despite unchanged per-token pricing. The model spends more tokens and takes more turns on agentic evaluations. Cheap per token is not cheap per task. I already treated that distinction when intelligence [became a budget variable](/en/blog/intelligence-is-now-a-budget-variable/).

None of those tables answers the question I was asking. The question was: can this model hold my flow?

## The exam was a complex harness, not a code prompt

I have written that [the model is a brain in a jar](/en/blog/the-model-is-a-brain-in-a-jar/). Two products with the same weights can feel like different systems because the harness changes: tools, memory, and the loop that turns reasoning into action. ESAA is, for my work, a complex harness. It is not a chat with one file open. It is intent, contract, evidence, review, and a trail of what actually happened.

That is what Gemini 3.8 Flash started to do satisfactorily.

The concrete case: I generated lesson 09 of a course, on Python and SQLite, in Antigravity. The context was large. There were previous lessons, a skill of mine for creating classes, and a requirement not to treat each meeting as an isolated piece. The model followed the steps, did not get lost in the material, and cited the earlier lessons. At the end of the run it returned information about the execution itself: the kind of evidence a decent harness needs to expose if it wants to be auditable.

Not everything came out complete. Pieces of the lesson were missing. The model's justification was to reuse files that already existed. That is not a reasoning error. It is a reuse decision a teacher still has to review. Editorial quality still matters more than volume, in a lesson as much as on a blog.

The reading I make, and it is an opinion, not a benchmark: Gemini 3.8 Flash reached the point Grok 4.5 reached when it stopped being a snippet generator and started executing work. I am not saying the two are the same model, nor that 3.8 Flash beat Grok 4.6, Claude, or whoever sits at the top of the week. I am saying it joined the group I already trust for a long task, with rules, project memory, and a real risk of getting lost.

That group is still small.

## What this changes, and what it does not

For people who write software, the practical consequence is routing. The frontier model is no longer the only candidate to sit in the loop. The workhorse, cheap enough to iterate and capable enough not to abandon a procedure, becomes the default option for a lot of daily work. Antigravity's effort control, visible on the same screen where you switch models, is the mechanism: low, medium, or high are not an interface detail. They are a cognitive budget.

For people who evaluate models, the consequence is different. DeepSWE, Terminal Bench, and composite indexes remain useful for locating the neighborhood. They do not replace the dirty test: a harness with its own rules, context that will not fit in an example, dependence on earlier artifacts, and a human who can see when the result came out incomplete. [A score without assembly instructions](/en/blog/the-benchmark-now-comes-with-assembly-instructions/) was already a fragile number. A score without the harness you actually work in is a number from another profession.

The limit has to stay visible. I did not reproduce Google's DeepSWE. I do not have an independent head-to-head, on the same harness, between Gemini 3.8 Flash and Grok 4.5. The evidence that it "joined the group" is operational: a long run, in my flow, with a harness I already used to reject models. That is enough to decide what I put in `agy` tomorrow. It is not enough to declare a universal ranking.

There is still the hidden cost in "works harder." If 3.8 Flash gains capability by spending more tokens per task, the Flash introductory price remains a discount on a bill that grows with the loop. Anyone who sets the model to high for everything will rediscover, sooner, that intelligence is a budget variable.

The ranking will keep moving. Grok 4.6 is already ahead of 4.5 on the Artificial Analysis index; other workhorses will cross the same line in the coming weeks. What should not move is the criterion. A model is good enough for programming when it survives the harness where the work actually happens, returns evidence of what it did, and still lets a human see what was missing.

Gemini 3.8 Flash, today, passed that exam.
