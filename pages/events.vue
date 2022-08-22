<template>
    <div>
        <event-child @onSuccess="onSuccess"></event-child>
    </div>
</template>

<script>
export default {
    name: 'events',
    methods: {
        onSuccess(param){
            console.log('success on emit =>', param);
        },
        busHandler(param){
            console.log("onDelete called! => ", param)
        }
    },
    mounted(){
        this.$nuxt.$on('onDelete', this.busHandler)
    },
    beforeDestroy(){
        this.$nuxt.$off('onDelete', this.busHandler)
    }
}
</script>

<style>

</style>