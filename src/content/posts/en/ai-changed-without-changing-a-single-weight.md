---
title: "AI changed without changing a single weight"
description: "Fixes in Transformers and vLLM, plus a new Ollama default, show how configuration and sampling can alter model behavior while weights remain untouched."
published: 2026-08-13
locale: en
translation: a-ia-mudou-sem-trocar-um-unico-peso
tags: ["AI models", "Inference", "Training", "Open source"]
featured: false
---

When a model behaves differently, weights are the usual first suspect. Perhaps someone selected another release, applied a more aggressive quantization, or produced a new fine-tune. That explanation is intuitive, but incomplete. A model is also shaped by the rules that govern its attention, choose its next token, and preserve configuration as it moves between tools.

Three changes merged or published over the past 24 hours make that distinction tangible. [Transformers fixed an attention window that shrank after every save-and-load cycle](https://github.com/huggingface/transformers/pull/47940). [vLLM added an experimental way to reproduce the generation-time sampling distribution during training](https://github.com/vllm-project/vllm/pull/49577). And [Ollama's 0.32.10 release candidate turned off an implicit repetition penalty by default](https://github.com/ollama/ollama/releases/tag/v0.32.10-rc1).

Each change touches a different layer. Together, they explain why reproducing a result requires more than copying a weight file.

## A configuration value that kept shrinking

Gemma-family models use a sliding window to limit which positions participate in some attention operations. For the bidirectional case fixed in Transformers, the declared value had to be converted into the internal convention expected by attention kernels. The bug was that the converted representation was later saved as if it were still the original value.

The effect compounded. A window declared as 512 became 257 in memory. Save and reload once, and it became 129; repeat the cycle and it fell to 65, 33, and eventually 2. The weights stayed identical. The effective attention range did not.

The fix author measured the impact on `google/embeddinggemma-300m`. A single round trip reduced mean nDCG@10, a ranking-quality metric, from about 0.6272 to 0.6185 on NanoBEIR. Restoring only the value 512 recovered the original result, while all 314 tensors were verified as bit-identical.

The patch reconstructs the declared value before serialization. Current in-memory behavior remains unchanged, but reloading no longer divides the window a second time. One limitation cannot be engineered away: files already saved with a reduced number cannot be repaired automatically, because 257 could be either a legitimate declared value or the product of an earlier conversion.

Fine-tuning checkpoints, PEFT merges, quantized exports, and Hub reuploads can all cross this save-and-load boundary. Matching tensor hashes is therefore insufficient evidence of equivalence. Serialized configuration belongs in the artifact's provenance too.

## Training and generation need to remember the same wheel

The second case emerges in reinforcement learning. Under top-p sampling, the runtime keeps the smallest token set whose cumulative probability reaches a threshold, then normalizes the choice within that subset. Training may later recompute probabilities over the entire vocabulary. The observed token is unchanged, but the wheel used to assign its probability is different.

That mismatch distorts importance ratios and Kullback-Leibler, or KL, divergence estimates used to compare distributions. vLLM's new experimental feature returns the support retained after top-k or top-p filtering for every generated token. Training can then recompute probabilities over the same set used during the rollout.

In the experiments included with the pull request, replay kept the mean importance ratio closer to 1, reduced bias in log-probability differences, and produced a more stable approximate KL. This is evidence that the generation and training distributions were better aligned mathematically. It is not evidence that downstream reward or task accuracy improved, a limitation the author states explicitly.

The feature also arrives with narrow boundaries. It requires Model Runner V2, processed log probabilities, a temperature above zero, and specific output settings. Speculative decoding, custom samplers, and custom logits processors are not supported yet. This is research infrastructure, not a universal toggle.

## A silent default is part of the executed model

Ollama offers a third example for people who simply run models. In the 0.32.10 release candidate, models that do not set `repeat_penalty` now receive 1.0, which disables the penalty. The runtime previously supplied 1.1 implicitly.

A repetition penalty makes previously emitted tokens less likely to be selected again. It can reduce unwanted loops, but it also changes the model's output distribution. Two tools with different defaults may produce different answers from the same weights even when users provide the same explicit parameters.

The release notes say the new value matches other engines and speeds up speculative decoding. Operators can restore a model-specific penalty if an older model begins to repeat itself. The status matters: 0.32.10 is still a release candidate. It is available for testing, not a stable release whose behavior should already be treated as universal.

Changes like this deserve regression tests built from representative inputs. Assuming that an omitted parameter means neutral behavior is risky when each runtime fills the gap differently.

## The real artifact is larger than the checkpoint

Weights are the heaviest part of a model, but they do not contain all of its behavior. A serialized window can change effective context. The support retained by top-p can alter training mathematics. A default value can shape generation without appearing in a request.

For model publishers and evaluators, the practical response is to record the checkpoint, configuration, library versions, explicit parameters, and consequential runtime defaults together. A reproducibility suite should also exercise a complete save-and-load cycle, compare results across upgrades, and keep regression cases that cross more than one engine.

AI reproducibility does not begin when two weight files share a hash. It begins when we can account for every rule that turns those weights into behavior.
