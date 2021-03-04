<template>
  <div>
    <div class="good-item-all" @click="itemClick">
      <img v-lazy="Img" alt="" @load="imageLoad" />
      <div class="good-item-text">
        <p class="good-item-title">{{ goodsItem.title }}</p>
        <span class="good-item-price">￥{{ goodsItem.price }}</span>
        <span class="good-item-cfav">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    Img() {
      // 查看是否有show属性
      if ("show" in this.goodsItem) {
        return this.goodsItem.show.img;
      } else {
        return this.goodsItem.image;
      }
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>
<style scoped>
.good-item-all {
  border: 0.05rem solid #ccc;
  border-radius: 0.75rem;
  box-shadow: 0.05rem 0.05rem 0.05rem #ccc;
}
.good-item-all img {
  width: 100%;
  height: 18rem;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
}
.good-item-text {
  font-size: 0.65rem;
  margin-bottom: 0.25rem;
}
.good-item-text p {
  display: -webkit-box;
  height: 1.7rem;
  margin: 0.25rem;
  /* 多行的溢出隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.good-item-price {
  font-size: 0.8rem;
  color: #fa2c19;
}
.good-item-cfav {
  float: right;
  position: relative;
}
.good-item-cfav::before {
  content: "";
  position: absolute;
  left: -0.75rem;
  top: 0.1rem;
  width: 0.65rem;
  height: 0.65rem;
  background: url("~@/assets/img/common/collect.svg") no-repeat 0 0/0.7rem
    0.7rem;
}
</style>