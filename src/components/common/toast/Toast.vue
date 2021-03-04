<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    //   duration时间间隔默认2s
    showMessage(message, duration = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.4rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
</style>