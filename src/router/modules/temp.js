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
        title: '嵌套页面',
      }
    
    },
  ],
  meta: {
    title: 'about页面',
  },

};
