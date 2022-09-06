<template>
    <div>
        <h1>
            mixins
        </h1>
        {{ a }} is value  in mixins
    </div>
</template>
<script>
    import myTestMixin from '@/mixins/myTestMixin'
    export default {
        name: 'Mixins',
        mixins:[
            myTestMixin
        ]
    }
</script>
<style scoped>

</style>