<template>

    <div>

        <div class="contents-box" @click="sample">
            <div class="img-box">
                <img :src="contentDiv.src" alt="sample">
            </div>
            <div class="text-boxC">
                <div class="author-goodPoint">
                    <span class="author">
                        {{ contentDiv.author }}
                    </span>
                    <span class="goodPoint">
                        <img :src="goodImg" alt=""> {{ contentDiv.goodPoint }}
                    </span>
                </div>
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
import eventBus from "../../assets/eventBus"

export default {
    name: 'contents-box',
    props: [ 'sign' ],
    data() {
        return {
            contentDiv: this.sign,
            goodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5M3vp-vThaF6gtlyAHRcSt7H3_-6iAflQ8g&usqp=CAU"
        }
    },
    methods: {
        sample(e) {
            console.log('이벤트 송신');

            let bus = e.target.parentNode.parentNode;

            console.log(bus.childNodes[1].childNodes[0].childNodes[0])
            let busArr = {};
            busArr.author = bus.childNodes[1].childNodes[0].childNodes[0].innerText;
            busArr.goodPoint = bus.childNodes[1].childNodes[0].childNodes[1].innerText;
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
    color: black;

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

.text-boxC {
    display: flex;
    flex-direction: column;
    /* max-height: 30%; */
    background: #EDDECA;
    overflow: hidden;
    border-radius: 0 0 10px 10px;
}

.author-goodPoint {
    display: flex;
}

.author {
    display: block;
    width: 70%;
    height: 50%;
    /* height: 100%; */
    text-align: left;
    padding: 5px 10px 5px 10px;
}

.goodPoint {
    display: block;
    width: 30%;
    height: 50%;
    /* height: 100%; */
    text-align: right;
    padding: 5px 10px 5px 10px;
    /* font-size: 15px; */
}

.goodPoint img {
    width: 20px;
    height: 20px;
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
    /* 줄 바꿈 수 조절 가능 */
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}


</style>