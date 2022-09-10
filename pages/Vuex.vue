<template>
    <div>
        <h1>
            vuex
        </h1>
        <div>
            {{getTitle}}
        </div>
        <hr/>
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
            <li  @click="clickItem(item)" v-for="item in getData" :key="item.id">
                {{item.title}}
            </li>
        </ul>

    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Vuex',
    fetch(){
        console.log(13744444);
        return this.$store.dispatch('albums/fetchData')
    },
    computed: {
        ...mapGetters('albums', ['getLoading', 'getData', 'getItemById']),
        getCounter() {
            return this.$store.state.counter
        },
        getTitle () {
            return this.getItemById(this.activeId)
        }
    },
    methods:{
        plusCounter () {
            // this.$store.commit('INCREMENT_COUNTER', 5)
            this.$store.dispatch("incrementCounter", 80)
        },
        clickItem (item) {
            this.activeId = item.id
        }
    },
    data () {
        return {
            activeId: null
        }
    },
    watch: {
        activeId (val) {
            console.log(val);
        }
    }
}
</script>
<style lang="scss">


</style>
