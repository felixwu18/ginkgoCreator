/**
 * @Description:  数字验证规则
 * @Author: Felix
 * @Date: 2020-11-06 16:33
 */
export const onlyDecimal = (val, bits) => {
    let value = val;
    // 得到第一个字符是否为负号
    // var t = value.chartAt(0)
    /* 先把非数字的都替换掉， 除了数字和. */
    value = value.replace(/[^\d\.]/g, '');
    /* 必须保证第一个为数字而不是. */
    value = value.replace(/^\./g, '');
    /* 保证只有出现一个.而没有多个. */
    value = value.replace(/^\.{2,}/g, '.');
    /* 保证.只出现一次， 而不能出现两次以上 */
    value = value.replace('.', '$#$').replace(/\./g, '$#$').replace('$#$', '.');
    if (bits && bits === 1) {
        /* 保留一位小数 */
        value = value.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3');
    } else if (bits && bits === 2) {
        /* 保留两位小数 */
        value = value.replace(/^(\-)*(\d+)\.(\d)(\d).*$/, '$1$2.$3$4');
    } else if (bits && bits === 3) {
        /* 保留三位小数 */
        value = value.replace(/^(\-)*(\d+)\.(\d)(\d)(\d).*$/, '$1$2.$3$4$5');
    } else if (bits && bits === 3) {
        /* 保留四位小数 */
        value = value.replace(/^(\-)*(\d+)\.(\d)(\d)(\d)(\d).*$/, '$1$2.$3$4$5$6');
    }
    // /* 如果第一位是负号， 则允许添加 */
    // if (t === '-') {
    //     value = '-' + value
    // }
    return value;
};