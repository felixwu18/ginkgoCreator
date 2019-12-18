import dynamicTable from "@/components/table/index"
import print from "@/components/print/index"
export default {
    install:(Vue) => {
        Vue.component('dynamicTable',dynamicTable) 
        Vue.component('print',print) 
   }
}