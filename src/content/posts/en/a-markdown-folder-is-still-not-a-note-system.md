---
title: "A Markdown folder is still not a note system"
description: "Between a loose folder in VS Code and a second-brain vault with plugins and sync, there is a gap: local Markdown with wiki links, backlinks, and preview, without a PKM contract."
published: 2026-09-20
locale: en
translation: uma-pasta-de-markdown-ainda-nao-e-um-sistema-de-notas
tags: ["Markdown", "Tools", "Linux", "PKM", "MD Studio"]
featured: false
---

There is an irritating middle between two extremes.

On one side, a folder of `.md` files open in VS Code (or whichever editor). The files live on disk, Git works, the diff is readable. But `[[target]]` is dead text: it does not resolve, does not create a note, does not show who points here. Wiki links become a human convention, not navigation.

On the other, Obsidian, Notion, and the like. Vault, graph, plugins, sync, a large surface. Useful when the contract is “second brain.” Excessive when you only want to write locally, with navigable links and a preview that does not lie.

**MD Studio** (v0.1.0) sits in that interval. A desktop Markdown editor, Linux-first, local-first: workspace on disk, wiki links, backlinks, rich preview, and sanitized HTML export. No backend. No graph. No cloud sync. MIT license.

This is not a heroic launch. It is the shape of a niche I needed myself.

## The problem is not “missing an editor”

Plain Markdown already solves text. What fails in a loose folder is **links between notes** as a property of the system, not as author discipline.

Wiki links (`[[target]]`, `[[target|label]]`) only matter if they resolve to a file, suggest creation when missing, and feed a reverse index. Without that, the folder is archive; it is not a minimal note network.

PKM tools solve linking, but they push a package: visual graph, plugin ecosystem, sync, sometimes an account. For someone who only wants to write, revise, and export, surface cost exceeds the gain.

## What v0.1 actually does

Stack: Tauri 2, React/TypeScript, Rust. Linux packages: `.deb` and AppImage ([release v0.1.0](https://github.com/elzobrito/md-studio/releases/tag/v0.1.0)).

In the core:

- Local workspace (folder or file) with a Rust **path fence**: canonical paths; the process does not wander outside what was opened.
- **CodeMirror 6** editor and preview with GFM, math, code highlighting, and Mermaid.
- Wiki links with resolution, autocomplete, and note creation.
- **Backlinks** in the right panel: resolved links only. No graph.
- Filesystem watcher with debounce; if the open file is dirty and changes on disk, a Reload / Keep / Save as dialog (no silent overwrite).
- **HTML** export through the same sanitized preview pipeline (`rehype-sanitize`), with atomic writes.

Documents stay on your disk. Preview and export share one pipeline. There is no remote server and no arbitrary JS plugins.

## Honest limits (v0.1)

Worth listing what is **not** in this version, so expectation stays honest:

- No note graph.
- No cloud sync.
- No JavaScript plugins.
- Opening `.md` via the OS file association (argv) is still a follow-up (PR #2).

The README confirms sanitized HTML export. I do not invent PDF or roadmap features here.

That is not marketing humility. It is the v0.1 contract: a usable minimum for local writing with wiki and backlinks, not a generic Obsidian substitute.

## Why use it (and for whom)

It makes sense if you are a technical author, professor, or Linux developer who wants **minimal PKM**: wiki + backlinks + trustworthy preview, files in Git, without signing a second-brain contract.

It does not make sense if you need a graph, multi-device sync, a plugin ecosystem, or a vault that grows like a product. In that case larger tools remain better, because that is their job.

MD Studio’s bet is different: a Markdown folder *can* become a note system without becoming a platform.

## How to start (short)

1. Download the `.deb` or AppImage from [v0.1.0](https://github.com/elzobrito/md-studio/releases/tag/v0.1.0).
2. Open a notes folder (or a file).
3. Use `[[target]]` / `[[target|label]]`; let autocomplete and note creation do the mechanical work.
4. Check backlinks in the right panel (resolved only).
5. Export HTML when you need clean output outside the editor.

Code and issues: [github.com/elzobrito/md-studio](https://github.com/elzobrito/md-studio).

## The interval that matters

A Markdown folder is still not a note system. What is missing is link resolution, a reverse index, and a preview that keeps the same contract as export.

MD Studio does not fill the entire PKM market. It fills the interval where the loose folder is too poor and the second brain is too heavy. If that is your interval, v0.1 exists for that, without promising the rest.
