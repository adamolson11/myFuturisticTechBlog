# Vale Lab Qualitative Research Method

This method is designed for fast but defensible technology investigations. It is not a substitute for formal peer review. Its purpose is to make our public work auditable, fair, useful, and less vulnerable to hype.

## 1. Frame the question
Write one primary question and no more than three secondary questions.

Good:
- Can current fMRI systems reconstruct internally generated mental imagery with enough fidelity to support anything resembling dream forensics?

Bad:
- What is happening in brain tech?

## 2. Define relevance
Record the active Vale project this question might affect and the decision it could change.

Examples:
- Fireblade production
- Vale multimedia engine
- Wolves / Dream Forensics concept
- Human Tools automation
- Evolution & Complex Systems

## 3. Build the source stack
Use this order by default:

Tier A — primary
- peer-reviewed papers
- conference papers/proceedings
- official technical docs
- source repositories
- standards
- patents when relevant
- official lab/project pages

Tier B — direct public technical context
- author talks/interviews
- release notes
- engineering blogs
- institutional announcements

Tier C — secondary reporting
- reputable journalism
- expert commentary
- reviews

Tier D — discovery only
- social posts
- forums
- aggregators
- unsourced summaries

Never allow a Tier D source to carry a major factual claim by itself.

## 4. Create an evidence table
For every major claim record:

| Claim | Source | Source type | Supports / challenges | Confidence | Caveat |
|---|---|---|---|---|---|

Confidence labels:
- High — directly demonstrated or consistently supported by strong evidence
- Moderate — supported, but meaningful uncertainty remains
- Low — plausible but preliminary, indirect, or poorly replicated
- Speculative — useful hypothesis, not established fact

## 5. Steelman the strongest opposing case
Before writing conclusions, answer:
- What would a competent skeptic say?
- Is there a simpler explanation?
- Is the result dependent on a small sample, unusual hardware, cherry-picked examples, or a benchmark that does not reflect real use?
- Does the generative model add details not recoverable from the measured signal?
- Is there replication?

Do not create fake balance. Weight objections by evidence.

## 6. Separate demonstration from implication
Use explicit labels in notes:

DEMONSTRATED — what the study/tool actually showed
INFERRED — reasonable conclusion from the evidence
CLAIMED — what creators/authors say
SPECULATIVE — what might become possible

This distinction is mandatory for emerging technology.

## 7. Evaluate maturity
Classify each technology:

0 — concept / hypothesis
1 — toy demo
2 — controlled lab demonstration
3 — independent replication / broader validation
4 — useful open-source prototype
5 — production-capable niche tool
6 — robust deployed system

Include why the maturity score was chosen.

## 8. Evaluate practical reuse
For software/repositories record:
- license
- activity / recent commits/releases
- documentation quality
- dependency complexity
- security risks
- reproducibility
- hardware requirements
- fit with Vale projects
- smallest viable experiment

No license = do not assume code reuse rights.

## 9. Institution and person mapping
Map only public professional relationships relevant to the work:
- institution/lab/company
- role
- related papers/repos/projects
- recurring collaborators
- technical focus

Do not collect unrelated personal information.

The goal is to improve source discovery, not profile private lives.

## 10. Smallest useful experiment
If practical, propose a test that can falsify or strengthen our working conclusion.

A good Vale experiment should:
- be cheap,
- be safe,
- be reversible,
- produce observable evidence,
- inform an active build or article.

## 11. Draft only after evidence review
Recommended article shape:
1. Lead / question
2. What actually happened
3. Why it matters
4. Evidence
5. Strongest skeptical case
6. Limits and unknowns
7. Vale experiment or proposal
8. Bottom line
9. Sources

## 12. Publication checklist
Before a draft is ready for review:
- [ ] Primary question answered
- [ ] Major claims cited
- [ ] Primary sources prioritized
- [ ] Hype removed or labeled
- [ ] Strongest counterargument included
- [ ] Demonstrated vs speculative clearly separated
- [ ] License/reuse notes included when software is discussed
- [ ] No fabricated quote/citation/statistic
- [ ] Conflicts or uncertainty acknowledged
- [ ] One concrete next experiment or decision identified
