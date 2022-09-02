<template>
    <div>
        <!--  هست i18n مال localePath  -->
        <nuxt-link :to="localePath({ name: 'crud-create' })"> create </nuxt-link>
        <views-crud-filter-form @onSubmit="service"></views-crud-filter-form>
        <template v-if="isEmpty">
            <div>
                لیست خالیه برادر
            </div>
        </template>
        <template v-if="$fetchState.pending">
            <div>loading...</div>
        </template>
        <template v-else>
            <div v-for="item in posts" :key="item.id" :class="['post-item', loading ? 'post-item--loading' : '']">
                <div>
                    <div class="post-item--title">{{ item.title }}</div>
                    <div class="post-item--body">{{ item.body }}</div>
                </div>
                <div>
                    <nuxt-link :to="localePath({ name: 'crud-update-id', params: { id: item.id } })">update</nuxt-link>
                </div>
                <div @click="deleteItem(item.id)">
                    delete
                </div>
            </div>
        </template>

    </div>
</template>
<script>
export default {
    name: 'CrudIndex',
    fetch(){
        return this.service()
    },
    data(){
        return {
            posts:[],
            loading: false
        }
    },
    methods:{
        async service(params={}){
            this.loading = true
            this.posts = await this.$axios
            .$get('https://jsonplaceholder.typicode.com/posts', {params})  
            this.loading = false 
        },
        deleteItem(id){
            this.$axios.$delete("https://jsonplaceholder.typicode.com/posts/"+id).then(()=>{
            // از اسپلایس یا فیلتر هم میشه استفاده کرد
            // اگه پجینیشن داریم فچ رو رفرش کنیم البته در حالت عادیم میشه
            this.posts = this.posts.filter(item => item.id !== id)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
    },
    computed: {
        isEmpty(){
            return !this.loading && !this.$fetchState.pending && this.posts.length === 0
        }
    }
}
</script>
<style scoped lang="scss">
    .post-item {
        padding: 2rem;
        margin: 2rem;
        border: 1px solid gray;
        display: flex;
        justify-content: space-between;

        &--title {
            color: gray;
        }
        &--body {
            margin-top: 2rem;
            color: dimgray;
        }
    }

.post-item--loading{
    opacity: .2;
}
</style>