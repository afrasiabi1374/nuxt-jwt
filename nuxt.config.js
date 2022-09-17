import fa from './utility/i18n/fa.json'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-lab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/veeValidate',
    '~/plugins/i18n',
    '~/plugins/axios',
    // این پلاگین میاد چک میکنه روتمون شامل این ریجکس هست یانه؟
    '~/plugins/checkRoutes',
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    'cookie-universal-nuxt',
    '@nuxtjs/proxy'
  ],
  i18n: {
    locales:[
      {
        code: 'fa',
        name: 'Persian'
      }
    ],
    defaultLocale: 'fa',
    vueI18n: {
      fallbackLocale: 'fa',
      messages: {
        fa: fa.messages
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  proxy: {
    '/api': 'https://acm.academyland.net/', //use username:user and password:123456 for authentication
  },
  env: {
    baseUrl: 'http://' + 'localhost:3000' + '/api/web',
    authRoutes: [
      '/crud',
      { regex: [/\/profile/.source] },
      { regex: [/\/user\//.source] }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },
  router: {
    middleware: ['load-auth'],
    parseQuery(query){
      return require('qs').parse(query)
    },
    stringifyQuery(query){
      const result = require('qs').stringify(query)
      return result ? '?'+result : ''
    }
  }
}
