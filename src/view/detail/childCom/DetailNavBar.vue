<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~@/assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titles">
        <div
          v-for="(item, index) in titles"
          :key="item"
          class="titles-item"
          :class="{ active: index === currentIndex }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.back img {
  margin-top: 0.4rem;
}
.titles {
  display: flex;
  font-size: 0.8rem;
}
.titles-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>