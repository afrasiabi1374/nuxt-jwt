<template>
  <div>
    <h1>ERROR!</h1>
  </div>
</template>

<script>
export default {
  name: 'error',
  asyncData({$api}){
    // به این دلیل داخل فچ نمینویسیم چون باعث میشه بره توی خارج از لی اوت ارورمون
    return $api._get('/posts')
    .then((res)=>{
      console.log('res ',res);
    })
  }
}
</script>

<style>

</style>