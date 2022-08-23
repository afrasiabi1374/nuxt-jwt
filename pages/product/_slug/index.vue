<template>
    <div>
        <h1>
            product 
        </h1>
        <h3>slug is : {{ $route.params.slug }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Product',
    mounted(){
        console.log('route params ==>>>',this.$route.params);
    }
}
</script>

<style>

</style>