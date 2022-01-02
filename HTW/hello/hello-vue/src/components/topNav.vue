<template>
  <div class="top-nav">
    <div class="logo-con">
      <img src="./../assets/logo.png" alt="NOIMG" class="logo-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNav',
}
</script>

<!-- scoped 설정 해주면 해당 컴포넌트에서만 적용되는 스타일 -->
<style scoped>
  .top-nav {
    position: fixed;
    top:0;
    
    width: 100%;
    height: 10%;
    min-height: 100px;
    max-height: 150px;

    background: grey;
    position: fixed;
    z-index: 10;
  }

  .logo-con {
    display: inline-block;
    line-height: 100px;  
  }

  .logo-img {
    width: 50px;
    vertical-align: middle;
    cursor: pointer;
  }
</style>
