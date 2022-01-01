<template>
  <div class="top-nav">
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
  .top-nav {
    color: red;   
  }
</style>
