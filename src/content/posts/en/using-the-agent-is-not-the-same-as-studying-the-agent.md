---
title: "Using the agent is not the same as studying the agent"
description: "Allowing chat in class treats the coding agent as a shortcut. Forming engineers for that era requires a curriculum whose constant object is the agent itself (Apply, Analyze, Create), graded on system understanding."
published: 2026-09-21
locale: en
translation: usar-o-agente-nao-e-o-mesmo-que-estudar-o-agente
tags: ["Education", "Agents", "Software engineering", "Curriculum", "AI"]
featured: false
---

The first institutional reply to coding agents is usually permissive and thin: allow chat in class, ask students to disclose use, and keep grading the same artifact as before: a repository that “works.” I have watched that bargain sold as modernization. To me it confuses access to a tool with education about the system the tool hides. Using the agent is not the same as studying the agent.

What changes when an engineer stops typing every line and starts directing a system that writes code is not only productivity. The unit of responsibility changes. I have already argued that [agent engineering is not vibe coding with more autonomy](/en/blog/agent-engineering-is-not-vibe-coding-with-more-autonomy/): the useful question stops being “what did the model write?” and becomes who decides, with what evidence, inside which bounds, and with what ability to undo harm. If the curriculum still measures only generated output, it trains acceptance of plausible text, not failure diagnosis. A classroom that “allows AI” without changing the object of study stabilizes the shortcut and postpones the discipline.

## One object, three verbs

This Fall 2026, the University of Michigan is offering EECS 498-016, *Applied Agentic Software Engineering* (AASE): four credits, no exams, August 31 through December 11. The [course site](https://eecs498-aase.github.io/) states the bet in one line: «One object, a coding agent, taken three ways across fifteen weeks.» The [syllabus](https://eecs498-aase.github.io/syllabus.html) makes that operational. Apply (18%, weeks 1 to 3 with the build into week 6): students use Aider with a small local model (qwen3.5, served via Ollama) to specify and build a pair-programmer. Analyze (22.5%, weeks 4 to 7): call a raw LLM API, hand the model tools, write the loop, add an approval layer, stop conditions, and an eval suite, and close with an agent v0 that attempts an unattended gate. Create (49.5%, weeks 8 to 15): wiki memory, design skills, hardening, a webserver and a channel, until an assistant worth keeping. Expected cost beyond a laptop: $0. Individual work. Hackathons. AI use required and documented. Instructors: Marcus Darden and staff.

The structure matters less as a topic list than as a curricular decision. The artifact is one growing repository: the pair-programmer becomes agent v0, which becomes the assistant. Students do not “try several AI tools” and then return to the classical exercise. They stay inside the same object while their distance to the model changes: first above the abstraction (Aider), then below it (API, tools, loop), then expanding the surrounding system (memory, method, deploy). That is the opposite of a prompt workshop. It is a semester whose constant object is the agent.

Grading reinforces the thesis. The course states without euphemism: «Understanding is what gets graded here, not generation. If you can't explain it, you didn't build it.» And: «The engineers we want to graduate can explain why an agent failed and fix the system around it.» Generated code is not the proof of competence; understanding the system that produces and fails is. The Big Three (context, model, prompt) appear early as a diagnostic language, not a marketing checklist. When the local model is small on purpose, sloppy engineering becomes visible: the course treats that as pedagogy, not a budget compromise.

## The week-4 window

The week of September 21 to 25, 2026 is where the distinction between using and studying stops being rhetoric. The syllabus says week 4 belongs to both phases on purpose: Lab 02 continues the Apply build, with staff in the room, while lectures L07 and L08 open Analyze: the API client students had been handed wrapped, tool use, function calling, and the agent loop. The pair-programmer is still under construction (due October 6); at the same time the room already demands looking under the abstraction. It is not “finish using, then dissect.” It is deliberate use and mechanism analysis overlapping in the same week.

That overlap is, for me, the most honest curricular gesture in the design. A policy that only allows chat never needs this tension: the student generates, submits, and the system underneath stays a black box. A curriculum that makes the agent the semester’s object must force the student to drive the loop and, almost in the same period, to rebuild it. The Thursday, September 24 hackathon, still mid-build, only sharpens the point: observed work happens on the code that will be handed in, under clock pressure, not on a disposable exercise.

## What this demands of a curriculum, and what I am not claiming

The consequence I draw is not “copy Michigan.” It is that forming engineers for the coding-agent era stops being a permission policy and becomes a decision about the semester’s object. If the object remains the classical program and the agent enters only as an accelerator, grading still rewards generation. If the object becomes a single agent taken through Apply / Analyze / Create, grading can reward system understanding: why it failed, where context broke, which stop condition was missing, what the eval measured when the human left the room.

I am not saying every university will do this, nor that Michigan invented agent education. I am saying the contrast is now sharp enough to judge thin replies. Allowing chat without changing what is studied trains consumption. Studying the agent, at zero cost beyond the machine, with a local model that punishes loose engineering and a rubric that demands explaining what was submitted, trains the kind of engineer the course itself names: someone who can explain why an agent failed and fix the system around it.

Using the agent is the start. Making it the constant object of the semester is the education.
