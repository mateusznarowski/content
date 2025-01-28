export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  components: { dirs: [] },
  imports: { autoImport: false },
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
  eslint: { config: { stylistic: true } }
})
