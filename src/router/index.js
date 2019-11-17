import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routerList = [];
function importAll(r) {
  r.keys().forEach(key => routerList.push(r(key).default));
}
importAll(require.context("./modules", false, /\.router\.js/));


export default new VueRouter({
  //VueRouter路由器
  //配置n个路由
  routes: [
      {
        path:'/',
        component:Layout, //具体的组件
        redirect: '/about/handle-data',
        children: [
           ...routerList
            //  {
            //     path: "/about",
            //     name: "about",
            //     component: () => import(/** webpackChunkname: 'index*/ "@/views/About.vue"),
            //     meta: {
            //       title: 'about页面',
            //       id: '1',
            //     }
            //  },
        
       ]
       }
  ]
  //   routes: [
  //        {
  //       path:'/about',
  //       component:About //具体的组件
  //     },
  //   ]
});
