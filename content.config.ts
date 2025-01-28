import { defineCollection, defineCollectionSource, defineContentConfig, z } from '@nuxt/content'

const hackernews = defineCollection({
  type: 'data',
  source: defineCollectionSource({
    getKeys: async () => {
      const keys = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then((res) => res.json())
      return keys.map((key: string) => `${key}.json`)
    },
    getItem: async (key: string) => {
      const id = key.split('.')[0]
      return await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json())
    }
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.string(),
    score: z.number(),
    url: z.string(),
    by: z.string()
  })
})

export default defineContentConfig({
  collections: {
    hackernews,
    content: defineCollection({
      type: 'page',
      source: '**'
    })
  }
})
