import { Message, Notification } from "element-ui";
import { fieldsConfigure } from "./fields";
//1 失败消息的提示
export function showError(message) {
  Message({
    showClose: true,
    message,
    type: "error",
    duration: 0,
    offset: 260,
  });
  // Notification({
  //   showClose: true,
  //   // title: '偏移', //提示头
  //   message,
  //   type: "error",
  //   duration: 0,
  //   offset: 260
  // });
}
export function showSuccess(message) {
  Message({
    showClose: true,
    message,
    type: "success",
  });
}

/**
 * //2定义检测数据类型的功能函数
    let checkedType = target => Object.prototype.toString.call(target).slice(8, -1);
 *  
 * reurn 头字符大小的类型,'String','Object','Array'......
 * 返回false,即undefined,null,false等
 * 类型判断
 *  @return {*} value
 */
export function isType(value = null) {
  if (!value) return false;
  return value.constructor.name;
}

export function isType2(value, type) {
  // if ((value !== 0) && !value) return false;
  if (!type) {
    // return value.constructor.name;
    return Object.prototype.toString.call(value).slice(8, -1);
  }
  if (type.constructor.name === "Array") {
    return type.includes(value.constructor.name);
  } else {
    return value.constructor.name === type;
  }
}
/**
 * 3 检测两值是否相等, 用于修改,提醒调用, 返回true表示与原值不同
 * @param {*} old 传入的原值
 * @param {*} now 检测现在的值
 */
export function noSame(old, now) {
  // 数据类型不同, 或 null ,undefined
  if (isType2(old) !== isType2(now)) {
    return true;
  } else if (
    isType2(old) === isType2(now) &&
    ["Undefined", "Null"].includes(isType2(old))
  ) {
    return false;
  }
  // 字符串, 数字, 布尔值
  if (
    isType2(old, ["String", "Number", "Boolean"]) &&
    isType2(now, ["String", "Number", "Boolean"])
  ) {
    if (old !== now) {
      return true;
    }
  }
  // 数组
  if (isType2(old, "Array") && isType2(now, "Array")) {
    if (old.length !== now.length) {
      return true;
    } else {
      for (let i = 0; i < old.length; i++) {
        if (isType2(old[i], "Object") && isType2(now[i], "Object")) {
          if (noSame(old[i], now[i])) {
            return true;
          }
        } else if (
          isType2(old[i], ["String", "Number", "Boolean"]) &&
          isType2(now[i], ["String", "Number", "Boolean"])
        ) {
          if (old[i] !== now[i]) {
            return true;
          }
        }
      }
    }
  }
  // 对象
  if (isType2(old, "Object") && isType2(now, "Object")) {
    if (Object.keys(old).length !== Object.keys(now).length) {
      return true;
    } else {
      for (let i in now) {
        if (now[i] !== old[i]) {
          return true;
        }
      }
    }
  }
  return false;
}
/**
 * 4 查找索引index
 *  @return {Array,Sting} Obj 查找的对象
 *  @return {Object,Sting,Number} target 查找的值
 *  @return {String,Number} field 对象数组里找对象时 字段
 * 格式: 1. String-String(Number) 2. Array-String(Number) 3. Array-Object
 */
export function getIndex(Obj, target, field) {
  if (!target) return;
  if (isType(Obj) === "Array" && isType(Obj[0]) !== "Object") {
    return Obj.indexOf(target);
  } else if (isType(Obj) === "String" && isType(Obj[0]) !== "Object") {
    return Obj.indexOf(target);
  } else if (isType(Obj) === "Array" && isType(Obj[0]) === "Object") {
    return Obj.findIndex((ele) => ele[field] === target[field]);
  }
}

/**
 *  5 对象数组里删除对象, delete target from obj
 *  @return {ObjArray} Obj 查找的对象
 *  @return {Object,objArray} target 查找的值
 *  @return {String,Number} key 对象数组里找对象时 字段, 唯一标识
 * 依赖: getIndex(Function)
 * 格式: 1. ObjArray-Object 2. objArray-objArray
 */
export function deleteItem(Obj, target, key) {
  if (!target) return;
  if (
    isType(Obj) === "Array" &&
    isType(Obj[0]) === "Object" &&
    isType(target) === "Object"
  ) {
    const index = getIndex(Obj, target, key);
    Obj.splice(index, 1);
  } else if (
    isType(Obj) === "Array" &&
    isType(Obj[0]) === "Object" &&
    isType(target) === "Array" &&
    isType(target[0]) === "Object"
  ) {
    // 遍历待删数组
    target.forEach((item) => {
      const index = getIndex(Obj, item, key);
      Obj.splice(index, 1);
    });
  }
}

