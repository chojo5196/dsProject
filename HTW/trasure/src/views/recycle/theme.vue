<template>
     <div class="sub-theme wrapper">
           <div class="theme-container">
                <div class="theme-items" v-for="(theme, idx) in themsItem" :key="idx">
                    <router-link :to="theme.link" class="link-style">
                        <img :src="theme.img" class="theme-items-img">
                        <p>{{theme.content}}</p>
                    </router-link>
                </div>
           </div>
       </div>
</template>

<script lang="ts">
export default {
    name: "theme",
    data() {
        return {
            themsItem: [
                // img src가 그냥 걸어두면 연결이 안되고 require 연결해야함
                {link: '../join', img: require('../../assets/fine.jpeg'), content:'tempContent'},
                {link: '../join', img: require('../../assets/fine.jpeg'), content:'템맘마'},
                {link: '../join', img: require('../../assets/fine.jpeg'), content:'뷰뷰뷰'},
                {link: '../join', img: require('../../assets/fine.jpeg'), content:'컵히히'}
            ]
        }

    }
}
</script>

<style scoped>
    *{
        background-color: unset;
    }
   /* .sub-theme { */
        /* temp */
        /* background-color: green; */
        
        /* size */
        /* height: 100vh; */
        
        /* visible */
        /* opacity: 0; */
        
        /* position: absolute;
        bottom: 0; */

    /* } */

    .wrapper {
        /* flext 적용 */
        display: flex;
        /* 해당영역을 못 벗어나게 */
        flex-wrap: wrap;
    }

    .theme-container{
    
        /* arrange */
        /* 일정한 간격을 두고 flex item들을 보옂 */
        justify-content: space-around;
        
        /* a앙 배치 */
        margin-left: auto;
        margin-right: auto;
    }

    /* flex items */
    .theme-items{
        /* temp */
        background: rgba(151, 151, 151, 0.164);
        
        
        /* DISPLAY */
        display: inline-block;

        /* size */
        height: 250px;
        width: 250px;

        /* arramge */
        margin: 5%;

        /* border */
        border-radius: 30px;

        /* overflow */
        overflow: hidden;
    }

    .theme-items-img{
        width: 250px;
        height: 200px;
    }

    /* link 데코 없애기 */
    .link-style{
        text-decoration: none;
        color: black;
    }
</style>