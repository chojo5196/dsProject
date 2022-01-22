<template>
    <div class="mainp">
         <div class="com"><router-link to="/community" ><h1>C O M M U N I T Y</h1></router-link></div> 
         <div class="recy"><router-link to="/recycle" ><h1>R E C Y C L E</h1></router-link></div> 
         <div class="sh"><router-link to="/share" ><h1>S H A R E</h1></router-link></div> 
         <div class="mp"><router-link to="/map" ><h1>M A P</h1></router-link></div>
        
      </div>
</template>
<script>
export default {
    name: 'main'
}
</script>
<style scoped>
    .mainp{
    margin-left: 10%;
    margin-right: 10%;
    height: 100%;
    font-family:"Noto Sans KR", sans-serif;
  }
</style>