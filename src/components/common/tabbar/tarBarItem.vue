<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 使用div包装，同下 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 外面加入一个div，防止替换的时候，把这里的class判断也替换掉，导致样式无效 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页1</div> -->
  </div>
</template>
<script>
export default {
  name: "tabBarItem",
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "deeppink",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      if (!this.isActive) this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 2.45rem;
  text-align: center;
  font-size: 0.7rem;
}
.tab-bar-item img {
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 0.15rem;
  margin-bottom: 0.1rem;
  vertical-align: middle;
}
</style>