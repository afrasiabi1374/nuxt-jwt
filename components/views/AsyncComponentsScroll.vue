<template>
    <div>
        with scroll event.
    </div>
</template>
<script>
   export default {
        name: 'AsyncComponentsScroll',
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            handleScroll(event){
                console.log('event scroll is : ', event)
            }
        }
   }
</script>
<style>

</style>