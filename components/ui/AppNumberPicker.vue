<template>
  <div>
    <button @click="minus">minus--</button>
        {{value}}
    <button @click="plus">plus++</button>
  </div>
</template>

<script>
export default {
    name: 'appNumberPicker',
    props:{
        value:{
            type: Number,
            required: true,
        },
        minValue:{
            type: Number,
            default: 0
        }
    },
    methods:{
        plus(){
            this.$emit("change", this.value + 1)
        },
        minus(){
            if (this.value-1 >= this.minValue) {
                this.$emit("change", this.value - 1)
            }
        }
    },
    model:{
        prop: 'value',
        event: 'change'
    }

}
</script>

<style>

</style>