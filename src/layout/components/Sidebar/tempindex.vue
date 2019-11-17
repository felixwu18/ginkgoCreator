<template>
   <!-- <div class="menu-wrapper">
     <SidebarItem />              
     <SidebarItem />              
     <SidebarItem />              
     <SidebarItem />    -->
    <div>
        <div class="toggle" :title="isCollapse?'展开菜单':'隐藏菜单'" @click="showSideBar">
            <em :class="{isActive:isCollapse}">
                <i></i>
                <i></i>
                <i></i>
            </em>
        </div>

        <el-menu
         text-color="#ffffff"
         background-color="#304156"
         :unique-opened="true"
         :collapse="isCollapse"
         class="el-menu-vertical-demo"
         :default-active="isActive"
         :default-openeds="isOpeneds"
        >
            <router-link
                    to="/index">
                <el-menu-item
                        index="/index"
                        class="el-menu-li submenu-title-noDropdown"
                >
                    <i class="el-icon-info"></i>
                    <span slot="title">返回首页</span>
                </el-menu-item>
            </router-link>


            <sidebar-item :routes="routes"></sidebar-item>

        </el-menu>
    </div>           
   <!-- </div> -->
</template>

<script>
import SidebarItem from './SidebarItem'
// import router from '@/router/index'


export default {
   // name: 'sidebar',
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
         routes: []
      }
   },
   components: { SidebarItem },
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
   // @import "./css/sidebar.css";
// @import "~@/styles/sidebar.less";
// .menu-wrapper{
//    padding-top: 20px;
//    color: white;
// }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 210px;
        min-height: 400px;
    }
    .toggle {
        padding: 6px 0;
        height: 18px;
        background: #48576a;
        text-align: center;
        color: #fff;
        cursor: pointer;
        transform: rotate(0);
    }
    .toggle:hover {
        transition: background-color 0.28s;
        background-color: rgba(66, 79, 97, 0.95);
    }
    .isActive {
        transform: rotate(90deg);
    }
    .toggle em {
        display: inline-block;
        transform-origin: 50% 50%;
        transition: all .38s ease;
    }
    .toggle i {
        display: block;
        margin: 2px auto;
        width: 10px;
        height: 2px;
        border-bottom: 1px solid #f0f0f0;
    }
   </style>
