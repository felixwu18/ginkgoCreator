<template>
  <div class="nest-menu">
    <template v-for="(item, index) in routes">
       <!-- 有子路由 -->
      <el-submenu
        :key="index"
        :index="item.path"
        v-if="item.children&&item.children.length>0"
      >
        <template slot="title">
          <!-- <i :class="item.icon"></i> -->
          <span slot="title">{{item.meta.title}}</span>
        </template>

        <template
          v-for="(subset, subIndex) in item.children"
        >
          <sidebar-item 
             v-if="subset.children&&subset.children.length>0"
             :key="subIndex"
             :routes="subset"
             :base-path="item.path"
             >
          </sidebar-item>

          <el-menu-item
            v-else
            :key="subIndex"
            :index="subset.path"
            @click="linkTo(subset.path)"
          >
            <!-- <i :class="subset.icon"></i> -->
            <span slot="title">{{subset.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>

   <!-- 无子路由 -->
      <el-menu-item
        v-else
        :key="index"
        :index="item.path"
        class="el-menu-li submenu-title-noDropdown"
        @click.native="linkTo(item.path)">
        <!-- <i :class="item.meta.icon"></i> -->
        <i class="el-icon-success"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
    name: "sidebar_item",
    props: {
      routes: {
        type: Array
      },
    basePath: {
      type: String,
      default: ''
      }
    },
    data() {
      return {}
    },
    methods: {
      linkTo(url) {
      //   if (url.includes('http')) {
      //     location.href = url
      //   } else {
          location.hash = url
         //  this.basePath
         //  debugger
      //   }
      }
    },
};
</script>

<style lang="less" scoped>
</style>
