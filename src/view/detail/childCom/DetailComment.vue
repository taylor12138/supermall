<template>
  <div id="comment">
    <div class="no"></div>
    <div class="comment-first">宝贝评价：</div>
    <div v-for="item in comments" :key="item.created">
      <div class="user">
        <img :src="item.user.avatar" alt="" />
        <span>{{ item.user.uname }}</span>
      </div>
      <div class="comment-content">{{ item.content }}</div>
      <div class="commentstyle">
        <span>{{ item.created | showDate }}</span>
        <span>{{ item.style }}</span>
      </div>
    </div>
    <div class="no"></div>
  </div>
</template>
<script>
import { formatDate } from "@/common/utils.js";
export default {
  name: "DetailComment",
  props: {
    comments: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>
<style scoped>
.comment-first {
  padding: 0.5rem;
  border-bottom: 0.025rem solid rgb(244, 244, 244);
}
.user,
.commentstyle {
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  margin: 0.5rem 0;
}
.user img {
  width: 1.5rem;
  border: 0.05rem solid rgb(255, 255, 255);
  border-radius: 0.75rem;
  margin: 0 0.25rem;
  vertical-align: middle;
}
.comment-content {
  padding: 0.5rem;
}
.commentstyle span {
  margin-left: 0.5rem;
}
.no {
  height: 0.5rem;
  background-color: rgb(248, 248, 248);
}
</style>