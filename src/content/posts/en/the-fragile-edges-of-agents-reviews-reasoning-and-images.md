---
title: "The fragile edges of agents: reviews, reasoning, and images"
description: "Recent Codex and llama.cpp fixes show why reliable agents depend on stable reviewers, multimodal adapters, and well-defined message boundaries."
published: 2026-07-13
locale: en
translation: as-bordas-frageis-dos-agentes-revisao-raciocinio-e-imagens
tags: ["AI", "Agents", "Open source", "Engineering"]
featured: false
---

Not every meaningful advance arrives as a new model. Over the past several hours, two open codebases widely used by developers — [Codex](https://github.com/openai/codex) and [llama.cpp](https://github.com/ggml-org/llama.cpp) — shipped fixes that look modest in isolation. Taken together, they expose a larger engineering problem: agents often fail at the boundaries between components, not only in the reasoning core.

A reviewer can follow the wrong policy. An internal marker can leak into the answer. An image returned by a tool can disappear while messages are converted between formats. A single null byte can silently cut off the rest of a conversation.

None of these cases makes for a dazzling demo. For anyone operating agents in real systems, however, they are the details that separate a persuasive experience from a dependable one.

## The reviewer is a versioned system too

[Codex 0.144.2](https://github.com/openai/codex/releases/tag/rust-v0.144.2) restored the previous Guardian review policy, request format, and tool behavior. The release rolled back a regression introduced in the guidance used by the review system.

The important part is not merely that a bug was fixed. It is that an agent reviewer has versioned behavior. Changing its instructions, available tools, or input contract can alter its conclusions even when the code under review is exactly the same.

AI-assisted review is sometimes treated as an abstract second opinion: send a diff in and receive findings back. In practice, the reviewer is a composed system. It relies on policy, an input contract, correct tool access, and criteria for deciding what deserves attention.

The practical consequence is straightforward. Teams should not validate only that “the reviewer answered.” They should track the quality and stability of its conclusions across releases. A compact set of known changes — including issues that should be caught and harmless patterns that should not — can serve as a regression suite for the reviewer itself.

## Internal reasoning needs an actual boundary

In [llama.cpp build b9986](https://github.com/ggml-org/llama.cpp/releases/tag/b9986), a fix addressed reasoning leakage in models whose templates explicitly open a `<think>` section. A marker inferred from earlier turns could include trailing whitespace or a newline, while the current template prefilled only the bare marker. That small mismatch was enough to break the split.

This is a useful reminder that two strings that look equivalent to a person may represent different machine contracts. `<think>` and `<think>\n` express the same intent to us, but they are not the same sequence of characters.

The previous behavior could classify content intended for an internal section incorrectly. The fix trims the marker used for the split so the bare prefill is recognized.

The lesson reaches beyond one model family. Many systems use delimiters to separate reasoning, final answers, tool calls, and metadata. If those boundaries depend on brittle text conventions, one unexpected space can cross a line that appeared secure.

Maintainers of local runtimes should test templates with whitespace variations, line breaks, and realistic histories. A short, perfectly formatted conversation is not representative of the traffic a working server will receive.

## The image that vanished inside the adapter

A second fix, released in [build b9977](https://github.com/ggml-org/llama.cpp/releases/tag/b9977), affected conversion from Anthropic-style messages to OpenAI-style messages. Image blocks inside tool results were discarded, so the model received the text but not the image returned by the tool.

The build now maps those blocks to compatible multimodal parts while leaving text-only results as simple strings for backward compatibility.

The comparison with the previous state highlights a recurring risk. An endpoint can accept two familiar formats and still lose meaning while translating between them. The failure may sit neither in the model, the tool, nor the client, but in the adapter connecting them.

Consider a visual inspection agent that asks a tool for a screenshot. The tool works, the network delivers the response, and the server reports success. The agent still sees only text because the image disappeared midway. Without tests that verify semantic payloads, every component can look healthy on its own.

For multimodal applications, checking status codes and schemas is not enough. Tests should confirm that every modality survives the complete path: text, images, audio, and the metadata connecting each item to the original tool call.

## The invisible byte that cut off a conversation

[Build b9979](https://github.com/ggml-org/llama.cpp/releases/tag/b9979) fixed another boundary failure. A structure carried text as a pointer without an explicit length. If the content contained a null byte, tokenization stopped there and silently dropped later messages and the assistant marker.

The fix added a text length and threaded it through the multimodal path, bringing that path in line with the text-only route.

For languages and interfaces that treat a null byte as the end of a string, this is a classic bug. The agent context raises the stakes: truncating a conversation does not merely lose characters. It can remove a later instruction, detach an answer from a tool result, or change the state the model believes it is seeing.

A practical defense is to pass data together with explicit lengths and include special bytes in test inputs. Recording sizes before and after each conversion also helps. If a system receives 12,000 bytes and hands 7,000 to the tokenizer, that difference should be observable.

## The less glamorous lesson is the useful one

These fixes do not suggest that Codex or llama.cpp are unusually fragile. They show what mature projects do well: make concrete failures visible, fixable, and testable.

Composition is the common pattern. Modern agents combine a model, history, tools, reviewers, protocol converters, and multimodal interfaces. Every connection adds capability, but it also creates another boundary where meaning can change or disappear.

The next stage of agent engineering therefore depends on more than better answers. It requires contracts that survive unexpected whitespace, different modalities, special bytes, and version changes. Intelligence without transport integrity is like a brilliant specialist receiving a report with missing pages: judgment quality matters little when the evidence arrives incomplete.

On a day without major model launches, the most valuable progress may be exactly this: closing the gaps through which reliability escapes.
