<template>
  <div>
    <h2>search-todo</h2>
    <input type="text" @input="onInput" :value="title"/>
    <p v-if="loading">
        loading...
    </p>
    <ul class="todo-title" v-else>
        <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'SearchTodo',
    data(){
        return {
            title: '',
            list: [],
            loading: 0
        }
    },
    methods: {
        onInput(e){
            this.title = e.target.value
            this.service()
        },
        service(){
            if (this.source) {
                this.source.cancel("cancel by user")
            }
            this.source = this.$axios.CancelToken.source()
            this.loading++
            return this.$axios
            .$get("https://jsonplaceholder.typicode.com/todos", {
                cancelToken: this.source.token,
                params:{
                    title_like: this.title 
                }
            })
            .then((response) => {
                this.list = response
                this.loading--
            }).catch((e) => {
                this.loading--
                console.log(e)
            })
        }
    },
    fetch(){
        return this.service()
    }
}
</script>

<style>
    .todo-title{
        opacity: 0;
        animation-name: fadeAnim;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    @keyframes fadeAnim {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>