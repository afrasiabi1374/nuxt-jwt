<template>
    <div class="init-counter-container">
        <p>home counter : {{counter}}</p>
        <p>init counter prop in home counter {{initialCounter}}</p>
        <button @click="counter++">counter++</button>
    </div>
</template>

<script>
export default {
    name: 'HomeCounter',
    props: {
        defaulltInitval:{
            type: Number,
            required: true
        },
        initialCounter: {
            type: Number,
            default() {
                return this.defaulltInitval
            }

        }
    },
    data() {
        return {
            counter: this.initialCounter
        }
    }
}
</script>

<style scoped>
    .init-counter-container {
        padding: 10px;
        background-color: lightcoral;
    }
</style>