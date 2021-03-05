<template>
  <div class="profile-info">
    <div
      class="profile-info-item"
      v-for="(item, index) in profileMessage"
      :key="index"
    >
      <img :src="addressIcon(item.icon)" alt="" /> {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileInfo",
  props: {
    profileMessage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    addressIcon(icon) {
      // 在变量中引入图片地址需要使用到require
      return require("@/assets/img/profile/" + icon);
    },
  },
};
</script>
<style scoped>
.profile-info {
  border: 0.05rem solid #fff;
  background-color: #fff;
  margin-bottom: 1rem;
}
.profile-info-item {
  padding: 0.75rem;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.profile-info-item:last-child {
  border-bottom: none;
}
.profile-info-item img {
  width: 1rem;
}
</style>