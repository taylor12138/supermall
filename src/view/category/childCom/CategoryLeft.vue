<template>
  <div class="category-left">
    <div
      class="category-left-item"
      v-for="(item, index) in categories"
      :key="item.acm"
      @click="switchCate(index)"
      :class="{ active: currentIndex === index }"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryLeft",
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    switchCate(index) {
      this.currentIndex = index;
      this.$emit("currentIndexChange", index);
    },
  },
};
</script>
<style scoped>
.category-left-item {
  height: 3rem;
  font-size: 0.7rem;
  line-height: 3rem;
  text-align: center;
}
.category-left .active {
  color: var(--color-tint);
  background-color: #fff;
}
</style>