<template>
  <div id="app">
    <topNav msg="이 메세지가 보인다면"/>
    <mainArea/>
    <footerBottom/>
  </div>
</template>

<script>
import topNav from './components/topNav.vue'
import mainArea from './components/mainArea.vue'
import footerBottom from './components/footerBottom.vue'

export default {
  name: 'App',
  components: {
    topNav,
    mainArea,
    footerBottom
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
