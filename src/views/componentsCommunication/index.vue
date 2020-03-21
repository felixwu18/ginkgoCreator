<template>
  <div class="margin" style="padding-top:24px">
    <h1>形式1</h1>
      <div>
      communication---top
     <el-button @click="ceshi">top按钮触发</el-button> <br>
        <father 
        ref="father"
        :yes="1233333"
        :te="9999"
        @handle="fatherM"
        v-on="$listeners"
        v-bind="$attrs"
        />
      </div>
    <!-- <h1>形式2</h1>
      <div>
      communication---top
     <el-button @click="ceshi">top按钮触发</el-button> <br>
        <father @click="fatherM" :yes="123">
            <center
            v-on="$listeners"
            v-bind="$attrs"
            >
                <son>
                </son>
            </center>
        </father>
      </div> -->
  </div>
</template>

<script>
import center from './components/center'
import son from './components/son'
import father from './components/father'

export default {
  components: {
      father,
      center,
      son
  },
  props: {
    //   active: { type: Object, default: _ => {} },            
    //   father: { type: Object, default: _ => {} }           
  },
  data() {
    var classNma = 'none'
      return {
        top: {          
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
  },
  computed: {
  },
  methods: {
    fatherM() {
         console.log('ceshi---fatherM')
    },
     ceshi() {
         console.log('ceshi---top')
         this
         debugger
     },
     onTest1() {
         console.log('ceshi---onTest1')
     }
  }
};
</script>

<style scoped>
.about {
  color: green;
  font-size: bold;
}
.margin {
  margin: 0 20px 20px 230px;
}
</style>
