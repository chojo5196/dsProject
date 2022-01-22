<template>
    <!-- wheel의 기본동작을 못 막음-> 이벤트를 먼저 계속 진행하게 하는것  -->
    <div class="recycle" v-on:wheel.passive="WheelEvent">
       <!-- 위치 고정하기 -->
       <h1>재활용</h1>
       <searchInput/>
       

       <div class="sub-theme wrapper">
           <div class="content-container">
                <div class="content">
                    <a href=""><img src="" alt="temp"></a>
                </div>
                <div class="content">
                    <a href=""><img src="" alt="temp"></a>
                </div>
                <div class="content">
                    <a href=""><img src="" alt="temp"></a>
                </div>
                <div class="content">
                    <a href=""><img src="" alt="temp"></a>
                </div>
           </div>
       </div>
    </div>
      
    
</template>


<script>
import searchInput from './searchCon.vue';

export default {
    components:{searchInput},
    name:'recycle',
    data() {
        return {
           
        }
    },
    methods : {
        
    }

}

</script>


<style scoped>

    /* .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    } */


    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        color: unset;
        background: unset;
        color: black;
    }

    

    .recycle{
        /* arrange */
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;

        /* position */
        /* position: relative; */

        /* temp */
        background: pink;
    }


    /* 스크롤 시 애니매이션 적용 대상 */
    .sub-theme {
        /* temp */
        background-color: green;
        
        /* size */
        /* height: 100vh; */
        
        /* visible */
        /* opacity: 0; */
        
        /* position: absolute;
        bottom: 0; */

    }

    .wrapper {
        /* flext 적용 */
        display: flex;
        /* 해당영역을 못 벗어나게 */
        flex-wrap: wrap;
    }

    .content-container{
    
        /* arrange */
        /* 일정한 간격을 두고 flex item들을 보옂 */
        justify-content: space-around;
        
        /* a앙 배치 */
        margin-left: auto;
        margin-right: auto;

    }

    /* flex items */
    .content{
        /* temp */
        background: black;
        
        /* DISPLAY */
        display: inline-block;

        /* size */
        height: 250px;
        width: 250px;

        /* arramge */
        margin: 5%;
    }

</style>
