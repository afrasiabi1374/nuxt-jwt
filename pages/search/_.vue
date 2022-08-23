<template>
    <div>
        <button @click="pushQuery">
            Push Query
        </button>
        <button @click="appendQuery">
            Append Query
        </button>
        <h2>
            search page
        </h2>
        <nuxt-link :to="{name: 'product-slug', params: {slug:'Samsong-Note-10'}}">
            go to product
        </nuxt-link>
        <h3>
            param:
            {{$route.params}}
        </h3>
        <br>
        <h3>
            {{getParams}}
        </h3>
        <br>
        <h3>
            query:
            {{$route.query}}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'search',
    computed:{
        getParams(){
            return this.$route.params.pathMatch.split('/')
        }
    },
    // mounted(){
    //     console.log('infinite params ==>>',this.$route.params);
    //     setTimeout(() => {
    //         this.$router.push({name: 'product-slug', params: {slug:'Samsong-Note-10 ریدایرکت شدیم از سرچ به پروداکت'}})
    //     }, 5000);
    // },
    methods:{
        pushQuery(){
            // this.$router.replace({
            //     query: {search_key: 'samsong', brand_id: 1}
            // })
            this.$router.push({
                query: {search_key: 'SAMSONG', slugs: ['slug_A', 'slug_B']}
            })
        },
        appendQuery(){
            this.$router.push({
                query: {...this.$route.query, a: 'aaaaaa'}
            })            
        }
    }
}
</script>

<style>

</style>