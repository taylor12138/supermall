import Vue from "vue"
import Vuex from "vuex"
// 1.使用插件
Vue.use(Vuex);
// 2.创建对象
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"
const state = {
    cartList: []
};
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
// 3.导出
export default store