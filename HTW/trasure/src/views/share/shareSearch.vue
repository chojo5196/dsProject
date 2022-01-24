<template>
<div class = "miniSearchBox">


    <input type="text" v-model="serachInput">
    <button @click="searchBtn"> 검색 </button>



</div>
  
</template>

<script>
export default {
    name : 'shareSearch',
    props : ['sharList'],
    data() {
        return {
            getList: [],
            serachInput:''
        }
    },
    methods : {
        searchBtn() {
            /*
            const listType = this.serachInput.replaceAll(" ","");
            for(let i =0;this.sharList.length;i++) {
                if(listType == this.sharList[i]) {
                    console.log(listType);
                }
            }
            */


        }
    }

}
</script>

<style>

</style>