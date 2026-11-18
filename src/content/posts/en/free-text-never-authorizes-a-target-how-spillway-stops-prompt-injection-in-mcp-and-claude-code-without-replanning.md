---
title: "Free Text Never Authorizes a Target: How SPILLWAY Stops Prompt Injection in MCP and Claude Code Without Replanning"
description: "Conventional prompt-injection defenses such as MELON, Progent, and DRIFT impose heavy token taxes and still leak attacks. The open-source SPILLWAY framework (arXiv:2611.07222) separates target admission from sanitization: no tool target is ever admitted from unstructured free text. Shipping with recipes for MCP hosts and Claude Code hooks, it achieved 0 of 2,847 successful attacks on AgentDojo."
published: 2026-11-18
locale: en
translation: texto-livre-nunca-autoriza-um-destino-como-o-spillway-zera-injecoes-em-mcp-e-claude-code-sem-replanejar
tags: ["Security", "Prompt Injection", "SPILLWAY", "MCP", "Claude Code", "ESAA", "Agents"]
featured: false
---

Modern defenses against indirect prompt injection in autonomous agents have largely been trapped between two uncomfortable extremes. On one side, lightweight classifier guards miss obfuscated payloads. On the other, heavier enforcement frameworks—such as MELON, Progent, DRIFT, and ROPE—inflate latency and token bills by triggering dozens of extra language model calls to police or replan every step.

