<template lang="html">
  <div>
    <h2>数据处理</h2>
    <el-tabs class="margin" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Ramda" name="first">
        <h2 @click="test">Ramda</h2>
        <p>R.add(2, 3) => {{ R.add(2, 3) }}</p>
        <p>R.add(2)(3) => {{ R.add(2)(3) }}</p>
      </el-tab-pane>
      <el-tab-pane label="外部js" name="second">
        <h2>外部js文件引用</h2>
        <el-button @click="handleOuterJs">点击测试</el-button>
      </el-tab-pane>
      <el-tab-pane label="封装if-else判断" name="third">
        <h2>封装优化if-else</h2>
        <el-button @click="handle_If_else">点击测试</el-button>
      </el-tab-pane>
      <el-tab-pane label="blank" name="forth">
        66
      </el-tab-pane>
      <el-tab-pane label="blank" name="five">
        666
      </el-tab-pane>
  </el-tabs>
    
  </div>
</template>

<script>
import * as R from "ramda";
import { outJs } from "@/utils/out";

export default {
  data: function() {
    return {
      R,
      activeName: "third",
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
    handle_If_else() {
      // 配合es6的${}，js代码编写在字符串里,厉害
      const age = 29
      const config =[{case: `${age} < 17`, back: '你不到18岁'},{case: `${age} > 18 && ${age} < 30` , back: '你已满18，使劲嗨'}, {case: `${age} >= 30` , back: '已到而立，加油便是'}]
      const tip = this.$utils.caseMapTo(config)
      console.log('caseMapTo--', tip)
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

<style lang="scss" scoped>
.margin {
  margin: 0 20px 20px 230px;
}
</style>
