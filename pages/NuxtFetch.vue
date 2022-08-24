<template>
  <div>
    <h1>
        nuxt fetch and error handling
    </h1>
    <h3 v-if="$fetchState.pending">
      loading...
    </h3>
    <p v-else-if="$fetchState.error">
      {{ $fetchState.error.message }}
    </p>
    <h3 v-else>
      fetch response : {{title}}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NuxtFetch',
  fetch(){
    // this.loading = true
    return this.$axios.$get("https://jsonplaceholder.typicode.com/todos/0")
    .then((response) => {
      this.title = response.title
      // this.loading = false
    }).catch((e) => {
      // console.log('response =>>>>', e.response);
      const statusCode = e?.response?.status || 500
      const message = e?.response?.statusText || 'متاسفانه یه دونه اروری رخ داده'
      if (process.server) {
        this.$nuxt.context.res.statusCode = statusCode
      }

      // راه اول اختصاصی ناکست
      // this.$nuxt.error({ statusCode: statusCode, message: message })
      // console.log(e)
      // this.loading = false

      // راه دوم اختصاصی خودمون گوشه صفحه میریزه توی فچ استیت 
      throw new Error(`${message} (${statusCode})`)
    })
  },
  data() {
    return {
      title: '',
      // loading: false
    }
  }
}
</script>

<style>

</style>