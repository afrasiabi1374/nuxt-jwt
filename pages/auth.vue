<template>
  <div>
      <h1>login page</h1>
      <h2 style="color: red"> {{ errorMessage }} </h2>
      <app-form ref="form" :on-submit="onSubmit">
        <div>
          <label>username : </label>
          <app-text-input
            v-model="username"
            :placeholder="$t('placeholder.default', [$t('username')])"
            name="username"
            rules="required"
          ></app-text-input>
        </div>
        <div>
          <label>password : </label>
          <app-text-input
            v-model="password"
            :placeholder="$t('placeholder.default', [$t('password')])"
            type="password"
            name="password"
            rules="required"
          ></app-text-input>
        </div>
        <button type="submit">
          submit
        </button>
      </app-form>
    </div>
  </template>
  <script>
    import AppTextInput from '@/components/ui/AppTextInput'
    import AppForm from '@/components/ui/AppForm'
    import { mapState } from 'vuex'
    export default {
      name: 'Auth',
      components: {
      AppForm,
      AppTextInput,
      },
      methods: {
      onSubmit() {
        this.$store
        .dispatch('login/submitLogin', { ref: this.$refs.form })
        .then((res) => {
            if (res === true) {
            this.$router.push('/')
            }
        })
      }
      },
      computed: {
        ...mapState("login", ['login', 'isLoading', 'errorMessage']),
        username: {
          get(){
            return this.login.username
          },
          set(value){
            this.$store.commit('login/SET_USERNAME', value)
          }
        },
        password: {
          get(){
            return this.login.password
          },
          set(value){
            this.$store.commit('login/SET_PASSWORD', value)
          }
        },
      }
    }
  </script>
  <style scoped></style>

  