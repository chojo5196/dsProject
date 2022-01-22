<template>
    <!-- wheel의 기본동작을 못 막음-> 이벤트를 먼저 계속 진행하게 하는것  -->
    <div class="recycle" v-on:wheel.passive="WheelEvent">
       <div class="search-container">
           <!-- 검색하면 post형식으로 submit 데이터 전송 -->
           <form action="#">
                <input type="text" 
                    v-model="msg" 
                    placeholder="검색어를 입력해주세요"
                    @keyup.enter="clear"
                    >
                <!-- 와라와라 디비디비! -->
                <input type="submit" method="post" value="검색" 
                    @click="addArray(msg), clear()">
                <br/>

                <!-- 검색기록 표시 체크 -->
                <!-- test에 추천 검색어 띄워주면leea 좋을듯 -->
                {{ msg==''?"검색중":"#"+msg }} 
                <br/>

                <!-- 최근검색어 저장 -->
                <label for="Search-checkbox">검색기록 표시</label>
                <input type="checkbox" value="a" v-model="checked">
                <div v-show="checked">
                 {{searchArray[0]==null?"검색기록 없음":"최근검색기록"+searchArray}}
                </div>
           </form>
       </div>

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
export default {
    name:'recycle',
    data() {
        return {
            // 배열로 담기 변경할 필요, enter 키로 입력받아서 값 하나씩 넣는걸로?
            msg : '',
            searchArray: new Array(),
            checked: false,
        }
    },
    methods : {
        addArray(msg) {
            // 검색 로그 길이
            var searchLogSize = 5;
            if(this.searchArray.length<searchLogSize) {
                // 검색기록에 # 붙여서 출력
                this.searchArray.push("#"+msg);
            } else {
                // 오래된 기록 하나만 자름 검색기록 삭제도 넣 리스트에 담으면 ㄴ음 될 v-for돌려서 list로 뽑으면 될
                this.searchArray.splice(0,1);
                // 추가된 기록은 마지막에 추가
                this.searchArray.push("#"+msg);
            }
        },
        clear() {
            this.msg="" 
            // 제출시 인풋 값 털기
        },
        WheelEvent(event) {
            // 스크롤 시 애니매이션 적용
            var wheelDown = event.wheelDeltaY;
            if(wheelDown<0) {
                // document.querySelector(".sub-theme").style.background = "red";
                document.querySelector(".sub-theme").style.opacity = "1";

            } else {
                // document.querySelector(".sub-theme").style.background = "yellow";
                document.querySelector(".sub-theme").style.opacity = "0";
            }
            /*
            console.log("clientY"+event.clientY);
            console.log("pageY"+event.pageY);
            console.log("screenY"+event.screenY);
            console.log("wheenDelta"+event.wheelDelta);
            console.log("wheenDeltaY"+event.wheelDeltaY);
            console.log("y"+event.y);
            console.log("-----------------")
            */
        },
    }

}

</script>


<style scoped>

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    .recycle{
        /* arrange */
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 10%;

        /* display */
        height: 100%;
    }

    .search-container {
        background-color: red;
        /* height: 100vh; */
    }

    /* 스크롤 시 애니매이션 적용 대상 */
    .sub-theme {
        /* temp */
        background-color: green;
        
        /* size */
        height: 100vh;
        
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
