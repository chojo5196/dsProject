<template>
    <!-- wheel의 기본동작을 못 막음-> 이벤트를 먼저 계속 진행하게 하는것  -->
     <!-- v-on:wheel.passive="WheelEvent" -->
    <div class="recycle">
       <!-- 위치 고정하기 -->
       <h1>재활용</h1>
           <searchInput/>
       <button @click="showComp">더보기</button>
       <transition name="fade">
           <theme v-show="show"/>
       </transition>
    </div>
      
    
</template>


<script>
import searchInput from './searchCon.vue';
import theme from './theme.vue';

export default {
    components:{searchInput, theme},
    name:'recycle',
    data() {
        return {
           show: false,
        }
    },
    methods : {
        showComp(){
            if(this.show==true) {
                this.show=false;
            }
            else {this.show= true;}
        },
        
        // WheelEvent(event) {
        //     // 스크롤 시 애니매이션 적용
        //     var wheelDown = event.wheelDeltaY;
        //     if(wheelDown<0) {
        //         this.show = false;
        //     } else {
        //         this.show = true;
        //     }
        // },
    }

}

</script>


<style scoped>
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

        /* size */
        /* height: 100%; */

        /* temp */
        background: pink;
        
        /* hidden */
        overflow: hidden;
    }

    /* search input */
    

    /* theme */
    /* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
    /* 타이밍 기능을 사용할 수 있습니다. */
    /* 전입 전출시 활성화 */
    .fade-enter-active {
        transition: all 1s ease;
        /* ease 첨빨 중느 막빨 */
    }
    .fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      /* transition 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행 */
    }
    .fade-enter, .fade-leave-to {
        transform: translateY(100px);
        /* 세로축으로 전환 */
        opacity: 0;
    }



</style>
