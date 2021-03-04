import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import toast from "@/components/common/toast"
import VueLazyLoad from "vue-lazyload"

// 懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/mai.jpg')
});
Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue();
// 使用自定义插件toast
Vue.use(toast);

new Vue({
  render: h => h(App),
  // 实际上是 router: router,所以如果取名为Router，则需要 router:Router 
  router,
  store
}).$mount('#app')
