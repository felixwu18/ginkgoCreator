<template>
  <section class="menulist">
    <section v-for="item in childrenData" :key="item.id">
      <!-- 没有子集的 -->
      <el-menu-item :index="item.fullPath" v-if="item.meta.childrenLength === 0">
        <i :class="['icon-menu', 'iconfont', item.meta.icon]"></i>
        <span>{{langChange() ? item.meta.zhTitle : item.meta.enTitle}}</span>
      </el-menu-item>
      <!-- 子集只有一个的 只展示子集 -->
      <el-menu-item :index="item.children[0].fullPath" v-if="item.meta.childrenLength === 1">
        <i :class="['icon-menu', 'iconfont', item.meta.icon]"></i>
        <span>{{langChange() ? item.children[0].meta.zhTitle : item.children[0].meta.enTitle}}</span>
      </el-menu-item>
      <!-- 子集大于一个的 -->
      <el-submenu :popper-append-to-body="true" popper-class="roleMenuClass" v-if="item.meta.childrenLength > 1" :index="item.fullPath">
        <template slot="title">
          <i :class="['icon-menu', 'iconfont', item.meta.icon]"></i>
          <span v-if="item.meta && item.meta.zhTitle && item.meta.enTitle">{{langChange() ? item.meta.zhTitle : item.meta.enTitle}}</span>
        </template>
        <rm-menu :childrenData="item.children"></rm-menu>
      </el-submenu>
    </section>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RmMenu',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'lang'
    ])
  },
  props: {
    childrenData: {
      default: () => [],
      type: Array
    }
  },
  methods: {
    langChange () {
      if (this.lang === 'zh') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>