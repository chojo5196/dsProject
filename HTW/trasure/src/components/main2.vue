<template>
  <div class="mainp">
    <div class="com">
      <router-link to="/community"><h1>.C O M M U N I T Y</h1></router-link>
    </div>
    <br />
    <div class="recy">
      <router-link to="/recycle"><h1>.R E C Y C L E</h1></router-link>
    </div>
    <br />
    <div class="sh">
      <router-link to="/share"><h1>.S H A R E</h1></router-link>
    </div>
    <br />
    <div class="mp">
      <router-link to="/map"><h1>.M A P</h1></router-link>
    </div>
  </div>
</template>
<script>
export default {
    name: 'main2'
}
</script>
<style scoped>
.mainp {
  margin-left: 10%;
  margin-right: 10%;
  height: 100%;
  margin-top: 10%;
  float: right;
  font-family: "Lato", sans-serif;
}
</style>