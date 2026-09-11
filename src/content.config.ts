import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publication = z.object({
  title: z.string(),
  date: z.coerce.date(),
  department: z.string(),
  status: z.enum(['note', 'investigation', 'article', 'proposal', 'experiment']),
  maturity_score: z.number().int().min(0).max(6),
  confidence: z.enum(['high', 'moderate', 'low', 'speculative']),
  summary: z.string(),
  related_projects: z.array(z.string()),
  tags: z.array(z.string()),
});

export const collections = {
  research: defineCollection({ loader: glob({ base: './src/content/research', pattern: '**/*.md' }), schema: publication }),
  projects: defineCollection({ loader: glob({ base: './src/content/projects', pattern: '**/*.md' }), schema: publication }),
  radar: defineCollection({ loader: glob({ base: './src/content/radar', pattern: '**/*.md' }), schema: publication }),
  proposals: defineCollection({ loader: glob({ base: './src/content/proposals', pattern: '**/*.md' }), schema: publication }),
};
