<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="isAcitve(index)"
    >
      <span> {{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
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
    isAcitve(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 0.9rem;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding-bottom: 0.25rem;
  border-bottom: 0.15rem solid var(--color-tint);
}
</style>