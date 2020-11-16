import Vue from 'vue';

/* 防止重复提交 替代用按钮loading方式*/
export const preventReClick = Vue.directive('preventReClick', {
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
