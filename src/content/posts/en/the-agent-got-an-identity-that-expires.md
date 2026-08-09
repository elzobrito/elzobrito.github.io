---
title: "The agent got an identity that expires"
description: "Two Codex changes turn workload identity into short-lived access and stop launch context from flowing into child processes."
published: 2026-08-09
locale: en
translation: o-agente-ganhou-uma-identidade-que-expira
tags: ["AI agents", "Open source", "Security", "Developer tools"]
featured: false
---

A permanent credential is easy to understand: create a key, store the secret, and hand its value to the program that needs a service. The trouble begins afterward. The key must be copied somewhere, remains useful after the task ends, and may reach processes that were never meant to see it.

Two changes merged into the open Codex repository on August 8 take a different approach to identity. One [adds an exchange from workload identity to short-lived credentials](https://github.com/openai/codex/pull/37610). The other [prevents the context used for that exchange from being inherited by processes launched by the agent](https://github.com/openai/codex/pull/37607). Together they establish an important boundary: proving which workload is running does not require distributing that proof to everything the workload invokes.

## The final credential is no longer the starting point

A workload is the running program, such as a continuous-integration job, a service, or an agent session. Instead of receiving a durable credential directly, it can present a signed assertion about its identity and exchange that assertion for temporary access.

The new `codex-workload-identity` component takes a file-backed JWT, or JSON Web Token, assertion and a federation rule identifier. It sends them to an exchange endpoint and receives short-lived ChatGPT credentials. The file is therefore not the final credential used without a near-term deadline. It is evidence in a time-bounded negotiation.

That distinction changes the cost of exposure. A copied static key remains useful until it is revoked or reaches an independently configured expiration. A short-lived token loses value by design. Temporary access does not make leakage harmless, but it narrows the period in which a copied value can be reused.

For an agent running in CI, the practical consequence is straightforward. The platform can bind the job to an identity, provide the assertion only while that job runs, and let Codex obtain the access it needs at that moment. The repository does not have to carry the final credential, and the end of the job no longer relies solely on someone remembering to delete a permanent secret.

## Expiration needs operational discipline

Short-lived credentials introduce another problem: they must be renewed without interrupting work or creating a burst of exchange requests. The implementation treats that lifecycle as part of the feature.

Valid access tokens are cached. They are refreshed before expiry or after rejection. When concurrent callers notice that a token needs replacement, the library coalesces their exchanges into one operation. If a proactive refresh fails transiently, it may keep using the previous token while that token is still valid.

This behavior distinguishes two states that rushed systems often collapse. “The refresh failed right now” is not the same as “the current credential has expired.” Preserving that difference avoids unnecessary downtime without extending the token beyond its actual validity.

The component also validates assertion files, token endpoints, and exchange responses, follows outbound proxy policy for HTTPS, and redacts access tokens from debug output. These details are easy to overlook and central to the design. A system can adopt brief credentials and still disclose their full values in logs retained for months.

## Identity evidence does not belong to the launched command

The exchange uses two environment variables to locate its launch context: `OPENAI_FEDERATION_RULE_ID` and `OPENAI_IDENTITY_TOKEN_FILE`. Environment variables are convenient process configuration, but children normally inherit them. For an agent that can start commands, hooks, external tools, and Git helpers, that inheritance would widen the exposure surface.

The second change marks both variables as non-inheritable. Codex removes them before spawning processes, including variants with different letter casing. The rule covers command execution, Model Context Protocol (MCP) clients, hooks, Git helpers, and remote helper processes.

The order of operations matters too. Removal happens after shell environment policy overrides. A configuration layer therefore cannot reintroduce one of the variables at the last moment and pass it into a child process.

In practice, a command launched by the agent can still receive the variables its own task requires, but it does not automatically get the assertion path or federation identifier that authenticated Codex. The launcher's identity remains available to the component that must exchange it; it does not become general inheritance for every program the launcher starts.

## Identity, authorization, and propagation are separate contracts

The two changes help separate three questions:

- identity: which workload is requesting access;
- authorization: which temporary credential it may obtain and for which service;
- propagation: which descendant processes can see the context used to prove that identity.

Answering the first question well does not settle the other two. A poorly scoped federation rule can grant too much. A short-lived token can still be used during its validity. Removing two sensitive variables does not erase other secrets an operator placed in the environment.

Merged code should not be confused with a promise of universal availability either. These changes expose a mechanism in the Codex repository. They do not remove the need to configure federation, protect the assertion file, govern the endpoint, or review the permissions that the exchange ultimately grants.

Even with those limits, the design reflects an important step in the maturity of development agents. Identity should not be a static secret scattered through a process tree. It should be limited evidence, exchanged for temporary access and retained only where there is a concrete reason to use it.

The most consequential change is not merely that the credential expires. It is that the proof used to obtain it does not travel with every command the agent runs.
