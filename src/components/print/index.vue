<template lang="html">
  <div class="about com_border">
    <h2>打印</h2>
    <el-button
      v-on="$listeners"
      v-bind="$attrs"
      >{{name}}</el-button>
  </div>
</template>

<script>
export default {
  name: "print",
  props: {
    print: { type: Object, default: () => {} }
  },
  data() {
    return {
      // value: '',
      // configure_obj: {},
      // configure: null,
    };
  },
  computed: {
    name() {
      if(!this.print.state) {
         console.log('print的state没开启打印')             
      } else {
       this.print.state && this.callPrint()
       this.print.state = false             
      }
      return '打印';
    }
  },
  methods: {
    callPrint(){
       console.log('print方法已调用')
       console.log(this.print.list)
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