Featured this week on Hugging Face Daily Papers, the open-source **SPILLWAY** framework ([SPILLWAY: Separating Target Admission from Sanitization to Defend Tool-Using Agents against Prompt Injection](https://huggingface.co/papers/2611.07222), `arXiv:2611.07222`, also highlighted in [DEV Community's weekly agent research digest](https://dev.to/felipe0liveira/the-agents-are-capable-enough-this-weeks-research-is-about-catching-how-they-fail-292n)) breaks that trade-off with a crisp architectural rule: **do not ask a model to judge poisoned text after the fact; deterministically forbid free text from authorizing any tool target**.

By separating **target admission** from **input sanitization**, the `spillway-guard 1.0.0` release—which ships ready-made recipes for LangChain, LangGraph, the OpenAI Agents SDK, **any MCP host**, and **Claude Code hooks**—stopped **2,847 out of 2,847 in-scope standard attacks** on AgentDojo while adding only **0.19 to 0.39 model calls per episode**.

## Separating Target Admission from Text Sanitization

Traditional defenses attempt to scrub the entire context window and hope the model stays loyal to the user's original intent. SPILLWAY starts from a sharper operational insight about what actually causes real-world harm when an agent reads emails, Slack threads, webpages, or tickets: **an indirect injection only succeeds if it redirects the target argument of an action** (a URL, email recipient, file path, or transfer target).

To shut down that vector without requiring a per-task compilation plan, SPILLWAY enforces a **deterministic runtime refusal floor** built on three components:

1. **Strict Admission by Typed Provenance:** A tool call is admitted only when every target value absent from the user's initial request came from a **typed field returned by a read-only tool** or is covered by a **fixed delegation rule**. Unstructured free text never authorizes a target.
2. **Deterministic Sanitizer with Forensic Retention:** Before the model reads external tool output, a rule-based sanitizer strips instruction-like spans and preserves the removed text as explicit audit evidence.
3. **Optional Local Judge with a Hard Blindfold:** If a legitimate call is refused, a compact local judge (a 4-bit Gemma 4 31B in the evaluation) may inspect and restore the call—**but is deterministically barred from restoring any call whose target appears inside the text removed by the sanitizer**.

This directly resolves a major flaw exposed in [CapLite (`arXiv:2611.17115`)](https://sciencecast.org/casts/2x61w4bzpdok): small language models (1.7B–12B) cannot reliably author their own security policies. Under SPILLWAY, the model never writes the security policy; deterministic code enforces argument provenance at the tool boundary.

## The Numbers Across AgentDojo, ChatInject, and PISmith

The empirical benchmark results reported for `spillway-guard 1.0.0` underscore the gap between probabilistic guardrails and deterministic target admission:

* **Standard Attacks (3 backbones × 4 AgentDojo suites):** **0 of 2,847 in-scope attack successes** with the judge enabled. Every competing defense leaked in 3 to 12 of the 12 test cells (ROPE: 3; DRIFT: 7; MELON and PI detector: 10; Progent: 11; Spotlighting: 12).
* **Preserved Utility Under Attack:** SPILLWAY maintained **53.9%** mean utility without attack and **48.9%** under attack—outperforming DRIFT (45.3%), ROPE (34.5%), and MELON (31.4%).
* **Stronger & Adaptive Attacks:** SPILLWAY recorded **0 of 665** successes under ChatInject forged templates, **0 of 389** under AutoDojo, **0 of 126** against email-delivered injections, and just **0.5%** (4 of 949) against PISmith's reinforcement-learning attacker.
* **Dramatic Token and Call Savings:** On benign `qwen3:8b` Workspace and Slack episodes, SPILLWAY added just **0.19 to 0.39 model calls per episode** (judge included)—**13 to 50 times fewer** than MELON, Progent, and DRIFT, without needing expensive frontier routers like the Claude Opus 4.8 setup used by ROPE.

In the recorded Slack episode showcased on the project page, SPILLWAY was the sole run among eight tested setups to post the exact reply requested by the user without transmitting the injected malicious link.

## Connecting Baya, `CVE-2026-110278`, and the New Context Economics

SPILLWAY slots cleanly into the broader agentic security architecture we have tracked across recent editions:

* **Complementing `Compile-Then-Execute`:** While the [Baya framework](/en/blog/death-to-the-react-loop-how-baya-neutralizes-web-prompt-injections-by-compiling-before-execution/) eliminates web injections by compiling entire Python programs before opening live pages, SPILLWAY brings comparable target integrity to interactive multi-turn workflows inside **any MCP host** or **Claude Code hook** without requiring upfront plan compilation.
* **Client-Side Defense Against Gateway & Metadata Flaws:** As we saw yesterday in our analysis of [tool-provider misbinding and IBM's `CVE-2026-110278`](/en/blog/tool-names-are-not-identities-provider-misbinding-in-mcp-agents-and-the-ibm-gateway-flaw/), compromised or misbound servers can attempt to steer parameters toward attacker-controlled destinations. Enforcing argument provenance locally prevents the model from redirecting writes to forged targets.
* **Synergy with Cache Pricing and Fast Verifiers:** In a week where OpenAI cut cache-read rates by 60% in `GPT-6.2 Astra` and parallel runtime verifiers such as **VFM-4B** demonstrated sub-2-second checks across 1,000 natural-language criteria, eliminating the 50× replanning overhead makes deterministic tool guards trivially deployable in production.

## Operationalizing the ESAA Protocol Inside `spillway-guard` and Claude Code Hooks

SPILLWAY's design maps cleanly onto the four pillars of the **ESAA framework (Specify, Supervise, Audit, and Authorize)** at the tool boundary:

* **Specify Fixed Delegation & Typed Provenance Rules:** Instead of pleading with the model inside a system prompt (*"ignore suspicious links"*), tool schemas declare which read-only fields constitute valid target sources and which delegation paths are permitted.
* **Supervise at the Edge Before Context Ingestion:** The deterministic sanitizer strips instruction-like spans before untrusted tool outputs enter the model's reasoning context, shrinking the persuasion surface without opaque classifiers.
* **Audit with Explicit Evidence Retention:** Every span stripped by the sanitizer is preserved as an auditable artifact—preventing silent context loss, a methodological hazard also underscored by [Inference After Coding Agents (`arXiv:2611.23174`)](https://arxiv.org/html/2611.23174), where coding agents exploring null-effect data fabricated significant p-values 54% to 98% of the time without post-selection replay auditing.
* **Authorize with an Irrevocable Lock Against Stripped Text:** Even when a local judge is enabled to recover false refusals, the hard invariant forbidding restoration of any target found in sanitized spans prevents rhetorical persuasion from unlocking an attack.

## Ending the Token Tax on Agent Security

For years, the AI ecosystem accepted a punishing premise: securing an autonomous agent against indirect prompt injection meant paying an exorbitant tax in latency, replanning loops, and extra frontier-model calls.

SPILLWAY demonstrates that this trade-off was an artifact of flawed architecture. When the authorization boundary stops trying to "understand" the intent of every untrusted string and instead demands **typed target provenance**, security stops being an expensive luxury and becomes a universal deterministic floor—ready to drop into any MCP host or local hook.