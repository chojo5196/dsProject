<template>  
  <div class="main">
    <div class="helper"></div>
    <div class="btn-wrap">
      <div class="btn-con">
        <div class="img-btn"></div>
        <div class="img-btn"></div>
        <div class="img-btn"></div>
        <div class="img-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNav',
  props: {
    msg: String
  }
}
</script>

<!-- scoped 설정 해주면 해당 컴포넌트에서만 적용되는 스타일 -->
<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  .main{
    margin-left: 10%;
    margin-right: 10%;

    height: 100%;
    
    background: blue;
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
  }

  /* 두 개씩 보이게 크기 제한 */
  .btn-con {
    width: 500px;
    
    border: 5px dotted grey;
  }

  /* 하단부에 묘한 공백이 어디서 오는지 모르겠음 ㅜㅜ */
  .img-btn{
    cursor: pointer;

    display: inline-block;
    /* 이미지사이즈 */
    width: 200px;
    height: 200px;
    
    /* background 이미지로 넣는경우 */
    background-image: url("../assets/fine.jpeg");
    background-size: cover;
    background-position: center center;

    /* background: pink; */
    border: 3px dashed purple;
  }

  .img-btn:nth-child(2n-1) {
    margin-right: 4%;
  }

  .img-btn:nth-last-child(1),
  .img-btn:nth-last-child(2)
  {
    margin-top: 4%;
  }
</style>
