<template>
  <div>
    <h1>
        Life cycle
    </h1>
    <button @click="c++">c++ {{c}}</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            c:0
        }
    },
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
    }
}
</script>
<style>
  a {
    text-decoration: none;
  }
</style>