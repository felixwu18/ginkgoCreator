let keyboardData = []
let combKeysData = [] // 组合键
let singleKeysData = [] // 单键
let ctrlKeyCombData = [] // ctrl组合键
let altKeyCombData = [] // alt组合
let shiftKeyCombData = [] // shift组合

export const keydownEnvent = (e) => {
    if (e.ctrlKey) { // ctrl +
        mapKeys(ctrlKeyCombData, e)
    } else if (e.shiftKey) { // shift +
        mapKeys(shiftKeyCombData, e)
    } else if (e.altKey) { // alt +
        mapKeys(altKeyCombData, e)
    } else { // 单键
        mapKeys(singleKeysData, e)
    }
}

export const mapKeys = (data, e) => {
    data.forEach(i => {
        if (e.keyCode === keydownCode(i.code)) {
            if (i.paraeter) {
                i.callback(i.parameter)
            } else {
                i.callback()
            }
            e.preventDefault()
        }
    })
}

export const keydownCode = (value) => {
    let d = keyboardData.filter(i => i.value === String(value))
    if (d && d.length) {
        return d[0].code
    } else {
        return ''
    }
}

export default {
    registerKeyEvent: function(data) {
        /**
         * data 为对象
         * 只需要用到组合键则只传combKeys属性值， 值为数组 
         * 只需要用到组合键则只传singleKeys属性值， 值为数组 
         * 既需要单键， 又需要组合键， 则combKeys和singleKeys属性值都需要传
         * 示例如下：
         * data = {
         *    { code: '01013', callback: this.pulldown1, fnKey: 'ctrl'}
         *    { code: '01013', callback: this.shiftFn1, fnKey: 'shift'}
         * }
         */
        combKeysData = Array.isArray(data.combKeys) ? data.combKeys : [] // 组合键
        singleKeysData = Array.isArray(data.singleKeysData) ? data.singleKeys : [] // 单键
        ctrlKeyCombData = combKeysData.filter(i => {  // ctrl +
            return i.fnKey === 'ctrl'
        })
        shiftKeyCombData = combKeysData.filter(i => { // shift +
            return i.fnKey === 'shift'
        })
        altKeyCombData = combKeysData.filter(i => { // alt +
            return i.fnKey === 'alt'
        })
        document.addEventListener('keydown', keydownEnvent)
    },
    removeKeyEvent: () => {
        combKeysData = []
        singleKeysData = []
        ctrlKeyCombData = []
        shiftKeyCombData = []
        altKeyCombData = []
        document.removeEventListener('keydown', keydownEnvent)
    }
}