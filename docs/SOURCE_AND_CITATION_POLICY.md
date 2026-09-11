# Vale Lab — Source, Citation, and Research Access Policy

## Purpose

Vale Lab should be entertaining to read, but its credibility depends on evidence handling. This policy governs how automated and human research should find, assess, cite, and reuse information.

## Source priority

Prefer sources in this approximate order when they directly support a claim:

1. Peer-reviewed primary research papers.
2. Official conference papers/proceedings from established venues.
3. Preprints from identifiable researchers/labs, clearly labeled as not yet peer reviewed.
4. Official technical documentation, standards, datasets, and source repositories.
5. University/lab/institutional pages describing their own work.
6. High-quality review papers and meta-analyses.
7. Reputable technical or science journalism for context, interviews, or synthesis.
8. Secondary commentary, forums, social media, and community discussion for leads or sentiment — not as sole evidence for technical claims.

A prestigious publication name does not automatically make every claim correct. Evaluate the actual paper and evidence.

## Discovery sources

Future research automation may discover material through lawful public interfaces such as:

- Crossref and DOI metadata;
- PubMed / Europe PMC where relevant;
- arXiv and other legitimate preprint servers;
- Semantic Scholar / OpenAlex or similar scholarly indexes where permitted;
- conference proceedings;
- journal search pages and RSS feeds;
- Google Scholar for manual discovery when appropriate;
- university and laboratory publication lists;
- GitHub public repositories/releases/issues;
- standards bodies;
- public datasets and government research portals.

Prefer APIs, RSS feeds, open indexes, and normal web access over aggressive scraping. Respect robots.txt, site terms, rate limits, copyright, paywalls, and authentication boundaries. Do not bypass access controls.

## Paywalled research

Do not pirate or bypass journal paywalls. If the full text is unavailable:

- look for an author manuscript, institutional repository copy, accepted manuscript, or legitimate preprint;
- use the abstract only for claims the abstract actually supports;
- mark the evidence packet as full-text unavailable;
- avoid confident methodological criticism that requires sections we cannot inspect.

## Claim ledger

For serious investigations, maintain a claim ledger. Each important factual claim should include:

- claim text;
- source(s);
- source type;
- whether the source is primary or secondary;
- evidence strength;
- confidence;
- quoted/located support or relevant section/page when practical;
- counterevidence or conflicting findings;
- date last verified.

No citation laundering: do not cite a review/news article for a claim if that article merely cites an underlying paper that we can reasonably inspect directly.

## Evidence labels

Use explicit language:

- **Demonstrated:** directly supported under the conditions tested.
- **Replicated:** independently reproduced or supported across multiple credible studies.
- **Promising:** early evidence exists but important uncertainty remains.
- **Claimed:** asserted by authors/company but not independently verified here.
- **Speculative:** inference or future possibility, not established evidence.
- **Disputed:** credible evidence or expert interpretation conflicts.

Do not write "scientists proved" when the paper supports only an association, benchmark result, model output, small-sample experiment, or preliminary demonstration.

## Quantitative sanity checks

Where relevant, inspect:

- sample size;
- controls and baselines;
- effect size, not only statistical significance;
- confidence intervals/uncertainty;
- train/test leakage or benchmark contamination;
- external validation;
- replication status;
- preregistration;
- missing data and exclusions;
- multiple comparisons;
- comparison against appropriate prior methods.

Do not perform fake statistical precision when the available data does not support it.

## Counterargument requirement

Every substantial Vale investigation should include the strongest reasonable skeptical interpretation. This is not forced "both-sides" balance. Weight perspectives according to evidence.

Examples:

- What would make the result less impressive than the headline suggests?
- What alternative explanation fits the data?
- What would have to replicate before we should update strongly?
- Is a generative model filling in information that was not actually decoded or measured?
- Is the demo curated?
- Are commercial incentives affecting presentation?

## GitHub and open-source work

For repos, record:

- license;
- recent activity;
- maintainership;
- stars/forks only as weak social signals;
- issues and known limitations;
- dependencies;
- security concerns;
- test/build status when practical;
- what Vale proposes to learn/reuse.

Public does not mean public domain. No license generally means do not copy or integrate the code without permission. Follow attribution and copyleft obligations when applicable.

Never blindly run newly discovered repository code on a trusted machine. Evaluate first; sandbox untrusted code.

## People and institutions

Institution/person analysis should focus on public professional work:

- publications;
- public repositories;
- conference talks;
- lab pages;
- grants/projects when publicly documented;
- declared research interests;
- collaborations visible in professional sources.

Do not compile private addresses, family information, private contact details, or invasive personal dossiers. The goal is to understand research networks and expertise, not surveil people.

## Citation presentation

Published articles should provide usable citations/links rather than decorative source lists. Citations should be close enough to claims that readers can tell what they support.

Whenever possible preserve:

- authors;
- paper/article title;
- venue;
- year/date;
- DOI or canonical URL;
- peer-review/preprint status.

## Corrections

If Vale later discovers a material error:

- correct the article;
- preserve a brief correction note for meaningful changes;
- update the claim ledger;
- propagate the correction to dependent proposals or experiments where relevant.

Credibility is increased, not decreased, by transparent correction.
