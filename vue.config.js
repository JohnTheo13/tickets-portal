module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_functions.scss";
        @import "@/scss/_variables.scss";`
      }
    }
  }
}
