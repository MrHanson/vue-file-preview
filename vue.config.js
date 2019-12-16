module.exports = {
  pages: {
    index: {
      entry: 'example'
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
    const banner =
      '\n' + ' * @preserve\n' + ` * @MrHanson/vue-file-preview v${version}\n`
    const webpack = require('webpack')
    config.plugins.push(new webpack.BannerPlugin(banner))
  }
}
