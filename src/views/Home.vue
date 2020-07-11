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
      <el-tab-pane class="textLeft height" label="iframe" name="six">
        <!-- <iframePage url="http://www.sci99.com/" />
        <iframePage origin-width="800px" origin-height="900px" width="700px" height="1024px" margin="-320px 0px 0px -10px"  url="http://www.sci99.com/details/monitorall.aspx" /> -->
      </el-tab-pane>
      <el-tab-pane class="textLeft height" label="拖拽库sortable" name="seven">
        <ul id="items">
          <li class="item">item 1</li>
          <li class="item-">item 2</li>
          <li class="item-">item 3</li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="表格checkbox交互" name="eight">
        66
        <table-checkbox />
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

// Default SortableJS
import Sortable from 'sortablejs';
import sub_ from "./sub_";
import scrollPane from "@/components/scrollPane";
import positionNav from "@/components/positionNav";
import tree from "@/components/tree";
import iframePage from "@/components/iframePage";
import marquee from "@/components/marquee";
import tableCheckbox from "@/components/tableCheckbox/index";


export default {
  components: { sub_, scrollPane, positionNav, tree, iframePage, marquee, tableCheckbox },
  data() {
    return {
      activeName: "eight",
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
  mounted() {
    var el = document.getElementById('items');
    var sortable = Sortable.create(el,
    //  {
    //   // delay: 80,
    //   chosenClass: 'chosen',
    //   scroll: true, 
    // }
    );
    var sortable = new Sortable(el, {
      draggable: ".item",
      // // Element is chosen
      // onChoose: function (/**Event*/evt) {
      //     evt.oldIndex;  // element index within parent
      //     console.log('evt.from');

      // },
        // Element dragging started
      onStart: function (/**Event*/evt) {
          evt.oldIndex;  // element index within parent
          debugger
      },
      onEnd: function (/**Event*/evt) {
      // var itemEl = evt.item;  // dragged HTMLElement
      // evt.to;    // target list
      // evt.from;  // previous list
      // evt.oldIndex;  // element's old index within old parent
      // evt.newIndex;  // element's new index within new parent
      // evt.oldDraggableIndex; // element's old index within old parent, only counting draggable elements
      // evt.newDraggableIndex; // element's new index within new parent, only counting draggable elements
      // evt.clone // the clone element
      // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
      console.log('evt.from');
      console.log('evt.to');
    
  }
    });
    console.log(el, 1111);
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
.chosen {
  background: blue
}
</style>
