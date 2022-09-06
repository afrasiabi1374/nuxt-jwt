<template>
    <div>
        <h1>
            vuex
        </h1>
        <div>
            counter: {{getCounter}}
        </div>
        <button @click="plusCounter">
            plus counter
            {{getLoading}}
        </button>
        <hr />
        <template v-if="getLoading">
            <h1>Loading...</h1>
        </template>
        <ul v-else>
            <li v-for="item in getData" :key="item.id">
                {{item.title}}
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    name: 'Vuex',
    fetch(){
        console.log(13744444);
        return this.$store.dispatch('fetchData')
    },
    computed: {
        getCounter() {
            return this.$store.state.counter
        },
        getData() {
            return this.$store.getters.getData
        },
        getLoading() {
            return this.$store.getters.getLoading
        }
    },
    methods:{
        plusCounter(){
            // this.$store.commit('INCREMENT_COUNTER', 5)
            this.$store.dispatch("incrementCounter", 80)
        }
    }
}
</script>
<style lang="scss">


</style>
