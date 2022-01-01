<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  main {
    background: grey;
  }
</style>
