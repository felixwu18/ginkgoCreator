<template>
  <div>
    <h2>scss样式专题</h2>
    <div class="scss">scss</div>
  </div>
</template>

<script>
export default {
  name: 'scss',
};
</script>

<style lang="scss" scoped>
@import "./style/index.scss";

.scss {
  border: 2px solid $border-color;
}
</style>
