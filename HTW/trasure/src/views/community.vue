<template>

    <div class="top">

        <h1>정보공유</h1>
          <modal-view />
            <input id="formField" name="hashTag" v-model="inputValue" type="text" @keyup.enter="addHashtag"><br>
        <div class="hash-area">
            <div class="button-area">
                <span v-for="(btn, idx) in hash" :key="idx">
                    <button>{{ btn }}</button> 
                </span>
            </div>
        </div>

        
        <div class="container">
          <div class="images">
              <div class="imageFlex1">
                  <div v-for="(ctt, idx) in contentDiv1" :key="idx">
                      <contents-box :sign="ctt" />
                  </div>
              </div>
          </div>
          <div class="images">
              <div class="imageFlex2">
                  <div v-for="(ctt, idx) in contentDiv2" :key="idx">
                      <contents-box :sign="ctt" />
                  </div>
              </div>
          </div>
          <div class="images">
              <div class="imageFlex3">
                  <div v-for="(ctt, idx) in contentDiv3" :key="idx">
                      <contents-box :sign="ctt" />
                  </div>
              </div>
          
          </div>
        
        </div>
        

        <div class="edit">
        <input type="text" class="search">
        <button class="button">#</button>
        <button class="button">글쓰기</button>
        </div>
        
        <div id="paperG" class="paperG">
        
        <div class="container">
          <div class="images">
            <div class="imageFlex1">
              <img src="https://i.pinimg.com/474x/32/c1/40/32c1400e46940ce2849b40dd10effb0e.jpg">
              <img src="https://i.pinimg.com/474x/51/52/d2/5152d2727164109da2099e47fb3a61f0.jpg">
              <img src="https://i.pinimg.com/474x/14/6d/18/146d1851ebe03a654de39d5fc9c88934.jpg">
              <img src="https://i.pinimg.com/474x/50/da/aa/50daaa6a9b6682077779dbee7223a5df.jpg">
              <img src="https://i.pinimg.com/474x/e1/f6/9b/e1f69b2d6f1976713a08c9292b62a56e.jpg">
              <img src="https://i.pinimg.com/474x/d2/a1/73/d2a17327f1e80374667e0a81d9e67de9.jpg">
            </div>
          </div>
          <div class="images">
            <div class="imageFlex2">
              <img src="https://i.pinimg.com/474x/0b/30/9c/0b309c0db693f2657b713f63a044d695.jpg">
              <img src="https://i.pinimg.com/474x/2d/13/84/2d1384d932320cc48218565e1aafc1e3.jpg">
              <img src="https://i.pinimg.com/474x/26/1f/8f/261f8f18aff4f91f7b7ee964107a8958.jpg">
              <img src="https://i.pinimg.com/474x/21/0d/27/210d27ca44e9844372a765eff63da4c5.jpg">
            </div>
          </div>
          <div class="images">
            <div class="imageFlex3">
              <img src="https://i.pinimg.com/474x/0c/f6/74/0cf6741afe59c9d0ba654aadb757e08e.jpg">
              <img src="https://i.pinimg.com/474x/ef/b5/1f/efb51f62100932fb2ee07efaa52c3293.jpg">
              <img src="https://i.pinimg.com/474x/2f/9f/01/2f9f01c17c855a71e9808f5fb9786ec7.jpg">
              <img src="https://i.pinimg.com/474x/2d/67/2f/2d672ffbe3c472bb66e43900783ccbe0.jpg">
              <img src="https://i.pinimg.com/474x/8a/ff/f0/8afff0aa570409805241058309f3d14b.jpg">
              <img src="https://i.pinimg.com/474x/7c/46/e7/7c46e71a5be222e82237319c9e80c4df.jpg">
            </div>
          </div>
        </div>
        </div>

    </div>
    
    
    
    
</template>

<script>
import contentsBox from '../views/contents-box.vue'
import data from '../assets/communityData.json'
import modalView from './modal-view.vue'



  export default {
    components: { contentsBox, modalView },
    name:'community',
      data() {
        return {
            inputValue: "",
            hash: data.hashTag,
            contentDiv1: data.data[0],
            contentDiv2: data.data[1],
            contentDiv3: data.data[2]
          }
      },
      methods: {
        addHashtag() {
          if(this.inputValue != "") {
            this.hash.push("#" + this.inputValue);
                this.inputValue = "";
              }
          }
    }
}


  // 샘플 데이터 생성
  function pushData(n) {
    // 샘플 텍스트
    let text = data.text;

    // 1차 랜덤 : 랜덤 숫자 간격 차이를 더 두기 위해서!
    // 샘플 텍스트 길이가 너무 비슷해..
    let textArr = [];
    let textSum = 0;
    for(let i = 0; textSum < text.length; i++ ) {
      let random = Math.round( Math.random() * 10*i );
      textArr[i] = random;
        textSum += random;
    }

    // 샘플 데이터 생성 - ../assets/communityData.json에 넣게되어있음
    // 1차 랜덤 숫자만큼 샘플 텍스트 자르기
    for(let j = 0; j < 3; j++) {
      for(let i = 0; i < n; i++) {
        let random = Math.round( Math.random() * textArr.length );
        
        data.data[j][i] = {};
        data.data[j][i].id = i+j;
        data.data[j][i].title = "sample" + i+j;
        data.data[j][i].contents = i+j + text.substr(0, textArr[random]);
        data.data[j][i].author = "User" + i+j;
        
        // 링크 호출만 하면 랜덤 이미지 생성됨
        data.data[j][i].src = "https://source.unsplash.com/random";
        data.data[j][i].goodPoint = (i+1)*(j+1);
      }
    }
    
  }
  // 샘플 데이터 생성
  pushData(20);

</script>

<style scoped>

 *{
   margin:0;
    padding:0;
    box-sizing: border-box;
  }

  
 
.top{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;

    height: 100%;
    width: 80%;
}

/* 성진 작성 구역 */

.button-area button {
    display: inline-block;
    margin: 0 2px;
}
/* .wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}

.content-wrap {
  display: flex;
  flex-wrap: wrap;
} */
/* 성진 작성 구역 */


.edit{
    
      top:5%;
      margin-right:10% ;
      position: fixed;
      background-color: #D9CAB3;
      width: 80%;
      height: auto;
      overflow: hidden;
      padding: 5px;
      
}
.search{
padding: 5px;
}

.button{
  padding: 5px;   
}

body {
  margin: 0;
}

h1 {
  text-align: center;
}

.paperG{
  margin-top: 10%;
  overflow: scroll;
}

.container {
  width: 95%;
  margin: auto;
  
}

.images {
  width: 100%;
  height: auto;
}

.images img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
  
@media (min-width: 640px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    grid-auto-flow: row dense;
  }
  .imageFlex1 {
    display: grid;
    row-gap: 20px;
  }
  .imageFlex2 {
    display: grid;
    row-gap: 20px;
  }
  .imageFlex3 {
    display: grid;
    row-gap: 20px;
  }
  
}

.none {
  display: none;
}

</style>
