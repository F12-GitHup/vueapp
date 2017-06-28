// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/ashx":{
        "target":"http://cms.aolaigo.com/Handler/app_ActivityHandler.ashx",
        "changeOrigin":true,
        "pathRewrite":{"^/ashx":""}
      },
      "/mobilecart":{
        "target":"http://cartapi.aolaigo.com/handler/mobilecart.ashx",
        "changeOrigin":true,
        "pathRewrite":{"^/mobilecart":""}
      },
      "/ordersubmitpageaapi_new":{
        "target":"http://orderapi.aolaigo.com/v2/ordersubmitpageaapi_new.ashx",
        "changeOrigin":true,
        "pathRewrite":{"^/ordersubmitpageaapi_new":""}
      },
      "/callback":{
        "target":"http://productapi.aolaigo.com/handler/command.ashx?callback",
        "changeOrigin":true,
        "pathRewrite":{"^/callback":""}
      },
      "/member":{
        "target":"http://memberapi.aolaigo.com/appmember.ashx",
        "changeOrigin":true,
        "pathRewrite":{"^/member":""}
      },
      "/getCode":{
        "target":"http://member.aolaigo.com/handlers/validcode.ashx",
        "changeOrigin":true,
        "pathRewrite":{"^/getCode":""}
      }


    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
