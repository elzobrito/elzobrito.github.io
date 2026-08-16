---
title: "Autonomy Starts Before the First Line of Code"
description: "New Codex diagnostics and boundaries show why a coding agent must understand the machine it runs on, not only the repository."
published: 2026-08-16
locale: en
translation: autonomia-comeca-antes-da-primeira-linha-de-codigo
tags: ["AI agents", "Developer tools", "Security", "Open source"]
featured: false
---

Coding agents are usually judged by what happens after a task arrives: reading files, proposing edits, running tests, and explaining the result. Three changes merged into the open Codex repository over the past several hours point to an earlier requirement. Before touching the code, the tool needs to know whether the machine is ready for the work and whether the paths used to communicate with the user honor the configured access boundaries.

[`codex doctor` now checks disk capacity and volume properties](https://github.com/openai/codex/pull/38795), adds [diagnostics for endpoint protection products](https://github.com/openai/codex/pull/38827), and the external editor now [keeps its buffer away from directories writable by the restricted environment](https://github.com/openai/codex/pull/38830). All three changes were merged into `main`; that fact alone does not establish that they are already present in every distributed release.

The shared direction matters more than any single setting. The environment is no longer merely the stage where an agent runs. It is becoming part of the evidence that determines whether execution can be trusted.

## A full disk is also an agent failure

The first change extends `codex doctor` to measure free space in both `CODEX_HOME`, where Codex stores its state, and the active worktree. The report warns below 5 gibibytes (GiB) and marks less than 1 GiB as a failure.

Previously, a capacity problem could surface far from its cause: while installing a dependency, creating a temporary file, or running a build. The agent would see the failed operation without necessarily seeing the host condition making several operations fragile at once. The new check turns that shared condition into explicit evidence.

On Windows, the same update reports whether the active Git worktree lives on a trusted Dev Drive. A Dev Drive is a volume designed for development workloads, with specific integration into the Windows filesystem and protection stack. The report does not claim that moving a repository will solve every issue. It identifies the configuration and offers remediation when the active volume does not have that property.

The practical consequence is straightforward. A team can run the diagnostic at the start of an investigation and separate project defects from host limitations. That reduces the chance of changing code to compensate for an exhausted disk or a poorly matched workstation configuration.

## Security software that interferes should be visible

The second addition looks for endpoint protection products on macOS and Windows. This software observes processes, files, and behavior to block threats. The same scrutiny can interfere with development tools that create many processes, scan large trees, or execute newly built binaries.

The check recognizes CrowdStrike Falcon, BeyondTrust Privilege Management, Microsoft Defender, SentinelOne, and Jamf Protect. When it detects a product but cannot confirm the relevant Codex exclusions, it produces a warning with product-specific guidance. Results distinguish complete, partial, and unavailable inspection, and the absence of a detected product does not create a remediation requirement by itself.

That distinction avoids two poor shortcuts. One is assuming every slowdown is an agent defect. The other, more dangerous shortcut is recommending that protection be disabled. The diagnostic creates a third path: identify the interaction and ask for exclusions to be verified under the environment's own policy.

Inside an organization, this can improve the conversation between engineering and security. Instead of a vague report that the tool feels slow, teams get the detected product and the inspection state. Any policy change remains a human, administrative decision, but it starts from better evidence.

## User text should not land in an arbitrary temporary folder

The third change addresses a quieter boundary. When someone opens the Codex composer in an external editor, the current text must be written to a temporary file so another program can edit it. That buffer may contain instructions, code fragments, or information that has not even been sent to the model.

Codex now tries to create these files under a protected `editor` directory. It checks the configured Codex home, the default Codex home, and finally a workspace fallback. Candidates overlapping roots writable under the restricted filesystem policy are rejected, as are paths that reach the destination through symbolic links. If no protected location exists, opening the editor fails explicitly. Full-disk-write policies retain behavior consistent with that broader permission.

The issue is not the external editor itself. It appears when a sensitive buffer sits in an area that another part of the restricted session can modify. A symbolic link makes the boundary especially deceptive: the visible path looks safe but resolves into a writable area. Checking the resolved destination prevents a folder name from acting as a false barrier.

In practice, the rule protects the integrity of the conversation. A command running inside the restricted environment should not be able to silently rewrite text the user is about to submit simply because both happen to share a convenient temporary directory.

## Diagnosis is not permission

The three changes form a useful architecture because they keep different responsibilities separate. Diagnostics observe disk, volume, and endpoint protection; they do not change system policy. Editor isolation enforces the existing write policy; it does not grant new authority. In both cases, the tool becomes more precise about when the environment cannot support the intended action.

That boundary matters. A richer report does not make a machine secure, and one protected directory does not prove that every piece of session data is isolated. These changes cover specific conditions, with tests for disk thresholds, inspection failures, multiple products, writable roots, aliases, and symbolic links. They are not a general certification of the host.

They do, however, signal a useful kind of maturity. Agents are often described as systems capable of completing more steps on their own. A stronger operational definition also includes recognizing when they should not start, when the environment may distort the result, and where intermediate data must stay out of reach.

Autonomy does not begin with the first edit. It begins when the tool examines the machine, respects existing boundaries, and turns an invisible limitation into a verifiable reason to stop.
