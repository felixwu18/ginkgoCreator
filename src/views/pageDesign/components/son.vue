<template>
  <div class=" margin about com_border">
      <el-input v-model="vModel.val" />
  </div>
</template>

<script>
export default {
  name: "input",
  props: {
      vModel: {
          type: Object,
          default: () => ({})
      }
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
