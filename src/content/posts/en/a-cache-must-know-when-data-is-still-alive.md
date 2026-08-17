---
title: "A cache must know when data is still alive"
description: "Three vLLM fixes show how preemption, overlapping copies, and late notifications can turn AI caching into incorrect state."
published: 2026-08-17
locale: en
translation: o-cache-precisa-saber-quando-um-dado-ainda-esta-vivo
tags: ["AI infrastructure", "vLLM", "Reliability", "Open source"]
featured: false
---

Caching is usually framed as a speed story: retain completed work and avoid doing it again. In an artificial intelligence server, however, the retained data is not merely a convenient response. It may represent the attention memory of a sequence, a model's recurrent state, or vectors extracted from an image. Reusing the wrong block does more than slow an answer down. It can silently change what the model computes.

Three fixes merged into vLLM in the past several hours expose this problem from different directions. The Mooncake connector now [holds its own references to blocks used by asynchronous stores](https://github.com/vllm-project/vllm/pull/52372), Mamba state copies gained [ordered handling when source and destination overlap](https://github.com/vllm-project/vllm/pull/50729), and the multimodal cache stopped [forwarding an eviction notification that had already become stale](https://github.com/vllm-project/vllm/pull/52482).

Time connects the three. An identifier, a memory block, or a notification can survive after its associated meaning has changed. A trustworthy cache must know not only where data lives, but which generation owns it and how long it remains valid.

## An asynchronous store does not end when the function returns

The KV cache retains the keys and values computed by attention layers for tokens already processed. Instead of recomputing an entire prefix at every step, the server reuses that state. Mooncake can move parts of it to external storage, extending reuse across executions and nodes.

The defect arose because storing was asynchronous. A worker queued the job and returned while another thread read graphics processing unit (GPU) blocks and sent them later. In the meantime, the scheduler could preempt the request, return its blocks to the free pool, and assign them to another request. The pending store would then read the new content and save it under the old key.

This failure is particularly dangerous: the operation may finish without an obvious error while associating one token range with another request's KV state. A later request finds the expected key and receives data that does not belong to it. In the author's reproduction, 8 of 96 requests read incorrect KV on the previous code; the fixed run recorded none. Those figures belong to that H20, tensor-parallel 2, Qwen3-32B-FP8 setup with deliberate pressure on the block pool. They are not a general failure rate.

The fix makes each store job retain a reference to the GPU blocks until every participating rank reports completion. It also replaces accounting based only on the request identifier with a monotonically increasing, unique `store_job_id`. This matters because a preempted request can return with the same `req_id`; request identity alone cannot distinguish its old generation from the new one.

The practical lesson for asynchronous systems is to represent ownership explicitly. If a task may still read a buffer, that buffer is not free, even if the function that created the task has returned. If a name can be reused, it is not sufficient to identify a late operation.

## Copying is not the same as moving

The second defect affected Mamba model states in hybrid and speculative-decoding paths. Some shifts placed the source and destination in overlapping ranges of the same physical block. A parallel `memcpy`-style operation may read and write positions out of order; it does not provide `memmove` semantics, which preserve content when ranges overlap.

The result was intermittent because it depended on the effective order of GPU operations. Continuous tests on AMD hardware exposed the divergence, and the investigation traced it to a copy that worked for distinct blocks but not for a left shift within one block.

The repair preserves the parallel path for separate blocks and exact self-copies. Only a true overlap uses an ordered, token-by-token copy. In the reported tests, output hashes matched across configurations, while the added cost remained concentrated in the case that needs ordering. The lesson is not that every state copy should be serial. It is that the implementation must recognize when memory geometry invalidates the common optimization.

For teams building kernels, the practical consequence is to test aliases deliberately. Cases with separate source and destination regions do not exercise overlap semantics. A reference test should also start from an untouched snapshot, not from another copy routine that may share the same faulty assumption.

## A notification can outlive its truth

The third case involves multimodal inputs. During one scheduling pass, an encoder-cache entry could be evicted early and then allocated again. The freed list still contained the initial eviction. When that notification reached the model runner, it deleted a tensor that had already returned to the final state and terminated the engine with a cache-miss error.

The change does not prevent eviction or alter normal accounting. Before publishing the event, it checks the end-of-step state and reports an entry as freed only if it is still absent. The event stops describing an intermediate instant and instead represents the valid result of the scheduling transaction.

This pattern extends well beyond AI. Event queues, reactive interfaces, and distributed systems fail when a message that was true at creation becomes false before consumption. Versions, generations, or a final-state check let the consumer reject the late notice.

## Speed depends on identity

None of these repairs adds model capability. They protect the meaning of state used to accelerate execution. A reference prevents a block from being recycled too early; a per-job identifier separates generations of the same request; an ordered copy preserves overlapping regions; a final check discards an expired event.

That suggests a useful rule for AI infrastructure: every fast path should state who owns the data, which version is being observed, and which event ends its validity. Without those answers, a cache stops being merely an optimization. It becomes the system's second memory, faster than the first and less able to explain when it started remembering the wrong thing.
