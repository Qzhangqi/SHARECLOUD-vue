module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true
      },
      '/': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
};