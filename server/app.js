const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var router = require('./router');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 允许跨域
app.use(cors())


app.use(router)
app.listen(5208, () => {
  console.log('服务器已经启动......通过以下网址进行访问http://127.0.0.1:5208');
})
