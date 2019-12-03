import Blank from '@/components/Blank'

export default {
  path: "about",
  name: "about",
  // component: () => import(/** webpackChunkname: 'index*/ "@/views/About.vue"),
  component: Blank,
  // alwaysShow: true,
  children: [
    {
      path: "/about/handle-data",
      name: "handleData",
      component: () => import(/** webpackChunkname: 'index*/ "@/views/HandleData.vue"),
      meta: {
        title: '函数式编程-高阶函数',
      }
    },
    {
      path: "/about/tools",
      name: "tools",
      component: () => import(/** webpackChunkname: 'index*/ "@/views/tools/index.vue"),
      meta: {
        title: '开发优化',
      }
    }
  ],
  meta: {
    title: '数据处理',
  },

};
