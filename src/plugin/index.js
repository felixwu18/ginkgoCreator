import dynamicTable from "@/components/table/index"
import print from "@/components/print/index"

// 只需将组建放入数组即可全局注册
const components = [
    dynamicTable,
    print
]
export default {
    install:(Vue) => {
        components.forEach(component => {
            Vue.component(component.name, component) 
        })
   }
}