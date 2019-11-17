<template lang="html">
  <div>
    <h2 @click="test">数据处理 Ramda</h2>
    <!-- <p>{{msg}}</p> -->
  </div>
</template>

<script>
import * as R from 'ramda'
export default {
  data: function() {
    return {
    };
  },
  components: {},
  created: function() {},
  mounted: function() {},
  computed: {},
  methods: {
     test(){
//        const {identity} = R
//        R.map(identity, [1, 2, 3])

//           const test1 = R.add(2, 3); 
//           const test2 = R.add(2)(3); 
const byAge = R.descend(R.prop('age'));
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByOldestFirst = R.sort(byAge, people);
          console.log('people---peopleByOldestFirst')
          console.log(people)
          console.log(peopleByOldestFirst)
     }
  }
};
</script>

<style lang="less" scoped>
// .home {
//   color: blue;
//   font-size: bold;
// }
</style>
