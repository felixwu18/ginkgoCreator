<template>
  <!-- v-on="$listeners"
    v-bind="$attrs" -->
  <div style="padding-top: 24px">
    center
    <el-button @click="ceshi">center按钮触发</el-button> <br />
  </div>
</template>

<script>
export default {
  components: {},
  inheritAttrs: false,
  props: {
    //   active: { type: Object, default: _ => {} },
    //   father: { type: Object, default: _ => {} }
  },
  data() {
    var classNma = "none";
    return {
      form: {},
      dialogFormVisible: false,
      formLabelWidth: "120px",
      classNma,
      center: {
        name666: "",
        name999: "",
        name: "",
        name2: "",
        date: "",
        start: "",
        end: "",
        region: "",
        timeDefault: [],
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    ceshi() {
      console.log("ceshi---center");
    },
  },
};
</script>

<style scoped>
.about {
  color: green;
  font-size: bold;
}
</style>
