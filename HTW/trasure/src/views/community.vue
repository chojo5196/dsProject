<template>
    <div class="top">
        <h1>정보공유</h1>
        <input v-model="inputValue" type="text" @keyup.enter="addHashtag"><br>
        <div class="hash-area">
            <div class="button-area">
                <span v-for="(btn, idx) in hash" :key="idx">
                    <button>{{ btn }}</button> 
                </span>
            </div>
        </div>

        <div class="wrap">
            <div class="content-wrap">
                <div v-for="(ctt, idx) in contentDiv" :key="idx">
                    <contents-box :sign="ctt" />
                </div>
            </div>
        </div>
        
    </div>
    
    
    
    
</template>

<script>
import contentsBox from '../views/contents-box.vue'

export default {
    components: { contentsBox },
    name:'community',
    data() {
        return {
            inputValue: "",
            hash: [
                "#hashtag1",
                "#hashtag2"
            ],
            contentDiv: [
                {
                    id: 1,
                    title: "sample1",
                    contents: "Lorem Ipsum1",
                    author: "홍길동",
                    src: "",
                    goodPoint: 1
                },
                {
                    id: 2,
                    title: "sample2",
                    contents: "Lorem Ipsum2",
                    author: "김철수",
                    src: "",
                    goodPoint: 2
                },
                {
                    id: 3,
                    title: "sample3",
                    contents: "Lorem Ipsum3",
                    author: "김영희",
                    src: "",
                    goodPoint: 3
                },
            ]
        }
    },
    methods: {
        addHashtag() {
            this.hash.push("#" + this.inputValue);
            this.inputValue = "";
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
    margin-top: 10%;
    width: 80%;
    height: 90%;
    overflow: scroll;
}
.button-area > button {
    display: inline;
}
.wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}

.content-wrap {

}

</style>
