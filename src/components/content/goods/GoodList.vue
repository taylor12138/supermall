<template>
  <div class="goods clearfix">
    <good-list-item
      v-for="item in goods"
      :key="item.acm"
      :goodsItem="item"
      class="goods-item"
    />
  </div>
</template>
<script>
import GoodListItem from "./GoodListItem.vue";

export default {
  name: "GoodList",
  components: { GoodListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.goods-item {
  width: 50%;
  float: left;
  padding: 0.25rem;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
</style>