// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Font Awesome is now bundled from npm instead of loaded from a CDN.
  // main.css holds Tailwind's directives followed by your original style.css.
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/css/main.css'
  ],

  // Tailwind v3 (the same major version the old cdn.tailwindcss.com script served)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Chester Besin',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Space+Grotesk:wght@300;400;700&display=swap'
        }
      ]
    }
  }
})