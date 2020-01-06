// vue.config.js
const path = require("path");
const webpack = require("webpack");

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hitokoto/'
    : '/'
  ,
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src"),
        jquery: "jquery",
        "jquery-ui": "jquery-ui"
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
};
