---
title: "Agents got brakes, not walls"
description: "New GitHub controls make agent actions reviewable and explainable while MCP drops sessions to scale. The gap between oversight and security is now easier to see."
published: 2026-07-24
locale: en
translation: agentes-ganharam-freios-mas-nao-muros
tags: ["AI", "Agents", "Governance", "Software development"]
featured: false
---

An agent changing an issue looks harmless until it closes the wrong item, replaces the assignee, or removes a useful priority signal. The challenge is not only whether the action is correct. Teams also need to know why it was proposed, how uncertain it is, and who can stop it.

[GitHub's new controls for agent actions in Issues](https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview/) address that application layer. In public preview, changes to labels, fields, issue type, assignees, and status can carry a rationale, a confidence rating, and an optional approval step. On the same day, the [GitHub MCP Server added early support for the next Model Context Protocol specification](https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification/). MCP is the protocol connecting models with tools and data.

These releases operate at different levels, but they point toward the same architecture: lighter, more scalable interactions underneath and more explicit, reviewable decisions above.

## Confidence becomes an operating rule

In GitHub Issues, an agent can rate a supported action as high, medium, or low confidence. High-confidence changes may apply immediately, while the others remain suggestions. Repository administrators set the threshold, and `has:suggestions` finds issues waiting for review.

Previously, teams often had to choose between applying a change and asking the agent to leave a comment for someone to interpret. Structured intent now travels with the action. That reduces noise and supports different policies: a small repository may allow more direct changes, while a busy public project can retain uncertain cases.

GitHub makes an important limitation explicit: approval is a workflow convenience, not a security control. It does not enforce a server-side boundary. An agent that already has permission to edit an issue can still apply a change directly. Confidence and rationale improve oversight and auditability, but they do not replace least privilege, isolation, or independent validation.

## The protocol drops the session

At the infrastructure layer, the next MCP specification removes sessions and the `initialize` call. Its core becomes stateless: each request carries what it needs, clients can perform parts of the handshake in parallel, and servers no longer need shared session memory between calls.

For GitHub's server, that removed Redis sessions, initialization writes, and database reads on every request. Information needed for logging and secret scanning can come through protocol-defined HTTP headers instead of deep inspection of each request body. Elicitation, the mechanism a tool uses to request information from a person, was also adapted to independent round trips.

For teams operating many agents, the practical consequence is simpler horizontal scaling and recovery. But useful state does not vanish. It must live explicitly in the client, durable storage, or the application's domain model. Stateless transport makes hidden coupling easier to avoid; it does not remove the need for memory.

## The agent crosses tools, so controls must travel

The [Copilot cloud agent is also now generally available in Linear](https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available/). Assigning a Linear issue can start work in an ephemeral environment, produce a draft pull request, stream progress to the issue, and request review when the work is complete. Teams can choose the model, a repository-defined custom agent, and the working and target branches, then steer the session through comments.

This moves the agent from a chat box into the path connecting a task, an execution environment, and code review. The useful lesson is broader than starting work from Linear. Context and boundaries must survive every handoff: which branch may change, which identity acts, which operations need review, and what evidence returns to the system where the work began.

## Brakes are not walls

The pieces fit because they have distinct responsibilities. MCP simplifies transport and scale. Ephemeral environments separate executions. Intent, confidence, and rationale make decisions observable. Approvals insert human judgment where uncertainty is higher.

None of them alone guarantees safety or correctness. Brakes help a vehicle stay under control; walls define where it cannot go. Mature agent systems will need both: controls people can understand and boundaries software cannot bypass.
