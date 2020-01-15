<template lang="html">
  <div class="home com_border">
    <h2>组件优化</h2>
  <el-tabs class="margin" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="组件递归" name="first">
        <!-- <sub_  :data-from-father="dataFromFather" /> -->
        <tree />
      </el-tab-pane>
      <el-tab-pane label="打印组件" name="second">
        <print :print="print" @click="handlePrint"/>
      </el-tab-pane>
      <el-tab-pane label="目录组件" name="third">递归树</el-tab-pane>
      <el-tab-pane class="textLeft height" label="滑动小卡片" name="forth">
        <scrollPane />
      </el-tab-pane>
      <el-tab-pane label="锚点导航" name="five">
        <!-- <div class="scroll-container">
          <div class="jump_menu">
            目录内容1
          </div>
          <div class="jump_menu">
            目录内容2
          </div>
          <div class="jump_menu">
            目录内容3
          </div>
          <div class="jump_menu">
            目录内容4
          </div>
        </div>
        <positionNav class="positionNav" /> -->
        <div style="float: right; border: solid; height：100px;">
            <li>1-dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>dsdsd</li>
            <li>41-dsdsd</li>
        </div>

      </el-tab-pane>
      <el-tab-pane class="textLeft height" label="iframe" name="six">
        <!-- <iframe style="float: right; width: 600px;height: 600px" frameborder="yes" vspace="-170" src="https://www.baidu.com"></iframe> -->
        <div style="float:right;width:630px;height:350px;overflow:hidden;border:0px"> 
            <iframe style="margin:-810px 0px 0px -10px" src="http://www.sci99.com/" width="960" height="1280" scrolling="no"></iframe>
        </div> 
        <div style="float:right; width:800px;height:900px;overflow:hidden;border:0px"> 
            <iframe style="margin:-320px 0px 0px -10px;" src="http://www.sci99.com/details/monitorall.aspx" width="700" height="1024" scrolling="no"></iframe>
        </div>
      </el-tab-pane>
  </el-tabs>
    <!-- <p>{{msg}}</p> -->
  </div>
</template>

<script>
// iframe常用属性:
// 1.frameborder:是否显示边框，1(yes),0(no)
// 2.height:框架作为一个普通元素的高度，建议在使用css设置。
// 3.width:框架作为一个普通元素的宽度，建议使用css设置。
// 4.name:框架的名称，window.frames[name]时专用的属性。
// 5.scrolling:框架的是否滚动。yes,no,auto。
// 6.src：内框架的地址，可以使页面地址，也可以是图片的地址。
// 7.srcdoc , 用来替代原来HTML body里面的内容。但是IE不支持, 不过也没什么卵用
// 8.sandbox: 对iframe进行一些列限制，IE10+支持

import sub_ from "./sub_";
import scrollPane from "@/components/scrollPane";
import positionNav from "@/components/positionNav";
import tree from "@/components/tree";
export default {
  components: { sub_, scrollPane, positionNav, tree },
  data() {
    return {
      activeName: "first",
      print: {
        state: false,
        list: []
      },
      dataFromFather: [
        {
          title: "独孤九剑",
          children: [{ title: "紫霞神功", children: [{ title: "冲灵剑法" }] }]
        },
        { title: "六脉神剑" },
        { title: "一阳指", children: [{ title: "玄铁重剑" }] }
      ]
    };
  },
  props: {
    //接受上级传来的数据,先声明一个props属性接受
    msg: String
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handlePrint() {
      this.print.state = true;
      this.print.list = [1, 2, 3];
    }
  }
};
</script>

<style lang="scss" scoped>
// div{
// overflow-x:hidden;
// overflow-y:auto;
// max-height:100%;
// }

@import "~@/views/scss/style/variables";
@import "~@/views/scss/style/common";
.home {
  color: $color-blue;
  & /deep/ .el-tab-pane {
    border: 1px solid #aaa;
  }
}
.margin {
  margin: 0 20px 20px 230px;
}
.height {
  height: 700px;
}

.el-tab-pane {
  height: 70vh;
  overflow: hidden;
  .jump_menu {
    height: 50vh;
  }
  .positionNav {
    position: fixed;
    top: 209px;
    right: 40px;
    // border: solid;
  }
}
.scroll-container {
  height: 100%;
  overflow: auto;
}
</style>
