const { resolve } = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: { // 别名配置
                '@': resolve('src'),
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'netWork': '@/network',
                'views': '@/views'
            }
        }
    }
}