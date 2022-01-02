<template>
  <div id="app">
    <topNav/>
    <mainArea/>
    <sample/>
    <join/>
    <footerBottom/>
  </div>
</template>


<script>
import topNav from './components/topNav.vue'
import mainArea from './components/mainArea.vue'
import footerBottom from './components/footerBottom.vue'
import sample from './components/sample.vue'
import join from './components/join.vue'

export default {
  name: 'App',
  components: {
    topNav,
    mainArea,
    footerBottom,
    sample,
    join
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
</style>
