<template>
  <div class="profile-count">
    <div class="count-item">
      <div>
        <span class="count-num">{{ left.toFixed(2) }}</span> 元
      </div>
      <span>我的余额</span>
    </div>
    <div class="count-item">
      <div>
        <span class="count-num">{{ discount }}</span
        >个
      </div>
      <span>我的优惠</span>
    </div>
    <div class="count-item">
      <div>
        <span class="count-num">{{ point }}</span
        >分
      </div>
      <span>我的积分</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileCount",
  data() {
    return {
      left: 0,
      discount: 0,
      point: 0,
    };
  },
};
</script>
<style scoped>
.profile-count {
  display: flex;
  border: 0.05rem solid #fff;
  border-radius: 1rem;
  background-color: #fff;
  margin-bottom: 1rem;
}
.count-item {
  flex: 1;
  text-align: center;
  padding: 1rem;
}
.count-num {
  font-size: 1.5rem;
  color: rgb(226, 80, 23);
}
</style>