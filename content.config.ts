import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '/en'
      }
    }),
    content_pl: defineCollection({
      type: 'page',
      source: {
        include: 'pl/**',
        prefix: '/pl'
      }
    })
  }
})
