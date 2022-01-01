<template>
  <div class="footer">
   <div>
     <ul>
       <li>로그인</li>
       <li>회원가입</li>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: 'footerBottom',
  props: {
    msg: String
  }
}
</script>

<!-- scoped 설정 해주면 해당 컴포넌트에서만 적용되는 스타일 -->
<style scoped>
  .footer{
    width: 100%;
    height: 5em;
    border:1px solid turquoise;
    position:fixed;
    bottom: 0;
  }

  ul {
    list-style:none;
    margin:0;
    padding:0;
}

li {
    margin: 0 0 0 10px;
    padding: 0 0 0 0;
    border : 0;
    float: left;
}
</style>
