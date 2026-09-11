# Vale Publishing / Vale Lab — Proof of Concept

Vale Lab is an AI-assisted public R&D notebook and publishing system.

The experiment is simple: continuously discover high-signal public technical work, investigate it using a transparent qualitative method, test what is practical, publish readable research-backed articles, and feed useful discoveries into active creative/technical projects.

## Current proof-of-concept goals

1. Turn this old tech-blog repository into a clean research publication.
2. Publish evidence-based articles with primary-source citations and explicit uncertainty.
3. Maintain an Idea Radar that returns only three high-signal emerging projects at a time.
4. Maintain a cross-project build queue so research and tooling compound instead of becoming disconnected side projects.
5. Document small prototypes and experiments produced with Codex/GitHub agents.

## Initial active systems

### Fireblade Engine
A sequence-first graphic-novel production workflow using structured canon, reusable visual references, asset catalogs, panel-level revisions, QA, and batch sequence generation.

### Idea Radar
A discovery system for promising public GitHub projects, papers, labs, tools, and techniques relevant to Vale's work.

### Vale Research Desk
A repeatable workflow for turning an interesting claim into a source map, evidence table, counterargument, experiment, and publishable article.

## Editorial promise

Vale Lab should be interesting without pretending speculation is fact.

Every serious article should make it possible for a skeptical reader to answer:
- What is known?
- How do we know it?
- What is uncertain?
- What is the strongest competing explanation?
- What should we test next?

## Long-term direction

The larger Vale Publishing concept is a high-quality multimedia generation system: a family could eventually build an internally coherent library of personalized books, series, art, games, video, and interactive worlds from structured creative inputs and reusable assets.

That future is intentionally out of scope for this proof of concept. We are building the pieces one useful system at a time.

## Local development

This static Astro site requires Node.js 22 or later.

```sh
npm install
npm run dev
```

Run `npm run check` for Astro and TypeScript checks, then `npm run build` to create the deployable site in `dist/`.

## GitHub Pages

The included GitHub Actions workflow deploys the site to:
<https://adamolson11.github.io/myFuturisticTechBlog/>

Before its first deployment, the repository owner must make one setting change: open
**Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

## Adding publication content

Content is Markdown with validated front matter in `src/content/`. Add a file to the appropriate folder:

- `research/` for notes, investigations, and articles;
- `projects/` for Vale project summaries;
- `radar/` for human-reviewed Idea Radar entries;
- `proposals/` for untested proposals.

Research entries need the fields in `docs/ARTICLE_TEMPLATE.md`: title, date, department, status, maturity score, confidence, summary, related projects, and tags. Create a research packet from `docs/DAILY_RESEARCH_PACKET.md` before drafting substantive external claims. Long-form publication remains human-approved.
