<template>
  <div id="app">
    <topNav/>
    
    <router-view/>
 <main/>
      
    
   
    <div class="footer">
     <ul>
       <li><router-link to="/join" >회원가입</router-link></li>
       <li><router-link to="/login" >로그인</router-link></li>
       <li>testing</li>
     </ul>
    </div>
  
   <!-- <router-view/> -->
  </div>
  
</template>


<script>
import topNav from './components/topNav.vue'
import main from './components/main.vue'

// import footerBottom from './components/footerBottom.vue'


export default {
  name: 'App',
  components: {
    topNav,main
    
    
  }
}
</script>

<style>
@font-face {
    font-family:"NotoSansKR";
    src: url("/assets/fonts/Lato/Lato-Light.ttf")format("ttf");
    unicode-range: U+0041-005A, U+0061-007A;
    font-style: normal;
    font-weight: 300;
}

@font-face {
  font-family: "NotoSansKR";
  src: url("/assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf")format("otf");
  font-style: normal;
  
} 

* {
  margin: 0;
  padding: 0;
  background-color: #fdfcfb;
  font-family:"Noto Sans KR", sans-serif;
  
}





/* 100vh를 app으로 이동 */
#app {
  height: 100vh;
  font-family:"Noto Sans KR", sans-serif;
  text-align: center;
  color: #fdfcfb;
  overflow: unset;
}

  

  .helper{

    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  

  /* 하단부에 묘한 공백이 어디서 오는지 모르겠음 ㅜㅜ */
  .img-btn{
    cursor: pointer;

    display: inline-block;
    /* 이미지사이즈 */
    width: 200px;
    height: 200px;
    margin: 20px;
    
    /* background 이미지로 넣는경우 */
    /* background-image: url("../assets/icon1-1.png");
    background-size: cover;
    background-position: center center; */

    /* background: pink; */
    /* border: 3px dashed purple; */
  }

  .img-btn:nth-child(2n-1) {
    margin-right: 4%;
  }

  .img-btn:nth-last-child(1),
  .img-btn:nth-last-child(2)
  {
    margin-top: 4%;
  }
/* 
  .footer{
    width: 100%;
    height: 5em;
    line-height: 5em;

    position:fixed;
    bottom: 0;

    background: white;
    border: 3px dashed black;

    font-weight: bold;
  }*/

  ul {
    list-style: none;
    padding-right: 0;
    cursor: pointer;
    color:black;
    position:fixed;
    bottom: 0;
  }

  li {
    display: inline-block;
  }

  li:not(:last-child) {
    margin-right: 5%;
    
  } 


</style>

