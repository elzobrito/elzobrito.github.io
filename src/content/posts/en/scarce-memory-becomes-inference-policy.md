---
title: "Scarce memory becomes inference policy"
description: "vLLM and llama.cpp now treat cache, disk, and model eviction as explicit capacity decisions rather than invisible server details."
published: 2026-08-07
locale: en
translation: memoria-escassa-vira-politica-de-inferencia
tags: ["AI infrastructure", "Open source", "Inference", "Memory"]
featured: false
---

Running a model is not only a question of whether its weights fit on a GPU at startup. Long conversations accumulate context, several models compete for the same machine, and an active request cannot lose its resources as if they were abandoned temporary files. When memory gets tight, the server must decide what to preserve, what to move, and who has to wait.

Three changes merged on August 7 make those decisions more explicit. [vLLM added a native path for offloading the key-value cache to disk](https://github.com/vllm-project/vllm/pull/49644). In llama.cpp, two related changes [introduced a Least Recently Used eviction queue](https://github.com/ggml-org/llama.cpp/pull/26572) and [protected busy models from eviction](https://github.com/ggml-org/llama.cpp/pull/26567). The projects and mechanisms differ, but they point in the same direction: memory is becoming an operating policy rather than a physical limit left for the server to discover by failure.

## Context can leave memory without disappearing

During generation, Transformer models retain a **key-value cache**, or KV cache, so they do not have to recompute the entire context for every new token. That saves computation, but the cache grows with the number and length of active sequences. Once it consumes GPU memory, one option is to move less urgent blocks to another storage tier.

vLLM already supported host memory as a destination for this offload. The new option adds local disk without requiring an external storage service. When `kv_offload_backend` is set to `disk`, cache blocks pass through small pinned-memory buffers and into a preallocated file. The design uses direct I/O, vectorized read and write operations, and two buffers so GPU transfer can overlap with storage activity.

In practical terms, a machine with limited free host memory but abundant local NVMe capacity gains another place to keep reusable context. This does not make disk behave like fast memory. It creates a deliberate tradeoff: accept storage latency and I/O complexity when that is cheaper than repeating an expensive prefill.

The benchmark reported in the pull request shows the opportunity, not a universal guarantee. On a server with an H100 GPU, 128 GB of RAM, and local NVMe, using a specific long-conversation workload, reloading from disk sharply reduced time to first token compared with recomputing evicted context. Those results belong to that hardware, model, and dataset. Different queues, drives, and reuse patterns may behave very differently. The useful decision depends on cache-hit frequency and the actual cost of recomputation.

## LRU must know when a model is working

The llama.cpp multi-model router faces scarcity at a different level. When there is no capacity to load the requested model, one resident instance has to leave. A **Least Recently Used** (LRU) policy offers a simple rule: evict the model that has gone unused for the longest time.

The new queue orders eviction requests when capacity runs out. Requests waiting for the same model are released together once it becomes ready; if a client disconnects while waiting, its entry is removed. That turns a diffuse race for capacity into an observable waiting order.

Recency alone, however, is not an operational safety signal. A model may have been loaded earlier and still be serving someone. The companion change therefore counts active proxy connections and excludes models that are loading, downloading, or handling a request from eviction. It is a small safeguard with a large consequence: reclaiming capacity should not destroy the work that made the capacity valuable.

The implementation also states its current limit. Request counting is provisional and may later be replaced by more direct communication between child and parent processes. That caveat matters because distributed state becomes stale quickly. If the router cannot tell precisely when work begins or ends, it may retain idle resources or evict ones that are still needed.

## Capacity is a product decision

The two approaches operate at different scales. vLLM moves pieces of context among GPU memory, host memory, and disk. llama.cpp decides which entire models remain resident and how requests wait for them. One manages data inside execution; the other manages the executors themselves.

For teams offering shared inference, both require signals beyond “the server is up.” Operators need to know how many blocks were offloaded, how often they were reused, how much latency storage added, how long requests waited, and why a model was retained or removed. Without those signals, a sophisticated policy may simply move the bottleneck from GPU to disk or from memory to a queue.

Scarce memory has always forced choices. The meaningful change is that software is beginning to name them. A mature server does not pretend capacity is infinite. It preserves what may become useful again, protects work already in progress, and turns waiting into an explainable consequence rather than an accident.
