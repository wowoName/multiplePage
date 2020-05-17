 const HtmlWebpackPlugin = require('html-webpack-plugin');
 //gzip 压缩
 const CompressionPlugin = require('compression-webpack-plugin');
 //打包分析
 const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
 const cdn = {
     css: [],
     js: [
         // vue
         'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
         // vue-router
         'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
         // vuex
         'https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js',
         // axios
         'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
     ]
 };
 // 多项目入口文件配置
 const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
 let appName = process.argv.slice(0).reverse()[0].replace('--', '');

 //根据启动项目设置文件主入口地址
 let outputPath = appName === 'linyi' ? 'linyi' : 'beijing';
 console.log("执行项目:" + appName);
 /**
  * 根据url 生成对应代理地址
  * 转发地址为配置信息 VUE_APP_URL_** ==> ** 
  */
 let baseUrlKeys = Object.keys(process.env);
 let baseUrls = baseUrlKeys.filter(v => v.includes('VUE_APP_URL'));
 console.log(baseUrls);
 let proxyObj = {}
 baseUrls.forEach(v => {
     //生成代理
     let proxyTba = '/' + v.split('_').pop().toLowerCase()
     proxyObj[proxyTba] = {
         target: process.env[v], //配置动态代理
         changeOrigin: true,
         secure: false,
     }
     proxyObj[proxyTba].pathRewrite = {
         ['^' + proxyTba]: ""
     }
 })
 console.log(JSON.stringify(proxyObj))
 module.exports = {
     publicPath: IS_PROD ? '../' + outputPath + '/' : './',
     outputDir: 'dist/' + outputPath,

     assetsDir: 'static',
     lintOnSave: true,
     runtimeCompiler: false,
     productionSourceMap: false,
     devServer: {
         disableHostCheck: true,
         host: "0.0.0.0",
         port: 8088, // 端口号
         https: false,
         open: true,
         hotOnly: true,
         proxy: proxyObj //使用动态代理
     },
     pages: {
         index: {
             entry: 'src/views/' + appName + '/main.js',
         }
     },
     configureWebpack: config => {
         config.plugins.forEach(v => {
             if (v instanceof HtmlWebpackPlugin) {
                 console.log('这里IDE一个')
             }
         })

         if (IS_PROD) {
             //  config.optimization = {
             //      splitChunks: {

             //      }
             //  }
         }

     },
     chainWebpack: config => {
         //生产环境
         if (IS_PROD) {
             //cdn 脚本名称
             const externals = {
                 vue: 'Vue',
                 axios: 'axios',
                 'vue-router': 'VueRouter',
                 vuex: 'Vuex'
             };
             config.externals(externals);

             //生产环境注入 cdn
             config.plugin('html-index').tap(args => {
                 args[0].cdn = cdn
                 args[0].favicon = '';
                 args[0].title = "生产"
                 return args
             });

             //开启gzip压缩 ---部署 nginx 开启gzip命令
             config
                 .plugin('compression')
                 .use(CompressionPlugin, [{
                     filename: '[path].gz[query]',
                     algorithm: 'gzip',
                     test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
                     threshold: 10240,
                     minRatio: 0.8,
                     cache: true
                 }]);
             //添加打包分析
             config.plugin("webpack-report").use(BundleAnalyzerPlugin, [{
                 analyzerMode: "static"
             }]);

         } else {
             //开发环境 修改html-webpack-plugin 模板信息
             config.plugin('html-index').tap(args => {
                 args[0].title = "开发"
                 args[0].favicon = false
                 return args
             })
         }

     }

 }