import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const instructors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/instructors' }),
  schema: z.object({
    name: z.string(),
    title_pt: z.string(),
    title_en: z.string(),
    rank_pt: z.string(),
    rank_en: z.string(),
    bio_pt: z.string().optional(),
    bio_en: z.string().optional(),
    location_pt: z.string(),
    location_en: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
    tier: z.enum(['founder', 'master', 'sifu', 'sipak']),
    chinese_rank: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

const styles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/styles' }),
  schema: z.object({
    name_pt: z.string(),
    name_en: z.string(),
    origin_pt: z.string(),
    origin_en: z.string(),
    description_pt: z.string(),
    description_en: z.string(),
    characteristics_pt: z.array(z.string()),
    characteristics_en: z.array(z.string()),
    image: z.string().optional(),
    category: z.enum(['external', 'internal', 'weapon']).default('external'),
  }),
});

const cultural = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/cultural' }),
  schema: z.object({
    title_pt: z.string(),
    title_en: z.string(),
    description_pt: z.string(),
    description_en: z.string(),
    image: z.string().optional(),
  }),
});

const famous = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/famous' }),
  schema: z.object({
    name: z.string(),
    title_pt: z.string(),
    title_en: z.string(),
    bio_pt: z.string(),
    bio_en: z.string(),
    born: z.string().optional(),
    died: z.string().optional(),
    image: z.string().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/news' }),
  schema: z.object({
    title_pt: z.string(),
    title_en: z.string(),
    description_pt: z.string(),
    description_en: z.string(),
    date: z.date(),
    image: z.string().optional(),
    category: z.enum(['event', 'championship', 'announcement']).default('announcement'),
  }),
});

const philosophy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/philosophy' }),
  schema: z.object({
    title_pt: z.string(),
    title_en: z.string(),
    content_pt: z.string(),
    content_en: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = {
  instructors,
  styles,
  cultural,
  famous,
  news,
  philosophy,
};
