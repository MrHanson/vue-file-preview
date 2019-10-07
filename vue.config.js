module.exports = {
  pages: {
    index: {
      entry: 'example'
    }
  },
  outputDir: process.env.BUILD_MODE === 'wc' ? 'release/wc' : 'release/lib',
  productionSourceMap: false,
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    extract: true
  },
  chainWebpack: config => {
    config.module.rule('js').exclude.add(/dist/)
  },
  configureWebpack: config => {
    // close webpack performace warning
    config.performance = {
      hints: false
    }

    // compression
    const CompressionPlugin = require('compression-webpack-plugin')
    const productionGzipExtensions = ['js', 'css']
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$')
        })
      )
    }

    const version = process.env.VERSION || require('./package.json').version
    const banner = `Vue File Preview v${version}`
    const webpack = require('webpack')
    config.plugins.push(new webpack.BannerPlugin(banner))
  }
}