/**
 * 6 过滤对象数组
 *  @return {objArray} ObjArr 查找的对象数组
 *  @return {Sting} valInput 输入值
 *  @return {StrArray} keyMap 需要过滤的字段数组
 *  返回包含在字段内的所有对象数组
 */
export function filterObjArray(ObjArr, valInput, keyMap) {
  // console.log("valInput");
  // console.log(typeof valInput);
  // debugger
  return ObjArr.filter(filterItem(valInput, keyMap));
}
// 字段过滤
function filterItem(valInput, keyMap) {
  return (item) => {
    for (let i = 0; i < keyMap.length; i++) {
      if (
        String(item[keyMap[i]])
          .toLowerCase()
          .indexOf(valInput.toLowerCase()) !== -1
      ) {
        return true;
      }
    }
  };
}

// 7 返回符号和字符串 默认两位小数 四舍五入
export function currency(value, currency, decimals) {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return "";
  currency = currency !== null ? currency : "";
  decimals = decimals !== null ? decimals : 2;
  let stringified = value.toFixed(decimals);
  return currency + stringified;
}

/**
 * 8
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return;
  }
  let classString = element.className.trim();
  const nameIndex = classString.indexOf(className);
  if (nameIndex === -1) {
    // classString += " " + className;
    addClass(element, className);
  } else {
    // classString =
    //   classString.substr(0, nameIndex) +
    //   classString.substr(nameIndex + className.length);
    removeClass(element, className);
  }
  // element.className = classString;
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    const clearArr = cleanArray(ele.className.split(" "));
    // debugger
    ele.className = clearArr.join(" ");
    const replace = clearArr[clearArr.length - 1] === cls ? "" : " "; // 排除中间移除,影响后者
    ele.className = ele.className.replace(reg, replace);
  }
}

/**
 * 9 对象数组去重1
 * Dedupes array based on criterion returned from iteratee function
 * Ex: uniqueBy([{id: 1}, {id: 1}, {id: 2}],
 *     val => val.id
 * ) = [{id: 1}, {id: 2}]
 */
export function uniqueBy(arr, fun) {
  const valHas = {};
  return arr.filter((ele) => {
    const val = fun(ele);
    return !(val in valHas) && (valHas[val] = 1);
  });
}

/**
 * 对象数组去重2(重复对象,可将指定字段值累加)
 * @param {ObjArr} objArr
 * @param {string} propStr
 */
export function uniqueObjArr(objArr, propStr, addProp) {
  var obj = {};
  return objArr.reduce(function(acc, cur) {
    obj[cur[propStr]]
      ? mergeRefObj(acc, cur, propStr, addProp)
      : (obj[cur[propStr]] = true && acc.push(cur));
    return acc;
  }, []);
}
// 合并指定字段相同对象, 指定字段值累加(暂时写死)
function mergeRefObj(acc, obj, propStr, addProp) {
  //  var temp = acc.find(ele => obj[propStr] === ele[propStr])
  acc.forEach((ele) => {
    if (obj[propStr] === ele[propStr]) {
      ele[addProp] = obj[addProp] * 1 + ele[addProp] * 1;
    }
  });
}

/**
 * 10
 * 对象数组去除对象(根据字段是否有值去除对象)
 * @param {ObjArr} objArr
 * @param {string} propStr
 */
export function removeUnexpectObj(objArr, propStr) {
  const tempArr = [];
  if (!objArr || !objArr.length) {
    return;
  }
  objArr.forEach((ele) => {
    if (ele[propStr]) {
      tempArr.push(ele);
    }
  });
  return tempArr;
}

/**
 * 11 去重数组的' ', undefined, null等
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] || actual[i] === 0) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

/**
 * 12 从一个数据源对象fromObj拷贝数据到参数对象toObj里
 * @param fromObj: Object
 * @param toObj: Object
 * @param flag: Function
 * @param equalConfig: Object
 */
export const copyPropVal = (fromObj, toObj, { flag = 0, equalConfig = {} }) => {
  const matchFields = Object.keys(equalConfig);
  Object.keys(toObj).forEach((field) => {
    if (matchFields.includes(field) || fromObj.hasOwnProperty(field)) {
      const _field = matchFields.includes(field) ? equalConfig[field] : field;
      toObj[field] = fromObj[_field];
    } else {
      flag === 1 && this.c(`拷贝对象中==>${field}或该字段值不存在`);
    }
  });
  return toObj;
};
// /**
//  * 13 @param {Array} arr
//  * @returns {Array}
//  */
// export function uniqueArr(arr) {
//   return Array.from(new Set(arr));
// }

