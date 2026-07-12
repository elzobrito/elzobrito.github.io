---
title: "Agents are becoming platforms: skills, plugins, and local control"
description: "Projects gaining attention across the open ecosystem point to an important shift: AI agents are moving beyond isolated apps toward portable extensions, local tools, and reusable contracts."
published: 2026-07-12
locale: en
translation: agentes-viram-plataformas-skills-plugins-e-controle-local
tags: ["AI", "Agents", "Open source", "Developer tools"]
featured: false
---

Not every day brings a frontier model or a paper that reshapes the benchmarks. Sometimes the more useful signal appears in infrastructure: projects rising together among prominent repositories and revealing where the community is taking the technology.

Today's selection points to a clear transition. AI agents are moving away from closed boxes with fixed feature lists. They are beginning to behave like platforms, gaining installable capabilities, connections to external tools, and more explicit contracts for operating on a computer.

Three projects make that shift easier to see: Google Labs' [Stitch Skills](https://github.com/google-labs-code/stitch-skills), [Desktop Commander MCP](https://github.com/wonderwhy-er/DesktopCommanderMCP), and OpenAI's official collection of [Codex plugin examples](https://github.com/openai/plugins). They address different problems, but share one direction: separating a model's general intelligence from the specialized capabilities required to get work done.

## Skills turn operational knowledge into reusable packages

Stitch Skills organizes design and development workflows as capabilities that follow an open standard. Rather than hiding all logic inside one application, the project distributes instructions, scripts, references, and examples in packages that can be used by different agents, including Codex, Gemini CLI, Claude Code, and Cursor.

Portability matters because long, improvised instructions are difficult to maintain. A team can manually explain how to extract a visual system, convert screens into React components, or validate a project. Repetition exposes the weakness: every conversation starts with small variations, rules are forgotten, and quality depends too heavily on whoever wrote the request.

A skill is closer to a versioned operating procedure. It can contain not only guidance, but executable checks and examples of acceptable quality. The useful analogy is the transition from loose terminal commands to maintained scripts: intent stops living only in conversation and gains a form that can be reviewed, tested, and updated.

Stitch Skills currently focuses on design, but its format suggests a broader change. If capabilities can travel across agents, differentiation is no longer only about which model answers best. It also becomes a question of which ecosystem has the best procedures.

## Plugins combine instructions, tools, and interfaces

The [OpenAI Plugins](https://github.com/openai/plugins) collection shows a broader layer. Each plugin has a required manifest and may combine skills, apps, MCP servers, specialized agents, commands, hooks, and visual assets.

That makes an extension behave like a small product. A Figma integration, for example, does not have to be only a textual explanation of how to use the tool. It can bundle service access, design rules, specific actions, and an interface suited to reviewing the result.

This composition brings agents closer to the architecture familiar from browsers and development environments. The core provides general capabilities; extensions add domains, tools, and specialized experiences. The difference is that the consumer is not only a person clicking through menus. A model must also decide when and how to apply each resource.

That creates a new requirement: plugins must be legible to both people and agents. Manifests, permission boundaries, descriptions, and contracts are not administrative details. They are part of the system's safety and predictability.

## MCP and local control make boundaries essential

[Desktop Commander MCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) sits at the other end of this architecture. It connects assistants to files, search, edits, processes, and terminal commands through the Model Context Protocol (MCP), a protocol for exposing tools and context to models.

The practical difference is substantial. A model that only suggests a command depends on someone to copy it, run it, and return the output. Given a local tool, it can close the loop: observe state, act, and inspect the consequence.

Utility and risk grow together. Terminal and filesystem access turns a wrong answer into a wrong action. The important advance is therefore not simply giving agents more tools. It is making scope, authorization, evidence, and stopping conditions explicit.

The protocol solves part of the connectivity problem, but not governance by itself. Two MCP servers may expose similar tools with very different safety properties. Professional use will require evaluating permissions, confirmation before external actions, audit trails, and behavior when malicious instructions appear in files or web pages.

## The pattern connecting all three projects

Skills, plugins, and MCP servers occupy different layers:

- a **skill** describes how to perform a class of work well;
- a **plugin** packages capabilities, integrations, and interfaces;
- an **MCP server** offers structured access to tools and data.

Together, these layers reduce dependence on a monolithic agent. The model remains important, but no longer has to carry every operating procedure, integration, and execution rule by itself.

This design also supports replacement and comparison. A capability compatible with several agents can be tested across models. A protocol-based tool can serve more than one interface. A plugin can combine components without requiring every project to rebuild the entire ecosystem.

The evolution resembles the history of operating systems. Computers became more useful when programs could rely on stable interfaces for files, networks, and devices instead of controlling every detail directly. Agents appear to be moving toward a similar separation between reasoning, procedures, and tools.

## What to watch next

The number of extensions will grow faster than our ability to evaluate each one manually. Competition is likely to shift toward four areas that are less visible than model benchmarks:

1. **Portability:** can a skill work across agents without losing essential behavior?
2. **Composition:** can plugins work together without conflicts in context, names, or permissions?
3. **Verification:** does the result include enough tests and evidence to be trusted?
4. **Security:** does the agent understand where it may act and when it must stop for authorization?

The projects in focus today do not fully answer those questions. They show that the community has started building the pieces.

The next leap in agents may not come only from a larger model. It may come from something less spectacular and more durable: an ecosystem where operational knowledge is versioned, tools are interchangeable, and every important action leaves a trail someone can review.
