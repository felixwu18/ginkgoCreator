<template>
  <div class="about com_border">
    <h2>修改页面</h2>
    <el-button @click="ceshi">返回列表</el-button>
    <el-button type="primary" @click="submitForm('Form')">立即创建</el-button>
    <rule-form ref="Form" :configs="configs" :data="search" />
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
          {type: 'input', field: 'name', label: '活动名称:', rule: ['required', {checkName: 'checkDecimal'}]},
          {type: 'input', field: 'name2', label: '活动名称2:', rule: ['required', {checkName: 'checkDecimal'}]},
          // {type: 'date', field: 'date', label: '日期:'},
          {type: 'date', field: {start: 'start', end: 'end', timeDefault: 'timeDefault'}, label: '日期:'},
          {type: 'select',config:configue_area, field: 'region', label: '活动区域'}
        ],
        search: {
          name: '',
          name2: '',
          date: '',
          start: '',
          end: '',
          region: '',
          timeDefault: []
        }
      }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].$refs.Form.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // this.$refs[formName].$refs.Form.clearValidate()
    },
     ceshi(){
         console.log('ceshi', this.search)
         this.search.name = 666
         this.search.timeDefault = ["2019-10-1", "2019-10-1"]
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
