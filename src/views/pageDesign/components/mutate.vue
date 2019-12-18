<template lang="html">
  <div class="about com_border">
    <h2>修改页面</h2>
    <el-button @click="ceshi">返回列表</el-button>
  </div>
</template>

<script>
export default {
  props: {
      active: { type: Object, default: _ => {} },            
      father: { type: Object, default: _ => {} }           
  },
  created() {
    this.father.son = 1
  },
  data() {
      return {
        
      }            
  },
  methods: {
     ceshi(){
         console.log('ceshi')
         this.toList()
     },
     toList() {
        this.active.mutateActive = false           
        this.active.listActive = true           
     },
  }
};
</script>

<style lang="less" scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
