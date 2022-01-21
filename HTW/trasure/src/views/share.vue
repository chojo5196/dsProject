<template>
    <div class="top">

        <h1>나눔</h1>
        <input type="text"><br>
        <shareBox v-for="list in lists"
        :name="list.name"
        :author="list.author"
        :type="list.type"
        :key="list.name"
        ></shareBox>
        
    </div>
      
      
      
    
</template>

<script>
import shareBox from './shareBox.vue'


export default {
    components: { shareBox },
    name:'share',
    data() {
    return {
      lists: [
        {name: '나눔예제1', author: 'user1', type: '유형a'},
        {name: '나눔예제2', author: 'user2', type: '유형b'}
      ]
    }
  }

}
</script>

<style scoped>

 *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
.top{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;

    height: 100%;

}
</style>
