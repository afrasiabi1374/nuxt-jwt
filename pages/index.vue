<template>
  <div>
    <home-counter :defaulltInitval="10"></home-counter>
    <button @click="initial++" >update prop {{initial}}</button>
    <p>
      <nuxt-link to="/life">LifeCycles</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/events">emit</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/product/Samsong-Galaxy-S8">router param</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/search/ali/reza/samsong?user=ali.ali2">infinite route</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/NuxtFetch">NuxtFetch and error handling</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/SearchTodo">
        SearchTodo
      </nuxt-link>
    </p>
    <p>
      <nuxt-link :to="{name: 'nuxt-middleware'}">nuxt middleware</nuxt-link>
    </p>
    <p>
      <nuxt-link to="/validate/414">nuxt Vlidate life-cycle<span style="color: green;"> Custom ERROR</span></nuxt-link>
    </p>
    <p>
      <nuxt-link to="/validate/12ali">nuxt Vlidate life-cycle <span style="color: red;">Default ERROR</span></nuxt-link>
    </p>
    <p>
      <nuxt-link to="/form"><b>پروژه اول</b>  </nuxt-link>
    </p>
    <p>
      <nuxt-link to="/plugin">
        <b>
          plugin
        </b>
      </nuxt-link>
    </p>    
    <p>
      <nuxt-link to="/VeeValidatePage">veevalidate خام</nuxt-link>
    </p>
    <p>
  
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      initial: 4,
      list: []
    }
  }
}
</script>

