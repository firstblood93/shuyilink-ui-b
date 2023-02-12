// eslint-disable-next-line
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  devServer: {
    allowedHosts: ['.preview.csb.app'],
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/": {
        target: "http://apple.ob.shuyilink.com",
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/": "/",
        },
      },
    },
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": resolve("src"),
        "~": resolve("packages"),
        "@components": resolve("src/components"),
        // mock: resolve('mock')
      },
    },
  },
};
