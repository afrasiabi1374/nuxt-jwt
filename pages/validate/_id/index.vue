<template>
  <div>
    <h1>
        validate
    </h1>
  </div>
</template>

<script>
export default {
    name: "index",
    validate({ params, error }){
        error({ statusCode: 500, message: 'خطای ولیدیشن پانصد رخ داده است .' })
        return /^\d+$/.test(params.id)
    }
}
</script>

<style>

</style>