<template>
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
</template>

<script lang="ts">
export default {
    name: "theme",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    *{
        background-color: unset;
    }
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