import Vue from "vue"
import Vuex from "vuex"
// 1.使用插件
Vue.use(Vuex);
// 2.创建对象
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"
const state = {
  cartList: [],
  user: {
    username: '注册/登录',
    phone: '暂无绑定手机',
    img: 'avatar.svg'
  }
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
// 3.导出
export default store