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
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      initial: 4
    }
  }
}
</script>

