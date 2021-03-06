<template>
  <div class="profile-login">
    <div class="avatar-img">
      <img :src="addressIcon()" alt="" />
    </div>
    <div class="login-center">
      <div>{{ $store.state.user.username }}</div>
      <div class="dasdasdas">
        <img src="~@/assets/img/profile/phone.svg" alt="" />
        <span>{{ $store.state.user.phone }}</span>
      </div>
    </div>
    <div class="arrow">
      <img src="~@/assets/img/common/arrow-left.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileLogin",
  methods: {
    addressIcon() {
      // 在变量中引入图片地址需要使用到require
      return require("@/assets/img/profile/" + this.$store.state.user.img);
    },
  },
};
</script>
<style scoped>
.profile-login {
  display: flex;
  height: 5rem;
  background-color: var(--color-tint);
  color: #fff;
  padding: 0.5rem;
  margin-top: 0.02rem;
}
.avatar-img {
  flex: 1;
}
.avatar-img img {
  width: 100%;
  height: 100%;
}
.login-center {
  flex: 3;
  padding: 1rem;
}
.login-center img {
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
}
.arrow {
  flex: 1;
  text-align: center;
  line-height: 5rem;
}
.arrow img {
  width: 2rem;
  height: 2rem;
}
</style>