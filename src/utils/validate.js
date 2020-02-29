/* 暴露对象 */
const check = {}

/* 检验配置 */
const regConfigs = {
    checkDecimal: {
        reg: /((^[1-9]\d*)|^0)(\.\d{0,1}){0,1}$/,
        warning: '必须正数保留两位小数'
    },
    checkDecimal2: {
        reg: /((^[1-9]\d*)|^0)(\.\d{0,1}){0,1}$/,
        warning: '必须正数保留两位小数--2'
    }
}

/* 封装验证回调 */
function define(checkName, regConfig) {
    // var isInflunce
    // if ('reg' in regConfig) {
    //     var { reg, warning } = regConfig
    // } else if('isInflunce' in regConfig) {
    //     var { isInflunce, warning } = regConfig
    // }
    const { reg, warning } = regConfig
    check[checkName] = (rule, value, callback, form_this) => {
        console.log(rule, value, callback, form_this, 'rule--_this');
        // if ('isInflunce' in regConfig && isInflunce) {
        //     form_this.data[rule.field] = '' // 清除输入 form_this 表单this rule.field当前验证字段，data表单数据
        //     return callback(new Error(warning))
        // } else 
        reg
        warning
        // debugger
        console.log(reg, warning, '-----tip');
        

        if (reg.test(value)) {
            form_this.data[rule.field] = '' // 清除输入 form_this 表单this rule.field当前验证字段，data表单数据
            return callback(new Error(warning))
        } else {
            callback()
      }
   }
}
/* 初始化配置 */
(function initValidate() {
    Object.keys(regConfigs).forEach(checkName => {
        define(checkName, regConfigs[checkName])
    })
})()

/* 未通过验证处理输入 */
    // 表单过滤输入(输入值, 正则, 匹配后输入与否)
function isInput (val, reg, flag) {
    // if (!val) {
    //     return;
    // } else if (flag === 0) {
    //     // 匹配排除
    //     return val.replace(reg, "");
    // } else if (flag === 1) {
    //     // 匹配输入
    //     return reg.test(val) ? val : "";
    // } else {
    //     console.log("isInput can not work");
    // }
 }

export default check