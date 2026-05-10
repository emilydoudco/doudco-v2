import { defineCollection, z } from 'astro:content';

const writeupSchema = z.object({
  title:       z.string(),
  description: z.string(),
  date:        z.coerce.date(),
  tags:        z.array(z.string()).default([]),
  draft:       z.boolean().default(false),
  coverImage:  z.string().optional(),
});

export const collections = {
  'soc-lab': defineCollection({
    type: 'content',
    schema: writeupSchema,
  }),
  'case-studies': defineCollection({
    type: 'content',
    schema: writeupSchema.extend({
      client:   z.string().optional(),
      outcome:  z.string().optional(),
    }),
  }),
};
