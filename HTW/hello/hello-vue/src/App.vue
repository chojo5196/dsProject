<template>
  <div id="app">
    <topNav/>
    <mainArea msg="우리는 성공한 것입니다"/>
    <footer/>
  </div>
</template>

<script>
import topNav from './components/topNav.vue'
import mainArea from './components/mainArea.vue'

export default {
  name: 'App',
  components: {
    topNav,
    mainArea,
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
}
</style>
