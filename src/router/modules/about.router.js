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
      component: () => import(/** webpackChunkname: 'index*/ "@/views/HandleData"),
      meta: {
        title: '函数式编程-高阶函数',
      }
    },
    {
      path: "/about/tools",
      name: "tools",
      component: () => import("@/views/tools/index"),
      meta: {
        title: '开发优化',
      }
    },
    {
      path: "/about/request",
      name: "request",
      component: () => import("@/views/request/index"),
      meta: {
        title: '数据请求',
      }
    }
  ],
  meta: {
    title: '数据类',
  },
};
