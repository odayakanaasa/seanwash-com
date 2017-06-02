module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Sean Washington',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Full Stack Developer specializing in Elixir, Ruby on Rails, JavaScript, and CSS.' },
      { property: 'og:description', content: 'Full Stack Developer specializing in Elixir, Ruby on Rails, JavaScript, and CSS.'},
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@seanwashbot' },
      { name: 'twitter:creator', content: '@seanwashbot' },
      { name: 'google-site-verification', content: 'uJo6hbC_CDYc6ZQ0vrF21fXIuDXpbJErVBs88jZZHew' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'tachyons/css/tachyons.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
