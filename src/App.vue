<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div>
    <div>
      <router-link to="/about">about</router-link>
    </div>
    <div>
      <router-view msg="我是通过<router-view>传递的数据,上级传给我的"></router-view>
    </div> -->
      <router-view msg="我是通过<router-view>传递的数据,上级传给我的" />
  </div>
</template>

<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  height: 100vh;
}
</style>
