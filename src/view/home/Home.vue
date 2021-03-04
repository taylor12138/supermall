<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <!-- 偷天换日 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="steal-tab"
      v-show="isTabfixed"
    />
    <!-- 滚轮内容 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="LoadMore"
    >
      <home-swiper
        :banner="banner"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommond :recommend="recommend"></home-recommond>
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <good-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 导入子组件
import HomeSwiper from "./childCom/homeSwiper.vue";
import HomeRecommond from "./childCom/HomeRecommond.vue";
import HomeFeature from "./childCom/HomeFeature.vue";
// 导入公共组件
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl.vue";
import GoodList from "@/components/content/goods/GoodList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "@/components/content/backtop/BackTop.vue";
// 导入数据
import { getHomeMultidata, getHomeGoods } from "@/network/home";
//导入公共js方法
import { itemListenerMixin } from "@/common/mixin.js";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommond,
    HomeFeature,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      keywords: [],
      dKeyword: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabfixed: false,
      homeY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 创建时就发送网络请求
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 回到页面，调整scroll
  activated() {
    this.$refs.scroll.scrollTo(0, this.homeY, 0);
    this.$refs.scroll.refresh();
  },
  //离开该页面的时候，不接收事件总线传来的图片加载，scroll刷新事件
  deactivated() {
    this.homeY = this.$refs.scroll.scrollY;
    this.$bus.$off("itemImageLoad", () => {
      refresh();
    });
  },
  // 使用mixin导入公共的mounted
  mixins: [itemListenerMixin],
  mounted() {},
  methods: {
    /*网络请求相关方法 */
    // 请求轮播图数据的函数
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    // 请求首页页面商品数据的函数
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        // this.goods[type].list = this.goods[type].list.concat(...res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成上拉加载更多，需要finishPullUP才能重新使用该功能
        this.$refs.scroll.finishPullUp();
      });
    },

    /*事件监听相关方法 */
    // 首页商品导航栏切换事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 回到顶部事件
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //展示回到顶部按钮事件 + tabControl是否固定到顶部
    contentScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000;
      this.isTabfixed = Math.abs(position.y) > this.tabOffsetTop;
    },
    //上拉加载更多事件
    LoadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 监听轮播图加载完毕，然后再获取tabControl的offsetTop
    swiperImgLoad() {
      //获取tabControl元素距离顶部距离
      // 所有组件都有一个元素 $el 用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 2.2rem; */
  /* vh viewport hetght 指当前可视窗口高度 100vh为100%的可视区域*/
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  height: calc(100% - 4.65rem);
  overflow: hidden;
}
.steal-tab {
  position: fixed;
  left: 0;
  right: 0;
  top: 2.2rem;
  z-index: 999;
}
</style>
