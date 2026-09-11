# Vale Lab — Source of Truth

Status: ACTIVE
Authority: This document defines the current product and research-system intent. If older docs conflict with this file, this file wins unless the human owner explicitly overrides it.

## What Vale Lab is

Vale Lab is a **scientific intelligence / epistemic production system** designed to help a human move from curiosity to justified belief as quickly, accurately, transparently, and reproducibly as practical.

It is not trying to replace scientists, invent a new foundation model, or pretend to have expertise it does not possess. It is a human-augmentation system that organizes existing AI tools, established scientific methods, structured analysis, and human judgment into a disciplined workflow.

The core goal is to reduce wasted cognition: fewer nights of unstructured idea-chasing, faster elimination of weak hypotheses, clearer identification of what evidence would matter, and better conversion of surviving ideas into useful work.

## The three-part architecture

Everything belongs to one of three stages:

### 1. INPUTS
What enters the system.

Examples:
- human ideas and questions,
- observations and anomalies,
- peer-reviewed studies,
- datasets,
- public technical reports,
- reputable repositories,
- expert criticism,
- failed experiments,
- external methods worth adopting.

Inputs are not trusted merely because they are interesting. Human ideas are treated as signals to investigate, not conclusions to defend.

### 2. THROUGHPUTS
How uncertainty is converted into structured work.

Typical operations:
- define terms,
- atomize broad theories into individual claims,
- identify assumptions,
- map prior art and established knowledge,
- compare competing hypotheses,
- grade source quality,
- identify confounds,
- derive predictions and falsifiers,
- select suitable methods,
- run calculations, simulations, or analyses where justified,
- design the smallest discriminating experiment,
- replicate or reproduce when possible,
- update confidence after results.

Throughput is intentionally messy, but the system should make the mess observable and auditable.

### 3. OUTPUTS
What has earned additional human time or real-world resources.

Possible outputs:
- negative result / archived dead end,
- research note,
- explanatory article,
- hypothesis report,
- reproducible analysis,
- simulation result,
- experiment protocol,
- prototype,
- research handoff packet for a qualified external researcher,
- proposal for a larger test,
- applied implementation.

Most inputs should **not** become expensive outputs. The funnel is working when weak ideas fail cheaply and informative failures improve future work.

Outputs become new inputs. The system is a loop, not a one-way pipeline.

## The control layer

A control layer surrounds all three stages. Its job is to prevent drift, false confidence, wasted resources, and self-deception.

It tracks:
- scope,
- provenance,
- evidence quality,
- uncertainty,
- assumptions,
- source independence,
- confidence changes,
- cost,
- stopping rules,
- method choice,
- replication status,
- known failure modes,
- unresolved criticism.

The control layer also acts as a **spotter** for the human owner. The owner has final authority, but agents should explicitly flag when a request creates scope drift, adds cost without increasing information value, weakens reproducibility, or changes a frozen build. After flagging it clearly, agents follow the owner's decision.

## Human augmentation principle

Vale exists to enhance human reasoning, not automate humans out of the loop.

The desired outcome is that a person with relatively little formal training can:
- ask better scientific questions,
- understand why a claim is or is not supported,
- see uncertainty clearly,
- distinguish a strong experiment from an impressive-looking one,
- absorb established methods rapidly,
- communicate results responsibly.

Vale should make expert methods more accessible while honoring the people and institutions that developed them.

## Method adoption principle

**Do not invent a new reasoning technique until we have checked whether competent researchers, laboratories, standards bodies, engineering organizations, or analytic institutions already solved that class of problem.**

Vale should actively review and adopt useful methods from established practice. Every adopted method must record:
- source institution or authors,
- original purpose,
- where it fits in Vale,
- limitations,
- modifications made by Vale,
- evidence that the method improves outcomes.

If Vale changes a method, do not erase its origin. Credit is part of the method record.

## EchoHelp lineage

Vale reuses a core architectural insight from the earlier EchoHelp Triage Engine:

**signal in → normalize → interpret → prioritize → recommend → capture outcome → improve**

EchoHelp converted noisy QA findings into normalized decision artifacts. Vale generalizes that idea to epistemic work: uncertain claims become structured investigation items, which become evidence, tests, outcomes, and confidence updates.

The lesson carried forward is also architectural: one canonical structured object should remain the source of truth, and human-readable artifacts should be generated from it rather than becoming the truth themselves.

## Canonical investigation object

Long term, each investigation should have a machine-readable Investigation Record / Investigation Graph containing at least:

- question,
- claims,
- definitions,
- assumptions,
- evidence for,
- evidence against,
- source provenance,
- competing hypotheses,
- predictions,
- falsifiers,
- uncertainties,
- candidate methods,
- simulations / analyses,
- experiments,
- replication attempts,
- outcomes,
- confidence history,
- unresolved objections,
- next actions.

Articles, proposals, research handoffs, and dashboards should be views generated from this record.

## Publication relationship

Vale Publishing is the public communication layer, not the epistemic source of truth.

The article is the **readable exhaust of the research engine**.

Writing should be calm, clear, useful to intelligent non-specialists, and non-sensational. Publications should give explicit credit to researchers, labs, institutions, datasets, and open-source maintainers whose work made the investigation possible.

Long-form publication remains human-approved until a later workflow has proven reliable.

## Error-learning loop

Vale should log not only what was wrong, but **how the reasoning process failed**.

Candidate error classes include:
- bad input / weak source,
- definition error,
- assumption error,
- literature-search miss,
- measurement error,
- sampling error,
- confound missed,
- causal inference error,
- statistical error,
- model/simulation mismatch,
- failed generalization,
- domain-expertise gap,
- implementation error,
- publication overstatement.

Repeated errors should change future workflow rules. The institution should become harder to fool because it remembers its own failure modes.

## Current V0.1 boundary

The immediate system is deliberately small.

V0.1 should prove that Vale can take one human question and produce a structured investigation with:
- explicit claims,
- assumptions,
- competing hypotheses,
- evidence for and against,
- source provenance,
- falsifiers,
- predictions,
- uncertainty,
- next discriminating test,
- a human-readable article or report generated from the investigation.

Case 001 will be **Unselfish Gene Theory**, once the owner supplies the theory in sufficient detail.

Not V0.1:
- autonomous broad web scraping,
- automated journal ingestion at scale,
- generalized simulation farms,
- autonomous experimentation,
- automatic publication,
- giant multi-agent councils,
- pretending the system itself is a scientific authority.

Those are later capabilities only if V0.1 demonstrates information value.

## Success criterion

Vale is succeeding if it helps a human reach better-calibrated conclusions faster, eliminates weak ideas cheaply, makes surviving ideas easier to test or hand off, produces reproducible artifacts, and improves its own process using documented error history.