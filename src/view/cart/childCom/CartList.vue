<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-item
        v-for="item in list"
        :key="item.id"
        :item-info="item"
      ></cart-item>
    </scroll>
  </div>
</template>
<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import CartItem from "./CartItem.vue";

export default {
  components: {
    Scroll,
    CartItem,
  },
  name: "CartList",
  data() {
    return {
      list: this.$store.state.cartList,
    };
  },
  activated() {
    // 每次返回该页面都refresh一次，重新计算scroll高度，防止因为新增数据而卡死
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
.cart-list {
  height: calc(100vh - 2.2rem - 2.45rem - 2.45rem);
  background-color: #f2f2f2;
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>