<template>
  <div class="about com_border">
    <h2>修改页面</h2>
    <el-button @click="ceshi">返回列表</el-button>
    <rule-form :configs="configs" :data="search" />
  </div>
</template>

<script>
import ruleForm from '@/components/ruleForm/index'

// 配置转换
const configue_area = [
  { key: 1, value: "区域一" },
  { key: 2, value: "区域二" }
];

export default {
  components: {
    ruleForm
  },
  props: {
      active: { type: Object, default: _ => {} },            
      father: { type: Object, default: _ => {} }           
  },
  created() {
    this.father.son = 1
  },
  data() {
      return {
        configs: [
          {type: 'input', field: 'name', label: '活动名称'},
          {type: 'select',config:configue_area, field: 'region', label: '活动区域'},
          {type: 'date', field: 'date', label: '日期'}
        ],
        search: {
          name: '',
          date: '',
          region: ''
        }
      }            
  },
  methods: {
     ceshi(){
         console.log('ceshi', this.search)
        //  this.toList()
     },
     toList() {
        this.active.mutateActive = false           
        this.active.listActive = true           
     },
  }
};
</script>

<style scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
