<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab></main-tab>
  </div>
</template>

<script>
import mainTab from "@/components/content/mainTab/mainTab";

export default {
  name: "App",
  components: {
    mainTab,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
