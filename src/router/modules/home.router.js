import Blank from '@/components/Blank'

export default {
      path: "home",
      name: "home",
      // component: () => import(/** webpackChunkname: 'index*/ "@/views/Home.vue"),
      component: Blank,
      alwaysShow: true,
      children: [
        {
          path: "/home/son",
          name: "son",
          component: () => import(/** webpackChunkname: 'index*/ "@/views/Home.vue"),
          meta: {
            title: '组件优化',
          }
        
        },
        {
          path: "/home/page",
          name: "page",
          component: () => import(/** webpackChunkname: 'index*/ "@/views/pageDesign/index"),
          meta: {
            title: '页面设计',
          }
        },
        {
          path: "/home/communication",
          name: "communication",
          component: () => import(/** webpackChunkname: 'index*/ "@/views/componentsCommunication/index"),
          meta: {
            title: '组件通信',
          }
        }
      ],
      meta: {
        title: '组件类',
      }
};
