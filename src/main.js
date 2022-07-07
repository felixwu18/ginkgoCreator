import Vue from 'vue'
import ElementUI from 'element-ui'
// import ComponentLib from 'component-lib'
console.log(ElementUI, 1111);

import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from './router' // 因为是index.js 路径到此即可

import * as utils from './utils/index'

Vue.prototype.$utils = utils

// 验证指令
import directives from '@/directive/directive'

// 全局注册组件
import plugin from './plugin'
Vue.use(plugin);

import '@/styles/index.less' // global css
// import './views/scss/style/common.scss' // global css

Vue.use(ElementUI)
// Vue.use(ComponentLib)

new Vue({
  el: '#app',
  render: h => h(App),
  directives,
  router
})
/* 测试异步变同步 */
console.log(this, 'ceated stage this');
Vue.prototype.$triggerSync = (function triggerSync() {
  return new Promise((resole) => {
    setTimeout(() => {
      console.log('ceshi--------------------------------')
      resole()
    }, 1000)
  })
})()
// Object.defineProperty(Vue.prototype, '$triggerSync', {
//   get() {
//     return (function triggerSync() {
//       return new Promise((resole) => {
//         setTimeout(() => {
//           console.log('ceshi--------------------------------')
//           resole()
//         }, 1000)
//       })
//     })()
//   }
// })


