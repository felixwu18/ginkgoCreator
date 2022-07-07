<template>
  <div>
    formhead
    <el-input v-model="search.name" />
    <el-button @click="outReplaceStr">obj配置输出替换字符</el-button><br />
    <span>{{ outStr }}</span>
  </div>
</template>

<script>
export default {
  name: "formHead",
  props: {
    active: { type: Object, default: (_) => {} },
    father: { type: Object, default: (_) => {} },
    search: { type: Object, default: (_) => {} },
  },
  data() {
    return {
      outStr: "",
    };
  },
  methods: {
    outReplaceStr() {
      const aaa = { a: 1, b: 2 };
      //       sed系列 -- 替换字符串
      // sed -i s/"a"/"A"/g aa.txt
      // sed -i 's/\<ff11\>/field1/; s/\<ff22\>/field2/; s/\<ff33\>/field3/' index.html 精确匹配
      const obj = eval(`(${this.search.name})`);
      console.log(typeof obj, "<=== 111111-obj");
      const outStr = Object.entries(obj).reduce(
        (acc, cur, index) => (acc += `s/\\<${cur[0]}\\>/${cur[1]}/;`),
        ""
      );
      this.outStr = outStr;
      console.log(outStr, "<=== replaceStr");
      console.log(typeof outStr, "<=== replaceStr");
    },
  },
};
</script>

<style scoped>
</style>
