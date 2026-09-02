---
title: "Intelligence now depends on the badge"
description: "Fable 5.1 and Mythos 5.1 share a model but change access, safeguards, and retention. The release shows why capability alone no longer describes an AI product."
published: 2026-09-02
locale: en
translation: a-inteligencia-agora-depende-do-cracha
tags: ["AI models", "Claude", "Security", "APIs"]
featured: false
---

Choosing an artificial intelligence model used to look like a three-column decision: quality, speed, and price. Claude Fable 5.1 and Claude Mythos 5.1 add a fourth column that does not fit neatly on a leaderboard: who can use which capability, under what safeguards, and with what data treatment.

[Anthropic introduced the pair yesterday](https://www.anthropic.com/claude-fable-and-mythos-5-1) as two versions of the same model. Fable 5.1 is generally available for coding and knowledge work. Mythos 5.1 keeps more permissive safeguards for cybersecurity and life sciences, but access is restricted to organizations and professionals vetted by the company.

These are not two brains of different sizes. They are one engine operating under two regimes. That split makes an increasingly important fact explicit: the capability a user receives depends on access policy, classifiers, routing, and retention as well as model weights.

## One model can produce two operating behaviors

Fable 5.1's cybersecurity safeguards are designed to be more precise. Anthropic says they should intervene about 60% less often per Claude Code session than the safeguards introduced with Fable 5. The model can now identify vulnerabilities in source code, allowing a defensive activity that previously collided with controls more often.

The boundary has not disappeared. Penetration testing, exploit development, and binary-based vulnerability analysis may be routed to Opus models. Research and development questions in biology can follow a similar path. The interface still says Claude, but an application that depends on repeatability may be served by a different effective model along the way.

Mythos 5.1 relaxes some of those restrictions for participants in trusted-access programs. It is intended for defensive security and life-sciences research, fields where blocking every sensitive query sacrifices utility while unrestricted access increases risk. The badge is more than a metaphor here: identity, purpose, and monitoring determine which capabilities become available.

The practical response is to record more than the configured model name. Evaluations and regulated systems should capture the version, effort setting, effective route, safeguard intervention, and retention policy. Without that evidence, two runs that both begin with “Fable 5.1” may not represent the same system.

## The price moved where agents reuse context

Fable 5.1 keeps headline input and output prices at $10 and $50 per million tokens. The notable change is cached input, now priced at $0.25 per million tokens, 75% below Fable 5.

Caching matters most in long-running work. An agent that repeatedly consults the same rules, files, and history need not pay the full processing price at every step when that context has already been stored. Anthropic estimates 25% lower cost for typical workloads and savings of up to about 45% for heavily agentic work.

Those percentages are not universal discounts. They depend on how much context an application reuses. A short, isolated call gains little; a long session with many turns over the same foundation may come closer to the favorable case. Cost per completed task is the useful comparison, not only the price of a fresh token.

The application programming interface also changes its state contract. For new accounts using Fable 5.1, preserved reasoning blocks must return with the same earlier context that produced them. If previous messages, tools, or system instructions are changed, a request can fail; in a less strict mode, the affected blocks are removed before the conversation continues. [Anthropic's technical guidance](https://support.claude.com/en/articles/16761192-preserved-thinking-changing-how-the-messages-api-handles-thinking-blocks-to-protect-against-distillation) warns that integrations that rewrite old turns or compact context may need adjustments.

For developers, migration therefore becomes a state-management test. Changing the identifier to `claude-fable-5-1` is only the first step. Teams need to verify caching, compaction, reasoning continuity, error handling, and routing observability.

## Benchmarks measure the operating regime too

Anthropic's published results offer comparisons with Fable 5, but the release includes unusually useful caveats. Fable 5.1 and Mythos 5.1 share the underlying model; gaps on cybersecurity tasks can reflect places where Fable's safeguards intervene. In some evaluations, an intervention is scored as zero. In others, an Opus model completes the task.

That does not make the evaluation meaningless. It makes the object being measured more complete. The score belongs to a combination of model, safeguard, and fallback rule. A benchmark with production controls enabled asks how the delivered product behaves. A test with controls removed probes potential capability. Blending those questions produces an appealing but operationally weak comparison.

The scientific demonstrations deserve the same care. Anthropic reports that Mythos 5.1 designed proteins later tested in laboratories, produced a new elevation map of Venus, and optimized seven open computational-biology models. These are substantial examples, but they were organized and reported by the model provider. They are early evidence and a useful agenda for independent reproduction, not a general guarantee of autonomous scientific discovery.

## A model card is becoming a decision matrix

For a team, selection now starts with the work itself. Routine defensive coding may fit Fable 5.1. More sensitive cybersecurity research may require the Mythos program. An enterprise workflow with zero-retention requirements must check eligibility and the phased availability of new customer-controlled safeguards. A long-running integration should measure how much context it actually reuses and whether its compaction strategy remains compatible.

The release points to a broader market shift. As useful and dangerous capabilities draw closer together, providers are likely to package the same model under different combinations of access and control. “Which model do you use?” is no longer a sufficient question. A complete answer needs the version, the audience, the governing policy, the fallback route, and evidence of what actually ran.

The intelligence may live in the same weights. The product begins with the badge that decides which doors those weights are allowed to open.
