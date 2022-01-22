<template>
    <!-- wheel의 기본동작을 못 막음-> 이벤트를 먼저 계속 진행하게 하는것  -->
     <!-- v-on:wheel.passive="WheelEvent" -->
    <div class="recycle">
        <h2>버튼이벤트로 걸어놨는데 스크롤 인식으로 바꾸기</h2>
        <h3>세로 가운데정렬 걸려있는 상태라 scroll 때문에 아래로 내려간 것 처럼 보임</h3>
        <h1>{{testValue}} 재활용</h1>
        <searchInput
            class="search-box"
            :class="{ 'up-searchbox': show }"
            @showTheme="showComp"
            @valueFromChild="testParent"
            />
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
            testValue: '???',
            // lastScrollPosition: 0,
            }
        },
        methods : {
            showComp(){
                if(this.show==true) {
                    this.show=false;
                }
                else {this.show= true;}
            },
            testParent(value) {
                this.testValue = value;
            },


            /*onScroll () {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                if(currentScrollPosition<0) {
                    return;
                }
                if(Math.abs(currentScrollPosition - this.lastScrollPosition)<60) {
                    return
                    // 차가 60이 되기 전 까지 대기
                }
                this.upInputBox = currentScrollPosition < this.lastScrollPosition;
                this.lastScrollPosition = currentScrollPosition;
            }*/

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
        /* background: pink; */
        
        /* hidden */
        overflow: hidden;
    }

    /* search input */
    .search-box {
        transition: all .8s ease;
    }

    /* search input box 크기 조절 */
    .up-searchbox {
        height: 150px;
    }

    /* theme */
    /* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
    /* 타이밍 기능을 사용할 수 있습니다. */
    /* 전입 전출시 활성화 */
    .fade-enter-active {
        /* opacity: .3; */
        transition: all 2s ease;
        /* ease 첨빨 중느 막빨 */
    }
    .fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      /* transition 효과가 사용자가 정의한 cubic-bezier 함수에 따라 진행 */
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }



</style>
