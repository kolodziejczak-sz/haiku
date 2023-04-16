import { z, defineCollection } from 'astro:content';

const pagesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      class: z.string().optional(),
      layout: z.string(),
      title: z.string().max(50, "The title must be no longer than 50 characters"),
      thumbnail: image().optional(),
    })
});

export const collections = {
  pages: pagesCollection,
};