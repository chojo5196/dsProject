<template>

    <div>
        
        <div class="contents-box" @click="sample">
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

    </div>
</template>


<script>
import eventBus from "../assets/eventBus"

export default {
    name: 'contents-box',
    props: [ 'sign' ],
    data() {
        return {
            contentDiv: this.sign
        }
    },
    methods: {
        sample(e) {
            console.log('이벤트 송신');

            let bus = e.target.parentNode.parentNode;

            let busArr = {};
            busArr.author = bus.childNodes[1].childNodes[0].innerText;
            busArr.title = bus.childNodes[1].childNodes[1].innerText;
            busArr.texts = bus.childNodes[1].childNodes[2].innerText;
            busArr.imgSrc = bus.childNodes[0].childNodes[0].getAttribute('src');

            eventBus.$emit('transferBus', busArr)
            
            // .communityModal은 modal-view.vue 컴포넌트에 있음!
            document.querySelector(".communityModal").classList.remove("hidden");
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
    cursor: pointer;
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
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}


</style>