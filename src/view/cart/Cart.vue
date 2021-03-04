<template>
  <div id="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <span>购物车({{ cartLength }})</span>
      </template>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list />
    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
// 导入公共组件
import NavBar from "../../components/common/navbar/NavBar.vue";
// 导入公共js方法
import { mapGetters } from "vuex";
// 导入子组件
import CartList from "./childCom/CartList.vue";
import CartBottomBar from "./childCom/CartBottomBar.vue";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // 可以直接使用Vuex的计算属性getters传过来的值 cartLength
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}
</style>
