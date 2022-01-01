<template>
  <div id="app">
    <topNav msg="TOP NAV"/>
    <mainArea msg="BODY"/>
  </div>
</template>

<script>
import topNav from './components/topNav.vue'
import mainArea from './components/mainArea.vue'

export default {
  name: 'App',
  components: {
    topNav,
    mainArea
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
  
  margin-right: 10%;
  margin-left: 10%;
}
</style>
