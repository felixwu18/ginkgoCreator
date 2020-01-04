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
        <div class="scroll-container">
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
        <positionNav class="positionNav" />
      </el-tab-pane>
  </el-tabs>
    <!-- <p>{{msg}}</p> -->
  </div>
</template>

<script>
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
.height{
  height: 700px;
}

.el-tab-pane {
 height: 70vh;
 overflow: hidden;
  .jump_menu {
    height: 50vh;
  }
  .positionNav{
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
 