<template lang="html">
  <div class="about com_border">
    <h2>测试打印</h2>
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
      }
      return '打印';
    }
  },
  methods: {
    callPrint(){
      console.log('print方法已调用')
       console.log(this.print.list)
       this.print.state = false             
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
