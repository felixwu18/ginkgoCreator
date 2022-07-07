<template>
  <div>
    <h2 class="color">scss样式专题</h2>
    <div class="scss"><div class="scss-inner">测试嵌套选择器</div> scss</div>
    <div class="img"></div>
    <div class="rose"></div>
    <img :src="imgUrl" alt="">
    <button class="btn">按钮</button>
  </div>
</template>

<script>
// const imgUrl = require('./img/rose.png')
import imgUrl from './img/meinv.jpg'
export default {
  name: 'scss',
  data(){
    return{
      imgUrl
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style/index.scss";
// 继承 & 混合 : 继承往往比混合器生成的css体积更小
// 混合器 合理使用
// 不要在css规则中使用后代选择器: 如: .foo .bar { @extend .baz; }
//                                  .bip .baz { a: b; }

// $border-style: '2px solid #4fc48d';
.color {
  color: $color-danger
}
.scss {
  border: 2px solid $border-color;
  margin: 0 20px 20px 230px;
  &-inner{  // 拼接选择器
   text-align: left;
   @extend .color; // 继承选择器样式 , 继承应该是建立在语义化的关系上
  }
  @include rounded-corners // 混入圆角
}
.img {
  width: $border-width;
  height: $border-height;
  margin: 0 20px 20px 230px;
  background: url($img-path) no-repeat; // 测试图片路径
}
.rose {
  @include paneactive($rose-path, 0, 0); // 调用样式集
}

  @include marginChang('img'); // 动态class
  @include marginChang('rose'); // 动态class

// .btn:focus {
//   color: mix($color-success, $color-warning) // 计算颜色混合, 很少有
// }
</style>
