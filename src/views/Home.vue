<template>
  <div class="home">
    <select-b
      v-if="renderList.includes('SelectB')"
      filterable
      v-model="value"
      multiple
      :collapse-tags="true"
      :sy-attrs="{
        label:'mySelect',
        huge,
        option:{
          label:(item)=>`${item.productName}(${item.productCode})`,
          value:'id',
        },
        dataSource:selectOptions
      }"
    >
      <div slot="empty">暂无数据</div>
      <!-- <el-option
        v-for="(item, index) in selectOptions"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.value
        }}</span>
      </el-option> -->
    </select-b>

    <CascaderB
      v-if="renderList.includes('CascaderB')"
      :options="cascaderOptions"
      v-model="cascaderValue"
    >
      <div slot="data" slot-scope="data">{{ data }}</div>
      <template slot-scope="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
      <div slot="empty">暂无数据</div>
    </CascaderB>

    <el-button @click="console">click</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import SelectB from '~/select/index.vue'
import CascaderB from '~/cascader/index.vue'
import { data as selectOptions } from '@/data/select.js'
import { data as cascaderOptions } from '@/data/cascader.js'
import { productMessage } from '@/api'
export default Vue.extend({
  name: 'Home',
  components: {
    SelectB,
    CascaderB
  },
  data() {
    return {
      huge: {
        api: productMessage,
        searchKey: 'productCodeOrName',
        resFilter: (res) => res.data.list,
        params: {
          pageNum: 1,
          pageSize: 100
        }
      },
      renderList: ['SelectB', 'CascaderB-'],
      selectOptions,
      value: '',
      cascaderValue: [],
      cascaderOptions
    }
  },
  mounted() {
    // console.log('🚀 ~ mounted ~ mounted')
    setTimeout(() => {
      // this.selectOptions = []
    })
    // const res = productMessage({ pageNum: 1, pageSize: 100 })
    // console.log('🚀 ~ mounted ~ res', res)
  },
  methods: {
    console() {
      console.log('🚀 ~ console ~ cascaderValue', this.cascaderValue)
      console.log('🚀 ~ echo ~ this.value', this.value)
    }
  }
})
</script>
