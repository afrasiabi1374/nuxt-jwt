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
        error({ statusCode: 500, message: '.خطای ولیدیشن پانصد رخ داده است ' })
        return /^\d+$/.test(params.id)
        // ولیدین فالس بشه اجازه نمیده مابقی متدا اجرا بشه خروجیش بولیه
    },
    asyncData(){
      console.log("asyncData executed! at validate method!")
    }
}
</script>

<style>

</style>