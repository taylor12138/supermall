const express = require('express')
const curd = require('./crud')
var router = express.Router()

const User = curd.User
//注册
router.post('/profile/register', function (req, res, next) {
  // 1.获取表单数据 req.body
  // 2.操作数据库  判断用户是否存在
  // 3.发送响应
  var body = req.body;
  console.log(body);
  // 使用正则表达式控制用户不要输入错误的电话号码
  let rg = /^[0-9]{11}$/;
  if (!rg.test(body.phone)) return res.status(200).json({
    err_code: 3,
    message: 'wrong phone'
  });
  User.findOne({
    $or: [
      { phone: body.phone },
      { username: body.username }
    ]
  }, function (err, data) {
    if (err) return next(err);
    if (data) {
      return res.status(200).json({
        err_code: 1,
        message: 'phone or username already exits'
      });
    }
    // 在数据库添加数据
    new User(body).save(function (err, user) {
      if (err) {
        return res.status(500).json({
          err_code: 500,
          message: 'server err'
        });
      }
      console.log("hello");
      // // 注册成功，通过session记录用户登陆状态
      // req.session.user = user;
      res.status(200).json({
        err_code: 0,
        message: 'ok',
        user
      })
    })
  })
});
// 登录
router.post('/profile/login', function (req, res, next) {
  // 获取表单数据-> 查询数据库用户密码是否正确-> 发送响应数据
  let body = req.body;
  // 使用正则表达式控制用户不要输入错误的电话号码
  let rg = /^[0-9]{11}$/;
  if (!rg.test(body.phone)) return res.status(200).json({
    err_code: 3,
    message: 'wrong phone'
  });
  User.findOne({
    phone: body.phone,
    password: body.password
  }, function (err, user) {
    if (err) return next(err);
    if (!user) return res.status(200).json({
      err_code: 1,
      message: 'phone or password is invalid'
    })
    // //用户存在，登陆成功、通过session记录登陆状态
    // req.session.user = user;
    res.status(200).json({
      err_code: 0,
      message: 'OK',
      user
    })
  })
});

module.exports = router