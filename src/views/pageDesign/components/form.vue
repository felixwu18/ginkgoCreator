<template>

</template>

<script>
// import { scrollTo } from '@/tools/scroll-to'

export default {
  name: "form",
  props: {
    // total: {
    //   // required: true,
    //   type: Number,
    //   default: 0
    // },
    page: {
      type: Number,
      default: 1
    },
    limit: { // 分页一页条数
      type: Number,
      default: 20
    },
    // pageSizes: {
    //   type: Array,
    //   default() {
    //     return [15, 25, 35, 50, 70];
    //   }
    // },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    background: {
      type: Boolean,
      default: true
    },
    // autoScroll: {
    //   type: Boolean,
    //   default: true
    // }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      }
      // ,
      // set(val) {
      //   this.$emit("update:page", val);
      // }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      }
    },
    // isHide(){
    //   return false
    // }
  },
  methods: {
    // handleSizeChange(val) {
    //   this.$emit("pagination", { page: this.currentPage, limit: val });

    //   // 解决正常方法无法滚动
    //   // let main = document.getElementsByClassName("el-table")[0];
    //   // main.parentNode.style.position = "absolute";
    //   // setTimeout(() => {
    //   //   main.parentNode.style.position = "static";
    //   // }, 0);

    //   // if (this.autoScroll) {
    //   //   scrollTo(0, 1000);
    //   // }
    // },
    handleCurrentChange(val) {
      this.$emit("pageChange", val);
      console.log(val)
      // 解决正常方法无法滚动
      // let main = document.getElementsByClassName("el-table")[0];
      // main.parentNode.style.position = "absolute";
      // setTimeout(() => {
      //   main.parentNode.style.position = "static";
      // }, 300);

      // if (this.autoScroll) {
      //   scrollTo(-20, 1000);
      // }
      // window.scrollTo(0,0);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
