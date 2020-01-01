<template>
    <div class="menu-transition-case" :style="{width: isCollapse ? '430px' : ''}">
        <div v-show="!isCollapse" class="menu-transition">
            <el-main style="border: solid" class="menu-vertical-pane">
                <el-row>
                  <el-col :span="24">
                    行
                  </el-col>
                  <el-col :span="12">
                    行-列1
                  </el-col>
                  <el-col :span="12">
                    行-列2
                  </el-col>
                </el-row>
            </el-main>
        </div>
        <div class="menu-transition-icon" :style="{position: 'absolute', left: !isCollapse ? '400px' : ''}">
            <div v-show="isCollapse" class="el-icon-d-arrow-right" @click="isCollapse=false" />
            <div v-show="!isCollapse" class="el-icon-d-arrow-left" @click="isCollapse=true" />
        </div>
    </div>
</template>

<script>
export default {
  name: "scrollPane",
  props: {
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    
  },
  methods: {
                 
  }           
};
</script>

<style lang="scss" scoped>
// * {
//   outline: solid red;
// }
.menu-transition-case {
    display: inline-block;
    position: relative;
    // left: 30px;
    height: calc(100vh - 300px);
    .menu-transition{
        // position: absolute;
        // float: left;
        // z-index: 2;        
        height: 100%;
        width: 80px;
        .menu-vertical-pane {
          width: 400px;
          transition: none;
          height: 100%;
        }
        
    }
    .menu-transition-icon {
      // float: left;
      height: 60px;
      position: absolute;
      top: 50%;
      // left: 400px;
      margin-top: -20px;
      // background: #f4f4f6;
      background: #aaa;
      // border: solid;
      border-radius: 0 50px 50px 0;
      text-align: center;
      div {
        width: 30px;
        height: 60px;
        line-height: 60px;
        padding-right: 5px;
        cursor: pointer;
      }
      .icon-arrow-right:before{
        content: '\E6DC'
      }
      .icon-arrow-left:before{
        content: '\E6DD'
      }
    }
}
.border {
    border: solid;
}
</style>
