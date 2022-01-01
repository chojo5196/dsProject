<template>
  <div class="main">
   <div class="box_L">
     <div class="box_S"><img src="./../assets/fine.jpeg" alt="분리수거"></div>
     <div class="box_S"><img src="./../assets/fine.jpeg" alt="나눔"></div>
     <div class="box_S"><img src="./../assets/fine.jpeg" alt="정보공유"></div>
     <div class="box_S"><img src="./../assets/fine.jpeg" alt="쓰레기통"></div>
     
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
  /* margin-right: 0; */
  margin-bottom: 10%;
  width: 80%;
  height: 500px;
  border: 1px solid red;
  overflow: hidden;
}

.box_S{
  
  border: 1px solid black;
  position: relative;
  width: 50%;
  height: 50%;
  float: left;
  
  
}

img{
  width: 50%;
}


</style>
