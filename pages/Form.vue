<template>
  <div>
    <h1>form</h1>
    <h2>کامپوننت ها داخل پوشه یوآی هستند.</h2>
    <label>firstName((custom input)) by watcher: </label>
    <ui-app-text-input v-model="firstName" />
    <br>
    <h1>app number picker</h1>
    <ui-app-number-picker :minValue="0"  v-model="count"></ui-app-number-picker>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
     firstName: '',
     count: 5
    }
  },
  watch:{
    firstName(value){
      console.log('first name is : ', value);
    }
  }
}
</script>

<style>

</style>