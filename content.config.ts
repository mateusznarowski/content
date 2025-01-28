import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    root: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    content_en: defineCollection({
      type: 'page',
      source: 'en/**'
    })
  }
})
