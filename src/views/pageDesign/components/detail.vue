<template>
  <div class="about com_border">
    <h2>详情页</h2>
    <el-button @click="ceshi">返回列表</el-button>
    <el-button @click="ceshi2">同环境多个同一组件切换状态</el-button>
    <rule-form2  v-if="isShow_1" ref="Form" :configs="configs" :data="detail" :fn="submitForm" >
      <span slot="name">6666611111</span>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="detail">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="detail.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="detail.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </rule-form2>
    <rule-form2 v-if="isShow_2" ref="Form" :configs="configs_2" :data="detail" :fn="submitForm" />
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
    var classNma = 'none'
      return {
        isShow_1: true,
        isShow_2: false,
        form: {},
        dialogFormVisible: false,
        formLabelWidth: '120px',
        classNma,
        detail: {          
          name666: '',
          name999: '',
          name: '',
          name2: '',
          date: '',
          start: '',
          end: '',
          region: '',
          timeDefault: []
          },
        configs: [
          {type: 'input', field: 'name', label: '活动名称:', rule: ['required', {checkName: 'checkDecimal'}], disabled: false},
          {type: 'input', field: 'name1', label: '活动名称2:',disabled: true, isNone: false},
          // {type: 'input', field: 'name2', label: '活动名称2:', rule: ['required', {isInfluence: this.testFn, warning: '测试'}], disabled: false},
          {type: 'input', field: 'name2-2', label: '活动名称2-2:', rule: ['required', {isInfluence: false, warning: '测试2-2'}]},
          {type: 'input', field: 'name3', label: '活动名称3:', rule: ['required', {checkName: 'checkDecimal2'}], receiveFn: this.handleFn},
          // {type: 'date', field: 'date', label: '日期:'},
          {type: 'date', field: {start: 'start', end: 'end',timeDefault: 'timeDefault'}, label: '日期:', rule: ['required'], receiveFn: this.handleFn},
          {type: 'select',config:configue_area, field: 'region', label: '活动区域', receiveFn: this.handleFn},
          {type: 'switch', field: 'close', label: '开关测试'}
        ],
        configs_2: [
          {type: 'input', field: 'name666', label: '活动名称:', rule: ['required', {checkName: 'checkDecimal'}], disabled: false},
          {type: 'input', field: 'name999', label: '活动名称2:',disabled: true, isNone: false},
        ]
      }
  },
  created() {
  },
  computed: {
  },
  watch: {
    'detail.name': function(val) {
      val ? (this.configs[1].isNone = false) : (this.configs[1].isNone = true)
      val&&setTimeout(_ => {this.configs[1].disabled = false}, 1000)
      val||(this.configs[1].disabled = true)
    }
  },
  methods: {
     ceshi() {
         console.log('ceshi')
        //  this.toList()
        this.dialogFormVisible = true
        this.configs[1].className = ''
        this.detail.timeDefault = ["2019-10-1", "2019-10-1"]
     },
     ceshi2() {
       if (this.isShow_1) {
         this.isShow_1 = false
         this.isShow_2 = true
       } else {
         this.isShow_1 = true
         this.isShow_2 = false
       }
     },
     toList() {
        this.active.detailActive = false           
        this.active.listActive = true           
     },
     handleFn() {
       console.log(this.detail,'this.search')
       this.dialogFormVisible = true
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
