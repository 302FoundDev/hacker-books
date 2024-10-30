import { defineCollection, z } from "astro:content";

export const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    img: z.string(),
    buy: z.object({
      es: z.string().url(),
      us: z.string().url()
    }),
    slug: z.string()
  })
})

