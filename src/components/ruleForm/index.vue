<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="Form"
    label-width="100px"
    class="demo-ruleForm"
  >
    <demo :rule-form="ruleForm" flag="select" />
    <button @click="ceshi" @change="ceshi">ceshi</button>
    <!-- <el-form-item label="活动名称" prop="name" ref="nameItem">
      <el-input v-model="ruleForm.name" clearable></el-input>
    </el-form-item> -->
    <el-form-item label="活动区域" prop="region">
      <!-- <el-select
        v-model="ruleForm.region"
        :disabled="isDisable('region', ruleForm.name)"
        clearable
        placeholder="请选择活动区域"
      >
        <el-option label="区域一" value="0"></el-option>
        <el-option label="区域二" value="1"></el-option>
      </el-select> -->
      <searchSelect :insertValue.sync="ruleForm.region" :configure="configue_area"  />
    </el-form-item>
    
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
</template>

<script>
import searchSelect from "@/components/searchSelect/index"
const demo = {
  name: 'demo',
  functional: true, // 作用下面ctx开启
  props: {
      flag: String,
      ruleForm: Object
  },
  render: (h, ctx) => {
    console.log(ctx, 1111)
    const parent = ctx.parent
    console.log(parent, 66666)
    const props = ctx.props
    const ruleForm = props.ruleForm
    const test = {
      input: (
        <el-form-item label="活动名称" prop="name" ref="nameItem">
          <el-input input="ceshi" v-model={ruleForm.name} clearable></el-input>
        </el-form-item>
        // <div> 666 </div>
      ),
      select: (
        // <el-form-item label="活动区域" prop="region">
        //   <el-select
        //     v-model={ruleForm.region}
        //     // disabled={parent.isDisable('region', ruleForm.name)}
        //     clearable
        //     placeholder="请选择活动区域"
        //     // v-on={ctx.listseners}
        //     onChange={parent.ceshi}
        //     // v-bind={$attrs}
        //   >
        //     <el-option label="区域一" value="0"></el-option>
        //     <el-option label="区域二" value="1"></el-option>
        //   </el-select>
        // </el-form-item>
        <searchSelect insertValue={parent.data.region} configure={parent.configs[1].config} />
                // <div> 666 </div>
      ),
      date: (
         <el-form-item label="日期" prop="date">
          <el-date-picker 
            type="date"
            placeholder="选择日期"
            v-model={ruleForm.date}
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>        
      )
    }
    return test[props.flag]
  }
}

// 配置转换
const configue_area = [
  { key: 1, value: "区域一" },
  { key: 2, value: "区域二" }
];

export default {
  props: {
    configs: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    demo,
    searchSelect
  },
  data() {
    return {
      configue_area,
      numberReg: /^[0-9]+.?[0-9]*$/,
      ruleForm: {
        date: '',
        name: "",
        region: "",
        input: "",
        notNumber: ""
      },
      rules: {
        name: [
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          { required: true, message: "请输入活动名称", trigger: "blur" } // 直接在触发函数里加 notnull
          // { validator: this.checkName, trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    confugureFormatter(configure, key) {
      // key对应code, value对应转换后的值
      if (configure) {
        let matchObj = configure.filter(e => e.key === key);
        if (matchObj[0]) {
          return matchObj[0].value;
        }
      }
    },
    ceshi(v) {
      this.ruleForm
      console.log(v, 111666)
    },
    submitForm() {
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
    },
    validateField(formName) {
      this.$refs[formName].validateField("name");
    },
    // 检测活动名称
    checkName(rule, value, callback) {
      console.log("rule, value, callback");
      console.log(rule);
      // callback(new Error('check.message'))
      // this.$validate()
      // debugger
      let {check} = this.$validate({
        label: "活动名称",
        value,
        rules: ["notnull", "length"],
        conditions: ["2", "10"]
      });
      this.isCallback(check, callback);
    },
    // 是否通过callback
    isCallback(check, callback) {
      if (!check.result) {
        return callback(new Error(check.message));
      } else {
        return callback();
      }
    },
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
  }
  //   created(){
  //       console.log(this.$validate)
  //   }
};
</script>

<style>
</style>
