# GitHub Agent Task — Build the Vale Lab Blog POC

Read `AGENTS.md`, `README_VALE_POC.md`, `docs/RESEARCH_METHOD.md`, and `docs/BUILD_QUEUE.md` before changing code.

## Goal
Turn this old/incomplete tech-blog repository into a clean proof-of-concept public site for **Vale Publishing / Vale Lab**.

Do not overbuild. The first version should be fast, static-friendly, easy to deploy, and easy for future agents to update through pull requests.

## Product requirements
Build a minimal but polished research publication with these routes/pages:

1. `/` — Home
   - Vale Lab identity
   - short mission
   - latest articles
   - active projects
   - current Idea Radar picks

2. `/research` — Research index
   - cards for investigations/articles
   - department tags
   - evidence status / maturity label where useful

3. `/projects` — Active builds
   - Fireblade Engine
   - Idea Radar
   - Vale Research Desk
   - Micro-Machines / Freelance Utility Factory
   - Vale Multimedia Engine POC (later)

4. `/method` — Public research method
   - render/summarize `docs/RESEARCH_METHOD.md`

5. Article detail page
   - title/date/department
   - short thesis
   - body
   - evidence / limitations / counterargument sections
   - cited sources
   - next experiment

## Content model
Prefer Markdown/MDX or another simple file-based content system.

Each article should support front matter such as:
- title
- date
- department
- status: note | investigation | article | proposal | experiment
- maturity_score: 0-6
- confidence: high | moderate | low | speculative
- summary
- related_projects
- tags

Do not require a database for the POC unless the existing code makes that dramatically simpler.

## Recommended implementation direction
If the existing codebase is too incomplete or cumbersome, it is acceptable to replace the frontend architecture with a modern static-first framework such as Astro or Next.js static generation. Choose the simplest maintainable option.

Do not preserve dead code merely because it exists.

## Design direction
- serious but strange
- research lab / small press, not startup SaaS
- readable long-form typography
- restrained dark/light neutral palette
- subtle technical diagrams/grids only if they improve the page
- mobile-first and fast
- accessible contrast and semantic HTML
- no fake dashboards full of invented metrics

## Seed content
Create placeholder/seed entries based only on the supplied project docs, clearly labeled as project summaries rather than externally researched articles:
- Fireblade Engine — Building a Sequence-First Graphic Novel Production System
- Idea Radar — Three Useful Things, Not Three Hundred Trending Repos
- Dream Forensics — concept/research question page, explicitly marked exploratory, not a factual article

Do NOT fabricate outside research citations in seed content.

## Automation-ready structure
Create folders/templates so future agents can add:
- `content/research/`
- `content/projects/`
- `content/radar/`
- `content/proposals/`

Add `docs/ARTICLE_TEMPLATE.md` and `docs/DAILY_RESEARCH_PACKET.md` describing required article/research packet fields.

## Quality gates
Before finishing:
- run formatter/linter/tests/build where applicable
- no broken internal links
- no secrets
- no invented citations
- README explains local development and deployment
- preserve the research/editorial standards in AGENTS.md

## Git workflow
Work on a branch and open a pull request. Summarize architectural choices and anything removed/replaced from the legacy app.

## Stop condition
Stop when there is a deployable POC that can accept new Markdown/MDX research posts via pull request. Do not build Idea Radar crawling logic in this task; only create the publication surface and content structure it will feed.
