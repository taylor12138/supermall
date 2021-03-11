<template>
  <div id="profile">
    <!-- 导航栏 -->
    <nav-bar class="profile-nav">
      <template v-slot:center>
        <span>个人中心</span>
      </template>
    </nav-bar>
    <!-- 个人登录部分 -->
    <profile-login @click.once.native="enterLogin" />
    <!-- 账户余额 -->
    <profile-count @click.native="tipNoOpen" />
    <!-- 账户功能部分 -->
    <profile-info :profileMessage="profileOrder" @click.native="tipNoOpen" />
    <!-- 购物车功能 -->
    <profile-info :profileMessage="profileService" @click.native="tipNoOpen" />
    <!-- 注册用户页面 -->
    <profile-register
      class="profile-register"
      v-show="isLogin"
      @LoginSuccess="showRegister"
    />
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "@/components/common/navbar/NavBar.vue";
// 导入数据
import { getRegister, getLogin } from "@/network/profile";
// 引入子组件
import ProfileLogin from "./childCom/ProfileLogin.vue";
import ProfileCount from "./childCom/ProfileCount.vue";
import ProfileInfo from "./childCom/ProfileInfo.vue";
import ProfileRegister from "./childCom/ProfileRegister.vue";
export default {
  name: "Profile",
  data() {
    return {
      profileOrder: [
        { icon: "message.svg", title: "我的消息" },
        { icon: "pointer.svg", title: "积分商城" },
        { icon: "vip.svg", title: "会员卡" },
      ],
      profileService: [
        { icon: "cart.svg", title: "我的购物车" },
        { icon: "shopping.svg", title: "下载购物APP" },
      ],
      isLogin: false,
    };
  },
  created() {},
  components: {
    NavBar,
    ProfileLogin,
    ProfileCount,
    ProfileInfo,
    ProfileRegister,
  },
  methods: {
    enterLogin() {
      this.isLogin = true;
    },
    showRegister(isLogin) {
      this.isLogin = isLogin;
    },
    // 未开放功能
    tipNoOpen() {
      this.$toast.showMessage();
    },
  },
};
</script>
<style scoped>
#profile {
  background-color: rgb(247, 247, 247);
}
.profile-nav {
  color: #fff;
  background-color: var(--color-tint);
}
.profile-register {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
