import Blank from "@/components/Blank";

export default {
  path: "style",
  name: "style",
  // component: () => import(/** webpackChunkname: 'index*/ "@/views/About.vue"),
  component: Blank,
  // alwaysShow: true,
  children: [
    {
      path: "/style/scss",
      name: "scss",
      component: () => import(/** webpackChunkname: 'index*/ "@/views/scss/index.vue"),
      meta: {
        title: "scss样式"
      }
    }
  ],
  meta: {
    title: "样式类"
  }
};
