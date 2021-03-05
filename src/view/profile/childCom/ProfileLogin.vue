<template>
  <div class="profile-login">
    <div class="avatar-img">
      <img src="~@/assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="login-center">
      <div>注册/登录</div>
      <div class="dasdasdas">
        <img src="~@/assets/img/profile/phone.svg" alt="" />
        <span>暂无绑定手机</span>
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