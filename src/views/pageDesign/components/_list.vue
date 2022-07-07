<template>
  <div class="about com_border">
    <button @click="tesFn">inner ceshi</button>
    <!-- <formHead /> -->
    <slot name="form" />
    <dynamicTable
      v-on="$listeners"
      v-bind="$attrs"
      :data="tableData"
      :handleArr="['查看']"
      :btnConfigure="btnConfigure"
      @enterDetail="handleDetail"
      @dynamicEvent="eventTrigger"
    />
    <h2>请求从外导入封装测试</h2>
    <el-button @click="handleRequest" >点击ceshi</el-button>
    <div style="color:red; padding-top: 10px">
      data:{{requestData}}
    </div>
    <h2 @click="handleRequest">v-model 实现双向绑定{{inputVal.val}}</h2>
    <son v-model="inputVal.val" />
  </div>
</template>

<script>
import { Event } from "@/utils/listen";
import son from "./son";

// import formHead from "./formHead";
// const tableHead = [
//   { prop: "airQuality", label: "空气质量" },
//   { prop: "level", label: "等级" },
//   { prop: "state1", label: "状态1" },
//   { prop: "state2", label: "状态2" },
//   { prop: "name", label: "姓名" },
//   {
//     label: "日期",
//     children: [
//       { prop: "date", label: "日期" },
//       {
//         label: "时间",
//         children: [
//           { prop: "hour", label: "小时" },
//           { prop: "minite", label: "分钟" }
//         ]
//       }
//     ]
//   },
//   { prop: "province", label: "省份" },
//   { prop: "city", label: "市区" },
//   { prop: "address", label: "地址" },
//   { prop: "zip", label: "邮编" }
// ];

var memory = [
    {
      airQuality: 1,
      level: 1,
      state1: false,
      state2: true,
      date: "2016-05-02",
      hour: "8小时",
      minite: "90分钟",
      name: "feichang",
      province: "四川",
      city: "成都",
      address: "春熙路",
      zip: 999
    },
    {
      airQuality: 1,
      level: 1,
      state1: false,
      state2: true,
      date: "2016-05-02",
      hour: "8小时",
      minite: "90分钟",
      name: "feichang",
      province: "四川",
      city: "成都",
      address: "春熙路",
      zip: 999
    },
    {
      airQuality: 1,
      level: 1,
      state1: false,
      state2: true,
      date: "2016-05-02",
      hour: "8小时",
      minite: "90分钟",
      name: "feichang",
      province: "四川",
      city: "成都",
      address: "春熙路",
      zip: 999
    },
    {
      airQuality: 1,
      level: 1,
      state1: false,
      state2: true,
      date: "2016-05-02",
      hour: "8小时",
      minite: "90分钟",
      name: "feichang",
      province: "四川",
      city: "成都",
      address: "春熙路",
      zip: 999
    }
  ]
var flag = 0
//  for(var i=0; i< 100; i++) {
//    memory = memory.concat(memory.slice(flag, flag + 2))
//  }

const tableData = [
  {
    airQuality: 1,
    level: 1,
    state1: false,
    state2: true,
    date: "2016-05-02",
    hour: "8小时",
    minite: "90分钟",
    name: "feichang",
    province: "四川",
    city: "成都",
    address: "春熙路",
    zip: 999
  },
  {
    airQuality: 1,
    level: 2,
    state1: true,
    state2: false,
    date: "2016-05-02",
    hour: "8小时",
    minite: "90分钟",
    name: "felix",
    province: "四川",
    city: "成都",
    address: "春熙路",
    zip: 999
  },
  {
    airQuality: 3,
    level: 3,
    state1: true,
    state2: true,
    date: "2016-05-04",
    hour: "10小时",
    minite: "30分钟",
    name: "李四",
    province: "上海",
    city: "",
    address: "上海市普陀区金沙江路 1517 弄",
    zip: 666
  }
];

function countLimit(count = 1, fn) {

    return function() {
      //  fn()
    // debugger
    // this.ceshi()
    count > 0 && console.log(count)
    count--
  }
}

export default {
  props: {
      active: { type: Object, default: _ => {} },            
      father: { type: Object, default: _ => {} },
      formHeadRef: { type: Object, default: _ => {} },
      listApi: {type: Object, default: _ => ({})}
  },
  components: {
    son
  },
  created() {
    // this.tesFn = countLimit(2, this.ceshi)
  },
  data() {
    return {
      inputVal: {
        val: ''
      },
      requestData: '',
    //   tableHead,
      tesFn: countLimit(3, this.ceshi), //data里调用函数，实现类似Method里定义一样
      getDataVal: () => this.btnConfigure, // 取data里属性的一种方法
      tableData,
      btnConfigure:{
        prop: "",
        btnStates: [
          { btnArr: ["修改"] },
        ]
      },
      res: ''
    }            
  },
  methods: {
    handleRequest() {
       // get请求 请求封装
      var fetchList = this.listApi.fetchList
      var back = this.listApi.back
      console.log(this.listApi)
      fetchList
        .then(data => data.clone().json())
        .then(res => {
          /* 1 */
          // back = eval(back)
          /* 2 */
          // window['res'] = res
          // back = (new Function(`return ${back}`))() // eval替代方案, new Functon 只支持全局作用域，所以得通过window中转
          /* 3 */
          back = this.strToVariable('res',res, back)
          this.requestData = back
        })
        .catch(err => {
          console.log(err)
        })
    },
    /* 字符串to变量 */
    strToVariable(str, res, back) {
      // str 为调用当前作用域的变量字符串(接受数据的window属性), res 真正接受数据的变量, back 外部取数据的数据结构字符串
      window[str] = res
      // 异步删除全局临时属性
      var id = setTimeout(_ =>this.deleteGlobalVal(str, id))
      // eval替代方案, new Functon 只支持全局作用域，所以得通过window中转
      return (new Function(`return ${back}`))()
    },
    deleteGlobalVal(str, id) {
      // window[str] = ''
      clearTimeout(id) // 清定时器
      delete window[str] //清全局临时属性
    },
     ceshi() {
      //  if(flag < 3) {
         var temp = []
         for(var i=0; i< 10; i++) {
           temp = temp.concat(memory.slice(flag, flag + 2))
         }
         this.tableData.push(...temp)
        //  this.tableData.push(...memory)
      //  }
       flag++
     },
     eventTrigger(row, eventName){
        console.log('row--eventName')
        console.log(row)
        console.log(eventName)
        this.toMutate()             
     },
     handleDetail(row) {
        this.toDetail()            
     },
     toMutate() {
        this.active.listActive = false           
        this.active.mutateActive = true  
        // Event.trigger('list-plus', 'data from topFather index')     
        Event.listen('list-plus', (aaa) => {
          debugger
        })
     },
     toDetail() {
        this.active.listActive = false           
        this.active.detailActive = true           
     }
  }
};
</script>

<style lang="less" scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
