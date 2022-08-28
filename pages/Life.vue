<template>
  <div>
    <h1>
        Life cycle
    </h1>
    <button @click="c++">c++ {{c}}</button>
    <div>
        {{ name }}
        <br>
        <h2>
            {{ title }}
        </h2>
    </div>
  </div>
</template>

<script>
export default {
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },
    async asyncData({$axios, $store}){
        const response = await $axios.$get(
            "https://jsonplaceholder.typicode.com/todos/1"
        )
        return {
            title: response.title
        }
    },
    fetch() {
        console.log('fetch hook!')
    },
    middleware(){
       console.log('middleware'); 
    },
    data(){
        return{
            name: 'ali',
            c: 0
        }
    },
}
</script>
<style>
  a {
    text-decoration: none;
  }
</style>