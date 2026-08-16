---
title: "Claude's invisible mark is more fragile than it looks"
description: "Anthropic now marks text and files to comply with the EU AI Act. Here is what is confirmed, what remains secret, and why rewriting can erase the signal."
published: 2026-08-16
locale: en
translation: o-carimbo-invisivel-do-claude-e-mais-fragil-do-que-parece
tags: ["AI", "Claude", "Transparency", "Regulation"]
featured: false
---

Claude now comes with an invisible mark. That sounds like hidden Unicode, unusual spacing, or a personal identifier buried in the output. Anthropic describes something different: supported models embed an imperceptible watermark in the text itself, so the signal travels when text is copied and pasted and may survive some editing.

The more consequential detail is in the limitations. Anthropic says a mark may no longer be detectable after heavy editing, paraphrasing, translation, or mixing with other material. The watermark is a provenance signal, not permanent proof of authorship.

That distinction changes the useful question. It is not simply “How do I remove it?” but **what does the mark prove, who can detect it, and which claims remain unverified?**

## What changed on August 2

The policy follows [Article 50 of the European Union's AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj). Since August 2, 2026, providers of systems that generate text, images, audio, or video must, where technically feasible, make outputs machine-readable and detectable as artificially generated or manipulated.

[Anthropic signed the Code of Practice on Transparency](https://digital-strategy.ec.europa.eu/en/news/strong-backing-code-practice-transparency-ai-generated-content), a voluntary instrument that offers a recognized path to demonstrate compliance. The law creates the obligation; the code organizes a way to meet it. Roughly 190 organizations signed, including Anthropic, Google, Meta, Microsoft, Mistral, and OpenAI.

According to [Anthropic's documentation](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content), Claude models launched in the EU on or after August 2, 2026 support marking from launch. Earlier systems receive a transition period that European Commission guidance says ends on December 2, 2026.

Anthropic applies marking worldwide on supported models. The policy covers Claude, the API, Claude Code, Claude Cowork, and Claude Tag, as well as cloud partners when the relevant marking method is supported. There is no published opt-out.

This does not mean that every response from every Claude model has been marked since August 2. Coverage depends on the model and available support, and Anthropic says work on pre-existing models is still in progress.

## There is no secret character to delete

Anthropic has confirmed two distinct methods. Text receives a watermark embedded during generation. Supported files such as SVG, PNG, and JPG receive signed provenance metadata following the C2PA standard.

For text, Anthropic has not yet published the algorithm, key, detector, or accuracy figures. It has not said that Claude uses Google's SynthID-Text. Many online explanations turn a plausible analogy into a confirmed specification.

[SynthID-Text](https://ai.google.dev/responsible/docs/safeguards/synthid) is useful for understanding this family of methods. It modifies next-token probabilities in a controlled way during generation. The output remains readable, but it accumulates a statistical pattern that a trained detector can score. This is broader than choosing between synonyms: a token may be a word, part of a word, or even a character.

It is reasonable to infer that Claude's watermark is also distributed across the text because it survives copy and paste, may remain after mild editing, and weakens under larger transformations. The exact mechanism remains unknown until Anthropic releases the technical documentation it has promised.

## What detection would prove

Even a detected mark supports a narrow conclusion: the content **may have been processed by Claude**. It does not establish that the model invented the ideas, wrote the first draft, or produced every sentence without human intervention.

Human writing sent to Claude only for translation, formatting, or revision may come back marked. The reverse is equally important: no detected mark does not prove human authorship. The text may come from an older model, be too short, have been rewritten, or have passed through an unsupported surface.

Anthropic has not yet released the public detection mechanism. It says users and third parties will be able to check marks, with details to follow. There is therefore no basis for claiming that only Anthropic will always be able to detect them, nor a public way to verify whether a particular rewrite defeated the signal.

The public documentation describes provenance, not identity. It does not say the text embeds a user name, account, company, or conversation. Without the full technical specification, however, claims should stay within what Anthropic has actually documented.

## Will another model remove the watermark?

It may reduce detectability enough for the mark to disappear, but there is no public guarantee for every model or passage. Anthropic itself lists heavy editing, paraphrasing, translation, and mixing as cases where marked text may no longer carry a detectable signal.

Google documents the same limitation for SynthID-Text, while [robustness research](https://arxiv.org/abs/2508.20228) shows that statistical text watermarks weaken under meaning-preserving transformations. Those results illuminate the general problem; they do not measure Claude's undisclosed implementation directly.

Spell-checking and replacing two words preserve most of the original sequence. A full rewrite changes vocabulary, syntax, sentence boundaries, and the order in which ideas are expressed. A second model can therefore degrade the signal by generating a new sequence rather than by locating and deleting a hidden code.

Claims that any small local model will reliably “erase the stamp” go beyond the available evidence. With no public Claude detector, results cannot yet be confirmed case by case. Text length, language, rewrite quality, and watermark implementation may all matter.

## What a genuine rewrite request looks like

For a legitimate editorial rewrite, not an attempt to conceal AI use where disclosure is required, the instruction should ask for structural transformation rather than cosmetic changes:

> Rewrite the entire text while preserving its facts, meaning, and tone. Reorder the ideas, rebuild the sentences, and use original vocabulary. Do not add information or copy distinctive phrases from the source. Return only the new version, and flag any passage whose meaning cannot be preserved safely.

That request is likely to alter the surface form much more than a proofreader would. It is not a removal certificate, does not transfer authorship, and does not cancel contractual, academic, or legal disclosure duties. Paraphrasing model output does not automatically turn it into original human work.

The law adds an often-missed nuance. Article 50 exempts provider-side technical marking where a system performs only standard assistive editing without substantially changing the input or its meaning. For public-interest text, deployer disclosure also has an exception when the content has undergone human review or editorial control and a person or organization assumes editorial responsibility. Technical watermarking and public labeling are related but distinct layers.

## Fragile by design does not mean irrelevant

The watermark does not solve authorship and was not presented as a universal AI detector. It adds a provenance clue in a medium where copying, translation, and recombination are trivial. That clue may survive light transformations and disappear after deep rewriting.

This still has practical value. Platforms, newsrooms, and researchers may identify output that circulates nearly unchanged at scale. The signal can also make it harder to deny model use when text was copied verbatim. The mistake is to demand forensic proof that neither the technology nor Anthropic promises.

Users can reasonably object to compulsory, worldwide marking in professional or academic work. But screenshots and social posts do not establish a mass cancellation wave without verifiable data. The debate improves once it leaves both extremes behind: Claude is not indelibly signing each user's identity, and the watermark is not useless regulatory theater.

The honest conclusion is quieter. Supported Claude models now carry a worldwide processing signal; files use C2PA; older models are transitioning; public detection details are still forthcoming; and heavy rewriting may erase technical evidence without erasing the real production history of the text.

## Method note

This article began with a topic and draft supplied by the author. Its claims were checked against Anthropic's documentation, the AI Act, the European Commission's Code of Practice materials, and the SynthID-Text documentation. The final version treats as unproven the claims that Claude uses SynthID exactly, that only Anthropic can detect its mark, and that any second model guarantees removal.
