<template>
  <div class="main">
   <div class="box_L">
     <div class="box_S"><img src="" alt="분리수거"></div>
     <div class="box_S"><img src="" alt="나눔"></div>
     <div class="box_S"><img src="" alt="정보공유"></div>
     <div class="box_S"><img src="" alt="쓰레기통"></div>
     
   </div>
  </div>
</template>

<script>
export default {
  name: 'mainArea',
  props: {
    msg: String,
  }
}
</script>

<style scoped>
  

.box_L{
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
  width: 80%;
  height: 20em;
  border: 1px solid red;
  
}

.box_S{
  display: inline-block;
  border: 1px solid black;
  width: 50%;
  height: 50%;
  
}


</style>
