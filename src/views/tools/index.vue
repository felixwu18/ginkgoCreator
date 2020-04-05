<template>
  <div class="about com_border">
    <h2>相同参数含义,不同字段配置</h2>
    <el-button @click="ceshi">点击ceshi</el-button>
    <el-button @click="arrUnique">数组去重</el-button>
    <h2>Proxy数据劫持(vue3)</h2>
    <el-button style="float: right" @click="proxyTest">测试proxy</el-button>
    <!-- <el-button style="float: right" @click="noMutate">防止数据修改</el-button> -->
    <h2>健壮性处理</h2>
    <yh-button @click="handleAdapter">点击数据适配</yh-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      obj1:{realName: 'wufei', hobby: 'novel', same: 666},
      obj2:{alias: '', love: '', same: ''},
      arr1: [1,2,3,{aa: 33}],
      arr2: [1,2,3,{aa: 33}]
    }
  },  
  methods: {
    isType(value, type) {
     return Object.prototype.toString.call(value).slice(8, -1) === type
    },
    handleAdapter(a = {}) {
      var str = a.b.c
      this.adapter('a.b.c', 'Object', this)
    },
    adapter(str, type, _this) {
      var strArr = str.split('.')
      strArr.reduce((collect, cur) => {
        var index = cur.indexOf('[')
        if (index !== -1) {
          var aaa = _this[collect + cur.slice(0, index - 1)]
          aaa || (aaa = {})
        }
        collect += cur; 
        this.isType(_this[collect], type) ? '' : _this[collect] = {}
     })
    },
    proxyTest() {
      // defineProperty的替代者 
      // Proxy代理对象后放回新对象, 读取源对象，不会触发代理对象的get方法， 测试，取源对象和取新对象属性时，对比效果
      // 能监听整个对象， defineProperty 只能监听对象某个属性
      // proxy省去 defineProperty 的for in循环， 性能提高
      // 还能做啥？ 类型校验，真正的私有变量
      var obj = {
        a: 1,
        b: 2
      }
     var newObj = new Proxy(obj, {
        get(target, key, receiver) {
          console.log(target, key, receiver)
          return target[key]
        },
        set(target, key, value, receiver) {
          console.log('Reflect.set')
          return Reflect.set(target.key, value)
          // return target[key] = value
        }
      })
      // console.log(obj)
      // console.log(newObj)
      newObj.a = 666
      console.log(newObj)
    },
    noMutate() {
      // var obj = {
      //   novel: '鹿鼎记'
      // }
      // console.log(obj.novel);
      // Object.defineProperty(obj, 'novel', {
      //   get() {
      //     return '鹿鼎记'
      //   }
      // })
      // obj.novel = '已修改'
      // console.log('pre-obj-suf');
      // console.log(obj.novel);
      
    },
    arrUnique() {
      // const unique = [...new Set(this.arr1.concat(this.arr2))] // Array.from(new Set(arr1.concat(arr2)))
      // console.log('arr1-arr2-unique')
      console.log(this.arr1)
      console.log(this.arr2)
      // console.log(unique)
      const test = this.$utils.noSame(this.arr1, this.arr2)
      console.log('no same?')
      console.log(test)
    },
    ceshi() {
      var obj1 = this.obj1
      var obj2 = this.obj2
      var fieldsConfigure = {1: ['realName', 'alias'], 2: ['hobby', 'love']}
      console.log('obj2')
      console.log(obj2)
      this.$utils.copyPropVal(obj1, obj2)
      console.log(obj2)
     }
  }
};
</script>

<style scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
