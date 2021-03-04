<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <!-- 已经在base.conf里设置了assets的绝对路径(在src里面使用需要增加 ~)，放心食用 -->
        <img slot="item-icon" src="~@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~@/assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~@/assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">应用</div>
      </tab-bar-item>
      <tab-bar-item path="/cart"
        ><img slot="item-icon" src="~@/assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~@/assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div></tab-bar-item
      >
      <tab-bar-item path="/profile"
        ><img slot="item-icon" src="~@/assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~@/assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div></tab-bar-item
      >
    </tab-bar>
  </div>
</template>
<script>
// 导入
import tabBar from "@/components/common/tabbar/tabBar";
import tabBarItem from "@/components/common/tabbar/tarBarItem";
export default {
  name: "mainTab",
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>
<style scoped>
</style>