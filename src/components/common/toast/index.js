//引入toast组件
import Toast from "./Toast";
const obj = {};
// 可以选择传进来一个Vue，对Vue对象进行操作
obj.install = function (Vue) {
    // 1.创建组件构造器（在vue外面使用组件就要用到组件构造器）
    const toastConstructor = Vue.extend(Toast);
    // 2.使用new的方式创建组件对象
    const toast = new toastConstructor();
    // 3.将组件对象挂载到某元素上
    toast.$mount(document.createElement('div'));
    // 4.toast.$el 对应的就是 div 
    document.body.appendChild(toast.$el);
    // 5.设置prototype之后，以后调用插件方法只需要$toast即可
    Vue.prototype.$toast = toast;
}
export default obj