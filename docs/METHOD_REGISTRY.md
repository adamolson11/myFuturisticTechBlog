# Vale Lab — Method Registry

Status: ACTIVE / EXPANDING

Purpose: track established methods that Vale may adopt, adapt, benchmark, or reject. Vale should prefer proven methods over reinventing them. This registry is not an endorsement of every method in every context; it records provenance and fit.

## Registry rules

For every method we use, record:
- method name,
- original source / institution / authors,
- original purpose,
- Vale pipeline stage,
- why it is useful,
- known limitations,
- any Vale modification,
- current adoption status: candidate | trial | adopted | retired,
- evidence that it improved a Vale investigation.

Do not strip attribution when adapting a method. If a method is public but a specific implementation is licensed, respect the implementation license separately.

---

## MR-001 — Heilmeier Catechism

**Source:** DARPA; attributed to former DARPA director George H. Heilmeier.

**Primary source:** https://www.darpa.mil/about/heilmeier-catechism

**Original purpose:** evaluate proposed high-risk research programs by forcing clear answers about objectives, current practice, novelty, value, risk, cost, time, and success criteria.

**Vale fit:** Inputs → Control.

**Use:** Before a costly investigation, simulation program, prototype, or experiment, answer the eight Heilmeier questions in plain language. The most important Vale adaptation is to use the final question—what are the mid-term and final exams?—as an explicit stopping/test criterion.

**Limitations:** It is a research-program framing rubric, not a substitute for experimental design, statistical analysis, or evidence evaluation.

**Vale modification:** none yet.

**Status:** ADOPTED FOR PROJECT/EXPERIMENT FRAMING.

---

## MR-002 — Structured Analytic Techniques / Analysis of Competing Hypotheses

**Source:** U.S. Central Intelligence Agency, *A Tradecraft Primer: Structured Analytic Techniques for Improving Intelligence Analysis*.

**Primary source:** https://www.cia.gov/resources/csi/books-monographs/a-tradecraft-primer/

**Original purpose:** reduce predictable analytic failures caused by ambiguous information, hidden assumptions, complexity, and cognitive bias.

**Vale fit:** Throughputs → Control.

**Candidate techniques:**
- Key Assumptions Check
- Quality of Information Check
- Indicators / Signposts of Change
- Analysis of Competing Hypotheses (ACH)
- Devil's Advocacy
- Team A / Team B
- Red Team Analysis
- Alternative Futures Analysis

**Use:** Vale should compare evidence across multiple plausible explanations rather than accumulate only evidence favorable to the owner's preferred hypothesis. ACH is especially relevant when multiple hypotheses explain the same observations.

**Limitations:** These techniques emerged for intelligence analysis, not controlled laboratory science. They can structure reasoning but do not replace measurement, causal inference, statistics, replication, or domain expertise.

**Vale modification:** scientific claims should pair these methods with explicit source provenance, measurement quality, and falsifiable predictions.

**Status:** TRIAL / ADOPT SELECTIVELY.

---

## MR-003 — Probabilistic Forecasting and Calibration

**Source:** Intelligence Advanced Research Projects Activity (IARPA), Aggregative Contingent Estimation (ACE) program.

**Primary source:** https://www.iarpa.gov/research-programs/ace

**Original purpose:** improve accuracy, precision, and timeliness of intelligence forecasts through probabilistic judgment, aggregation, weighting, and empirical scoring against real outcomes.

**Vale fit:** Throughputs → Feedback → Control.

**Use:** When an investigation contains a genuinely forecastable event, Vale should prefer explicit probabilities over vague confidence words and later score predictions against outcomes. Historical calibration can eventually inform how much weight to place on particular analyst/model judgments.

**Limitations:** Not every scientific claim is naturally a forecast. Probability estimates can create false precision if the underlying evidence or event definition is poor.

**Vale modification:** numbers must be earned. Vale begins with qualitative confidence unless a meaningful probability model or measurable outcome exists.

**Status:** CANDIDATE / LATER CALIBRATION LAYER.

---

## MR-004 — Measurement Uncertainty, Repeatability, and Reproducibility

**Source:** National Institute of Standards and Technology (NIST), measurement-science guidance and publications.

**Primary sources:**
- https://www.nist.gov/publications/how-measurement-science-can-improve-confidence-research-results
- https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology
- https://www.nist.gov/publications/simple-guide-evaluating-and-expressing-uncertainty-nist-measurement-results

**Original purpose:** make measurements and reported results interpretable by explicitly characterizing uncertainty and by distinguishing repeatability from reproducibility.

**Vale fit:** Throughputs → Experimental Lab → Control.

**Use:** Every experimental result should ask:
- What exactly was measured?
- Under what conditions?
- What uncertainty accompanies the measurement?
- Could the same operator/procedure repeat it?
- Could changed conditions / independent operators reproduce it?

**Limitations:** Specific uncertainty methods depend on the measurement domain and may require expertise Vale does not possess.

**Vale modification:** none. Use domain-appropriate standards and seek expert review when measurement uncertainty is central.

**Status:** ADOPTED PRINCIPLE.

---

## MR-005 — Blameless Postmortem / Learning from Failure

**Source:** Google Site Reliability Engineering, *Postmortem Culture: Learning from Failure*, by John Lunney and Sue Lueder.

**Primary source:** https://sre.google/sre-book/postmortem-culture/

**Original purpose:** create a formal record of system incidents, causes, impacts, mitigations, and follow-up actions so organizations learn rather than repeat failures.

**Vale fit:** Feedback → Control.

**Use:** After important failed predictions, experiments, analyses, or publication corrections, Vale should record a short epistemic postmortem:
- What did we expect?
- What happened?
- Why did our process miss it?
- Which error class applies?
- What rule, test, or checklist would catch this earlier next time?

**Limitations:** A blameless culture does not mean causal vagueness. The goal is still to identify mechanisms and corrective actions.

**Vale modification:** focus on reasoning-system failures rather than service outages.

**Status:** ADOPTED FOR MAJOR ERROR EVENTS.

---

## Method-selection principle

Vale should not apply every technique to every investigation. The control layer selects the smallest method set likely to materially reduce uncertainty.

A method should be retired or modified if repeated use adds ceremony without improving calibration, reproducibility, decision quality, or speed.

## Future registry candidates

Add only after source review, not from memory:
- preregistration / registered reports,
- systematic review and meta-analysis standards,
- causal inference frameworks,
- design of experiments,
- adversarial collaboration,
- Delphi / expert elicitation,
- red-team science,
- FMEA / fault-tree analysis,
- model validation and verification,
- benchmark design,
- simulation credibility standards,
- scientific software reproducibility practices.

The registry itself is an experiment: Vale should measure whether adopted methods actually improve the quality and speed of its work.