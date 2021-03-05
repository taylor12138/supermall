<template>
  <div id="category">
    <!-- 导航栏 -->
    <nav-bar class="category-nav">
      <template v-slot:center>
        <span>分类</span>
      </template>
    </nav-bar>
    <div class="list">
      <!-- 左侧列表 -->
      <scroll class="content list-left">
        <category-left
          :categories="categories"
          @currentIndexChange="currentIndexChange"
        />
      </scroll>
      <!-- 右侧分类内容 -->
      <scroll class="content list-right">
        <category-sub :categoryList="categoryList" />
      </scroll>
    </div>
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
//导入数据
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "@/network/category";
// 导入子组件
import CategoryLeft from "./childCom/CategoryLeft.vue";
import CategorySub from "./childCom/CategorySub.vue";

export default {
  name: "Category",
  components: {
    NavBar,
    CategoryLeft,
    Scroll,
    CategorySub,
  },
  data() {
    return {
      currentIndex: -1,
      categories: [],
      categoryList: [],
    };
  },
  created() {
    // 初始化得到分类信息，并将每个分离里具体的信息（subcategories）设置为空
    getCategory().then((res) => {
      console.log(res.data);
      this.categories = res.data.category.list;
      // 初始化每个分类对应的表单数据
      this.categories.forEach((item) => {
        item.subcategories = {};
      });
      // 先请求第一个分类的具体信息作为展示
      this.getSubcategories(0);
    });
  },
  methods: {
    // 请求分类具体数据事件
    getSubcategories(index) {
      // 切换到该分类，将当前currentIndex改未当前下标
      this.currentIndex = index;
      // 发送该分类（index）请求对应的具体信息
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryList = res.data.list;
        console.log(this.categoryList);
      });
    },
    //切换分类事件
    currentIndexChange(index) {
      this.getSubcategories(index);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.category-nav {
  color: #fff;
  background-color: var(--color-tint);
}
.list {
  display: flex;
  height: calc(100% - 4.65rem);
}
.content {
  height: 100%;
  overflow: hidden;
}
.list-left {
  flex: 1;
  background-color: rgb(248, 248, 248);
}
.list-right {
  flex: 3;
}
</style>
