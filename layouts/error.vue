<template>
  <div>
    <h1>ارور توی صفحه ارور سفارشی</h1>
    <h2>
        {{ error.statusCode }}
    </h2>
    <h2 style="color: tomato;">
        {{ error.message }}
    </h2>
  </div>
</template>

<script>
export default {
    name: "error",
    props: ['error']
}
</script>

<style>

</style>