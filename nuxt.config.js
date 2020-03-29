module.exports = {
  head: {
    title: 'spm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/scss/style.scss'
  ],
  router: {
    middleware: 'i18n'
  },
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js',ssr:false},
    '~/plugins/i18n.js',
    '~/modules/directives',
    '~/modules/functions',
    '~/modules/filters',
  ],
  loading: { color: '#fff' },
    build: {
        extractCSS: true,
        splitChunks: {
            layouts: true
        },
        extend(config, ctx) {
        }
    }
};


