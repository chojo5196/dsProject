<template>
  <div class="footer">
    <div class="line">
     <ul>
       <li>로그인</li>
       <li>회원가입</li>
       <li>testing</li>
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
  /* footer 본체 */
  .footer{
    width: 100%;
    height: 5em;
    line-height: 5em;

    position:fixed;
    bottom: 0;

    background: white;
    border: 3px dashed black;

    font-weight: bold;
    
  }

  ul {
    list-style: none;
    padding-right: 0;
    cursor: pointer;
  }

  li {
    display: inline-block;
  }

  li:not(:last-child) {
    margin-right: 5%;
  }
</style>
