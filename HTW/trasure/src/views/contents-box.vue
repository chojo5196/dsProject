<template>
    <div class="contents-box">
        <div class="img-box">
            <img src="data:image/jpeg;base64,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" alt="sample">
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
  

.contents-box {
    width: 280px;
    height: 360px;
    border-radius: 10px;
    margin: 10px;
    background: green;
    
}

.img-box {
    width: 100%;
    height: 260px;
    background:blue;
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
    height: 100px;
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
    height: 100%;
    text-align: left;
    padding: 10px 10px 5px 10px;
    border-radius: 0 0 10px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>