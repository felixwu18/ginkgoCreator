<template lang="html">
  <div class="about com_border">
    <h2>相同参数含义,不同字段配置</h2>
    <el-button @click="ceshi">点击ceshi</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },  
  methods: {
    ceshi() {
      var obj1 = {realName: 'wufei', hobby: 'novel', same: 666}   
      var obj2 = {alias: '', love: '', same: ''}
      var fieldsConfigure = {1: ['realName', 'alias'], 2: ['hobby', 'love']}
      console.log('obj2')
      console.log(obj2)
      this.$utils.copyPropVal(obj1, obj2)
      console.log(obj2)
     },
     match(){

     }
  }
};
</script>

<style lang="less" scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
