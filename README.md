# supermall
该项目是基于Vue.js开发的仿蘑菇街电商项目
实现了作为电商类app的基本功能
并且使用express框架搭建服务器 + MongoDB数据库管理用户信息

## 首先需要在本地启动MongoDB数据库，并且再另外一个窗口进行连接（需要自行安装MongoDB）
cmd进入命令窗口，在MongoDB安装的数据存储目录下 运行该命令
mongod
此时再打开一个窗口，输入以下命令进行连接（该命令默认连接本机的MongoDB服务）
mongo

## 其次需要在server文件夹下运行本地服务器（才可以使用用户登陆功能）
node app.js


### 然后再本项目根目录下运行程序
```
npm run serve
```

### 可以打包程序
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
