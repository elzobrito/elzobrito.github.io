---
title: "Compatibility does not inherit security"
description: "Changes in vLLM, Codex, and llama.cpp show why endpoints, delegated agents, and model files need explicit trust boundaries."
published: 2026-08-12
locale: en
translation: compatibilidade-nao-herda-seguranca
tags: ["AI security", "Infrastructure", "Agents", "Open source"]
featured: false
---

Similar interfaces invite us to assume similar guarantees. If two endpoints serve the same model, it feels natural to expect the same authentication. If one agent creates another, we may assume they have the same relationship with approvals. If a file uses the expected format, its loader may appear entitled to treat it as a valid model.

Three changes merged into artificial intelligence projects on August 12 challenge that intuition. [vLLM made the limited scope of its API key more visible](https://github.com/vllm-project/vllm/pull/51999), [Codex prevented delegated sessions from requesting approvals](https://github.com/openai/codex/pull/38205), and [llama.cpp hardened its handling of malformed GGUF files](https://github.com/ggml-org/llama.cpp/pull/25596). None announces a larger model. Each repairs the boundary between something that looks compatible and something that is actually trusted.

## One key may protect only part of a server

vLLM provides an OpenAI-compatible server and accepts an `--api-key` option. The name sounds like a lock for the whole service, but the key covers only routes under `/v1`, `/v2`, and `/inference`. Other endpoints on the same server remain outside that protection. The most consequential example is `/invocations`, which can also expose inference capabilities.

The change does not modify runtime behavior. It adds the warning to command-line help and to the server's main documentation, both places where someone is likely to make a deployment decision. The limitation was already described in the security documentation; the problem was the distance between that fact and the configuration point.

Functional compatibility does not imply control equivalence. Two doors can reach the same room while carrying different locks. Putting the service behind a proxy that applies authentication to every required route remains the safer design when it is reachable beyond a trusted network.

In practice, testing whether a key blocks `/v1/chat/completions` is not enough. A team should enumerate the enabled HTTP surface, probe every externally reachable route, and have the proxy deny anything outside the intended public contract. The vLLM change is candid about its own boundary: it makes the limit visible rather than expanding it.

## A delegate should not be able to negotiate for more power

Codex uses delegated sessions for supporting work such as review. The change merged today requires those sessions to run with the `never` approval policy, removing their ability to pause and ask for additional permission. Commands and tool calls that would require approval are denied inside the delegated session.

Previously, approval and permission requests could be forwarded to the parent session. That blurred two relationships: the authority a user granted to the primary agent and the narrower authority of an agent created by it. The new rule fails closed. If a task needs a capability the delegate did not receive, it cannot proceed through an escalation dialogue.

Think of a temporary building badge. An escorted visitor may enter specific rooms, but that does not entitle the visitor to ask security for the host's credentials. In multi-agent systems, the practical consequence is to partition work according to the smallest tool and permission set each task requires. Delegating work should not delegate the ability to renegotiate authority.

## A recognized format does not make a file trustworthy

The third boundary appears before inference begins. GGUF is a format for storing models and metadata in the llama.cpp ecosystem. Testing with libFuzzer and AddressSanitizer found two ways for a crafted file to crash the process during loading.

A zero tensor dimension could cause division by zero in a representability check. On another path, a `general.alignment` field with the wrong type triggered an assertion and terminated the process. The fix skips the division when the element count is zero and validates the metadata type before reading it. The loader now rejects these inputs cleanly instead of aborting.

The change does not establish code execution or compromise beyond a process crash. That distinction matters. Availability is still part of security, however: a service that accepts third-party models cannot treat a `.gguf` extension or a recognizable header as evidence of integrity.

Applications that ingest user-supplied models should combine validation, size limits, process isolation for parsing, and an updated library. A model loader is an untrusted-input parser, even when the object it reads is as sophisticated as a neural network.

## Put the boundary where the decision happens

The three projects addressed different defects, yet they share an operational principle. Security does not travel through semantic proximity. An equivalent endpoint does not inherit its neighbor's authentication; a child agent does not inherit the right to expand permissions; a recognized file does not inherit trust from its format.

There is a design lesson here too. A limitation buried in a distant page is easily mistaken for a global guarantee. A denial that can still appeal to a parent process leaves authority ambiguous. A parser that turns bad input into an abort gives external data control over availability.

AI systems are becoming more modular: multiple APIs, specialized agents, portable formats, and interchangeable components. That flexibility creates more junctions where two parts appear to share a policy but do not. Mature engineering is not merely connecting the modules. It is drawing, testing, and documenting the exact boundary between them.
