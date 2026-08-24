---
title: "Context needs a type system too"
description: "New Codex changes show why truncating, compacting, and splitting a conversation must preserve not only content but also the source and role of each part."
published: 2026-08-24
locale: en
translation: contexto-tambem-precisa-de-um-sistema-de-tipos
tags: ["AI agents", "Codex", "Context engineering", "Multimodality"]
featured: false
---

A conversation with an artificial intelligence agent looks like a sequence of messages. Internally, it behaves more like a structured document. User text, system instructions, permission rules, images, tool results, and notices produced by the surrounding environment can all occupy the same context window. They may reach the model in one sequence, but they do not share the same source or purpose.

That distinction becomes fragile whenever the history changes shape. A long message is truncated to fit a token budget. Several turns are replaced by a compact summary. An image unsupported by the next model becomes text. A child agent receives only part of its parent's conversation. If the words survive while their labels do not, each operation can leave behind an internally inconsistent history.

A cluster of changes merged into the [open Codex repository](https://github.com/openai/codex) over the past several hours addresses that problem. Their common thread is not a new visible feature but a representation contract: content and metadata must travel together through every transformation. It resembles a type system. The value is not only in carrying data, but in knowing what kind of data each item is.

## Truncation is not just cutting off the end

When a message exceeds the available space, a naive implementation keeps the items that fit and rebuilds the result. The complication is that labels may live in a positional list: the first label describes the first content item, the second describes the second, and so on. Remove text and images without applying the same operation to that list, and retained items can acquire the wrong classifications.

The [truncation fix](https://github.com/openai/codex/pull/40264) combines content and classifications into one annotated structure before applying the budget. It then writes both back together while preserving other message-envelope metadata. Legacy content without a classification receives `unknown` rather than an invented source.

The failure resembles deleting spreadsheet rows without shifting the category column. Every value remains readable, but the labels now describe something else. In an agent context, that mismatch can blur user text, internal fragments, and processed media. The change does not promise to resolve every ambiguity. It prevents the transformation itself from manufacturing a false classification.

## Multimodal compaction must charge for what it retains

A budget also needs to represent the history's actual cost. The [change that accounts for retained images](https://github.com/openai/codex/pull/40280) starts from a specific flaw: remote compaction counted text but not preserved images. Image-heavy history could therefore retain more context than its stated budget represented.

The new behavior is opt-in through `compaction_image_budget`. When enabled, retained images are charged using the system's existing image-size estimate. An image and its adjacent label are treated as one unit at the truncation boundary. If that unit does not fit, the algorithm does not compensate by backfilling older messages.

This repairs two abstractions at once. An image is not free merely because it is not text, and separating a figure from its caption may leave two valid items while destroying the pair's meaning. For applications that inspect screens, diagrams, or photographs, the practical consequence is clear: retention policies must account for semantic units, not just textual token counters.

Other visual transformations now follow the same rule. When switching to a model that cannot accept media, Codex represents omitted inputs as fragments classified as `images.unsupported` or `audio.unsupported`, according to the [unsupported-media change](https://github.com/openai/codex/pull/40277). During image preparation, unchanged and resized items keep their kinds, while a failed image becomes an `images.preparation_error` placeholder under the [image-processing fix](https://github.com/openai/codex/pull/40281). The failure remains visible in context without masquerading as a successfully processed image.

## A child agent receives an edited history

Delegation creates another delicate transformation. A child agent should not automatically receive everything in its parent's history. Parent-only instructions and coordination guidance may need to disappear, while relevant constraints and work context must survive.

The [forked-history fix](https://github.com/openai/codex/pull/40266) began filtering developer messages as annotated content. Each retained item therefore keeps its kind after parent-only fragments are removed. Soon after, a separate [change for child-agent instructions](https://github.com/openai/codex/pull/40297) introduced a dedicated fragment for developer instructions added to full-history forks. Tests verify that the content reaches the child exactly once and does not appear in the parent's request.

This is more than a duplication concern. A partial copy of history is a new view of the conversation. To be dependable, it must distinguish what was inherited, what was inserted for that agent, and what was excluded. Otherwise, delegation preserves sentences while losing the boundary that explains why they are present.

## Useful provenance needs specific names

Keeping labels only helps when they carry meaningful distinctions. Another [merged change](https://github.com/openai/codex/pull/40294) replaces one generic kind for internal model context with source-derived categories in the form `<source>.internal_context`. [Permission instructions](https://github.com/openai/codex/pull/40295), meanwhile, moved from `generic.permissions_instructions` to the `permissions.instructions` namespace.

Those classifications do not prove that every security policy will be enforced correctly. They make material distinguishable for components that may need to inspect, measure, or handle it differently. It is the difference between a box marked only "content" and a set of packages with sender and purpose attached.

For teams building agents, the pattern suggests three practical rules. Every summarizer should define what happens to provenance. Every filter should transform content and labels as a unit. Every multimodal compatibility layer should represent loss explicitly rather than allowing an image to vanish silently.

## Dependable memory requires typed forgetting

Long context is usually framed as the ability to remember more. In practice, durable agents must also forget, condense, migrate across models, and divide work. Those operations are not peripheral conversation maintenance. They determine the history the model actually receives.

The advance in this sequence of changes is modest but consequential: treat history as structured data that must survive transformations, not as a block of text that can be rebuilt without side effects. An agent does not merely need to recall the right sentence. It must preserve the difference between an instruction, an image, an error, a permission rule, and an inherited fragment. Without that distinction, more context may simply create more ways to lose meaning.
