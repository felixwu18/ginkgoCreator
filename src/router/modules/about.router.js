import Blank from '@/components/Blank'

export default {
  path: "about",
  name: "about",
  // component: () => import(/** webpackChunkname: 'index*/ "@/views/About.vue"),
  component: Blank,
  // alwaysShow: true,
  children: [
    {
      path: "/about/son",
      name: "son",
      component: () => import(/** webpackChunkname: 'index*/ "@/views/About.vue"),
      meta: {
        title: '嵌套页面',
        id: '2',
      }
    
    }
  ],
  meta: {
    title: 'about页面',
    id: '1',
  },

};
