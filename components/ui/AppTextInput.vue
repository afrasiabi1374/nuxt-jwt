<template>
  <input  type="text" :value="value" v-bind="$attrs" v-on="{...$listeners, input: inputFunc}" >
</template>

<script>
export default {
  name: 'AppTextInput',
  // تغیر نامک پراپ وی مدل
  // model:{
  //   event: 'change',
  //   prop: 'value'
  // },
  props:{
    value: {
      type: String,
      default: '',
    }
  },
  methods:{
    inputFunc(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>

<style>

</style>