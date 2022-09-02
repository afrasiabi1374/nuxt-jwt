<template>
    <div>
        <!--  هست i18n مال localePath  -->
        <nuxt-link :to="localePath({ name: 'crud-create' })"> create </nuxt-link>
        <views-crud-filter-form @onSubmit="service"></views-crud-filter-form>
        <div v-for="item in posts" :key="item.id" class="post-item">
            <div>
                <div class="post-item--title">{{ item.title }}</div>
                <div class="post-item--body">{{ item.body }}</div>
            </div>
            <div>
                <nuxt-link :to="localePath({ name: 'crud-update-id', params: { id: item.id } })">update</nuxt-link>
            </div>
        </div>
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
            posts:[]
        }
    },
    methods:{
        async service(params={}){
            this.posts = await this.$axios
            .$get('https://jsonplaceholder.typicode.com/posts', {params})   
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
</style>