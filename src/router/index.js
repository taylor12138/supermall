import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = () => import('../view/home/Home');
const Cart = () => import('../view/cart/Cart')
const Category = () => import('../view/category/Category')
const Profile = () => import('../view/profile/Profile')
const Detail = () => import('../view/detail/Detail')
// 1.安装插件
Vue.use(VueRouter);

// 2.创建路由对象+导出
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
];
export default new VueRouter({
  routes,
  mode: 'hash'
});
