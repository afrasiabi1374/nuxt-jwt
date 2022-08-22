<template>
  <div>
    <h1>watcher</h1>
    <button @click="count++">plus {{count}}</button>
    <button @click="changeObject">plus changeObject {{myObject.child.a}}</button>
    <div>
        <br/>
        myObject value is ==>> {{myObject.child.a}}
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            count: 0,
            myObject: {
                child: {
                    a: 1
                }
            }
        }
    },
    watch:{
        // count(val, oldVal){
        //     console.log("old val=>", oldVal, "value =>", val)
        // }
        //////////
        // 'myObject.child.a'(value, oldValue){
        //     console.log('value => ', value)
        // }
        count:{
            handler(value, oldValue){
                console.log("old val => ", oldValue, "value => ", value)
            },
            immediate: true
        },
        myObject: {
            handler(value){
                console.log('value of object value.child.a =>', value.child.a)
            },
            deep: true
        }
    },
    methods:{
        changeObject(){
            this.myObject.child.a++
        }
    }
}
</script>

<style>

</style>