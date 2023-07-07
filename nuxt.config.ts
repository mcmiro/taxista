// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 'max-age=31536000' } }, // Set generated files cache to 1 year
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  imports: {
    dirs: ['stores'],
  },
  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image-edge',
    'nuxt-jsonld',
    'nuxt-delay-hydration',
  ],
  delayHydration: {
    mode: 'mount',
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'hr',
    langDir: 'locales/',
    lazy: true,
    locales: [
      {
        code: 'hr',
        iso: 'hr',
        name: 'Hrvatski',
        file: 'hr.json',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],
    customRoutes: 'config',
    pages: {
      cenovnik: {
        hr: '/cenovnik',
        en: '/pricing',
      },
      usluge: {
        hr: '/usluge',
        en: '/services',
      },
      kontakt: {
        hr: '/kontakt',
        en: '/contact',
      },
      lokacija: {
        hr: '/lokacija',
        en: '/location',
      },
      'uslovi-koriscenja': {
        hr: '/uslovi-koriscenja',
        en: '/terms',
      },
      'rezervacija-uspesna': {
        hr: '/rezervacija-uspesna',
        en: '/reservation-successful',
      },
    },
    vueI18n: {
      legacy: false,
      locale: 'hr',
    },
    baseUrl: 'https://taxiporecdragan.com',
  },
  css: [
    '@/assets/css/styles.css',
    '@/assets/scss/datepicker.scss',
    '@/assets/scss/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    '~/components',
    {
      path: '~/components/Icons',
      extensions: ['vue'],
    },
  ],
  image: {
    staticFilename: '[publicPath]/images/_name-[hash][ext]',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  plugins: ['@/plugins/vue-gtag.client.js'],
});
