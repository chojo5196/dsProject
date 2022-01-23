<template>
    <div class="search-container"><div class="helper"></div>
           <div class="vertical-container">
                <input type="text"  
                    placeholder="검색어를 입력해주세요"
                    class="temp-background"
                    list="search-options"
                    v-model="msg"
                    @keyup.enter="addArray(msg)"
                    @input="testChild">
                <datalist id="search-options">
                    <option v-for="(option, key, idx) in options" 
                            :key="idx" 
                            :value="option"
                            :name="key"/>
                </datalist>
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

                <!-- 최근검색어 저장 및 토글 input -->
                <label for="Search-checkbox">검색기록 표시</label>
                <input type="checkbox" v-model="checked">
                
                <br/>
                <input type="button" 
                    value="테마를 확인해보세요"
                    @click="showTheme">
                <br/>

                <!-- 컴포넌트로 빼기 -->
                <div class="search-list-contrianer" v-show="checked">
                    <span v-if="searchArray[0]==null">검색기록이 없습니다. 재활용 방법을 검색해보세요!</span>
                    <ul v-else>
                        <li
                            v-for="(arr, idx) in searchArray"  
                            :key="idx"
                            class="search-list">
                            {{arr.text}}        
                            <div class="delete"
                                @click="searchArray.splice(idx, 1)"></div>
                        </li>
                    </ul>
                    <br/>
                </div>
           </div>
           
       </div>
</template>

<script>
export default {
    name: 'searchInput',
    data() {
        return {
            msg : '',
            searchArray: [],
            nextId:0,
            checked: false,
            // 프롭스로 전환해서 받기로 수정<<전
            options: {
                "a": "명절",
                "b": "새학기",
                "c": "어린이날",
                "d": "파파존스",
            },
        }
    },
    methods : {
        testChild(e){
            this.$emit('valueFromChild', e.target.value)
        },
        showTheme(){
            this.$emit('showTheme')
        },
        addArray(msg) {
            // 검색 로그 길이
            var searchLogSize = 5;
            if(this.searchArray.length<searchLogSize) {
                if(this.msg.trim()!=''){ // 공백거름
                    // 검색기록에 # 붙여서 출력
                    this.searchArray.push({
                        id: this.nextId++,
                        text: '# '+msg,
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
    }
}
</script>

<style scoped>

    .temp-background {
        background: white;
    }


    .search-container {
        /* background-color: red; */
        height: 100vh;
        margin: 5% 0;
        
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

    
    .delete {display:inline-block;*display:inline;} 
    .delete:after {display: inline-block;content: "\00d7"; font-size:10pt;}

</style>