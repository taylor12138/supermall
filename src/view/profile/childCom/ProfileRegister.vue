<template>
  <div class="profile-register">
    <div class="register-title">SuperMall 注册/登录</div>
    <form action="">
      <div class="register-input">
        <input type="text" placeholder="请输入手机号" v-model="profilePhone" />
        <img v-if="isPhone" src="~@/assets/img/profile/true.png" alt="" />
        <img v-else src="~@/assets/img/profile/err.png" alt="" />
      </div>
      <div class="register-input">
        <input type="text" placeholder="请输入昵称" v-model="profileName" />
        <img v-if="isName" src="~@/assets/img/profile/true.png" alt="" />
        <img v-else src="~@/assets/img/profile/err.png" alt="" />
      </div>
      <div class="register-input">
        <input type="password" placeholder="请输入密码" v-model="profilePwd" />
        <img v-if="isPwd" src="~@/assets/img/profile/true.png" alt="" />
        <img v-else src="~@/assets/img/profile/err.png" alt="" />
      </div>
    </form>
    <div class="sub_butn" @click="onRegister()">注册</div>
    <div class="sub_butn2" @click="onLogin()">登录</div>
  </div>
</template>
<script>
// 导入数据
import { getRegister, getLogin } from "@/network/profile";
export default {
  name: "ProfileRegister.vue",
  data() {
    return {
      profilePhone: "",
      profileName: "",
      profilePwd: "",
      isPhone: true,
      isName: true,
      isPwd: true,
      isShow: true,
    };
  },
  methods: {
    // 注册请求事件
    onRegister() {
      getRegister(this.profilePhone, this.profileName, this.profilePwd).then(
        (res) => {
          console.log(res);
          this.CClear();
          this.TipRegistercloak(res.data);
        }
      );
      this.CClear();
    },
    // 登录请求事件
    onLogin() {
      getLogin(this.profilePhone, this.profilePwd).then((res) => {
        console.log(res);
        this.CClear();
        this.TipLogincloak(res.data);
      });
    },
    // 清空表单
    CClear() {
      this.profilePhone = "";
      this.profileName = "";
      this.profilePwd = "";
    },
    // 提示登录信息
    TipLogincloak(data) {
      // 状态码err_code
      const err_code = data.err_code;
      if (err_code === 0) {
        this.Success(data.user);
      } else if (err_code === 1) {
        this.isPhone = false;
        this.isPwd = false;
        this.$toast.showMessage("手机号码或密码错误", 3000);
      } else if (err_code === 500) {
        // 弹窗toast提示事件
        this.$toast.showMessage("服务器忙，请稍后重试！", 3000);
      }
    },
    // 提示注册信息
    TipRegistercloak(data) {
      // 状态码err_code
      const err_code = data.err_code;
      if (err_code === 0) {
        this.Success(data.user);
      } else if (err_code === 1) {
        this.isPhone = false;
        this.$toast.showMessage("手机号码已注册", 3000);
      } else if (err_code === 2) {
        this.isName = false;
        this.$toast.showMessage("昵称已使用", 3000);
      } else if (err_code === 500) {
        // 弹窗toast提示事件
        this.$toast.showMessage("服务器忙，请稍后重试！", 3000);
      }
    },
    // 登陆成功的提示
    Success(user) {
      this.isPhone = true;
      this.isName = true;
      this.$toast.showMessage("登录成功", 3000);
      //登陆成功的人物图展示
      user.img = "aavatar.jpg";
      // 将得到的用户信息传递到vuex的user中
      this.$store.commit("ChangeUser", user);
      // 让弹窗消失
      this.$emit("LoginSuccess", false);
    },
  },
};
</script>
<style scoped>
.profile-register {
  width: 20rem;
  background-color: rgba(230, 41, 82, 0.7);
  padding: 0.5rem;
}
.register-input {
  display: flex;
  margin: 0.75rem;
  padding: 0.25rem;
}
.register-input input {
  width: 16rem;
}
.register-input img {
  width: 1.5rem;
  height: 1.5rem;
}
.register-title {
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 0.75rem;
}
.sub_butn,
.sub_butn2 {
  /* width: 13.5rem; */
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  border-radius: 1.25rem;
  background-color: #fff;
  margin: 1rem;
}
.sub_butn2 {
  color: #fff;
  background-color: rgb(235, 51, 51);
}
</style>