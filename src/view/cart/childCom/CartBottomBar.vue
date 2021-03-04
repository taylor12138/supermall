<template>
  <div class="cart-bottom-bar">
    <div class="check-area">
      <check-button :is-checked="allCheck" @click.native="allChange" />
      <span>全选</span>
    </div>
    <div class="total-price">总计：￥{{ totalPrice }}</div>
    <div class="calculate" @click="allBuy">结算({{ cartLength }})</div>
  </div>
</template>
<script>
import CheckButton from "@/components/content/checkButton/CheckButton.vue";
// 导入vuex的计算属性getters
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    ...mapGetters(["cartList"]),
    // 总计价格
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked === true)
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    // 商品件数
    cartLength() {
      return this.cartList.filter((item) => item.checked === true).length;
    },
    // 全选的状态
    allCheck() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.some((item) => item.checked === false);
    },
  },
  methods: {
    //   全选事件
    allChange() {
      if (this.allCheck) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    allBuy() {
      if (this.totalPrice <= 0) {
        this.$toast.showMessage("当前没有商品");
      }
    },
  },
};
</script>
<style scoped>
.cart-bottom-bar {
  height: 2.45rem;
  display: flex;
  position: relative;
  background: rgba(241, 232, 237, 0.95);
}
.check-area {
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.total-price {
  flex: 1;
  line-height: 2.45rem;
  text-align: center;
}
.calculate {
  width: 6rem;
  line-height: 2.45rem;
  text-align: center;
  position: absolute;
  right: 0;
  color: #fff;
  background-color: var(--color-tint);
}
</style>