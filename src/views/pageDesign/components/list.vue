<template lang="html">
  <div class="about com_border">
    <h2>列表页</h2>
    <dynamicTable
      :formHead="tableHead"
      :data="tableData"
      :handleArr="['查看']"
      :btnConfigure="btnConfigure"
      @enterDetail="handleDetail"
      @dynamicEvent="eventTrigger"
    />
  </div>
</template>

<script>
const tableHead = [
  { prop: "airQuality", label: "空气质量" },
  { prop: "level", label: "等级" },
  { prop: "state1", label: "状态1" },
  { prop: "state2", label: "状态2" },
  { prop: "name", label: "姓名" },
  {
    label: "日期",
    children: [
      { prop: "date", label: "日期" },
      {
        label: "时间",
        children: [
          { prop: "hour", label: "小时" },
          { prop: "minite", label: "分钟" }
        ]
      }
    ]
  },
  { prop: "province", label: "省份" },
  { prop: "city", label: "市区" },
  { prop: "address", label: "地址" },
  { prop: "zip", label: "邮编" }
];
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

export default {
  props: {
      active: { type: Object, default: _ => {} },            
      father: { type: Object, default: _ => {} }           
  },
  data() {
    return {
      tableHead,
      tableData,
      btnConfigure:{
        prop: "",
        btnStates: [
          { btnArr: ["修改"] },
        ]
      },
    }            
  },
  methods: {
     ceshi(){
         console.log('ceshi')
     },
     eventTrigger(row, eventName){
        console.log('row--eventName')
        console.log(row)
        console.log(eventName)
        this.toMutate()             
     },
     handleDetail(row){
        this.toDetail()            
     },
     toMutate() {
        this.active.listActive = false           
        this.active.mutateActive = true           
     },
     toDetail() {
        this.active.listActive = false           
        this.active.detailActive = true           
     }
  }
};
</script>

<style scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
