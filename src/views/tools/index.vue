<template>
  <div class="about com_border">
    <h2>相同参数含义,不同字段配置</h2>
    <el-button @click="ceshi">点击ceshi</el-button>
    <el-button @click="arrUnique">数组去重</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj1:{realName: 'wufei', hobby: 'novel', same: 666},
      obj2:{alias: '', love: '', same: ''},
      arr1: [1,2,3,{aa: 33}],
      arr2: [1,2,3,{aa: 33}]
    }
  },  
  methods: {
    arrUnique() {
      const unique = [...new Set(this.arr1.concat(this.arr2))] // Array.from(new Set(arr1.concat(arr2)))
      console.log('arr1-arr2-unique')
      console.log(this.arr1)
      console.log(this.arr2)
      console.log(unique)
      const test = this.$utils.isSame(this.arr1, this.arr2)
      console.log('this same?')
      console.log(test)
    },
    ceshi() {
      var obj1 = this.obj1
      var obj2 = this.obj2
      var fieldsConfigure = {1: ['realName', 'alias'], 2: ['hobby', 'love']}
      console.log('obj2')
      console.log(obj2)
      this.$utils.copyPropVal(obj1, obj2)
      console.log(obj2)
     }
  }
};
</script>

<style scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
