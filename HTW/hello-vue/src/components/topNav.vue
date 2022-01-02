<template>
  <div class="top-nav">
    <div class="logo-con">
      <div class="logo-img" ></div>
     
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
    /* min-height: 100px; */
    max-height: 150px;

    background: white;
    border: 3px dashed black;
    position: fixed;
    top:0;
    z-index: 10;
  }

  .logo-con {
    display: inline-block;
    /* vertical-align: middle; */
    line-height: 50px;  
    vertical-align: middle;
  }

  .logo-img {

    background-image: url("../assets/logo1.png");
    background-size: cover;
    

    width: 30px;
    height: 30px;

    margin-top:50%;
    vertical-align: middle;
    cursor: pointer;
    
  }
</style>
