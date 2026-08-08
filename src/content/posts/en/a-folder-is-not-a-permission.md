---
title: "A folder is not a permission"
description: "llama.cpp is beginning to separate the file interface from the environment where tools actually run, giving local agents more verifiable boundaries."
published: 2026-08-08
locale: en
translation: uma-pasta-nao-e-uma-permissao
tags: ["AI agents", "Open source", "Security", "Developer tools"]
featured: false
---

Giving an agent a working folder feels like a straightforward decision: select a project, then let the model read files, search the codebase, or run commands. Yet the folder shown in the interface answers only **where** a tool should work. It says nothing about **which environment** will execute the command, what resources will be available, or how far a mistake can travel.

Two llama.cpp changes merged on August 8 make that distinction tangible. The server [gained initial support for running tools inside a Docker container](https://github.com/ggml-org/llama.cpp/pull/26507). Minutes later, the interface [learned to offer a working directory only when an enabled tool actually consumes it](https://github.com/ggml-org/llama.cpp/pull/26762). One change introduces an execution boundary; the other stops the interface from advertising a control that has no effect.

## Commands need their own place to fail

`llama-server` can expose built-in tools for reading, searching, editing files, and running shell commands. Those operations previously used the host environment. That is convenient for a local assistant, but it puts three distinct concerns uncomfortably close together: the server hosting the model, the project the agent is changing, and the process performing the requested action.

The new experimental `--tools-runtime` option inserts a layer between them. With a specification such as `docker:ubuntu:jammy`, the server starts a container, reuses it across calls, and removes it on shutdown. It can also target an existing container with `docker-container:<id>`. Reads, writes, searches, and commands are routed through `docker exec` and `docker cp` instead of running directly on the host.

In practice, a team can prepare an image with a project's dependencies and let the agent operate in that reproducible environment. A command that installs a package, changes a temporary file, or encounters an unexpected library version affects the container first. The benefit is not limited to security: it also narrows the gap between “it worked on the agent's machine” and “it worked in the environment declared by the project.”

The old behavior remains the default. Without a separate runtime, tools still execute on the host. The pull request also labels the feature as experimental and initial. A container is not a complete policy by itself: image selection, user identity, networking, volumes, credentials, and resource limits still require explicit decisions. Process isolation is a meaningful start, not an automatic security seal.

One defensive detail is especially valuable. If a client requests an unknown runtime, the server reports an error instead of silently falling back to the host. This fail-closed behavior prevents a malformed protection setting from producing the unprotected execution it was meant to avoid.

## Interfaces should represent capabilities, not assumptions

The second change looks smaller, but it fixes a useful ambiguity. Previously, exposing any built-in tool was enough for the interface to show the working-directory picker and enable the `/cwd` command. That happened even when the only available tool was `get_datetime`, which merely returns the current date and time, or when every file-related tool had been disabled.

The control was present and the user could select a folder, but no operation consumed that choice. This was more than a cosmetic flaw. In systems that can act, a visible control is commonly read as part of the operational boundary. If it does not affect real behavior, the interface creates a false sense of scope.

Each tool can now declare a `uses_cwd` capability. The server includes that field in its tool listing, and the interface combines it with the tools the user has left enabled. The picker appears only when at least one active tool resolves paths or runs commands against that directory.

This is more durable than keeping a hard-coded list of names in the client. When a new filesystem tool arrives, it declares its capability and the interface reacts without guessing from its label. Presentation and execution remain attached to the same contract.

## Three boundaries, three questions

For a local development agent, the two changes suggest a practical separation:

- the working directory defines which relative paths form the task context;
- tool permissions define whether an operation may only observe or also modify;
- the runtime defines where code executes and which environment receives its effects.

Blending these questions creates fragile controls. Restricting the working directory does not stop a host shell from reaching other paths. Marking a tool as read-only does not necessarily constrain networking or resource consumption. Putting everything in a container does not decide which secrets were mounted into it.

The llama.cpp changes do not solve that entire matrix, but they make two previously implicit boundaries visible and configurable. That matters because agents need more than capable tools. They need tools whose reach can be explained before a call and reconstructed after it.

A good interface tells the truth about what the system can do. A good runtime limits the cost when that action goes wrong. The selected folder belongs in that story, but it should not carry a promise that only the full architecture can keep.
