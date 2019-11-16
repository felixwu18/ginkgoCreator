<template>
   <section  class="app-main">
      app-main
     <transition name="fade-transform" mode="out-in">
       <keep-alive>
        <router-view msg="我是通过<router-view>传递的数据,上级传给我的" />
       </keep-alive>
    </transition>
   </section>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="less">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}

</style>
