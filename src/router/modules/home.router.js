import Blank from '@/components/Blank'

export default {
      path: "home",
      name: "home",
      // component: () => import(/** webpackChunkname: 'index*/ "@/views/Home.vue"),
      component: Blank,
      alwaysShow: true,
      children: [
        // {
        //   path: "/home/son",
        //   name: "son",
        //   component: () => import(/** webpackChunkname: 'index*/ "@/views/Home.vue"),
        //   meta: {
        //     title: '嵌套页面',
        //     id: '2',
        //   }
        
        // }
      ],
      meta: {
        title: 'home页面',
      }
};
