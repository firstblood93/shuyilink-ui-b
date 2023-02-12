<template>
  <div>
    cascader-b
    <el-cascader
      :class="$options.name"
      v-bind="$attrs"
      v-on="$listeners">
      <!-- 透传 slots -->
      <template v-for="slot in Object.keys($slots)" >
        <slot :name="slot" :slot="slot"/>
      </template>
      <template v-for="slot in Object.keys($scopedSlots)" >
        <slot  :slot="slot" slot-scope="scope" :name="slot" v-bind="scope"></slot>
      </template>
    </el-cascader>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "sy-cascader-b",
  computed:{
    hasSlot(){
      return !!this.$slots.default
    }
  },
  mounted(){
    console.log('🚀 ~ mounted ~ this.$scopedSlots', this.$scopedSlots)
  },
  methods:{
    echo(scope){
      console.log('🚀 ~ echo ~ scope', scope)
      
    }
  }
};
</script>