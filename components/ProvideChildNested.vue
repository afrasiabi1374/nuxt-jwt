<template>
  <div>
    <h2>provide child NESTED!</h2>
    <h3>
        count is : {{count}}
    </h3>
  </div>
</template>

<script>

export default {
    inject: ['count']
}
</script>

<style>

</style>