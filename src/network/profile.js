import axios from 'axios'
// 登录请求
export function getLogin(phone, password) {
  return axios.post('http://localhost:5208/profile/login', {
    // post第二个参数可以设置请求体
    phone,
    password
  })
}
// 注册请求
export function getRegister(phone, username, password) {
  return axios.post('http://localhost:5208/profile/register', {
    // post第二个参数可以设置请求体
    phone,
    username,
    password
  })
}