<template>
  <div>
    <div v-if="$fetchState.pending">
      <h1>LOADING ...</h1>
    </div>
    <div v-else-if="list.length > 0">
      <h1>ERROR!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  data(){
    return {
      list:[]
    }
  },
  // asyncData({$api}){
  //   // به این دلیل داخل فچ نمینویسیم چون باعث میشه بره توی خارج از لی اوت ارورمون
  //   return $api._get('/posts')
  //   .then((res)=>{
  //     console.log('res ',res);
  //   })
  // }
  fetch(){
    return this.$api._get('/posts')
    .then((res)=>{
      console.log('res ',res)
      if (res !== undefined) {      
        console.log('res is OK!',res)  
        this.list = res
      }
    })
  }
}
</script>

<style>

</style>