---
title: "Multimodal latency starts before the GPU"
description: "A vLLM change shows how images, audio, and video can delay a response before inference begins, and why useful concurrency must preserve order, failures, and equivalence."
published: 2026-08-31
locale: en
translation: a-latencia-multimodal-comeca-antes-da-gpu
tags: ["AI infrastructure", "vLLM", "Multimodal AI", "Performance"]
featured: false
---

A multimodal request looks like a single package to its user. Text, images, audio, and video go in together, then an answer comes back. The serving system has to assemble that package first. It may need to download, read, and decode every asset before a graphics processing unit (GPU) receives the work we normally call inference.

A [change merged into vLLM today](https://github.com/vllm-project/vllm/pull/54537) reveals an avoidable queue in that preparation stage. The open model-serving engine could already resolve several items from one modality concurrently, such as four images. It still waited for an entire modality group to finish before starting the next one. A request containing images, audio, and video therefore placed three independent categories in sequence.

The patch schedules every tracked asynchronous media item together, then reconstructs the original groups after they settle. The code change is compact, but its lesson is broad: perceived latency does not belong to the model alone. It also emerges from how a system arranges data the model has not seen yet.

## Concurrency within a category is not enough

Picture three stations preparing ingredients for one dish. Each station has several people working in parallel. The overall process remains partly serial if the audio station cannot begin until every image is ready, while video must wait for audio.

That was the previous shape of the pipeline. vLLM's asynchronous connector already moved blocking input, output, and decode work away from the event loop. Multiple images could advance together, as could multiple audio or video items. The wait between modalities still added stages that had no dependency on one another.

The revised implementation temporarily flattens the work list, waits for all items through `asyncio.gather`, and uses recorded boundaries to restore every result to its modality and position. That reconstruction is essential. Concurrency cannot be allowed to swap two images, attach an identifier to the wrong video, or change the order of placeholders in the model input.

The patch's unit test launches six simultaneous fetches, two for each modality, and checks both overlap and exact reconstruction of values and identifiers. A second test injects a failure while other operations are still running. The server lets every task settle before re-raising the exception, so real network or thread-pool work is not silently abandoned in the background.

## The measured improvement belongs to media preparation

In the contributor's benchmark, a request with one image, one audio clip, and one video moved from a median of 99.885 to 77.744 milliseconds, a 22.2% reduction in that measured path. With four items from each modality, the median fell from 153.845 to 136.230 milliseconds, or 11.4%. Tests through the HTTP connector reported reductions of 18.8% and 17.5% for those two shapes, respectively.

Those figures need a precise boundary. Timing begins when the asynchronous parser is entered and ends when multimodal data and identifiers have been materialized. It excludes GPU model execution, later tensor processing, token generation, and HTTP response serialization. It does not mean every application becomes 22.2% faster. A video-only control, for example, measured a 3.9% increase within a difference of only a few milliseconds. There was no independent modality to overlap in that request.

At eight concurrent requests containing four images and four videos each, the reduction narrowed to 2.3%. The report attributes that point to saturation in shared decode and thread-pool resources. Concurrency can reorganize waiting, but it cannot create capacity. Once every task competes for the same bottleneck, starting them together no longer removes much wall-clock time.

## Faster matters only if the request remains the same

The strongest part of the evidence is its equivalence check. The contributor compared fingerprints covering the rendered conversation, modality and identifier lists, original bytes, decoded array shapes and data types, and decoded content. Every tested ordering of image, audio, and video matched between the old and new implementations.

The test plan also included an A100 run with the same model, seed, and deterministic settings. Both versions produced the same 2,733 input token IDs, placeholder ranges, multimodal values, and 77 output tokens, including the stop token. This does not prove equivalence for every possible model and asset. It directly probes the patch's central risk: saving time by silently disturbing media order or association.

For practitioners, the immediate consequence is a better profiling boundary. If a multimodal endpoint is slow, tokens per second and GPU utilization cover only part of the trip. Download, decoding, input assembly, multimodal preprocessing, model execution, and response delivery need separate measurements. The queue may sit ahead of the accelerator, where buying a faster accelerator cannot shorten it.

## An optimization should declare what it does not change

This patch does not revise connector caching, deduplicate repeated URLs, or accelerate the model's internal multimodal processor. Its scope is narrower: stop serializing independent modality groups that were already represented as asynchronous work.

That restraint makes the result more useful. Multimodal systems are not slow only because neural networks are large. They also collect waiting time at the seams between formats, libraries, and queues. Improving those seams requires two forms of evidence: independent operations must actually overlap, and the semantic structure of the request must remain intact.

Before asking how many tokens per second a model produces, there is an earlier question worth measuring: how long does it wait for the world to be converted into something it can read?
