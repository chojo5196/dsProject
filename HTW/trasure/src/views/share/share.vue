<template>
    <div class="share">

        <h1>나눔</h1>
        <share-search :sharList="lists"></share-search>

        <share-box v-for="list in lists"
        :name="list.name"
        :author="list.author"
        :type="list.type"
        :word="list.word"
        :key="list.name"
        ></share-box>
        


      <!--
        <share-box :shardList="lists"></share-box>
      -->

        
    </div>
      
      
      
    
</template>

<script>
import shareBox from './shareBox.vue'
import shareSearch from './shareSearch.vue'


export default {
    components: { shareBox,shareSearch },
    name:'share',
    data() {
    return {
      lists: [
        {name: '나눔예제1', author: 'user1', type: '유형a', word:'사랑의 앞이 튼튼하며, 거친 사막이다. 청춘의 보배를 기쁘며, 날카로우나 구하지 하여도 그러므로 뿐이다. 이상 무엇을 목숨을 그들에게 천하를 능히 위하여, 그들은 듣기만 부패뿐이다. 내는 오직 실로 두손을 봄바람이다. 어디 무엇이 소금이라 있으며, 예가 기관과 인류의 뿐이다. 풀이 청춘의 지혜는 창공에 인간은 때까지 봄바람이다'},
        {name: '나눔예제2', author: 'user2', type: '유형b', word: '비가 오고 네가 생각나 비가 오고 또 비가 오고 ㅅ르픈 음악이 흐르면 옛 노래처럼 yeah 네가 생각 네가 생각  비가 오고 잠이 안 오고 슬픈 음악이 흐르면 옛 가사 처럼 yeah 네가 생각나 네가 생각나 네가 생각나'},
        {name: '나눔예제3', author: 'user2', type: '유형a', word: '나는 나를 사랑할 줄 몰라서 사랑받지 못한 그 시간에 익숙해져서 참을 수가 없을 만큼 힘이 든다면 그땐 모두 내려놓고 잠시 쉬어가도 돼'},
        {name: '나눔예제4', author: 'user3', type: '유형c' ,word: '​우리 하지 못한 말들 마저 얘기해요 산들바람이 우릴 감사줄 때 이렇게 마주 앉아 이별에 대해 말해보아요'},
        {name: '나눔예제4', author: 'user4', type: '유형c'}
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
    background: unset;
  }
.share{
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;

    overflow: hidden;

}

@media (min-width: 730px) {

  
}
</style>
