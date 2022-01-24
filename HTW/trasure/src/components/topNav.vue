<template>
  <div class="top-nav">
    <!-- 이 친구는 붙여서 두는게 맞아용! -->

    <div class="logo-img"></div>
    <div class="jolo">
      <span class="jo"><router-link to="/join">회원가입</router-link></span>
      <span class="lo"><router-link to="/login">로그인</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav",
};
</script>

<!-- scoped 설정 해주면 해당 컴포넌트에서만 적용되는 스타일 -->
<style scoped>
.top-nav {
  /* position */
  position: fixed;
  top: 0;
  /* z-index: 10; */

  /* size */
  width: 100%;
  height: 4em;
}
/*jolo*/
.jolo {
  list-style: none;
  font-size: 15px;
  margin-top: -40px;
  float: right;
  margin-right: 10px;
}
.jo {
  padding-right: 4px;
}
.lo {
  margin-right: 10px;
}

/* logo */
.logo-img {
  margin-top: 8px;
  height: 3em;
  width: 3em;
  background-image: url("./../assets/logo1.png");
  background-size: cover;

  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  cursor: pointer;
}
</style>
