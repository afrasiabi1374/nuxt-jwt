<template>
  <div>
        <h2>methods</h2>
        <h3>
            getComputedCount : {{getComputedCount}}
        </h3>
        <h3>
            getComputedCountMethods : {{getComputedCountMethods()}}
        </h3>

        <div class="dad" @click="updateCounter">
            click to update counter {{count}}
            <div class="child" @click.stop="updateCounterChild">
                click to update counter minus minus {{count}}
            </div>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        updateCounter(){
            console.log(this.count, 'update counter!');
            this.count++
            alert('dad called!')
        },
        updateCounterChild(){
            console.log(this.count, 'update counter ---- child!');
            this.count--
        },
        getComputedCountMethods(){
            console.log('getComputedCountMethods');
            return this.count + 2
        }
    },
    computed: {
        getComputedCount(){
            console.log('getComputedCount');
            return this.count+2
        }
    },
    data(){
        return {
          count: 1  
        }
    }
}
</script>

<style>
    .dad {
        background-color: aqua;
        padding: 10px;
    }
    .child {
        background-color: green;
        padding: 5px;
    }
</style>