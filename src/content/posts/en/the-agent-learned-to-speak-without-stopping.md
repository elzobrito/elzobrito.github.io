---
title: "The agent learned to speak without stopping"
description: "Asynchronous updates and thread-scoped approvals show what changes when an agent must inform, continue, and keep contexts separate."
published: 2026-08-19
locale: en
translation: o-agente-aprendeu-a-falar-sem-parar-de-trabalhar
tags: ["AI agents", "Codex", "Concurrency", "Interfaces"]
featured: false
---

A conversation with an artificial intelligence agent usually inherits the rhythm of chat: someone sends a message, the system thinks, replies, and only then does the next turn begin. That design works for short questions. It becomes awkward when an agent researches, runs tests, or monitors an operation for several minutes. Useful information may emerge between the beginning and the end, and it should be able to reach the user without forcing the work to stop.

Three changes merged into Codex over the past several hours show that breaking this sequence requires more than displaying an extra line. The protocol can now [mark messages delivered asynchronously](https://github.com/openai/codex/pull/39312), root agents gained [a tool for sending those updates while continuing the turn](https://github.com/openai/codex/pull/39319), and terminal approval requests are now [identified by their originating thread as well as by the request ID](https://github.com/openai/codex/pull/39372).

Concurrency connects the three changes. When several things can happen at once, visual order is not enough to establish causality. The interface must know which message is merely an update, which event belongs in model context, and which thread has the authority to answer an approval request.

## An update does not have to end the turn

The new `send_user_message_async` operation lets a root agent emit a user-visible message and immediately receive confirmation that it was accepted. The rest of the turn can continue. A few hours later, [the experimental feature gate was removed](https://github.com/openai/codex/pull/39452): the operation is exposed when the selected model declares support for it.

This creates an important distinction between a reply and an update. A reply normally closes a conversational step and hands control back. An asynchronous update describes the state of the work without claiming it is finished. During a long diagnosis, for example, an agent can say that it found a likely cause and will continue validating it, instead of choosing between prolonged silence and a premature conclusion.

The boundaries are explicit. The tool is available only to root agents and depends on declared model support. The changes have also been merged into the repository, but that does not establish availability in every product distribution, account, or interface. What the primary sources support is narrower: the contract entered the codebase and received integration coverage.

## A message for the user is not necessarily context for the model

The implementation keeps the visible update out of the model input used for the remainder of the turn. This may look like a minor detail, but it prevents an odd feedback loop: the agent produces a sentence to orient or reassure the user, then starts treating its own sentence as new conversational evidence.

Consider an update such as “the build finished; I will now verify the published result.” If it were automatically fed back into the reasoning context, the model could confuse an intermediate status description with a new instruction or attribute it to the user. Separating the two streams preserves roles: information supplied by the user or tools is one thing; text the agent chooses to display while work continues is another.

The protocol needed a durable way to carry that distinction. An optional `delivery` field, with `async` as its value, is preserved through events, server items, materialized history, replay, and generated JSON and TypeScript schemas. An interface can therefore render the update correctly when it arrives and still recognize its nature when the thread is reopened later.

That persistence is part of the feature, not paperwork around it. Without a stable marker, a message could appear asynchronous live and become an ordinary reply in history. The system would retain the words while losing their function.

## An approval needs an address, not just a number

Concurrency also changes the meaning of an approval. Codex can keep primary and background threads active at the same time. Before the fix, pending requests were tracked only by approval ID. Because identical IDs could occur in different threads, a response, resolution, or dismissal could affect the wrong request.

The change uses the pair of thread ID and approval ID. It also routes responses through the thread that originated the request and rejects resolution notifications that do not match it. Tests cover ID collisions across threads, mismatched responses, and requests from both primary and background work.

An apartment number offers a useful analogy. “Deliver to 42” is insufficient when several buildings have a unit 42; the address needs both the building and the apartment. Likewise, a local identifier may be valid without being globally unique. The more parallel work a product allows, the less safe it becomes to infer context from an isolated number or from whichever window happens to be visible.

For teams building agent interfaces, the practical consequence is to treat every sensitive action as an addressed message. Approvals, cancellations, temporary credentials, and results should carry enough identity to return to the flow that produced them. The interface may hide that structure from the user, but the system should not erase it internally.

## Real time requires more structure, not less

Asynchronous updates make an agent feel more present during long tasks. They also multiply possible states: an update may arrive before a tool result, one thread may be reopened while another continues, and two requests may display the same number. The fluid experience on screen depends on an invisible discipline of identity, roles, and history.

That is the paradox of real-time interfaces. The more natural it feels to converse while work progresses, the more rigor the system needs to explain who said what, which execution it belongs to, and which action may answer which request. The agent learned to speak without stopping. For that to remain trustworthy, the architecture also had to learn not to confuse speech, memory, and authority.
