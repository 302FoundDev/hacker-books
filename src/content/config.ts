import { defineCollection, z } from "astro:content";

const books = defineCollection({
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

export const collection = { books }

