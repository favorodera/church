// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
  ],
  ssr: true,
  devtools: { enabled: false },
  app: {
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
  },
  css: ['~/assets/styles/index.css'],
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  unocss: {
    nuxtLayers: true,
  },
})
