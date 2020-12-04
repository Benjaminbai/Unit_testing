// 暂时没有用
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: 'http://10.114.42.193:8080',
            changeOrigin: true,
            pathRewrite: {
            '^/api': ''
            }
        })
    )
}