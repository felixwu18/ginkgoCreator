<template>
<div
  v-on="$listeners"
  v-bind="$attrs"
>
  <el-button type="primary" @click="submit('Form')">立即创建inner</el-button>
    <!-- <button @click="ceshi" @change="ceshi">ceshi</button> -->
  <el-form
    :model="data"
    :rules="_rules"
    ref="Form"
    label-width="100px"
    class="demo-ruleForm"
    :inline="inline"
  >
    <demo />
    <slot />
    <!-- <el-form-item label="活动名称" prop="name" ref="nameItem">
      <el-input v-model="ruleForm.name" clearable></el-input>
    </el-form-item> -->
    <!-- <el-form-item label="活动区域" prop="region">
      <searchSelect :insertValue.sync="ruleForm.region" :configure="configue_area" :isNumber="true" />
    </el-form-item> -->
    <!-- 测试静默阻止不合规内容 -->
    <!-- <el-form-item label="只能数字" prop="input">
      <el-input
        v-model="ruleForm.input"
        :disabled="isDisable('input_notNumber', ruleForm.region)"
        @blur="ruleForm.input = isInput(ruleForm.input, numberReg, 1)"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="不能数字" prop="notNumber">
      <el-input
        v-model="ruleForm.notNumber"
        :disabled="isDisable('input_notNumber', ruleForm.region)"
        @blur="ruleForm.notNumber = isInput(ruleForm.notNumber, numberReg, 0)"
      ></el-input>
    </el-form-item> -->
  </el-form>
</div>
</template>

<script>
import searchSelect from "@/components/searchSelect/index"
import deteSelector from "@/components/DateSelector/index"
import check from"@/utils/validate"

const demo = {
  name: 'demo',
  functional: true,
  // props: {
  //     // flag: String,
  //     // ruleForm: Object
  // },
  render: (h, ctx) => {
    console.log(ctx, 1111)
    const parent = ctx.parent
    console.log(parent, 66666)
    // const props = ctx.props
    // const ruleForm = props.ruleForm
    // const test = {
    //   input: (
    //     <el-form-item label="活动名称" prop="name" ref="nameItem">
    //       <el-input v-model={ruleForm.name} clearable></el-input>
    //     </el-form-item>
    //   ),
    //   select: (
    //     // <el-form-item label="活动区域" prop="region">
    //     //   <el-select
    //     //     v-model={ruleForm.region}
    //     //     // disabled={parent.isDisable('region', ruleForm.name)}
    //     //     clearable
    //     //     placeholder="请选择活动区域"
    //     //     // v-on={ctx.listseners}
    //     //     onChange={parent.ceshi}
    //     //     // v-bind={$attrs}
    //     //   >
    //     //     <el-option label="区域一" value="0"></el-option>
    //     //     <el-option label="区域二" value="1"></el-option>
    //     //   </el-select>
    //     // </el-form-item>
    //     <searchSelect insertValue={parent.data.region} configure={parent.configs[1].config} is-number={true} />
    //             // <div> 666 </div>
    //   ),
    //   date: (
    //      <el-form-item label="日期" prop="date">
    //       <el-date-picker 
    //         type="date"
    //         placeholder="选择日期"
    //         v-model={ruleForm.date}
    //         style="width: 100%;"
    //       ></el-date-picker>
    //     </el-form-item>        
    //   )
    // }
         console.log(this, 66)
    return parent.configs.map(configItem => {
      return parent.initData(configItem)
    })
  }
}

// 配置转换
const configue_area = [
  { key: 1, value: "区域一" },
  { key: 2, value: "区域二" }
];

