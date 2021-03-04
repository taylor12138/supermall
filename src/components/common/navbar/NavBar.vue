<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  box-shadow: 0 0 10px 0 hsl(0deg 6% 58% / 60%);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>