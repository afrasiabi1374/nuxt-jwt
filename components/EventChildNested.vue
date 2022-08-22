<template>
    <div>
        <hr/>
        <h2>
            event child nested deep btn
        </h2>
        <button @click="submit">
            click from deep component!
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        submit(){
            setTimeout(() => {
                this.$nuxt.$emit("onDelete", "delete param")
            }, 1000);
        }
    }
}
</script>

<style>

</style>