---
title: "Agents write the code, not the proof"
description: "Eight scientific-computing projects show that agents can already rewrite and accelerate complex software. Validation, interpretation, and stewardship are now the bottleneck."
published: 2026-07-28
locale: en
translation: agentes-escrevem-o-codigo-mas-nao-carregam-a-prova
tags: ["AI", "Science", "Software engineering", "Agents"]
featured: false
---

Coding agents can already replace the engine of a scientific library, rewrite tens of thousands of lines in another language, and find shortcuts that turn hours of processing into minutes. What they still cannot reliably establish on their own is whether the new system preserves the scientific meaning of the old one.

That is the most important conclusion in [*Scientific computing in the age of agentic AI: an exploratory field report*](https://cdn.openai.com/pdf/scientific-computing-in-the-age-of-agentic-ai-an-exploratory-field-report.pdf), written by OpenAI researchers and collaborators from universities, institutes, and bioinformatics projects. It brings together eight case studies, mostly in the life sciences, spanning package maintenance, full Rust rewrites, and GPU-native redesigns.

The performance figures are striking. The report becomes more useful when it explains why those figures are not enough.

## The engineering deficit agents can address

Scientific software is often born under conditions unlike those of a mature commercial product. A small team implements a method for a paper or funded project. Publications and methodological novelty receive recognition; testing, documentation, packaging, and long-term maintenance compete for whatever time remains.

The prototype may then become infrastructure for an entire field. Years later, researchers depend on code that is difficult to install, tied to aging libraries, and filled with behavior that was never formally documented. In genomics, the imbalance grows with data volume: sequencing became cheaper faster than analysis, increasing the share consumed by compute, storage, and specialized labor.

This backlog of engineering debt is precisely where coding agents have leverage. They do not need to invent a new biological theory to modernize a build configuration, expand a test suite, or translate an existing implementation. They need a bounded objective, a repository, and an observable standard of success.

The report groups the projects into six overlapping forms: lightweight maintenance, targeted optimization, framework migration, translation into another language, performance-oriented rewriting, and the creation of new capabilities. Autonomy varied widely, but one pattern recurred: the clearer the external reference, the more effective the collaboration.

## From ten thousand lines to sixty times less runtime

MHCflurry predicts which protein fragments may be presented to T cells. Agents helped replace its aging TensorFlow and Keras stack with PyTorch, changing nearly 10,000 lines across roughly 130 files. Previously released models continued to load the same weights, and their predictions remained within small numerical tolerances. The migration shipped in version 2.2.0 of the original project.

Rustar-aligner faced a larger surface: recreating in Rust the behavior accumulated in more than 20,000 lines of C and C++ from the STAR RNA aligner. On 10,000 yeast reads, the new program reported 99.815% agreement for single-end data and 99.883% for paired-end data across position, CIGAR, mapping quality, and other properties. Getting beyond 90% parity, however, required tracing individual reads through both implementations to explain discrepancies.

RustQC chose a different architecture. Instead of running 15 quality-control tools that repeatedly scanned the same files, it consolidated the work into one pass. On a dataset containing 186 million reads, summed sequential task time fell from 15 hours 34 minutes to 14 minutes 54 seconds, while disk traffic fell from 2.5 to 0.1 terabytes. The contributors reported numerical equivalence.

HelixForge moved the insertion of mutations into DNA reads onto a GPU-native path. In the evaluated scenario, the editing stage ran 98.6 times faster and the full workflow 59.6 times faster. Hifiasm received more localized optimizations: a 25.1% runtime reduction on held-out synthetic data, but 14.7% on real reads from a human chromosome.

These cases demonstrate a capability that is already practical. An agent can explore an unfamiliar codebase, propose performance hypotheses, and implement changes across a large surface. The dangerous mistake is treating production speed as evidence of correctness.

## A plausible output can still be scientifically wrong

The bayesm case makes the risk explicit. Agents reimplemented Bayesian models and samplers from an R package in Rust, then added statistical extensions. Early versions of those extensions produced plausible aggregate results. They were nevertheless defective.

The problems emerged only when evaluation moved beyond population means to convergence diagnostics, simulation-based calibration, and comparison with the original implementation. The system was not producing obvious nonsense. It was producing an answer with enough scientific texture to survive a shallow review.

The validation instrument can also fail. In HelixForge, an early audit falsely indicated strand imbalance because of downsampling. The agent responded by changing the GPU implementation even though the defect was in the test. Generated code is not the only object that needs scrutiny; the mechanism deciding whether it is correct needs scrutiny too.

Synthetic data accelerates iteration because it is small and has known properties. It does not replace real workloads. Public data at realistic scale exposed RustQC cases absent from minimal examples. Hifiasm's performance gain shrank when evaluation moved from synthetic data to real human reads.

The operational lesson is straightforward: compilation, internal tests, and a visually reasonable output are only the beginning. Scientific software needs equivalence defined at the right level, tolerances fixed before evaluation, representative datasets, domain metrics, and investigation of discrepancies rather than attention only to the final average.

## The human does not leave the loop; the job changes

In seven of the eight studies, human work concentrated on defining the problem, designing validation, selecting representative data, and judging differences between implementations. The agent absorbed more engineering effort; the specialist became the specifier, orchestrator, and authority over what counted as evidence.

That shift may have significant economic value. Less time spent on packaging, compatibility, and optimization leaves maintainers more room for context-heavy decisions. Runtime reductions can save resources in workflows executed millions of times. A scientific idea that might have remained a narrow prototype can reach a usable implementation.

Cheap code also creates a new risk: cheap forks. If any group can rapidly produce another version of a familiar tool, users and reviewers may fragment across several near-equivalent implementations, none validated deeply enough for real use.

This is why the report treats stewardship, continuing responsibility for software, as part of the technical outcome. Some changes were integrated into the original project. Elsewhere, a rewrite was adopted by a consortium capable of sustaining it. Compatibility, licensing, attribution, bug handling, and post-release maintenance are not administrative afterthoughts. They determine whether a rewrite becomes infrastructure or remains a demonstration.

## A field report, not a universal leaderboard

The authors clearly limit the scope of their conclusions. The projects were collected retrospectively, did not follow a common protocol, and form a small, selected sample. Benchmarks and improvements were reported by the contributors to each case and were not all independently reproduced. The economic estimates in the paper are illustrative scenarios rather than measurements of realized savings.

Those limitations prevent the report from serving as a universal ranking of agents or as proof that any scientific package can be rewritten with similar success. The eight cases still reveal a useful regularity: agents work best when there is an external reference against which they are allowed to fail.

The next frontier is not simply getting AI to produce more code. It is building contracts that make the code refutable: identical output where identity matters, numerical tolerance where mathematics requires it, calibration where an average can mislead, real data where synthetic data hides edges, and institutional responsibility where release does not end the work.

An agent can write the implementation. The proof remains a human project.
