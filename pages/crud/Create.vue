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
  name: "Create",
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
      const cc = { ref: this.$refs.form }
      this.$api._post('/post', {}, { cc })
      .then(()=>{})

      // .then((response)=>{
      //   // ریکوست اومد فرم ریست میشه.
      //   this.form.title = '',
      //   this.form.body = '',
      //   this.form.userId = ''
      //   // متد ریست ارور وی ولیدیت
      //   this.$refs.form.reset()
      //   this.response = response
      // })
    }
  }
}
</script>

<style>

</style>