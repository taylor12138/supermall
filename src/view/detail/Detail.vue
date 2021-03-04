<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @itemClick="itemClick" ref="nav" />
    <scroll
      class="content"
      :probe-type="3"
      ref="scroll"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <!-- 商品参数部分 -->
      <detail-param-info ref="params" :paramInfo="paramInfo" />
      <!-- 评论区部分 -->
      <detail-comment ref="comments" :comments="comments" />
      <!-- 推荐列表 -->
      <good-list ref="goods" :goods="showGoods"></good-list>
    </scroll>
    <!-- 购买栏 -->
    <detail-buy @addToCart="addToCart" />
  </div>
</template>
<script>
// 导入数据
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "@/network/detail.js";
// 导入公共组件
import Scroll from "@/components/common/scroll/Scroll.vue";
import GoodList from "@/components/content/goods/GoodList.vue";
// 导入子组件
import DetailNavBar from "./childCom/DetailNavBar";
import DetailSwiper from "./childCom/DetailSwiper.vue";
import DetailBaseInfo from "./childCom/DetailBaseInfo.vue";
import DetailShopInfo from "./childCom/DetailShopInfo.vue";
import DetailGoodsInfo from "./childCom/DetailGoodsInfo.vue";
import DetailParamInfo from "./childCom/DetailParamInfo.vue";
import DetailComment from "./childCom/DetailComment.vue";
import DetailBuy from "./childCom/DetailBuy.vue";
//导入公共js方法
import { itemListenerMixin } from "@/common/mixin.js";
import { debounce } from "@/common/utils.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodList,
    DetailBuy,
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      showGoods: [],
      comments: [],
      themeTopY: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    // 1.保存id
    this.id = this.$route.params.iid;
    // 2.根据id请求数据
    getDetail(this.id).then((res) => {
      const data = res.result;
      // 轮播图数据
      this.topImages = data.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商家信息
      this.shop = new Shop(data.shopInfo);
      // 卖家秀信息
      this.detailInfo = data.detailInfo;
      // 获取产品参数+尺码
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论数据
      this.comments = data.rate.list;

      // // 获取各个子组件的 y 高度
      // this.$nextTick(() => {
      //   // $this.$nextTick是根据最新的数据，对应的DOM是否被渲染完毕而执行的
      //   // 但是可能一些图片还没加载出来（导致目前获取的offsetTop不包含图片）
      //   this.themeTopY.push(0);
      //   this.themeTopY.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.comments.$el.offsetTop);
      //   this.themeTopY.push(this.$refs.goods.$el.offsetTop);
      //   console.log(this.themeTopY);
      // });
    });
    // 3.获取推荐的商品
    getRecommend().then((res) => {
      this.showGoods = res.data.list;
    });
    // 4.给getThemeTopY函数赋值（用防抖优化）
    this.getThemeTopY = debounce(() => {
      // 获取各个子组件的 y 高度
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comments.$el.offsetTop);
      this.themeTopY.push(this.$refs.goods.$el.offsetTop);
      //无穷大用于遍历
      this.themeTopY.push(Number.MAX_VALUE);
    }, 100);
  },
  // 使用mixin导入公共的mounted
  mixins: [itemListenerMixin],
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    // 图片加载事件，用于滚动条scroll的计算。getThemeTopY为计算各子组件的offsetTop的函数，并用防抖进行优化
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    // 导航栏点击事件
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200);
    },
    // 判断当前滚动到导航栏哪个部分
    contentScroll(position) {
      const y = Math.abs(position.y);
      for (let i = 0; i < this.themeTopY.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          y >= this.themeTopY[i] &&
          y < this.themeTopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = i;
        }
      }
    },
    // 监听加入购物车事件
    addToCart() {
      // 获取商品信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.id = this.id;
      // 2.利用vuex加入购物车
      this.$store.dispatch("addToCart", product).then((res) => {
        // 弹窗toast提示事件
        this.$toast.showMessage(res, 2000);
      });
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 9;
}
.detail-nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content {
  height: calc(100% - 2.2rem - 2.45rem);
  overflow: hidden;
}
</style>