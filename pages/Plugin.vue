<template>
  <div>
    <h1>plugin</h1>

  </div>
</template>

<script>
export default {
    name: 'plugin',
    fetch(){
        console.log("use inject at fetch hook")
        this.$myTestPlugin.test()
    },
    asyncData({$myTestPlugin}){
        console.log("use inject at asyncData hook")
        $myTestPlugin.test()
    }
}
</script>

<style>

</style>