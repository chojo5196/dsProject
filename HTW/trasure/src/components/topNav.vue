<template>
  <div class="top-nav">
    <!-- 이 친구는 붙여서 두는게 맞아용! -->
    <div class="logo-con"><div class="helper"></div>
      <div class="logo-img"></div>
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
    /* position */
    position: fixed;
    top:0;
    /* z-index: 10; */
    
    /* size */
    width: 100%;
    height:5cd;
  }

  /* vertical-align */
  .logo-con {
    height: 100%;
    display: inline-block;
  }

  .helper {
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  /* logo */
  .logo-img {
    width: 30px;
    height: 30px;
    background-image: url("./../assets/logo2.png");
    background-size: cover;

    display: inline-block;
    vertical-align: middle;

    cursor: pointer;
  }
</style>
