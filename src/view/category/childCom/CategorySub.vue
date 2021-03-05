<template>
  <div class="category-sub clearfix">
    <div class="category-sub-item" v-for="item in categoryList" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategorySub",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.category-sub-item {
  float: left;
  width: 33.3%;
  height: 6rem;
  vertical-align: middle;
  text-align: center;
  background-color: #fff;
  padding-top: 0.5rem;
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
.category-sub-item img {
  width: 65%;
}
</style>