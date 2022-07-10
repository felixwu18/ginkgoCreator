<template>
  <div style="padding-top: 24px" v-bind="$attrs">
    son
    <el-button @click="ceshi">son按钮触发</el-button> <br />
    <p>$attrs: {{ $attrs }}</p>
    <p>$listeners: {{ $listeners }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  inheritAttrs: false,
  props: ["yes"],
  data() {
    var classNma = "none";
    return {
      form: {},
      dialogFormVisible: false,
      formLabelWidth: "120px",
      classNma,
      son: {},
    };
  },
  created() {},
  computed: {},
  methods: {
    ceshi() {
      console.log("ceshi---son");
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
