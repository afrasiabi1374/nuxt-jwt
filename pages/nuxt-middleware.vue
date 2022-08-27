<template>
    <div>
        <h1>
            nuxt middleware
        </h1>
    </div>
</template>
<script>
export default {
    name: 'nuxtMiddleware',
    // middleware: ['auth']
    fetch(){
        return new Promise((resolve) => {
            setTimeout(()=>{
                console.log("fetch resolved")
                resolve(true)
            }, 3000)
        })
    }
}
</script>
<style>

</style>