/**
 * 13 统一处理API响应的方法
 * @param req: Object - Promise
 * @param success: Function
 * @param fail: Function
 * @param successTip: any
 */
export const response = async ({ req, success, fail, successTip }) => {
  try {
    const res = await req;
    if (res && res.status === 200) {
      if (successTip) {
        showSuccess(successTip);
      }
      typeof success === "function" && success(res.data || {});
    } else {
      if (fail && typeof fail === "function") {
        fail(res.message);
      } else {
        showError(res.message || "请求异常");
      }
    }
  } catch (error) {
    console.error(error, "<=== error");
  }
};

/**
 * 14
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

// //封装的session存储
// export const session = {
//   get: function(key) {
//     let value = sessionStorage.getItem(key);
//     if (value === null || value === "" || value === "undefined") {
//       value = "";
//     } else {
//       value = JSON.parse(value);
//     }
//     return value;
//   },
//   set: function(key, value) {
//     if (value === undefined) {
//       return;
//     }
//     sessionStorage.setItem(key, JSON.stringify(value));
//   }
// };
// // 封装的localStorage存储
// export const storage = {
//   get: function(key) {
//     let value = localStorage.getItem(key);
//     if (value === null || value === "" || value === "undefined") {
//       value = "";
//     } else {
//       value = JSON.parse(value);
//     }
//     return value;
//   },
//   set: function(key, value) {
//     if (value === undefined) {
//       return;
//     }
//     localStorage.setItem(key, JSON.stringify(value));
//   }
// };

/**
 * 15 存储对象的封装
 * @param {String} key
 * @param {Array, Object, Number, String} value
 * @param {String} storeName(sessionStorage or localStorage)
 */
export const handleSave = (function() {
  const storeApiName = { sessionStorage, localStorage };
  function get(key, storeName = "sessionStorage") {
    let value = storeApiName[storeName].getItem(key);
    if (value === null || value === "" || value === "undefined") {
      value = "";
    } else {
      value = JSON.parse(value);
    }
    return value;
  }
  function set(key, value, storeName = "sessionStorage") {
    if (value === undefined) {
      return;
    }
    storeApiName[storeName].setItem(key, JSON.stringify(value));
  }
  return {
    get,
    set,
  };
})();

// 16 封装优化if-else
/**
 * 带变量的条件，执行判断，返回值
 * @param {arrObj} config
 * config = [{case:`${a} < 6`, back: 'a变量的值小于6'},...]
 */
export function caseMapTo(config) {
  if (!config) {
    return;
  }
  for (let i = 0; i < config.length; i++) {
    if (eval(config[i].case)) {
      return config[i].back;
    }
  }
}

/**
 * 17 带变量的条件，执行判断，返回值
 * @param {Object} obj
 * {index: 1, size: 5} => index=1&size=5
 */

const serialize = function(obj) {
  var ary = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p) && obj[p]) {
      ary.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }
  return ary.join("&");
};

/**
 * 18 根据编码在配置中取名称
 * Map 接二维数组时
 *
 *
 */
const configMap = new Map([
  ["1", "张三"],
  ["2", "李四"],
  ["3", "王五"],
]);
configMap.get("1"); // => '张三'

/**
 * 19 复制单行内容到粘贴板
 * content : 需要复制的内容 - input
 * message : 复制完后的提示，不传则默认提示"复制成功"
 * */
export function copyToClip(content, message) {
  var aux = document.createElement("input");
  aux.setAttribute("value", content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  if (message == null) {
    showSuccess("复制成功");
  } else {
    showSuccess(message);
  }
}

/**
 * 复制多行内容到粘贴板
 * contentArray: 需要复制的内容（传一个字符串数组）- textarea
 * message : 复制完后的提示，不传则默认提示"复制成功"
 * */
function copyToClip(contentArray, message) {
  var contents = "";
  for (var i = 0; i < contentArray.length; i++) {
    contents += contentArray[i] + "\n";
  }
  const textarea = document.createElement("textarea");
  textarea.value = contents;
  document.body.appendChild(textarea);
  textarea.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
  }
  document.body.removeChild(textarea);
  if (message == null) {
    alert("复制成功");
  } else {
    alert(message);
  }
}
