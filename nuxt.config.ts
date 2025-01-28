export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxthub/core'
  ],
  components: { dirs: [] },
  imports: { autoImport: false },
  devtools: { enabled: true },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
    database: {
      type: 'd1',
      binding: 'DB'
    }
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
  hub: {
    database: true
  },
  eslint: { config: { stylistic: true } }
})
