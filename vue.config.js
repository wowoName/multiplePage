// 多项目入口文件配置
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
let appName = process.argv.slice(0).reverse()[0].replace('--', '');
let outputPath = appName === 'linyi' ? 'linyi' : 'beijing';

module.exports = {
    publicPath: IS_PROD ? '../' + outputPath + '/' : './',
    outputDir: 'dist/' + outputPath,
    assetsDir: 'static',
    lintOnSave: true,
    runtimeCompiler: false,
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/views/' + appName + '/main.js',
        }
    },

}