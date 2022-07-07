import Vue from 'vue';

/* 1, 防止重复提交 替代用按钮loading方式*/
const preventReClick = Vue.directive('preventReClick', {
    inserted(el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true;
                setTimeout(() => {
                    el.disabled = false;
                }, binding.value || 3000)
            }
        })
    }
})


/**
 * @Description: 2, 输入整数或小数的指令
 * @Author: Felix
 * @Date: 2020-11-06 16:33
 */
import { onlyDecimal } from '@/utils/numberUtils'
const numberDirective = Vue.directive('number',  {
    inserted: (el, binding, vnode) => {
             /* 只能输入小数 */
             if (binding.arg === 'decimal') {
                el.oninput = (e) => {
                    let bits = 1; // 保留小数
                    if (binding.value && binding.value.bits) {
                       bits = binding.value.bits;
                    }
                    const value = onlyDecimal(e.target.value, bits);
                    e.target.value = value;
                    if (binding.value && binding.value.data && binding.value.field && binding.value.this) {
                        const that = binding.value.this;
                        that.$set(that[binding.value.data], [binding.value.field], value);
                   }
                };
                /* 离焦事件保留小数 */
                vnode.componentInstance.$refs.input.onblur = () => {
                };
                /* 键盘事件保留小数 */
                vnode.componentInstance.$refs.input.onblur = () => {
                };
             } else if (binding.arg === 'integer') {
                /* 只能输入整数 */
                el.oninput = (e) => {
                    binding.value.data[binding.value.field] = e.target.value.replace(/[^0-9]/g, '');
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    binding.value.data = { ...binding.value.data };
                }
             } else if (binding.arg === 'noSpecStr') {
                /* 只能输入非特殊字符(字母和数字) */
                el.oninput = (e) => {
                    binding.value.data[binding.value.field] = e.target.value.replace(/[^\w\/]/ig, '');
                    e.target.value = e.target.value.replace(/[^\w\/]/ig, '');
                    binding.value.data = { ...binding.value.data };
                };
             }
    },
});
export default { preventReClick,  numberDirective }
