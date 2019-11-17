<template lang="html">
  <div>
    <h2 @click="test">数据处理 Ramda</h2>
    <!-- <p>{{msg}}</p> -->
  </div>
</template>

<script>
// import R from 'Ramda'
export default {
  data: function() {
    return {
        R: ''
    };
  },
  components: {},
  created: function() {},
  mounted: function() {},
  computed: {},
  methods: {
     test(){
       this.R
//        debugger
     }
  }
};
</script>

<style lang="less" scoped>
// .home {
//   color: blue;
//   font-size: bold;
// }
</style>
