import { z, defineCollection } from 'astro:content';

const baseSchema = z.object({
  class: z.string().optional(),
  layout: z.string(),
  title: z.string().max(
    50,
    'The title must be no longer than 50 characters'
  ),
  description: z.string().max(
    160,
    'The description must be no longer than 160 characters'
  ).optional(),
})

const pageCollection = defineCollection({
  schema: baseSchema,
});

const poemCollection = defineCollection({
  schema: baseSchema,
});

export const collections = {
  pages: pageCollection,
  poems: poemCollection,
};