module.exports = {
  // publicPath: '/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_functions.scss";
        @import "@/scss/_variables.scss";
        @import "@/scss/main.scss";
        @import "@/scss/_icons.scss";`
      }
    }
  }
}
