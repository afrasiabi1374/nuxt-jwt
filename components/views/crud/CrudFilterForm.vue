<template>
    <ui-app-form ref="form" :on-submit="onSubmit">
        <div
        style="
            display: flex;
            justify-content: space-between;
            max-width: 30%;
            margin: 40px;"
        >
        <div>
            <label>title : </label>
            <ui-app-text-input
            v-model="form.title"
            placeholder="please enter title..."
            name="title"
            ></ui-app-text-input>
        </div>
        <div>
            <label>body : </label>
            <ui-app-text-input
            v-model="form.body"
            placeholder="please enter body..."
            name="body"
            ></ui-app-text-input>
        </div>
        <div style="padding-top: 26px">
            <button style="padding: 10px" type="submit">search</button>
        </div>
        </div>
    </ui-app-form>
</template>
<script>
export default {
    name: 'CrudFilterForm',
    data(){
        return {
            form: {
                title: '',
                body: ''
            }
        }
    },
    methods:{

        onSubmit(){
            this.$emit('onSubmit', {
                title_like: this.form.title,
                body_like:  this.form.body
            })
        }
    }
}
</script>
<style>

    input {
        padding: 10px;
        margin-top: 0px;
    }
    
</style>
