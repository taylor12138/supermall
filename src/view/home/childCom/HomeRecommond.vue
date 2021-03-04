<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommond",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  font-size: 0.6rem;
  padding: 0.5rem 0 1rem;
  border-bottom: 0.5rem solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80%;
  height: 80%;
  margin-bottom: 0.5rem;
}
</style>