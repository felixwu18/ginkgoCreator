<template>
  <div>
    <h2>fetch请求</h2>
    <el-button @click="ceshi">点击ceshi</el-button>
  </div>
</template>

<script>
// 参考:https://www.jianshu.com/p/1b966c113f64?utm_source=oschina-app
export default {
  name: "request",
  components: {},
  data() {
    return {};
  },
  methods: {
    ceshi() {
      console.log("ceshi");
      // post请求
      const request = {
        name: "ceido",
        age: 100
      };
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
          //   "Authorization": ""
        }
      })
        .then(data => data.json())
        .then(res => console.log(res));

      // get请求
      //   fetch("https://api.myjson.com/bins/of6pw")
      //     .then(data => data.json())
      //     .then(res => console.log(res))
    }
  }
};
</script>

<style scoped>
</style>
