<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      label="日期1"
      width="180">
        <template slot-scope="scope">
            <template v-if="scope.row.aa">
                <el-checkbox  v-for="node in scope.row.aa" :key="node.id" v-model="node.val" @change="val => handelChange(node.id, scope.row, 'aa')">{{node.label}}</el-checkbox>
            </template>
          <el-checkbox v-else  v-model="scope.row.aa">备选项1</el-checkbox>
        </template>
    </el-table-column>
    <el-table-column
      label="日期2"
      width="180">
        <template slot-scope="scope">
            <template v-if="scope.row.bb">
                <el-checkbox  v-for="node in scope.row.bb" :key="node.id" v-model="node.val" @change="val => handelChange(node.id, scope.row, 'bb')">{{node.label}}</el-checkbox>
            </template>
          <el-checkbox v-else  v-model="scope.row.aa">备选项2</el-checkbox>
        </template>
    </el-table-column>
    <el-table-column
      label="日期3"
      width="180">
        <template slot-scope="scope">
            <template v-if="scope.row.cc">
                <el-checkbox  v-for="node in scope.row.cc" :key="node.id" v-model="node.val" @change="val => handelChange(node.id, scope.row, 'cc')">{{node.label}}</el-checkbox>
            </template>
          <el-checkbox v-else  v-model="scope.row.aa">备选项2</el-checkbox>
        </template>
    </el-table-column>
    <el-table-column
      label="日期4"
      width="180">
        <template slot-scope="scope">
            <template v-if="scope.row.dd">
                <el-checkbox  v-for="node in scope.row.dd" :key="node.id" v-model="node.val" @change="val => handelChange(node.id, scope.row, 'dd')">{{node.label}}</el-checkbox>
            </template>
          <el-checkbox v-else  v-model="scope.row.aa">备选项2</el-checkbox>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
/* 循环加递归（递归生万物），判断加标识 */
export default {
  data() {
      return {
          tableData: [{
          aa: [{
              id: 1,
              val: true,
              label: '备选项1',
              children: [{bb: 1}, { bb: 2}]
          }],
          bb: [{
              id: 1,
              val: false,
              label: '备选项2',
              children: [{cc: 1}, {cc: 2}],
              father: {aa: 1}
          }, {
              id: 2,
              val: true,
              label: '备选项2',
              children: [{cc: 3}, {cc: 4}],
              father: {aa: 1}
          }],
          cc: [{
              id: 1,
              val: false,
              label: '备选项3',
              children: [{dd: 1}, {dd: 2}],
              father: {bb: 1}
          }, {
              id: 2,
              val: false,
              label: '备选项3',
              children: [{dd: 3}, {dd: 4}],
              father: {bb: 1}
          }, {
              id: 3,
              val: true,
              label: '备选项3',
              children: [{dd: 5}, {dd: 6}],
              father: {bb: 2}
          }, {
              id: 4,
              val: true,
              label: '备选项3',
              children: [{dd: 7}, {dd: 8}],
              father: {bb: 2}
          }],
          dd: [{
              id: 1,
              val: false,
              label: '备选项4',
              father: {cc: 1}
          }, {
              id: 2,
              val: false,
              label: '备选项4',
              father: {cc: 1}
          }, {
              id: 3,
              val: true,
              label: '备选项4',
              father: {cc: 2}
          }, {
              id: 4,
              val: true,
              label: '备选项4',
              father: {cc: 2}
          },
          {
              id: 5,
              val: false,
              label: '备选项4',
              father: {cc: 3}
          }, {
              id: 6,
              val: false,
              label: '备选项4',
              father: {cc: 3}
          }, {
              id: 7,
              val: true,
              label: '备选项4',
              father: {cc: 4}
          }, {
              id: 8,
              val: true,
              label: '备选项4',
              father: {cc: 4}
          }]
        }]
      }
  },
  methods: {
      handelChange(id, row, flag) {
          var curArr = row[flag]
        //   自当前而下 关联  
        this.toChildrenCheck(curArr, row, id)   
        //   自当前而上 关联  
        this.toFatherCheck(curArr, row, id)
      },
      toChildrenCheck(curArr, row, id) {
        curArr.forEach(ele => {
            if(ele.id === id && ele.children) { // 定位到触发对象
                var prop = Object.keys(ele.children[0])[0] // 关联子级的row中prop
                    var idArr = ele.children.map(child => child[prop]) // 父级关联的子级id数组
                    row[prop].forEach(son => { // 子级数组处理
                      if (idArr.includes(son.id)) { // 触发节点的子节点
                          if (ele.val) {
                              son.val = true
                          } else {
                              son.val = false
                          }
                        /* 子级是否有children */
                        if (son.children) {
                            this.toChildrenCheck(row[prop], row, son.id) // 当前子级做下级子级的curArr
                        }
                      }
                  })
            }
        });
      },
      toFatherCheck(curArr, row, id) {
        curArr.forEach(ele => {
            if(ele.id === id && ele.father) { // 出发点父亲若有则唯一一个
                var prop = Object.keys(ele.father)[0] // 关联父级的row中prop
                var fatherId = ele.father[prop] // 子级中关联的父级id
                row[prop].forEach(father => { // 父级数据处理
                    if (father.id === fatherId) {
                        /* 是否全有值 */
                        var curSelect = []
                        var sameFatherCur = []
                        curArr.forEach(cur => {
                            var prop = Object.keys(cur.father)[0]
                            if (fatherId === cur.father[prop]) {
                                sameFatherCur.push(cur)
                                cur.val && (curSelect.push(cur))
                            }
                        })
                        if (!ele.val) {
                            father.val = false
                        } else {
                            curSelect.length === sameFatherCur.length ? 
                            father.val = true : father.val = false
                        }
                        // 是否有爷爷辈
                        if (father.father) {
                            this.toFatherCheck(row[prop], row, father.id) // 当前父级做上级父级的curArr
                        }
                    }
              })
            }
        });
      }
  }
}
</script>

<style lang="scss">
</style>
