# Vale Lab Hypothesis Workbench

## Purpose

Vale Lab should evolve from a research publication into a human-approved hypothesis-testing workbench. The first case study will be the creator's **Unselfish Gene theory**. This document defines the machinery only; it does **not** assert or summarize the theory until the creator supplies or approves its claims.

The workbench should help a curious non-specialist behave more like a careful research collaborator: separate ideas from evidence, turn broad claims into testable hypotheses, search for disconfirming evidence, document uncertainty, design feasible tests, and preserve a transparent audit trail.

## Core rule

The system is not a truth machine. It is a structured argument-and-evidence machine.

Every important claim should be traceable to one of:
- a primary source,
- a secondary synthesis,
- a dataset,
- an explicit calculation,
- an experiment or simulation,
- or a clearly labeled inference/speculation.

## Research object model

A research project should support these linked objects:

### Question
A broad motivating question. It may be interesting before it is testable.

### Claim
A declarative statement whose truth could matter to the project.

### Hypothesis
A claim rewritten so that evidence could meaningfully raise or lower confidence in it.

Required fields:
- hypothesis_id
- statement
- scope
- prior_confidence: low | moderate | high | unknown
- falsifiers
- supporting_observations
- competing_explanations
- measurable_predictions
- dependencies / assumptions
- current_status

### Evidence item
Required fields:
- citation
- source_type
- publication_date
- peer_review_status when known
- study_design
- sample / dataset
- measured_outcomes
- result_summary
- limitations
- relevance_to_hypothesis
- direction: supports | challenges | mixed | contextual | unresolved
- confidence_in_interpretation

### Counter-hypothesis
The strongest plausible alternative explanation. The system should actively seek these instead of treating them as optional criticism.

### Test
A proposed observation, analysis, simulation, reproduction, survey, or experiment.

Required fields:
- target_hypothesis
- prediction
- method
- data required
- analysis plan
- success criterion
- failure criterion
- confounds
- ethics / safety considerations
- estimated cost and effort
- preregistration needed? yes/no
- replication plan

### Result
A record of what actually happened, including null results and failed attempts. Results must never be rewritten to fit the hypothesis.

## Workflow

1. **Define the question.** Preserve the creator's original language separately from the formalized version.
2. **Decompose into claims.** Do not test a vague worldview all at once.
3. **Translate claims into falsifiable hypotheses where possible.** If a claim is not falsifiable, label it conceptual/philosophical rather than pretending it is empirical.
4. **Map prior work.** Search primary literature, reviews, datasets, replications, critiques, and relevant open-source tools.
5. **Steelman opposition.** Create at least one serious counter-hypothesis and search directly for evidence favoring it.
6. **Build an evidence table.** Separate source quality from whether a source agrees with us.
7. **Estimate uncertainty.** Use calibrated language; do not turn weak evidence into numeric precision unless a defensible model exists.
8. **Design the smallest informative test.** Prefer cheap/reversible analyses and simulations before costly or risky experiments.
9. **Precommit when stakes justify it.** Record hypotheses, endpoints, exclusion rules, and analysis plans before confirmatory work.
10. **Run / reproduce / simulate.** Keep raw outputs and code where legally permitted.
11. **Update confidence, not history.** Preserve the original hypothesis and record why confidence changed.
12. **Publish a readable research note.** Include evidence for, evidence against, unresolved questions, limitations, and next experiment.

## Scientific discipline safeguards

- Never equate peer review with truth.
- Never equate a preprint with junk.
- Do not use citation count as a substitute for methodological quality.
- Distinguish correlation, prediction, and causal inference.
- Check power/sample-size limitations when relevant.
- Look for replication, preregistration, multiple-comparison problems, researcher degrees of freedom, data leakage, benchmark contamination, and publication bias where applicable.
- Do not cherry-pick favorable endpoints or studies.
- Record negative and null findings.
- When experts disagree, represent the disagreement rather than averaging it into false consensus.
- Prefer primary data and methods sections over press releases.
- For high-stakes or specialized claims, seek qualified human review before presenting the work as strong evidence.

## UI / product concept

The blog POC should reserve a future `/workbench` or `/lab` surface that can eventually show:
- research question
- claim map
- hypothesis cards
- evidence-for / evidence-against matrix
- competing hypotheses
- source provenance
- experiment proposals
- results / replications
- confidence history
- publication-ready research note

For the current blog build, a static prototype or schema is sufficient. Do not build a database or automated literature crawler unless required by a later issue.

## First case study: Unselfish Gene theory

Create only an empty project shell for this first case study unless the creator supplies the theory text or a research brief. Do not infer its meaning from the title.

The first proper research pass should:
1. preserve the creator's original statement verbatim,
2. ask what would count as being wrong,
3. identify the relevant scientific disciplines,
4. break the idea into independently testable claims,
5. map the strongest existing evidence both for and against those claims,
6. propose the cheapest informative test or simulation,
7. identify what expertise would be needed for meaningful peer review.

## Definition of success

A successful Vale hypothesis workflow should make it harder—not easier—to fool ourselves.

The output should be interesting enough for a general reader, transparent enough for a skeptical technical reader to audit, and humble enough that a domain expert can quickly see where the evidence stops and speculation begins.
