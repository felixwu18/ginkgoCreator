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
                <el-checkbox  v-for="node in scope.row.aa" :key="node.id" v-model="node.val" @change="val => handelChange(val, scope.row, 'aa')">{{node.label}}</el-checkbox>
            </template>
          <el-checkbox v-else  v-model="scope.row.aa">备选项1</el-checkbox>
        </template>
    </el-table-column>
    <el-table-column
      label="日期2"
      width="180">
        <template slot-scope="scope">
            <template v-if="scope.row.bb">
                <el-checkbox  v-for="node in scope.row.bb" :key="node.id" v-model="node.val" @change="val => handelChange(val, scope.row, 'bb')">{{node.label}}</el-checkbox>
            </template>
          <el-checkbox v-else  v-model="scope.row.aa">备选项2</el-checkbox>
        </template>
    </el-table-column>
    <el-table-column
      label="日期3"
      width="180">
        <template slot-scope="scope">
            <template v-if="scope.row.cc">
                <el-checkbox  v-for="node in scope.row.cc" :key="node.id" v-model="node.val" @change="val => handelChange(val, scope.row, 'cc')">{{node.label}}</el-checkbox>
            </template>
          <el-checkbox v-else  v-model="scope.row.aa">备选项2</el-checkbox>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
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
              father: {bb: 1}
          }, {
              id: 2,
              val: false,
              label: '备选项3',
              father: {bb: 1}
          }, {
              id: 3,
              val: true,
              label: '备选项3',
              father: {bb: 2}
          }, {
              id: 4,
              val: true,
              label: '备选项3',
              father: {bb: 2}
          }]
        }]
      }
  },
  methods: {
      handelChange(val, row, flag) {
          console.log(val, row, flag, 11111);
          var curArr = row[flag]
        //   自上而下 关联  
        this.toChildrenCheck(curArr, row)   
        //   自下而上 关联  
        this.toFatherCheck(curArr, row)   
      },
      toChildrenCheck(curArr, row) {
        curArr.forEach(ele => {
            if(ele.children) {
                var prop = Object.keys(ele.children[0])[0] // 关联子级的row中prop
                var idArr = ele.children.map(child => child[prop]) // 父级关联的子级id数组
                row[prop].forEach(son => { // 子级数组处理
                    if (ele.val) {
                        idArr.includes(son.id) && (son.val = true)
                    } else {
                        idArr.includes(son.id) && (son.val = false)
                    }
                    /* 子级是否有children */
                    if (son.children) {
                        this.toChildrenCheck(row[prop], row) // 当前子级做下级子级的curArr
                    }
              })
            }
        });
      },
      toFatherCheck(curArr, row) {
        curArr.forEach(ele => {
            if(ele.father) {
                var prop = Object.keys(ele.father)[0] // 关联父级的row中prop
                var fatherId = ele.father[prop] // 子级中关联的父级id
                row[prop].forEach(father => { // 父级数据处理
                    if (!ele.val) {
                        father.id === fatherId && (father.val = false)
                    }
                    // else {
                    //   var curSelect = []
                    //   var sameFatherCur = []
                    //   curArr.forEach(cur => {
                    //       fatherId === cur.father.id && (sameFatherCur.push(cur))
                    //       fatherId === cur.father.id && ele.val && (curSelect.push(cur))
                    //   })
                    //   curSelect.length === sameFatherCur.length ? father.id === fatherId && (father.val = true) : father.val = false
                    // //   curSelect.length === sameFatherCur.length && father.id === fatherId && (father.val = true)
                    // }
                    /* 子级是否有children */
                    if (father.father) {
                        this.toFatherCheck(row[prop], row) // 当前父级做上级父级的curArr
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
