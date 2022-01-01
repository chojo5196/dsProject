<template>
  <div class="top-nav">
    <img src="./../assets/logo.png" alt="NOIMG" class="logo-img">
  </div>
</template>

<script>
export default {
  name: 'topNav',
  props: {
   
  }
}
</script>

<!-- scoped 설정 해주면 해당 컴포넌트에서만 적용되는 스타일 -->
<style scoped>
  .top-nav {
    width: 100%;
    height: 10%;
    /* height: 100px; */
    background: grey;
    position: fixed;
    line-height: 100%;
  }

  .logo-img {
    width: 50px;
    vertical-align: middle;
  }
</style>
