# Vale Lab — Experimentation Pipeline

## Purpose

Vale Lab should eventually do more than summarize emerging work. It should be able to turn strong findings into small, testable, reproducible experiments that improve Vale's own systems or explore clearly framed hypotheses.

This document defines a conservative progression from reading to experimenting.

## Stages

### Stage 0 — Observation
Read and summarize existing work. No experiment yet.

Output:
- research packet;
- claim ledger;
- article or note;
- open questions.

### Stage 1 — Reproduction attempt
Recreate a public software benchmark, example, or analysis using lawful public materials.

Output:
- environment details;
- exact inputs/configuration;
- result compared with source claim;
- deviations/failures;
- reproducible code where permitted.

### Stage 2 — Applied utility test
Test whether an existing method is useful for a Vale project.

Example:
- Does a public image-consistency method actually reduce character drift in Fireblade?
- Does a repo-clustering technique improve Idea Radar triage?

Define success metrics before running the test whenever practical.

### Stage 3 — Comparative experiment
Compare multiple techniques under the same conditions.

Requirements:
- explicit baseline;
- fixed evaluation set;
- predetermined metrics;
- documented hardware/software/versioning;
- no cherry-picking of showcase cases.

### Stage 4 — Exploratory original hypothesis
Test a novel question or combination of methods.

Before execution create an experiment brief containing:
- research question;
- hypothesis;
- null/alternative framing where appropriate;
- rationale/prior art;
- independent/dependent variables;
- data source;
- method;
- planned analysis;
- expected failure modes;
- safety/ethics review;
- criteria that would change our belief.

Label exploratory work honestly. Unexpected patterns can generate future hypotheses but should not be presented as if predicted in advance.

### Stage 5 — Confirmatory / external-review candidate
Only after exploratory results justify it.

Prefer:
- preregistered hypothesis/analysis where appropriate;
- held-out data;
- replication;
- external methodological critique;
- public methods/code/data where lawful and ethical;
- a clear distinction between exploratory and confirmatory evidence.

## Experiment brief template

Every Stage 2+ experiment should answer:

1. What question are we testing?
2. Why does the answer matter?
3. What existing evidence motivates the test?
4. What would count as success?
5. What would count as failure or evidence against the hypothesis?
6. What is the baseline/comparator?
7. What data/input will be used?
8. What will remain fixed?
9. What metrics will be recorded?
10. What risks, biases, or confounds are plausible?
11. Is the experiment safe and legally/ethically appropriate?
12. How will another person reproduce it?

## Human subjects and sensitive data

Do not treat informal self-experimentation or user data collection as automatically exempt from ethical concerns.

For research involving other people, identifiable personal data, health information, invasive sensors, deception, psychological intervention, or meaningful physical risk:

- stop before recruitment/data collection;
- determine whether formal ethics/IRB or comparable oversight is required;
- obtain informed consent where appropriate;
- minimize and secure data;
- do not imply medical/scientific conclusions beyond the design.

A blog project is not a substitute for institutional oversight.

## AI-specific controls

For generative or agentic experiments, record:

- exact model/version when available;
- prompts/system instructions relevant to the result;
- sampling/settings if available;
- number of trials, not only selected successes;
- selection criteria;
- human evaluation procedure;
- whether outputs may reflect model priors rather than recovered/measured information.

When a generative model is downstream of a weak signal, do not confuse plausible reconstruction with faithful measurement.

## Negative results

Useful failures should be retained.

A failed experiment can prevent repeated wasted effort and may reveal:
- brittle dependencies;
- exaggerated source claims;
- unsuitable methods;
- hidden costs;
- missing data;
- unanticipated confounds.

Maintain a short `FAILED_EXPERIMENTS` or experiment archive rather than deleting failures.

## Publication levels

Results can be published at different levels:

- **Lab note:** quick, reproducible observation.
- **Experiment report:** formal question, method, results, limitations.
- **Proposal:** method/hypothesis not yet tested.
- **Investigation:** synthesis of existing evidence plus optional Vale tests.
- **Research manuscript candidate:** only when methodology/evidence justify that ambition.

Do not call something peer reviewed merely because an AI or collaborator reviewed it. "Peer review" means substantive review by appropriately knowledgeable independent humans through a legitimate review process.

## Compounding rule

Every completed experiment should end with:

- what we learned;
- what reusable artifact was created;
- which Vale projects benefit;
- what should be tested next;
- whether our confidence increased, decreased, or stayed the same.

The point is not to accumulate experiments. The point is to accumulate capability and calibrated knowledge.
