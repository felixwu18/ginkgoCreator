<template lang="html">
  <div class="about com_border">
    <List v-if="active.listActive" :active="active" :father="this" />
    <Mutate v-if="active.mutateActive" :active="active" :father="this" />
    <Detail v-if="active.detailActive" :active="active" :father="this" />
  </div>
</template>

<script>
import List from "./components/list"
import Mutate from "./components/mutate"
import Detail from "./components/detail"
export default {
  name: 'controlCenter',
  components: {
     List,
     Mutate,
     Detail
  },
  data(){
    return {
       active: {
          listActive: true,
          mutateActive: false,
          detailActive: false
        }
    }
  },
  methods: {
     ceshi(){
                     
         console.log('ceshi')
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
