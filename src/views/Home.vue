<template lang="html">
  <div class="home com_border">
    <h2>Home组件</h2>
    <!-- <p>{{msg}}</p> -->
    <sub_  :data-from-father="dataFromFather" />
  </div>
</template>

<script>
import sub_ from "./sub_";
export default {
  components: {sub_},
  data(){
    return {
      dataFromFather: [{title: '独孤九剑', children: [{title: '紫霞神功', children: [{title: '冲灵剑法'}]}]},
          {title: '六脉神剑'},
          {title: '一阳指', children: [{title: '玄铁重剑'}]}
        ],       
  }},
  props: {
    //接受上级传来的数据,先声明一个props属性接受
    msg: String,
  }
};
</script>

<style lang="less" scoped>
.home {
  color: blue;
  font-size: bold;
}
</style>
