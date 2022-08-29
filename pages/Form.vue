<template>
  <div>
    <h1>form</h1>
    <div v-if="response.title&&response.body">
      <div>title:</div>
      <div>{{response.title}}</div>
      
      <div>body:</div>
      <div>{{response.body}}</div>      
    </div>
    <hr />
    <ui-app-form :on-submit="onSubmit" ref="form">
      <div>
        <label>title : </label>
        <ui-app-text-input
          v-model="form.title"
          :placeholder="$t('placeholder.default', [$t('title')])"
          name="title"
          rules="required"
        >
        </ui-app-text-input>
      </div>
      <div>
        <label>body : </label>
        <ui-app-text-input
          v-model="form.body"
          name="body"
          rules="required"
        >
        </ui-app-text-input>      
      </div>
      <div>
        <label>user id : </label>
        <ui-app-text-input
          v-model="form.userId"
          type="number"
          name="userId"
          rules="required"
        >
        </ui-app-text-input>      
      </div>
      <button type="submit">submit form</button>
    </ui-app-form>
  </div>
</template>

<script>
  export default {
  name: "Form",
  data() {
    return {
      form: {
        title: '',
        body: '',
        userId: ''
      },
      response: {title:'', body: ''}
    }
  },

  methods:{ 
    onSubmit(){
      this.$axios
      .$post('https://jsonplaceholder.typicode.com/posts', this.form)
      .then((response)=>{
        this.response = response
        // ریکوست اومد فرم ریست میشه.
        this.form.title = '',
        this.form.body = '',
        this.form.userId = ''
        this.$refs.form.reset()
      })
      .catch((e)=>{
        console.log(e)
      })
    }
  }
}
</script>

<style>

</style>