---
title: "Grok Bot does not need to do everything. It needs to know who does."
description: "How I use Grok Bot, Antigravity, and ESAA to coordinate agents, automate processes, and turn complex tasks into governed workflows."
published: 2026-11-03
locale: en
translation: o-grok-bot-nao-precisa-fazer-tudo
tags: ["AI agents", "ESAA", "Grok Bot", "Workflows", "Governance"]
featured: false
---

For the past few weeks, I have been using Grok Bot as a permanent assistant. It has access to a computer and can operate applications, browse the web, consult files, run commands, and use other artificial intelligence tools.

Recently, I read an article about using this kind of agent. It emphasized the importance of writing good prompts, setting rules, providing context, and supervising results.

I agree with those principles, but I think there is an even more interesting dimension: the potential of an agent like Grok Bot lies in coordinating specialized tools and agents to carry out complete processes.

That difference changes the way we work with artificial intelligence.

## An agent does not need to be an expert at everything

When I need to develop software, I have tools such as Codex, Claude Code, Antigravity (AGY), and Grok Build.

These are agents specialized in programming, capable of exploring repositories, implementing features, refactoring code, and running tests.

Why use Grok Bot directly to write hundreds of lines of code when it can operate Antigravity and delegate that activity?

Grok Bot can program. It can write scripts and solve technical problems when necessary. But there is a difference between being able to perform a task and being the most suitable tool for it.

I give Grok Bot a different role: understand my objectives, organize activities, select tools, follow execution, and verify results.

If I need to develop an application, it can prepare the requirements, invoke AGY, follow development, and present the result to me. Grok Bot can make use of specialized agents.

This is not limited to software development.

## A YouTube channel produced by a team of agents

One of my projects involves producing documentaries about flags and their history for a YouTube channel.

I use Grok Bot to coordinate a process involving historical research, scripts, narration, images, animation, editing, and technical validation.

The process starts with choosing a topic. Grok Bot researches sources, organizes references, curates material, and prepares the information for the episode.

It then invokes Antigravity to write the script. AGY uses a skill containing the editorial rules, narrative structure, and production criteria. Grok Bot can delegate that task to another agent instead of using its own context to produce the entire script.

Once the script is ready, narration begins. Grok Bot uses Google AI Studio to generate audio by segment with the voice selected for the channel.

Whisper then processes the audio files and aligns the words with their timestamps. This shows when each part of the narration occurs.

With that information, I can plan the shots: divide the script into scenes and specify images, movements, and the duration of each shot.

Antigravity returns to help prepare visual assets. Other tools, such as vectorcraft-cli, help produce vector flags and maps while preserving the fidelity of historical elements.

Finally, tools from the `*-craft-cli` family and FFmpeg handle composition, editing, audio processing, and rendering. I receive the assembled video for evaluation.

But there is an important part of this architecture I have not yet mentioned.

How do I control all these tasks, their dependencies, and the files they produce? How do I know whether a stage was actually completed, whether an artifact was changed, or whether approval was granted?

That is where ESAA comes in.

## ESAA: the structure that governs the process

Alongside Grok Bot and the specialized agents, I use ESAA (Event-Sourced Agentic Architecture), an architecture I have been developing to coordinate multi-agent workflows.

ESAA uses event sourcing concepts: changes of state are recorded as events. This makes it possible to follow the evolution of tasks, recover execution states, and reconstruct the history of a process.

In the audiovisual project, ESAA organizes production as a set of tasks with explicit dependencies, forming a directed acyclic graph, or DAG.

Each task has responsibilities, inputs, outputs, and completion conditions. A dependent activity should not advance until its prerequisites have been satisfied.

The process also records evidence and SHA-256 hashes of artifacts, making it possible to identify changes and check the integrity of the files used.

Another important component is approval points, or gates. The audiovisual workflow has two official gates, with specific rules about who can authorize progress. Some approvals can be delegated to Grok Bot, while final decisions remain my responsibility.

The components have distinct roles:

- **Grok Bot:** interprets my objectives, researches, coordinates operations, and interacts with tools.
- **ESAA:** manages tasks, states, dependencies, evidence, and approvals.
- **Antigravity and other tools:** perform specialized work and produce artifacts.
- **Me:** set objectives, evaluate results, and retain authority over final decisions.

ESAA provides the governance structure in which the work takes place. It does not replace Grok Bot, and it is not another agent responsible for writing scripts or editing videos.

Imagine that narration needs to be redone after some scenes have already been prepared. The new audio can change the duration of segments and invalidate the previous synchronization.

In a manual process, someone would need to identify which files require updates and which stages must be run again. In a dependency-governed process like the one I built with ESAA, those relationships can be recorded, helping identify affected artifacts and organize the rework.

The same applies to failures. A tool may produce a technically invalid file, a scene may fail to meet specifications, or a stage may end without all required evidence.

