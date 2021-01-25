var path = require("path");
var webpack = require("webpack");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  // assetsPublicPath:'./',
  devServer: {
    // host: "dhsw.xwsxedu.com",
    // port: 80,
    proxy: {
      "/apis": {
        target: "https://testapplet.xwsxedu.com",
        changeOrigin: true,
        pathRewrite: {
          "^/apis": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: {
    plugins: [
      
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "~@/assets/css/index.scss";	
       `,
      },
    },
  },
};
