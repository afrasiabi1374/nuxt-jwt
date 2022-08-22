<template>
    <div>

        <event-child-nested></event-child-nested>
        <hr/>
        <p>EMIT event child</p>
        <button @click="submit">submit</button>
    </div>
</template>

<script>
export default {
    methods: {
        submit(){
            this.$emit("onSuccess", new Date())
        }
    }
}
</script>

<style>

</style>