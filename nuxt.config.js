export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      // {id:'stripe-js', src:'https://js.stripe.com/v3/', async:true}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~assets/animate.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/bootstrap',
    {src:'@/plugins/stripe', ssr:false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-stripe-module'
  ],
  stripe:{
    version:'v3',
    publishableKey:"pk_test_TGFHNcnqSJVQLaJzCtIkwKd8"
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Environment Variables
  */
  env:{
    stripe: {public: "pk_test_TGFHNcnqSJVQLaJzCtIkwKd8"},
    server: 'http://localhost:3300'
    },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
