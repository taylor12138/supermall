<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      defalut: false,
    },
  },
  computed: {
    scrollY() {
      return this.scroll.y;
    },
  },
  mounted() {
    // 1.创建better-scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    // 2.监听滚动事件
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
    // 3.监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    //使用逻辑与 && 来判断scroll对象是否创建，创建出来了才能被使用，防止因异步操作问题导致未创建就被调用了
    // 自动滚动回弹事件
    // 给time一个默认传参为500ms
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 重新开启上拉加载时间
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    //更新事件
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>
<style scoped>
</style>