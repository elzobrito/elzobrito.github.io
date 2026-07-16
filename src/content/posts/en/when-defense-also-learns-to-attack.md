---
title: "When defense also learns to attack"
description: "GPT-Red turns adversarial testing into continuous training, while new GitHub controls show how security signals can reach real development workflows."
published: 2026-07-16
locale: en
translation: quando-a-defesa-tambem-aprende-a-atacar
tags: ["AI", "Security", "Agents", "Development"]
featured: false
---

Every page, file, message, and tool available to an artificial intelligence agent expands the surface where external data can steer it away from its original task. The established response is to ask security specialists to think like attackers, expose weaknesses, and turn what they find into safeguards. That work remains essential, but it has a scaling problem: models and integrations change faster than a team can explore them by hand.

Research released yesterday by OpenAI moves part of that contest into training itself. Rather than assigning a model only the defender's role, the work creates a specialized adversary that learns to find new attack paths. On the same day, GitHub expanded the structure used to detect and route exposed credentials. These are different developments, but they share a direction: security is becoming a cycle of discovery, response, and learning instead of only a fixed collection of rules.

## Training an attacker to improve the defender

[GPT-Red is an internal adversarial-testing model](https://openai.com/index/unlocking-self-improvement-gpt-red/) trained through self-play reinforcement learning. The attacker is rewarded for causing a valid failure, while a varied group of defenders is rewarded for resisting it and still completing the legitimate task. As the defenders improve, the attacker has to discover more varied strategies. Think of a goalkeeper practicing against a penalty taker who also learns after every shot: repeating one move soon stops producing useful information.

The training scenarios represent malicious instructions embedded in a webpage, file, message, or tool result. Each environment defines what the attacker controls and what outcome counts as a failure. The important contribution is not merely producing more examples. Attacks found by the model are fed back into the training of production models, closing the loop between discovery and defense.

OpenAI reports that GPT-Red succeeded in 84% of scenarios in an indirect-attack evaluation, compared with 13% for human specialists working independently. The company also says GPT-5.6 Sol had six times fewer failures on its hardest direct evaluation than its best production model from four months earlier. These are first-party results from partly internal evaluations, and the detailed technical paper was not yet available when this article was published. They show progress within that experimental setup, not a general security guarantee.

The most tangible test targeted an agent managing a vending machine. After experimenting in simulation, the attacking model transferred its strategies to the production system and changed prices and orders. Another test covered ten data-exfiltration tasks against a coding agent. These cases matter because they move beyond abstract dialogue: risk becomes concrete when an instruction interpreted by a model produces an action in another system.

For agent builders, the practical lesson is to treat every context source as untrusted input. Least privilege, confirmation before sensitive actions, data isolation, and verifiable records remain necessary. A stronger defender lowers the attacker's odds; it does not replace boundaries around the environment where the agent operates.

## Learning from attacks without distributing an attacker

The design makes a consequential security choice: GPT-Red will not be released as a general-purpose model. OpenAI keeps the offensive capabilities deliberately cultivated in it separate and transfers only the resulting resistance into public models.

That separation challenges the simple assumption that every defensive advance must include unrestricted release of its offensive instrument. It also limits independent verification of the reported results. OpenAI says internal specialists, external teams, layered safeguards, and real-time monitoring will remain part of the process. Self-play expands testing volume and variety; it does not remove people from the loop or erase the gap between an experimental environment and a deployed application.

## Moving from a signal to a response

While GPT-Red focuses on generating attacks, a [GitHub secret-scanning update](https://github.blog/changelog/2026-07-15-improvements-to-secret-scanning-and-public-monitoring/) illustrates the other side of the cycle: turning detections into operational responses.

GitHub now recognizes APIclub and Resend keys, blocks VolcEngine keys by default in repositories with push protection enabled, and adds a field to alert events that separates provider-specific detectors from generic ones. The latter category includes broad patterns and AI-detected secrets. That distinction is useful to security integrations because receiving systems can filter, route, and measure alerts without maintaining their own type mapping.

The Resend partnership adds a crucial next step. When one of its credentials appears in a public repository, GitHub can forward the finding to the issuer, which can revoke it or notify the responsible administrator. Detection is only the beginning; shortening the time to invalidate the credential is what limits damage.

## Security as an adaptive system

The developments in this window do not provide a universal defense. They reveal two components of a more adaptive system. One adversary learns to produce cases that familiar evaluations no longer expose. Infrastructure elsewhere classifies signals more clearly and moves detection closer to a concrete response.

The next challenge is keeping adaptation from becoming opacity. Internal metrics need to be read with their limits, probabilistic findings require confirmation, and agents still need narrow permissions. A defense that learns to attack may find weaknesses faster; engineering remains responsible for turning each discovered weakness into a verifiable barrier.
