<template>
  <div>
    {{syAttrs.label || '下拉框'}}
    <el-select
      v-model.trim="value"
      ref="select"
      popper-class="sy-select-b__popper"
      :class="$options.name"
      placeholder="请选择"
      v-bind="{ ...$attrs, ...busAttr }"
      v-on="$listeners"
      @visible-change="onVisibleChange"
      @change="onChange"
    >
      <!-- 默认渲染的 options -->
      <template v-if="!hasDefaultSlot">
        <el-option
          v-for="({ value, label }, index) in options"
          :key="`${value}-${index}`"
          :label="label"
          :value="value"
        >
        </el-option>
      </template>
      <!-- 透传 slots -->
      <slot :name="slot" :slot="slot" v-for="slot in Object.keys($slots)" />
    </el-select>
  </div>
</template>

<script>
import { isFunction } from '~/utils/type.ts'
import { syWith, syWithOut } from '~/utils/helper.ts'
export default {
  name: 'sy-select-b',
  props: {
    syAttrs: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      value: '',
      options: [],
      checkedList: []
    }
  },
  computed: {
    dataSource() {
      return this.syAttrs.dataSource ?? []
    },
    huge() {
      return this.syAttrs.huge ?? {}
    },
    remoteApi() {
      return this.huge && this.huge.api
    },
    // 业务属性
    busAttr() {
      return this.huge ? { filterable: true, remoteMethod: this.remoteMethod, remote: true } : {}
    },
    hasDefaultSlot() {
      return !!this.$slots.default
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.huge) {
        this.remoteMethod('')
      } else {
        this.options = this.dataSource
      }
    },
    onVisibleChange(visible) {
      if (!visible) this.init()
    },
    remoteMethod(query) {
      this.query = query
      const { params, api, searchKey, resFilter } = this.huge
      const { label: labelKey = 'label', value: valueKey = 'value' } = this.syAttrs.option ?? {}
      params[searchKey] = query
      return new Promise((resolve, reject) => {
        api(params).then(res => {
          const list = resFilter(res).map(item => {
            return {
              ...item,
              label: isFunction(labelKey) ? labelKey(item) : item[labelKey],
              value: isFunction(valueKey) ? valueKey(item) : item[valueKey]
            }
          })
          const unCheckedList = syWithOut(list, this.checkedList.map(item => item[valueKey]), valueKey)
          this.options = this.checkedList.concat(unCheckedList)
          resolve(list)
        })
      })
    },
    onChange(val) {
      if (this.huge) {
        const { value: valueKey = 'value' } = this.syAttrs.option ?? {}
        this.checkedList = syWith(this.options, val, valueKey)
      }
    }
  }
}
</script>

<style lang="scss">
@import "~/theme-chalk/index.scss";
.sy-select-b__popper {
  @include overflow-performance();
}
</style>
