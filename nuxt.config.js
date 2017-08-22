require('dotenv').config()

module.exports = {
  // prettier-ignore
  head: {
    titleTemplate: '%s - Sean Washington',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Full Stack Developer specializing in Elixir, JavaScript, and CSS.' },
      { property: 'og:description', content: 'Full Stack Developer specializing in Elixir, JavaScript, and CSS.'},
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@seanwashbot' },
      { name: 'twitter:creator', content: '@seanwashbot' },
      { name: 'google-site-verification', content: 'uJo6hbC_CDYc6ZQ0vrF21fXIuDXpbJErVBs88jZZHew' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['tachyons/css/tachyons.css'],
  loading: { color: '#000' },
  modules: ['@nuxtjs/meta', ['@nuxtjs/google-analytics', { ua: process.env.GA_ID }]],
  build: {
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
