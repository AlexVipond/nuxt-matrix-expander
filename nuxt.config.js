const pkg = require('./package')

import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/matrix-expander/'
  }
} : {}

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'antialiased bg-black font-mono'
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve('./tailwind.js')
      },
      preset: { autoprefixer: { grid: true } }
    },
    extend(config, { isDev }) {
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            // purgecss configuration
            // https://github.com/FullHuman/purgecss
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['vue']
              }
            ],
            whitelist: [
              'html',
              'body',
              'nuxt-progress',
              'markdown table',
              'markdown pre',
              'markdown table:first-of-type th',
              'markdown th',
              'markdown tr *',
              'markdown table:first-of-type td',
            ]
          })
        )
      }
    }
  },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css',
    '~/assets/css/components.css',
    '~/assets/css/markdown.css'
  ],

  plugins: ['~plugins/vue-portal'],

  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-58906424-5'
    }],
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },

  router: {
    base: '/matrix-expander/'
  }

  // npm run generate
  // git push --delete origin gh-pages
  // git subtree push --prefix dist origin gh-pages
}
