<template>
  <div class=" margin about com_border">
    <List v-if="active.listActive" :active="active" :father="this" />
    <Mutate v-if="active.mutateActive" :active="active" :father="this" />
    <Detail v-if="active.detailActive" :active="active" :father="this" />
    <div ref="canvasWrap" style="height: 500px; border: solid" >
        <canvas ref="canvasRef" />
    </div>
  </div>
</template>

<script>
import List from "./components/list";
import Mutate from "./components/mutate";
import Detail from "./components/detail";
import initChart from "./mixins/initChart";

// import { Event } from "@/utils/listen";
export default {
  name: "controlCenter",
  components: {
    List,
    Mutate,
    Detail
  },
  mixins: [
    initChart,
  ],
  beforeRouteLeave(to, from, next) {
    for (var i = 0; i < 2; i++) {
      i === 1 && this.trigger()(next);
    }
  },
  data() {
    return {
      flag: 0,
      active: {
        listActive: true,
        mutateActive: false,
        detailActive: false
      }
    };
  },
  methods: {
    trigger() {
      const _this = this
      return function(next) {
        _this.son && alert(111);
        next();
      };
    },
    ceshi() {
      console.log("ceshi");
    }
  }
};
</script>

<style scoped>
.about {
  color: green;
  font-size: bold;
}
.margin {
  margin: 0 20px 20px 230px;
}
</style>
