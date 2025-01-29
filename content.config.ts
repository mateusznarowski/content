import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'english/**',
        prefix: '/en'
      }
    }),
    content_pl: defineCollection({
      type: 'page',
      source: {
        include: 'polish/**',
        prefix: '/pl'
      }
    })
  }
})
