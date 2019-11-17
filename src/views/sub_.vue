<template lang="html">
  <div>
    <h2 class="about" >sub_组件递归</h2>
    <template v-for="sonData in dataFromFather">
           <p v-if="sonData.children&&sonData.children.length > 0">
             <el-button >{{sonData.title}}</el-button>
             <template  v-for="son in sonData.children">
                
               <sub_ v-if="son.children&&son.children.length > 0"  :data-from-father="son.children" />
                 <el-button v-else >{{son.title}}</el-button>
             </template>
            </p>

            <p v-else>
               <el-button >{{sonData.title}}</el-button>
            </p>
     </template>
 </div>           
</template>

<script>
export default {
  name: 'sub_',
  components: {
  },
  props: {
    dataFromFather: Array,
  }
};
</script>

<style lang="less" scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
