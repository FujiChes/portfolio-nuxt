export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/../assets/css/style.css'
  ],

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
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Space+Grotesk:wght@300;400;700&display=swap'
        }
      ]
    }
  }
})