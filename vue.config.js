module.exports = {
  pages: {
    index: {
      entry: 'dev'
    }
  },
  outputDir: 'release',
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    extract: false
  },
  chainWebpack: config => {
    config.module.rule('js').exclude.add(/release/)
  },
  configureWebpack: config => {
    // close webpack performace warning
    config.performance = {
      hints: false
    }

    const version = process.env.VERSION || require('./package.json').version
    const banner = '\n' + ' * @preserve\n' + ` * @MrHanson/vue-file-preview v${version}\n`
    const webpack = require('webpack')
    config.plugins.push(new webpack.BannerPlugin(banner))
  }
}
