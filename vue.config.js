const HtmlWebpackPlugin = require('html-webpack-plugin')
    // 多项目入口文件配置
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
let appName = process.argv.slice(0).reverse()[0].replace('--', '');

//根据启动项目设置文件主入口地址
let outputPath = appName === 'linyi' ? 'linyi' : 'beijing';
console.log(appName)
console.log(`
                    ll          ll

     *****************环境变量*****************
          -----                    ------
                         ·               
                                         
                     ~~~~~~~~~~

`);
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
        open: false,
        hotOnly: true,
        proxy: proxyObj //使用动态代理
    },
    pages: {
        index: {
            entry: 'src/views/' + appName + '/main.js',
        }
    },
    configureWebpack: config => {
        config.plugins.forEach((val) => {
            //修改 htmlwebpackplugin 默认配置
            if (val instanceof HtmlWebpackPlugin) {
                val.options.title = '修改标题'
                    //修改图标
                val.options.favicon = ''
            }
        })
    }

}