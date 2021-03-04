<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style scoped>
.check-button {
  border-radius: 25%;
  border: 0.05rem solid #ccc;
}
.check {
  border: 0.05rem solid var(--color-tint);
  background-color: var(--color-tint);
}
</style>