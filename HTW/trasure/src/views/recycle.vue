<template>
    <!-- wheel의 기본동작을 못 막음-> 이벤트를 먼저 계속 진행하게 하는것  -->
    <div class="recycle" v-on:wheel.passive="WheelEvent">
       <!-- 위치 고정하기 -->
       <h1>재활용</h1>
       <div class="search-container"><div class="helper"></div>
           <div class="vertical-container">
               <!-- 검색하면 post형식으로 submit 데이터 전송 -->
            
                <input type="text"  
                    placeholder="검색어를 입력해주세요"
                    class="temp-background"
                    list="search-options"
                    v-model="msg"
                    @keyup.enter="addArray(msg)">
                <datalist id="search-options">
                    <option v-for="(option, key, idx) in options" 
                            :key="idx" 
                            :value="option"
                            :name="key"/>
                </datalist>

                <!-- 와라와라 디비디비! -->
                <input type="submit" 
                    method="post" 
                    value="검색"
                    class="temp-background" 
                    @click="addArray(msg)">
                <br/>

                <!-- 검색기록 표시 체크 -->
                <!-- test에 추천 검색어 띄워주면leea 좋을듯 -->
                <!-- {{ msg==''?"검색중":"#"+msg }} 
                <br/> -->

                <!-- 최근검색어 저장 -->
                <label for="Search-checkbox">검색기록 표시</label>
                <input type="checkbox" value="a" v-model="checked" checked>
                
                <!-- 컴포넌트로 빼기 -->
                <div class="search-list-contrianer" v-show="checked">
                    <span v-if="searchArray[0]==null">검색기록이 없습니다</span>
                    <ul v-else>
                        <li
                            v-for="(arr, idx) in searchArray"  
                            :key="idx"
                            class="search-list">
                            {{arr.text}}        
                            <div class="delete"
                                @click="searchArray.splice(idx, 1)"></div>
                        </li>
                    </ul><br/>
                </div>
           </div>
           
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
            msg : '',
            searchArray: [],
            nextId:0,
            checked: true,
            options: {
                "a": "명절",
                "b": "새학기",
                "c": "어린이날",
                "d": "파파존스",
            }
        }
    },
    methods : {
        addArray(msg) {
            // 검색 로그 길이
            var searchLogSize = 5;
            if(this.searchArray.length<searchLogSize) {
                if(this.msg.trim()!=''){ // 공백거름
                    // 검색기록에 # 붙여서 출력
                    this.searchArray.push({
                        id: this.nextId++,
                        text: '#'+msg,
                    });
                    this.msg=''
                }
            } else {
                // 오래된 기록 하나만 자름 검색기록 삭제도 넣 리스트에 담으면 ㄴ음 될 v-for돌려서 list로 뽑으면 될
                this.searchArray.splice(0,1);
                // 추가된 기록은 마지막에 추가
                this.searchArray.push({
                    id: this.nextId++,
                    text: '#'+msg,
                });
                this.msg='';
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
        },
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

    .temp-background {
        background: white;
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


    .search-container {
        
        background-color: red;
        height: 100vh;
        
    }

    .vertical-container {
        /* line-height: 100%; */
        display: inline-block;
        vertical-align: middle; 
    }

    .helper{
        height: 100%;
    }

    ul{
        /* 초기화 */
        position: unset;
        list-style: none;
        padding-left: 0;

        /* list 태그의 왼쪽 정렬을 위해서 */
        display: flex;
        align-content: flex-start;
        flex-direction: column-reverse;
        flex-wrap: wrap;
        overflow: auto;

    }

    li {
        /* 초기화 */
        margin-right: unset;
        padding-left: 0;

    }

    .search-list-contrianer{
        /* width: 30%; */
        
        margin-left: auto;
        margin-right: auto;
    }

    .search-list{
        /* 왼쪽으로 붙이기 */
        text-align: left;
        /* 자동 줄 바꿈 */
        word-wrap:break-word;
    }

    .search-list:hover {
        /* background: grey; */
        opacity: 0.7;
    }


    /* 스크롤 시 애니매이션 적용 대상 */
    .sub-theme {
        /* temp */
        background-color: green;
        
        /* size */
        /* height: 100vh; */
        
        /* visible */
        opacity: 0;
        
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

    .delete {display:inline-block;*display:inline;} 
    .delete:after {display: inline-block;content: "\00d7"; font-size:10pt;}

</style>
