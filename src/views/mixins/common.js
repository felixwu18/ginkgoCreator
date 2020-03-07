import mixinTestButton from '@/components/newTest/button'

// 公用表头
const tableHead = [
    { prop: "airQuality", label: "空气质量" },
    { prop: "level", label: "等级" },
    { prop: "state1", label: "状态1" },
    { prop: "state2", label: "状态2" },
    { prop: "name", label: "姓名" },
    {
      label: "日期",
      children: [
        { prop: "date", label: "日期" },
        {
          label: "时间",
          children: [
            { prop: "hour", label: "小时" },
            { prop: "minite", label: "分钟" }
          ]
        }
      ]
    },
    { prop: "province", label: "省份" },
    { prop: "city", label: "市区" },
    { prop: "address", label: "地址" },
    { prop: "zip", label: "邮编" }
  ];

  
export default {
    components: {
        mixinTestButton
    },
    data() {
        return {
            tableHead
        }
    },
    // provide() {
    //     ttt: this
    // },
    created: {

    },
    mounted() {

    },
    methods: {
        testMixin() {
            this.$message.success('testMixin ok!')
        }
    },
    computed: {

    }
}