# VALE LAB — AGENTS.md

## Read order / authority
Before substantive work, read these files in order:
1. `docs/VALE_SOURCE_OF_TRUTH.md` — current product/research-system intent. This wins when older design docs conflict.
2. `docs/BUILD_DISCIPLINE.md` — scope freeze, builder mode, and human-spotter rules.
3. `docs/METHOD_REGISTRY.md` — provenance and adoption status of external methods.
4. `docs/RESEARCH_METHOD.md`, `docs/SOURCE_AND_CITATION_POLICY.md`, `docs/HYPOTHESIS_WORKBENCH.md`, and `docs/ROBOT_SCIENTIST_RULES.md` as relevant to the task.
5. The active GitHub issue / acceptance criteria.

Do not silently reconcile conflicts. Follow the higher-authority document and flag a genuine contradiction.

## Mission
Build Vale Publishing / Vale Lab as a small AI-assisted R&D and publishing system. The public site should turn real research, public technical work, experiments, and project progress into clear, high-quality writing and useful prototypes.

Vale is a human-augmentation system. It should make established scientific and analytic methods easier for ordinary humans to use without pretending to replace domain experts. Prefer adapting well-supported methods from competent researchers, laboratories, standards bodies, engineering organizations, and analytic institutions over inventing methodology from scratch. Credit original people and institutions prominently when their work materially shapes Vale.

The long-term vision is a reusable multimedia production system that can eventually generate coherent books, series, art, games, video, and other interactive entertainment from structured creative inputs. Do not attempt to build that whole system here. This repository is the public research and publishing layer that feeds and documents those projects.

## Core operating principle
Every investigation should feed at least one of these outputs:
1. a useful article,
2. a research note or proposal,
3. a concrete experiment/prototype,
4. a reusable component for an active project,
5. a better question for the next research cycle.

Avoid research theater. Prefer work that changes what we build or understand.

## Editorial standard
- Distinguish fact, inference, speculation, and opinion.
- Prefer primary sources: peer-reviewed papers, official technical documentation, source repositories, standards, patents where appropriate, lab pages, conference proceedings, and direct public statements.
- Use secondary reporting mainly for context and discovery.
- Cite every substantive factual claim that depends on outside research.
- Never invent citations, quotes, statistics, benchmarks, affiliations, credentials, or study findings.
- Do not overstate early-stage research.
- Include meaningful limitations and strongest counterarguments.
- When evidence is genuinely mixed, say so.
- Separate what a paper demonstrated from what a product announcement claims.
- Avoid hype language unless quoting or analyzing hype.
- Give visible credit to researchers, labs, institutions, datasets, maintainers, and method originators whose work materially enables the article or experiment.

## Investigative method
For each research topic:
1. Define the precise question.
2. Record why it matters to an active Vale project.
3. Gather primary evidence first.
4. Map important institutions, labs, projects, maintainers, and researchers using only public professional information relevant to the work.
5. Identify competing approaches and skeptical interpretations.
6. Evaluate maturity: concept, lab demo, replicated result, open-source implementation, production tool, or deployed system.
7. Evaluate practical reuse: license, dependencies, security, maintenance, reproducibility, and fit.
8. Create a short evidence table with claims, source type, confidence, and caveats.
9. Run or propose the smallest useful experiment when appropriate.
10. Write the article/research note only after evidence review.

## Public-source ethics
Use public professional material only. Do not build invasive personal dossiers. Do not collect private addresses, family information, private communications, credentials, secrets, or unrelated personal details.

A useful source map answers: "Who or what repeatedly produces relevant work?" It does not profile private lives.

## Open-source ethics and security
Public does not mean unrestricted.
- Check the repository license before reusing code.
- Respect attribution and copyleft obligations.
- If no license exists, treat the code as viewable reference, not reusable code.
- Never blindly execute unknown public repository code on the host machine.
- Test third-party code in an isolated sandbox/container/VM when possible.
- Inspect dependency files and install scripts first.
- Do not commit secrets, tokens, private keys, credentials, or proprietary source material.

## Writing voice
Curious, concrete, skeptical, readable, and technically literate without pretending certainty. Explain hard things in ordinary language without flattening the nuance.

Preferred article structure:
- What happened / what is the question?
- Why it matters
- What the strongest evidence actually shows
- What it does NOT show
- Competing interpretation / strongest objection
- What could change the conclusion
- What Vale Lab can test or build next
- Sources / credits

## Project departments
Use these as flexible research lanes, not bureaucracy:
- Synthetic Media — Fireblade, generative books, video, 3D, Blender, Unreal, procedural entertainment
- Neural Systems — dream decoding, BCI, mental imagery, cognition, human-computer interfaces
- Evolution & Complex Systems — evolutionary dynamics, cooperation, emergence, Unselfish Gene-related work
- Human Tools — agents, automation, knowledge systems, productivity, interfaces
- Odd Machines — useful or strange projects that do not fit elsewhere

## Idea Radar
Idea Radar should surface at most three high-signal discoveries per run. Favor recent momentum, technical substance, relevance, and reuse potential over stars or hype.

For each candidate record:
- what it is,
- evidence that it is real/active,
- why Vale cares,
- likely reuse or learning path,
- license,
- security caveats,
- smallest next experiment,
- confidence score.

## Cross-project stack
Active projects should help the next project. Record reusable assets, prompts, data structures, scripts, research methods, and infrastructure in a common queue rather than rebuilding them independently.

Current example:
Fireblade production tooling -> reusable sequence/asset engine -> Vale multimedia engine proof of concept -> future books/games/video workflows.

## Publishing safety gate
Do not auto-publish long-form articles initially. Create drafts or pull requests for human review. Routine changelogs/status notes may later be automated after the workflow proves reliable.
