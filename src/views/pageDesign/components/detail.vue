<template>
  <div class="about com_border">
    <h2>详情页</h2>
    <el-button @click="ceshi">返回列表</el-button>
    <rule-form2 ref="Form" :configs="configs" :data="detail" :fn="submitForm" />
  </div>
</template>

<script>
import ruleForm2 from '@/components/ruleForm/ruleForm2'
// 配置转换
const configue_area = [
  { key: 1, value: "区域一" },
  { key: 2, value: "区域二" }
];


export default {
  components: {
    ruleForm2
  },
  props: {
      active: { type: Object, default: _ => {} },            
      father: { type: Object, default: _ => {} }           
  },
  data() {
      return {
        detail: {          
          name: '',
          name2: '',
          date: '',
          start: '',
          end: '',
          region: '',
          timeDefault: []
          },
        configs: [
          // (function(){console.log(this, 'consigs--this')})(),
          {type: 'input', field: 'name', label: '活动名称:', rule: ['required', {checkName: 'checkDecimal'}], disabled: true},
          {type: 'input', field: 'name', label: '活动名称2:', disabled: false},
          // {type: 'input', field: 'name2', label: '活动名称2:', rule: ['required', {isInfluence: this.testFn, warning: '测试'}], disabled: false},
          {type: 'input', field: 'name2-2', label: '活动名称2-2:', rule: ['required', {isInfluence: false, warning: '测试2-2'}]},
          {type: 'input', field: 'name3', label: '活动名称3:', rule: ['required', {checkName: 'checkDecimal2'}]},
          // {type: 'date', field: 'date', label: '日期:'},
          {type: 'date', field: 'timeDefault', label: '日期:', rule: ['require']},
          {type: 'select',config:configue_area, field: 'region', label: '活动区域'}
        ],
      }            
  },
  methods: {
     ceshi() {
         console.log('ceshi')
         this.toList()
     },
     toList() {
        this.active.detailActive = false           
        this.active.listActive = true           
     },
    submitForm(formName) {
      // this.$refs[formName].$refs.Form.validate(valid => {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // this.$refs[formName].$refs.Form.clearValidate()
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
