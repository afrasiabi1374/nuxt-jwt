<template>
  <validation-provider v-slot="{ errors }" :name="name" :rules="rules">
    <div>
      <input 
        v-bind="$attrs"
        :value="value"
        :type="type"
        v-on="{ ...$listeners, input: inputFunc }"
      />
    </div>
    <div v-if="errors && errors.length > 0">{{ errors[0] }}</div>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
export default {
  name: 'AppTextInput',
  components:{
    ValidationProvider
  },
  props:{
    value: {
      type: String,
      default: 'default value',
    },
    name: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text'
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