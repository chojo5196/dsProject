<template>
  <div id="app">
    <topNav/>
    <router-view/>
  <div class="main">
    <div class="btn-wrap">
      <div class="btn-con">
         <div><router-link to="/community" ><img class="img-btn" src="./assets/icon5.png" alt=""></router-link></div> 
         <div><router-link to="/recycle" ><img class="img-btn" src="./assets/icon2.png" alt=""></router-link></div> 
         <div><router-link to="/share" ><img class="img-btn" src="./assets/icon4.png" alt=""></router-link></div> 
         <div><router-link to="/map" ><img class="img-btn" src="./assets/icon3.png" alt=""></router-link></div> 
      </div>
    </div>
    <div class="footer">
   
    <div class="line">
     <ul>
       <li><router-link to="/join" >회원가입</router-link></li>
       <li><router-link to="/login" >로그인</router-link></li>
       <li>testing</li>
     </ul>
    </div>
  </div>
   <!-- <router-view/> -->
  </div>
  </div>
</template>


<script>
import topNav from './components/topNav.vue'

// import footerBottom from './components/footerBottom.vue'


export default {
  name: 'App',
  components: {
    topNav,
    
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 100vh를 app으로 이동 */
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}



  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  .main{
    margin-left: 10%;
    margin-right: 10%;

    height: 100%;
    
    background: white;
    color: white;
    font-weight: bold;
  }

  .helper{
    /* width: 30px;
    background: red; */

    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }

  .btn-wrap {
    /* color: white;
    font-weight: bold;
    font-size: 100px;
    background: grey; */

    display: inline-block;
    vertical-align: middle;
    margin-top: 10%;
  }

  /* 두 개씩 보이게 크기 제한 */
  .btn-con {
    width: 500px;
    
    border: 5px dotted grey;
  }

  /* 하단부에 묘한 공백이 어디서 오는지 모르겠음 ㅜㅜ */
  .img-btn{
    cursor: pointer;

    /* 이미지사이즈 */
    width: 200px;
    height: 200px;
    float:left;
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

