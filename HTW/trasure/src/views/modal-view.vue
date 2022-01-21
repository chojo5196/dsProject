<template>
  <div>
      <div>
          {{ sample.author }}
      </div>
  </div>
</template>


<script>
import eventBus from "../assets/eventBus"
export default {
    name: 'modalView',
    data() {
        return {
            sample: "aa"
        }
    },
    created: function() {
        eventBus.$on('transferBus', function(node) {
            console.log("이벤트 수신");
            console.log(node);
            
            this.sample = node;
            
            console.log(this.sample.author)
        });
    }
}
</script>


<style scoped>

</style>