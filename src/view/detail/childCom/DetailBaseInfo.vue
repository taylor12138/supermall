<template>
  <div v-if="Object.keys(goods).length !== 0">
    <div class="no"></div>
    <div class="goods-title">{{ goods.title }}</div>
    <div class="goods-price">
      <span class="new-price">{{ goods.newPrice }} </span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="goods-column">
      <div v-for="item in goods.columns" :key="item">{{ item }}</div>
    </div>
    <div class="no"></div>

    <div class="goods-column">
      <div v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </div>
    </div>
    <div class="no"></div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.goods-title {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(0, 0, 0);
  padding: 0.5rem;
}
.goods-price {
  position: relative;
}
.new-price {
  font-size: 1.5rem;
  color: var(--color-high-text);
}
.old-price {
  font-size: 0.9rem;
  margin: 0 0.3rem;
  text-decoration: line-through;
}
.discount {
  position: absolute;
  top: 0.1rem;
  font-size: 0.9rem;
  color: white;
  background-color: var(--color-high-text);
  border: 0.1rem solid var(--color-high-text);
  border-radius: 0.5rem;
}
.goods-column {
  display: flex;
  font-size: 0.8rem;
  color: rgb(153, 153, 153);
  line-height: 1.1rem;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin: 0.5rem;
}
.goods-column img {
  position: relative;
  top: 0.2rem;
  width: 1rem;
}
.no {
  height: 0.5rem;
  background-color: rgb(248, 248, 248);
}
</style>