In those cases, marking a task complete is not enough. It must be shown to have met its acceptance criteria.

That is one of the major differences between automating a sequence of commands and structuring a governed process.

Grok Bot coordinates the work. ESAA maintains formal control of execution. Specialized tools carry out the activities. I do not have to rely exclusively on the memory of a conversation to know what has been produced, approved, or needs correction.

## The audiovisual workflow in practice

Production can be summarized as a sequence: research and curation by Grok Bot, scriptwriting by AGY, narration in Google AI Studio, transcription and synchronization with Whisper, shot planning and visual creation, editing with specialized tools, technical validation, and delivery.

ESAA accompanies the process as a layer of governance across the whole workflow. Its tasks, dependencies, evidence, and approvals are not confined to one step.

![Diagram of audiovisual production: Grok Bot coordinates research, script, narration, synchronization, visual production, editing, and validation; ESAA governs the workflow, with final approval by the author.](/images/grok-bot-esaa-fluxo.svg)

The diagram represents the separation between coordination, execution, and governance.

Even when the technical stages are complete, publication does not happen automatically. The video must pass my review, and publishing it on YouTube remains a manual action.

## From audiovisual production to grading exams

Another example comes from my work as a university professor.

I had a set of handwritten essay exams. I needed to digitize them, identify the students' answers, and carry out a preliminary assessment against an answer key.

I used Grok Bot together with Antigravity to coordinate the process.

The exams were scanned and submitted to optical character recognition (OCR), including interpretation of the handwritten answers.

Using an answer key with assessment criteria and partial-credit rules, the agents produced a preliminary assessment of each exam.

For each student, they generated two main files: a PDF of the scanned exam and a Markdown document containing the transcribed answers, the score awarded for each item, and the reasons for those scores.

I did not simply want a grade. I wanted to know why each answer had received a particular score.

The answer key instructed the agents to assess understanding, justification, and application of concepts, accepting correct alternative answers and awarding partial credit.

With structured results, I could review the assessments and question specific decisions. In one review, an exam score changed. The document preserved both the previous score and the reasons for the change.

More importantly, when reviewing assessments of students with very low scores, I asked whether the adjustments might benefit only that group. The decision was to apply the same criteria to the entire class before approving changes.

Grok Bot and AGY organized and performed the processing without requiring Grok Bot to become a specialized OCR or grading system.

There are limitations. Handwriting recognition can fail, interpretation of essay answers can be wrong, and criteria can be applied inconsistently. Automated assessment is therefore preliminary. The final evaluation remains the professor's responsibility.

There are also necessary safeguards for student privacy, access to documents, and the handling of personal data.

The benefit is organized evidence that makes human review more efficient.

## It is more than prompt engineering

Writing good prompts remains important. An agent needs to understand objectives, receive context, respect constraints, and know when to request a decision.

But a process involving different agents, applications, and files requires more than a good instruction. Dependencies, states, input and output contracts, acceptance criteria, permissions, and failure recovery mechanisms must be defined.

In my case, Grok Bot provides the operational coordination layer. Specialized agents provide execution capabilities. ESAA introduces a formal layer for managing the task lifecycle.

This combination brings the work closer to concepts from software engineering, distributed systems, and process management.

It is not enough for an agent to say it has finished. We need to know what it produced, what evidence supports completion, which dependencies were satisfied, and who authorized progress.

A prompt states what we want to happen. A governed workflow must establish how it will happen, how it will be verified, and what to do when something fails.

That is why I increasingly think we need to look beyond prompt engineering and toward the engineering of agentic workflows.

## The next step is not an AI that does everything

There is a tendency to compare AI tools by asking which one programs, writes, researches, or produces images best. Those comparisons are useful, but they do not cover the whole question.

When I use Grok Bot, I am not necessarily looking for the most capable model for every activity. I am interested in a system that can use different tools to achieve an objective, choose the right executor, and coordinate the result.

When I add ESAA, I introduce another concern: making sure the work has persistent state, explicit dependencies, verifiable evidence, and control points.

This does not mean unrestricted autonomy. The more tasks we delegate, the more important boundaries and supervision become.

It also does not mean every activity should be performed by AI. Some tasks are better suited to deterministic scripts, others to specialized agents, and others still depend on human judgment. Distributing those responsibilities is part of the design.

I used to use AI tools to accelerate specific activities. Now I am beginning to use them to coordinate entire processes.

I spend less time moving files, repeating commands, and manually following every stage. I spend more time setting objectives, evaluating results, and making decisions.

At heart, I am still doing something I have done for years when coordinating projects: distributing responsibilities, setting criteria, and following deliveries.

The difference is that some of that operational coordination can now also be delegated, while an architecture of my own maintains a formal record of the process.

The future of AI agents may lie in developing systems capable of working with other systems under clear rules and with verifiable results.

That is how I use Grok Bot, Antigravity, and ESAA: as components of the same working architecture.
