<template>
  <div id="detail-buy">
    <div class="detail-buy-left">
      <div class="buy-service"><i class="icon"></i><span>客服</span></div>
      <div class="buy-shop"><i class="icon"></i> <span>店铺</span></div>
      <div class="buy-mark"><i class="icon"></i><span>收藏</span></div>
    </div>
    <div class="detail-buy-right">
      <div @click="addToCart">购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBuy",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>
<style scoped>
#detail-buy {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2.45rem;
  background-color: #fff;
}
.detail-buy-left,
.detail-buy-right {
  flex: 1;
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
}
.detail-buy-left .icon {
  display: block;
  height: 1.1rem;
  margin-top: 0.25rem;
  background: url("~@/assets/img/detail/detail_bottom.png") no-repeat 50% 78%;
  background-size: 1.1rem auto;
}
.buy-service .icon {
  background-position: 50% 41%;
}
.buy-mark .icon {
  background-position: 50% 0%;
}
.detail-buy-right div {
  width: 100%;
  line-height: 2.2rem;
  color: #fff;
  text-align: center;
  border-radius: 22px;
  background-color: var(--color-tint);
  margin: 0.25rem;
}
</style>