/**
 * table checkbox 翻页复选缓存功能
 * @Author: felix
 * @Date: 2020-89-24 12:00:00
 * @Descripttion: 
 * eg: table组件上添加
 * @select="selectRow(arguments, arguments, 'CBBM')
 * @select-all="selectAll(arguments, tableData, 'CBBM')
 * 在分页方法中添加：
 * queryTableData(page) {
 *  ......
 *  this.handleCheckData(tableData, tableRef, key)
 * }
 */

 export default{
     data() {
         return {
             multipleSelection: []
         }
     },
     methods: {
        /**
         * 选择/取消选择某一行
         * @param selection
         * @param row
         * @param key row的唯一标识
         */
        selectRow(selection, row, key ,fn){
            row = row[1]
            selection = selection[0]
            const index = this.multipleSelection.findIndex(item => item[key] === row[key])
            if (index === -1) {
                this.multipleSelection.push(row)
            } else {
                this.multipleSelection.splice(index, 1)
            }
            if (fn) { fn(selection, row) }
            return
        },
        /**
         * 复选checkbox,  在分页的方法中调用主要用于
         * @param selection表格数据
         * @param tableDataRef表格引用
         * @param key --row的唯一标识
         */
        handleCheckData(tableData, tableRef, key){
            tableData.forEach(item => {
                this.multipleSelection.forEach(mItem => {
                    if (item[key] === mItem[key]) {
                        this.$nextTick(() => {
                            tableRef.toggleRowSelection(item, true)
                        })

                    }
                })
            })
        },

        /**
         * 全选/取消全选
         * @param selection
         * @param tableData 表格数据
         * @param key row的唯一标识
         */
        selectAll(selection, tableData, key){
            selection = selection[0]
            // 如果取消全选
            if (!selection.length) {
                tableData.forEach(item => {
                    const index = this.multipleSelection.findIndex(mItem => mItem[key] === item[key])
                    if (index !== -1) {
                        this.multipleSelection.splice(index, 1)
                    }
                })
            } else {
                selection.forEach(item => {
                    const index = this.multipleSelection.findIndex(mItem => mItem[key] === item[key])
                    if (index === -1) {
                        this.multipleSelection.push(item)
                    }
                })
            }
        }
    }
 }