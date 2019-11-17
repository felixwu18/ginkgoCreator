<template>
   <div class="menu-wrapper">
         <el-menu
            :unique-opened="true"
            :collapse="isCollapse"
            class="el-menu-vertical-demo"
            :default-active="isActive"
            :default-openeds="isOpeneds"
            text-color="#ffffff"
            background-color="#304156"
         >
            <router-link
                    to="/about/son">
                <el-menu-item
                    index="/about/son"
                >
                    <i class="el-icon-info"></i>
                    <span slot="title">返回首页</span>
                </el-menu-item>
            </router-link>

            <sidebar-item :routes="routes" ></sidebar-item>
        </el-menu>

   </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import aboutRoutes from '@/router/modules/about.router'
import homeRoutes from '@/router/modules/home.router'

console.log('routes')
console.log(aboutRoutes)
console.log(homeRoutes)
export default {
   components: { SidebarItem },
   props: {
      defaultActive: {
            type: String,
      },
      defaultOpeneds: {
            type: Array
      }
   },
   data() {
      return {
         isCollapse: true,
         routes: [aboutRoutes, homeRoutes ]
      }
   },
   methods: {
      showSideBar() {
            this.isCollapse = !this.isCollapse;
            this.$emit('toggleSidebar', this.isCollapse)
      }
   },
   computed: {
      isActive: function () {
            return location.href
      },
      isOpeneds: function () {
            return this.defaultOpeneds
      }
   }
};
</script>

<style lang="less" scoped>
@import "~@/styles/sidebar.less";
// .menu-wrapper{
//    padding-top: 20px;
// }
</style>
