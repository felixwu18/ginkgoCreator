/*  全局发布订阅  */
export const Event = (function () {
    let list = {},
        listen,
        trigger,
        remove;
    listen = function (key, fn) {
        (list[key] || (list[key] = [])).push(fn);
    };
    trigger = function () {
        // 取出消息类型名称
        let key = Array.prototype.shift.call(arguments);
        // 对应的回调函数
        let fns = list[key];
        if (!fns || fns.length === 0) {
            return;
        }
        for (let i = 0, fn; (fn = fns[i++]);) {
            fn.apply(this, arguments);
        }
    };
    remove = function (key, fn) {
        let fns = list[key];
        if (!fns) {
            return false;
        }
        // 清空
        if (!fn) {
            fn && (fns.length = 0);
        } else {
            for (let i = fns.length - 1; i >= 0; i--) {
                let _fn = fns[i];
                _fn === fn && (fns.splice(i, 1)); // 删除订阅者对应的回调函数
            }
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    };
})();
// Event.listen('big', function(size){
//     console.log('小明,我买了一套'+size+ '平米' )
// })
// Event.trigger('big',100)
