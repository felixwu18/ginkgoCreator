import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from './router' // 因为是index.js 路径到此即可

import * as utils from './utils/index'
Vue.prototype.$utils = utils

// 全局注册组件
import plugin from './plugin'
Vue.use(plugin);

// import '@/styles/index.less' // global css
// import './views/scss/style/common.scss' // global css

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
