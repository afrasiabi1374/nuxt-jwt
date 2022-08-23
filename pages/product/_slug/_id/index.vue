<template>
    <div>
        <h1>
            pro by ID
        </h1>
    </div>
</template>

<script>
export default {
    name: 'ProductID',
    data() {
        return {

        }
    },
    mounted(){
        console.log(this.$route.params)
    }
}
</script>

<style>

</style>