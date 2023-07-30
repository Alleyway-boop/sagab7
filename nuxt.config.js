
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/images/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/images/favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/images/favicons/favicon.jpg' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/images/favicons/favicon.jpg' },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
      },
      { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/assets/css/animate.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/assets/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/assets/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/assets/css/swiper.min.css" },
      { rel: "stylesheet", href: "/assets/plugins/dimon-icons/style.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
    ],

    script: [
      { src: "/assets/js/jquery.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/bootstrap.bundle.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/owl.carousel.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/waypoints.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/jquery.counterup.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/TweenMax.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/wow.js", type: "text/javascript", body: true },
      { src: "/assets/js/jquery.magnific-popup.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/jquery.ajaxchimp.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/swiper.min.js", type: "text/javascript", body: true },
      { src: "/assets/js/jquery.easing.min.js", type: "text/javascript", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   {  src: '@/plugins/gtag.js', ssr: false  }
  // ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: { id: 'G-C2M0S2QPWX' },
  googleAnalytics: { id: 'G-HTJP3EPEBG' },
  // dev:testingAnalytics ? true: process.env.NODE_ENV !=='production',
  debug: {
    enabled: true,
    sendHitTask: true
  },
  /*
  ** Nuxt.js modules
  */
  plugins: [
    // '@/plugins/axios.js',
    // '@/plugins/api'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    prefix: '/api/',
    credential: true
  },

  proxy: {
    '/api/': {
      target: 'https://gitee.com', // 目标服务器ip
      changeOrigin: true, // 是否跨域
      pathRewrite: {
        '^/api/': '/',  // 把 /api 替换成 /
      }
    },
    '/login': {
      target: 'https://gitee.com', // 目标服务器ip
      changeOrigin: true, // 是否跨域
      pathRewrite: {
        '^/login/': '/',  // 把 /api 替换成 /
      }
    }
  },

  /*
  ** optimizedImages
  */
  optimizedImages: {
    optimizeImages: true
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ["axios"],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
