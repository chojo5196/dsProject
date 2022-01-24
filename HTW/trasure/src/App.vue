<template>
  <div id="app">
    <topNav />

    <router-view />

    <!-- <router-view/> -->
  </div>
</template>


<script>
import topNav from "./components/topNav.vue";

export default {
  name: "App",
  components: {
    topNav,
  },
};
</script>

<style>
@font-face {
  font-family: "Lato";
  src: url("/assets/fonts/Lato/Lato-Light.ttf") format("ttf");
  unicode-range: U+0041-005A, U+0061-007A;
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "NotoSansKR";
  src: url("/assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf") format("otf");
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  background-color: #fdfcfb;
  font-family: "Noto Sans KR", sans-serif;
}

/* 100vh를 app으로 이동 */
#app {
  height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
  color: #e9e5e0;
  overflow: unset;
  text-align: center;
}

a {
  text-decoration: none;
  color: black;
}
</style>

