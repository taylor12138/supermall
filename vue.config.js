module.exports = {
  //publicPath为部署的配置
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      // 配置别名,内部其实已经配置过一个，就是 '@':src
      // 在cli3以上版本，配置别名的值可以引用之前配置过的别名，如'@/assets',不过cli4好像这里用不了。。
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'view': '@/view'
      }
    }
  }
}