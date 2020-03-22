<template>
  <div>
    <h2>fetch请求</h2>
    <el-button @click="ceshi">点击ceshi</el-button>
    <h2>算法</h2>
    <el-button @click="noAlgorithm">点击noAlgorithm</el-button>
    <el-button @click="useAlgorithm">点击useAlgorithm</el-button>
    <div id="output"></div>
  </div>
</template>

<script>
// window.onload=function(){
//   var numWorkers = 3;
//   var workers = [];
//   for(var i = 0;i < numWorkers;i++){
//     var worker = new Worker('./worker');
//     worker.onmessage = function(event){
      
//       // var message=event.target + ' says '+event.data.name + ' ' + event.data.sex;
//       // document.getElementById('output').innerHTML += message + '<br>'; //加载到页面
  
//     };
//     workers.push(worker);
//   }

//   for(var i = 0;i < workers.length; i++){
//     workers[i].postMessage('ping');
//     }
//   }



// 参考:https://www.jianshu.com/p/1b966c113f64?utm_source=oschina-app
export default {
  name: "request",
  components: {},
  data() {
    return {};
  },
  methods: {
    noAlgorithm() {
      var a = 5000000000
      var flag = 0
      // 启动计时器
      console.time('testForEach');
      for(var i = 0; i < 10; i ++) {
        flag++
        if (flag === a) {
          break
        }
        console.log('666')
      }
      for(var j = 0; j < 10; j ++) {
        flag++
        if (flag === a) {
          break
        }
        console.log('888')
      }
      // 停止计时，输出时间
      console.timeEnd('testForEach');
    },
    useAlgorithm() {
      
    },
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
