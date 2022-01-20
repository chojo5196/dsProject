<template>
    <div class="contents-box">
        <div class="img-box">
            <img :src="contentDiv.src" alt="sample">
        </div>
        <div class="text-box">
            <span class="author">
                {{ contentDiv.author }}
            </span>
            <span class="content-title">
                {{ contentDiv.title }}
            </span>
            <span class="texts">
                {{ contentDiv.contents }}
            </span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'contents-box',
    props: [ 'sign' ],
    data() {
        return {
            contentDiv: this.sign
        }
    }
}
</script>

<style scoped>
  
div {
    margin: 0;
}
.contents-box {
    /* width: 380px; */
    /* height: 600px; */
    border-radius: 10px;
    margin: 10px;
    /* background: green; */
    
}

.img-box {
    width: 100%;
    height: 75%;
    /* background:blue; */
}

.img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.text-box {
    display: flex;
    flex-direction: column;
    /* max-height: 30%; */
    background: #EDDECA;
    overflow: hidden;
    border-radius: 0 0 10px 10px;
}

.author {
    display: block;
    width: 100%;
    height: 50%;
    /* height: 100%; */
    text-align: left;
    padding: 5px 10px 5px 10px;
}

.content-title {
    display: block;
    width: 100%;
    height: 50%;
    text-align: left;
    padding: 5px 10px 5px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.texts {
    display: block;
    width: 100%;
    /* height: ; */
    text-align: left;
    padding: 10px 10px 5px 10px;
    border-radius: 0 0 10px 10px;
    white-space: normal;
    overflow:initial;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-break: normal;
    -webkit-box-orient: vertical;
}


</style>