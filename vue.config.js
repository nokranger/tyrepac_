module.exports = {
  devServer: {
    proxy: process.env.VUE_APP_API_URL
  },
  // devServer: {
  //   proxy: 'http://192.168.10.182:4000'
  // },
  productionSourceMap: false
}
