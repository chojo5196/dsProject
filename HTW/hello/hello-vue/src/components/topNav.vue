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

<!-- scoped 설정 해주면 해당 컴포넌트에서만 적용되는 스타일 -->
<style scoped>
  .top-nav {
    color: red;
    background: grey;
  }
</style>
