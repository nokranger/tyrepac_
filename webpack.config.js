module.exports = {
  devServer: {
    proxy: {
      '^/api/': {
        target: 'http://119.63.90.135:2083',
        pathRewrite: { '^/api/': '/api/' },
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  }
}
