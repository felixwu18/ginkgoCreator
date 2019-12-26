<template lang="html">
  <div>
    <h2 @click="test">数据处理 Ramda</h2>
    <p>R.add(2, 3) => {{ R.add(2, 3) }}</p>
    <p>R.add(2)(3) => {{ R.add(2)(3) }}</p>
    <h2>外部js文件引用</h2>
    <el-button @click="handleOuterJs">点击测试</el-button>
  </div>
</template>

<script>
import * as R from "ramda";
import { outJs } from "@/utils/out";

export default {
  data: function() {
    return {
      R
    };
  },
  components: {},
  created() {},
  mounted: function() {},
  computed: {},
  methods: {
    handleOuterJs() {
      outJs.call(this, this.test)
    },
    test() {
      // const {identity} = R
      // R.map(identity, [1, 2, 3])

      // const test1 = R.add(2, 3);
      // const test2 = R.add(2)(3);
      const byAge = R.descend(R.prop("age"));
      const people = [
        { name: "Emma", age: 70 },
        { name: "Peter", age: 78 },
        { name: "Mikhail", age: 62 }
      ];
      const peopleByOldestFirst = R.sort(byAge, people);
      console.log("people---peopleByOldestFirst");
      console.log(people);
      console.log(peopleByOldestFirst);
    }
  }
};
</script>

<style scoped></style>
