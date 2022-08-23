<template>
  <div>
    <h1>ref-parent</h1>
    <ref-parent-child ref="myRef"></ref-parent-child>
    <button @click="resetChild">reset from parent</button>
    <hr/>
    <ref-parent-child></ref-parent-child>
    <div>
      <span>
        parent count {{ parentCount }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ref',
  data(){
    return {
      parentCount: 0
    }
  },
  methods: {
    resetChild(){
      console.log('refs value ==>>', this.$refs.myRef);
      this.$refs.myRef.reset()
    }
  }
}
</script>

<style>

</style>