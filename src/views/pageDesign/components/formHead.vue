<template>
  <div>
    formhead
    <el-input v-model="search.name" />
  </div>
</template>

<script>

export default {
  name: "formHead",
  props: {
      active: { type: Object, default: _ => {} },            
      father: { type: Object, default: _ => {} },
      search: { type: Object, default: _ => {} }           
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>
