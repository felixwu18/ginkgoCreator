<template>
  <div class="nest-menu">
    <template v-for="item in routes">
      <el-submenu
        :index="item.id"
        v-if="item.children&&item.children.length>0"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>

        <template
          v-for="subset in item.children"
        >

          <sidebar-item v-if="subset.children&&subset.children.length>0"
                        :routes="subset">
          </sidebar-item>

          <el-menu-item
            v-else
            :index="subset.id"
            @click="linkTo(subset.url)"
          >
            <i :class="subset.icon"></i>
            <span slot="title">{{subset.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>

      <el-menu-item
        v-else
        :index="item.id"
        class="el-menu-li submenu-title-noDropdown"
        @click.native="linkTo(item)">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
    name: "sidebar_item",
    data() {
      return {}
    },
    methods: {
      linkTo(url) {
        if (url.includes('http')) {
          location.href = url
        } else {
          location.hash = url
        }
      }
    },
};
</script>

<style lang="less" scoped>
</style>
