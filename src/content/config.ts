import { z, defineCollection } from 'astro:content';

const title = z.string().max(50, "The title must be no longer than 50 characters");

const pageCollection = defineCollection({
  schema: z.object({
    class: z.string().optional(),
    layout: z.string(),
    title,
  })
});

const poemCollection = defineCollection({
  schema: z.object({
    class: z.string().optional(),
    layout: z.string(),
    title,
  })
});

export const collections = {
  pages: pageCollection,
  poems: poemCollection,
};