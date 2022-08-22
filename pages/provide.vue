<template>
    <div>
        <provide-child></provide-child>
        <button @click="count++">plus plus {{count}}</button>
    </div>
</template>

<script>
export default {
    provide(){
        return {
            count: this.count
        }
    },
    data(){
        return {
            count: 0
        }
    }

}
</script>

<style>

</style>