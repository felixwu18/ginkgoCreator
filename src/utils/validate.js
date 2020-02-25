/* 检验配置 */
const regConfigs = {
    checkDecimal: {
        reg: /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/,
        warning: '必须正数保留两位小数'
    }
}

/* 封装回调 */
function define(checkName, regConfig) {
    const { reg, warning } = regConfig
    this[checkName] = (rule, value, callback) => {
        if (reg.test(value)) {
            return callback(new Error(warning))
        } else {
            callback()
        }
    }
}

/* 初始化配置 */
(function initValidate() {
    Object.keys(regConfigs).forEach(checkName => {
        define(checkName, regConfigs[regConfig])
    })
})()