export default {
  props: {
    configs: { type: Array, default: () => [] },
    data: { type: Object, default: () => ({}) },
    inline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
    // ,
    // father: {
    //   type: Object,
    //   default: () => ({})
    // }
  },
  components: {
    demo,
    searchSelect,
    deteSelector
  },
  data() {
    return {
      // search: {
      //   start: "",
      //   end: ""
      // },
      // timeDefault: [],
      configue_area,
      numberReg: /^[0-9]+.?[0-9]*$/,
      // ruleForm: {
      //   date: '',
      //   name: "",
      //   region: "",
      //   input: "",
      //   notNumber: ""
      // },
      rules: {
        // name: [
        //   // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        //   { required: true, message: "请输入活动名称", trigger: "blur" }, // 直接在触发函数里加 notnull
        //   { validator:function (rule, value, callback) { check.checkDecimal(rule, value, callback, _this) }, trigger: "blur" }
        // ],
        // date: [
        //   { required: true, message: "请输入日期", trigger: "blur" } // 直接在触发函数里加 notnull
        //   // { validator: this.checkName, trigger: "blur" }
        // ],
        // region: [
        //   { required: true, message: "请选择活动区域", trigger: "change" }
        // ]
      }
    };
  },
  computed: {
    _rules() {
      // this.data
      // debugger
      const rules = {}
      var checkName = ''
      var condition = {isInfluence: true, warning: '请正确输入'}
      const type = {
        required: { required: true, message: "请输入", trigger: "blur" },
        require: { type: 'array', required: true, message: "请输入", trigger: "blur" },
        min_max: { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        validator: { validator: (rule, value, callback) => { check[checkName](rule, value, callback, this) }, trigger: "blur" },
        influence: { validator: (rule, value, callback) => { this.influence(rule, value, callback, condition) }, trigger: "blur" } // 关联验证
      }
      // configs  根据config里是否有rule属性来判断是否验证 rule类型-数组
      this.configs.forEach(config => {
        if(! ('rule' in config)) { return }
          rules[config.field] = [] //字段验证数组init
          config && config.rule.forEach(e => { // e
            if(!e) { return }
            typeof e === "string" && e === 'required' && (rules[config.field].push(type['required']))
            typeof e === "string" && e === 'require' && (rules[config.field].push(type['require']))
            this.isType(e, "Object") && ('min' in e) && ('max' in e) &&  (rules[config.field].push(type['min_max']))
            // console.log(this.isType(e), '------')
            /* 正则验证 */
            if(this.isType(e, "Object") && ('checkName' in e)) {
              var checkName = e.checkName //加载验证名称
              type['validator'] = { validator: (rule, value, callback) => { check[checkName](rule, value, callback, this) }, trigger: "blur" }
              // typeof config.field === "string" ? '' : config.field = config.field.timeDefault
              rules[config.field].push(type['validator']) // 填充验证函数
            /* 关联验证 */
            } else if(this.isType(e, "Object") && ('isInfluence' in e)) {
             var condition = e // 关联验证条件

            //  e.isInfluence
            //  {isInfluence: true, warning: '请正确输入'}
              // e.isInfluence = this.data[e.isInfluence]
              type['influence'] = { validator: (rule, value, callback) => { this.influence(rule, value, callback, condition) }, trigger: "blur" }
              rules[config.field].push(type['influence'])
              // console.log(condition, 'cecececeeceeeee');
            }
          })
      })
      console.log(rules, '11111')
      window.rule = rules
      return rules
    }
  },
  methods: {
    // validate() {
    //  return this.$refs.Form.validate
    // },
    copyPropVal(fromObj, toObj) {
      Object.keys(toObj).forEach(ele => {
        if (ele in fromObj && !(ele in toObj) && fromObj[ele]) {
          toObj[ele] = fromObj[ele];
        }
      });
    },
    influence(rule, value, callback, condition) {
      this.isType(condition.isInfluence, "Function") || (condition.isInfluence = () => {})
      if (condition.isInfluence()) {
          // form_this.data[rule.field] = '' // 清除输入 form_this 表单this rule.field当前验证字段，data表单数据
          return callback(new Error(condition.warning))
      } else {
          callback()
      }
    },
      submit(formName) {
        return new Promise((resolve, reject) => {
          this.$refs['Form'].validate(valid => {
            if (valid) {
              alert("submit!");
              resolve(valid)
            } else {
              console.log("error submit!!");
              reject(valid)
              return false;
            }
          });
        })
    },
    ceshi(v) {
      // this.ruleForm
      console.log(this.data, 99999999)
      debugger
      this.data
    },
    /* 初始化表单 */
    initData(configItem) {
     var _disabled = (configItem.disabled === false ? false : (configItem.disabled || this.disabled))
     const _this = this
     const _data =this.data

    //  const inputEvent = {
    //    click: this.ceshi
    //  }
    // class控制样式
    const className = configItem.className ? {[configItem.className]: true} : ''
    const waiting = {
          input: 
          // (
          //     <el-input
          //       v-model={_data[configItem.field]}
          //       // vModel_trim={_data[configItem.field]} // 去空格，有bug

          //       // value={_data[configItem.field]}
          //       // disabled={_disabled}
          //       {...{ attrs: inputAttrs }}
          //       on-input={val => {_data[configItem.field] = val.trim(); _this.handleInput(configItem.receiveFn) }}
          //       // style={{background: 'red',display: none}}
          //       // {...{ on: {input: val => {_data[configItem.field] = val.trim()}} }}
          //       class={className}
          //       clearable
          //       />
          // )
          this.generateInput({configItem, _disabled, className, _this})
          ,
          select: 
          // (
          //     <searchSelect 
          //        insertValue={_data[configItem.field]} 
          //        {...{ on: { 'update:insertValue': (val) => { _data[configItem.field] = val; } } } } 
          //        disabled={_disabled}
          //        class={className}
          //        configure={configItem.config} isNumber={true}
          //        />
          // )
          this.generateSelect({configItem, _disabled, className, _this})
          ,
          date: 
          (
              <deteSelector
                title="日期"
                // timeDefault={_this.data[configItem.field.timeDefault]}
                timeDefault={_data[configItem.field.timeDefault]}
                start={_data[configItem.field.start]}
                end={_data[configItem.field.end]}
                disabled={_disabled}
                class={className}
                {...{ on: { 'update:start': (val) => { _data[configItem.field.start] = val; }, 'update:end': (val) => { _data[configItem.field.end] = val; } } } }
              />
            // this.generateDate({configItem, _disabled, className, _this})
          ),
          switch: (
            this.generateSwitch({configItem, _disabled, className, _this})
          )
      // timeDefault="timeDefault"
      // start.sync="search.start"
      // end.sync="search.end"
      // <el-date-picker
      //   type="date"
      //   placeholder="选择日期"
      //   value-format="yyyy-MM-dd"
      //   v-model={_this.data[configItem.field]}
      //   style="width: 100%;"
      // ></el-date-picker>
        }
        const isNone = configItem.isNone ? 'none' : '' //显示控制
        const itemProp = 'rule' in configItem ? ( (typeof configItem.field === 'string') ? configItem.field : '') : ''
        return (
              <el-form-item label={configItem.label} prop={itemProp} class={{none: isNone}} >
                    {waiting[configItem.type]}
                    {_this.sufText(configItem)}
              </el-form-item>
            )
    },
    /* 测试外传函数 */
    handleOutFn(receiveFn) {
      // debugger
      // this.$emit('input')
      receiveFn && receiveFn()
    },
    sufText(configItem) {
      return configItem.sufText ? (<label class="sufText">{ configItem.sufText }</label>) : ''
    },
    /* 生成输入框 */
    generateInput({configItem, _disabled, className, _this}) {
      const inputAttrs = {
       disabled: _disabled,
       class: className,
       clearable: true
      }
      // 根据配置来加载事件
      const option = { on: {input: val => {_this.data[configItem.field] = val.trim(); _this.handleOutFn(configItem.receiveFn)}} }
      const _default = { on: {input: val => {_this.data[configItem.field] = val.trim() }} }
      const inputEvents = configItem.receiveFn ? option : _default
      
     return (
            <el-input
              v-model={_this.data[configItem.field]}
              {...{ attrs: inputAttrs }}
              {...inputEvents}
              />
          )
    },
    /* 生成下拉列表 */
    generateSelect({configItem, _disabled, className, _this}) {
      const selectAttrs = {
        disabled: _disabled,
        class: className,
        insertValue:_this.data[configItem.field],
        configure: configItem.config,
        isNumber: true
      //  clearable: true
      }
      // 根据配置来加载事件
      const option = { on: { 'update:insertValue': (val) => { _this.data[configItem.field] = val; _this.handleOutFn(configItem.receiveFn) } } }
      const _default = { on: { 'update:insertValue': (val) => { _this.data[configItem.field] = val } } }
      const selectEvents = configItem.receiveFn ? option : _default
     return (
            <searchSelect 
              // insertValue={_this.data[configItem.field]}
              {...selectEvents } 
              {...{ attrs: selectAttrs }}
              />
          )
    },
    /* 生成时间器 */
    generateDate({configItem, _disabled, className, _this}) {
      // const dateAttrs = {
      //   disabled: _disabled,
      //   class: className,
      //   timeDefault: _this.data[configItem.field.timeDefault],
      //   start: _this.data[configItem.field.start],
      //   end: _this.data[configItem.field.end],
      // //  clearable: true
      // }
       // const option = { on: { 'update:start': (val) => { _this.data[configItem.field.start] = val; }, 'update:end': (val) => { _this.data[configItem.field.end] = val; } } }
      // const _default = { on: { 'update:start': (val) => { _this.data[configItem.field.start] = val; }, 'update:end': (val) => { _this.data[configItem.field.end] = val; } } }
      // const dateEvents = configItem.receiveFn ? option : _default
      // const dateEvents = { on: { 'update:start': (val) => { _this.data[configItem.field.start] = val; }, 'update:end': (val) => { _this.data[configItem.field.end] = val; } } }
     return 
        (
          <deteSelector
            timeDefault={_this.data[configItem.field.timeDefault]}
            start={_this.data[configItem.field.start]}
            end={_this.data[configItem.field.end]}
            disabled={_disabled}
            class={className}
            // {...{ attrs: dateAttrs }}
            // {...dateEvents }
            {...{ on: { 'update:start': (val) => { _this.data[configItem.field.start] = val; }, 'update:end': (val) => { _this.data[configItem.field.end] = val; } } } }
          />
        )
    },
    /* 生成开关 */
    generateSwitch({configItem, _disabled, className, _this}) {
      const switchAttrs = {
        disabled: _disabled,
        class: className,
        activeColor: '#13ce66'
      }
      // 根据配置来加载事件
      // const option = { on: { 'update:insertValue': (val) => { _this.data[configItem.field] = val; _this.handleOutFn(configItem.receiveFn) } } }
      // const _default = { on: { 'update:insertValue': (val) => { _this.data[configItem.field] = val } } }
      // const selectEvents = configItem.receiveFn ? option : _default
     return (
            <el-switch
              v-model={_this.data[configItem.field]}
              {...{ attrs: switchAttrs }}
            />
          )
    },
  /*     submit() {
      // 验证username不为空且长度在2-10之间
      let checkUsername = this.$validate({
        label: "username",
        value: "admin",
        rules: ["notnull", "length"],
        conditions: ["2", "10"]
      });
      // 验证password由大小写字母+数字组成的6-16位密码
      let checkPassword = this.$validate({
        label: "pawwword",
        value: "lllyh111",
        rules: ["notnull", "password"]
      });
      let validataObj = {
        checkUsername,
        checkPassword
      };
      console.log(validataObj);
    }, */

    // validateField(formName) {
    //   this.$refs[formName].validateField("name");
    // },
    // 检测活动名称
    // checkName(rule, value, callback) {
    //   console.log("rule, value, callback");
    //   console.log(rule);
    //   // callback(new Error('check.message'))
    //   // this.$validate()
    //   // debugger
    //   // let {check} = this.$validate({
    //   //   label: "活动名称",
    //   //   value,
    //   //   rules: ["notnull", "length"],
    //   //   conditions: ["2", "10"]
    //   // });
    //   const check = {message: '测试通过'}
    //   this.isCallback(check, callback);
    // },
    /* 监测数据类型 */
    isType(target, type) {
     return Object.prototype.toString.call(target).slice(8, -1) === type
    },
    // // 是否通过callback
    // isCallback(check, callback) {
    //   if (!check.result) {
    //     return callback(new Error(check.message));
    //   } else {
    //     return callback();
    //   }
    // },
    // 表单过滤输入(输入值, 正则, 匹配后输入与否)
    isInput(val, reg, flag) {
      if (!val) {
        return;
      } else if (flag === 0) {
        // 匹配排除
        return val.replace(reg, "");
      } else if (flag === 1) {
        // 匹配输入
        return reg.test(val) ? val : "";
      } else {
        console.log("isInput can not work");
      }
    },
    // 表单禁用逻辑
    isDisable(controlObj, val) {
      switch (controlObj) {
        case undefined:
        case "region": // 活动区域
          return val ? false : true;
        case "input_notNumber": // 只能数字, 不能数字
          return !val ? true : val === "1" ? false : true;
        default:
          return;
      }
    }
  },
    mounted() {
      // this.father.$refs
      // this.$refs.Form
      // this.$parent.$refs
      // this.copyPropVal(this.$refs.Form, )
      // debugger
      // setTimeout(() => {
      //   console.log(this.father);
      // }, 1000)
      //  = this.$refs
    }
};
</script>
<style>
 /* role[switch] {
    display:inline-block;
  } */
</style>
<style lang="scss" soped>
// .demo-ruleForm {
//   /deep/ .el-input {
//     width: 50%;
//   }
//   /deep/  .el-switch {
//     display:inline-block !important;
//   }
// }
// .sufText {
//     // position: absolute;
//     width: 100px;
//     margin-left: 16px;
//     top: 2px;
//     // left: 25px;
//   }
.red {
  background: red
}
.none {
  display: none;
}
</style>
