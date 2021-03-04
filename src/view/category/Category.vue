<template>
  <div class="wrapper">
    <!-- wrapper子元素只能有一个，所以不能直接绑定在ul上 -->
    <ul class="content">
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>something</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
      <li>new</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(wrapper, {
      probeType: 2,
      click: true,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 50rem;
  background-color: pink;
  /* overflow: scroll; */
  overflow: hidden;
}
</style>
