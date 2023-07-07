module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-green': '#04C75C',
        'secondary-green': '#E9FFF3',
        'secondary-gray': '#617073',
        'primary-black': '#131313',
        'primary-white': '#FAF9F7',
      },
      fontSize: {
        'xxs': ['0.5rem', {
          lineHeight: '0.75rem',
        }],
        'headline': ['2rem', {
          lineHeight: '2.438rem',
          fontWeight: '700',
        }],
        'paragraph': ['1.25rem', {
          lineHeight: '1.875rem',
          fontWeight: '400',
        }],
      }
    },
  },
  plugins: [],
}