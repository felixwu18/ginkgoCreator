<template>
  <div class="app-wrapper">
    <!-- app-wrapper -->
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar, Navbar } from "./components";
export default {
  name: "Layout",
  components: {
    AppMain,
    Sidebar,
    Navbar,
  },
  //   props: {
  //     //接受上级传来的数据,先声明一个props属性接受
  //     msg: String,
  //   }
};
</script>

<style lang="less" scoped>
// .app-wrapper {
//     position: relative;
//     height: 100%;
//     width: 100%;
//     border: solid;

// }
.app-wrapper {
  //     @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .main-container {
    overflow: hidden;
  }

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210);
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
