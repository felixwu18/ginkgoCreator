<template>
  <div>
      <!-- @change="changeSelect" -->
      <el-select
        v-model="value"
        clearable
        :disabled="disabled"
        placeholder="请选择"
        size="medium"
        v-on="$listeners"
        v-bind="$attrs"
      >
        <el-option
          v-for="(item,index) in configure.length ? configure:[]"
          :key="index"
          :label="item[_fields.value]"
          :value="item[_fields.key]"
        ></el-option>
      </el-select>
  </div>
</template>
<script>
export default {
  name: "searchSelect",
  data() {
    return {
    }
  },
  // props: { title: [String], config_name: [String], insertValue: [String, Number], width: [String, Number], clearable: [Boolean, String] },
  props: {
    configure: [Array],
    insertValue: [Number, String, Array],
    clearable: [Boolean, String],
    fields: {type: Object, default: () => {}},
    disabled: [Boolean],
    isNumber: {type: Boolean, default: false}
  },
  computed: {
    value: {
      get() {
        console.log(this.insertValue,11111111111);
        return this.insertValue
      },
      set(key) {
        !this.isNumber && typeof key === 'number' ? key = String(key) : '' // 默认字符串
        const value = this.confugureFormatter(this.configure, key)
        this.$emit('update:insertValue', key) // 编码
        this.$emit('change', {[this._fields.key]: key, [this._fields.value]: value}) // 传编码及值
      }
    },
    _fields() {
      if (!this.fields || !Object.keys(this.fields).length) {
        return { key: 'key', value: 'value'} // 默认对应属性 key-valu
      } else {
        return this.fields
      }
    }
  },
  methods: {
    confugureFormatter(configure, key) {
      // key对应code, value对应转换后的值
      if (configure) {
        const matchObj = configure.filter(e => e[this._fields.key] === key);
        if (matchObj[0]) {
          return matchObj[0][this._fields.value];
        }
      }
    }
  },
  created() {
  }
};
</script>
<style lang="less" scoped>
</style>