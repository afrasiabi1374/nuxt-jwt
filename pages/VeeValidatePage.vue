<template>
    <div>
      <h1>form</h1>
      <validation-observer v-slot="{handleSubmit, reset}">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider name="number" rules="even" v-slot="{ errors }">
            <label>number validation: </label>
            <ui-app-text-input type="number" v-model="number"></ui-app-text-input>
            <div v-if="errors && errors.length > 0">{{errors[0]}}</div>
          </ValidationProvider>
          
          <button type="submit" >submit-FRM</button>
          <button type="button" @click="reset">Reset Validation</button>
        </form>
      </validation-observer>
      <hr/>
  
  
  
  
  
  
      <h2>کامپوننت ها داخل پوشه یوآی هستند.</h2>
      <label>firstName((custom input)) by watcher: </label>
      <ui-app-text-input v-model="firstName" />
      <br>
      <h1>app number picker</h1>
      <ui-app-number-picker :minValue="0"  v-model="count"></ui-app-number-picker>
    </div>
  </template>
  
  <script>
    import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
    extend('even', value => {
      return value % 2 === 0
    })
  
    export default {
    name: "Form",
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
       firstName: '',
       count: 5,
       number: 0
      }
    },
    watch:{
      firstName(value){
        console.log('first name is : ', value);
      }
    },
    methods:{ 
      onSubmit(){
        alert('submit is called!')
      }
    }
  }
  </script>
  
  <style>
  
  </style>