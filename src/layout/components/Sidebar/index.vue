<template>
   <div class="menu-wrapper">
     <SidebarItem />              
     <SidebarItem />              
     <SidebarItem />              
     <SidebarItem />              
   </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
   components: { SidebarItem },             
};
</script>

<style lang="less" scoped>
@import "~@/styles/sidebar.less";
.menu-wrapper{
   padding-top: 20px;
}
</style>
