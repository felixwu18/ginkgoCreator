<template>
  <div class="about com_border">
    <h2>列表页</h2>
    <button @click="ceshi">ceshi</button>
      <List :formHeadRef="$refs" :formHead="tableHead" v-if="active.listActive" :active="active" :father="this">  
        <formHead ref="formHead" :search="search" slot="form" />
      </List>
    </div>
</template>

<script>
import List from "./_list";
import formHead from "./formHead";
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

export default {
  props: {
      active: { type: Object, default: _ => {} }              
  },
  components: {
    List,
    formHead
  },
  data() {
    return {
      tableHead,
      search: { // 通过slot标签通信，传入标签
        name: ''
      }
    }            
  },
  methods: {
     ceshi() {
         console.log('ceshi')
         console.log(this.search)
         console.log(this.$refs.formHead)
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
