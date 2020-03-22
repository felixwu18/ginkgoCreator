<template>
  <div style="padding-top:24px">
      communication---father
     <el-button @click="ceshi">father按钮触发</el-button>
      <p>$attrs: {{$attrs}}</p>
      <p>$listeners: {{$listeners}}</p>
     <rule-form2 
       ref="Form2"
       :configs="configs_2"
       :data="father"
      />
      <son
        v-bind="$attrs"
        v-on="$listeners"
      />
  </div>
</template>

<script>
import son from './son'
import ruleForm2 from '@/components/ruleForm/ruleForm2'

export default {
  components: {
      son,
      ruleForm2
  },
  props: {
    //   active: { type: Object, default: _ => {} },            
    //   father: { type: Object, default: _ => {} }           
  },
  data() {
    var classNma = 'none'
      return {
        configs_2: [
          {type: 'input', field: 'name666', label: '活动名称:', rule: ['required', {checkName: 'checkDecimal'}], disabled: false},
          {type: 'input', field: 'name999', label: '活动名称2:',disabled: true, isNone: false},
        ],
        father: {          
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
      }
  },
  created() {
      this
  },
  mounted() {
  },
  computed: {
  },
  methods: {
     ceshi() {
         console.log('ceshi---father--this.$refs.Form2.validate',this.$refs.Form2)
        //  debugger
        this.$refs.Form2.submit()
        .then(val => {
            // debugger
        })
        .catch(val => {
        })
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
