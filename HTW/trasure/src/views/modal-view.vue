<template>
  <div>
      <div class="communityModal hidden">
            <div @click="closeBg" class="bg"></div>
            <div class="modalBox">
                <div class="modalBox-container">
                    <div class="modal-image-box">
                        <img :src="receivedNode.imgSrc" alt="">
                    </div>
                    <div class="modal-text-box">
                            <p>{{ receivedNode.title }}</p>
                            <p>{{ receivedNode.texts }}</p>
                            <p>{{ receivedNode.author }}</p>

                    </div>
                </div>
                <button @click="closeBtn" class="closeBtn">✖</button>
            </div>
        </div>
  </div>
</template>


<script>
import eventBus from "../assets/eventBus"
export default {
    name: 'modalView',
    data() {
        return {
            receivedNode: ""
        }
    },
    methods: {
        addSampleData(e) {
            console.log(e);
        },
        closeBtn() {
            const close = () => {
                document.querySelector(".communityModal").classList.add("hidden");
            }
            document.querySelector(".closeBtn").addEventListener("click", close);
        },
        closeBg() {
            
            const close = () => {
                document.querySelector(".communityModal").classList.add("hidden");
            }
            document.querySelector(".bg").addEventListener("click", close);
        }
    },
    created: function() {
        eventBus.$on('transferBus', function(node) {
            console.log("이벤트 수신");
            console.log(node);
            
            this.receivedNode = node;

        }.bind(this));
    }
}
</script>


<style scoped>

.communityModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.communityModal .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}

.modalBox {
    position: absolute;
    background-color: #595349;
    width: 80%;
    height: 600px;
    padding: 15px;
}

.modalBox-container {
    background: #BFB19D;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
}

.modal-image-box {
    display: block;
    width: 40%;
    height: 100%;
}

.modal-image-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.modal-text-box {
    display: flex;
    flex-direction: column;
    width: 59%;
    height: 100%;
    margin-left: 1%;
    text-align: left;
    line-height: 25px;
}

.modal-text-box p:nth-child(1) {
    font-size: 1.5em;
    font-weight: bold;
    height: 10%;
    padding: 10px;
}

.modal-text-box p:nth-child(2) {
    font-weight: bold;
    height: 80%;
    padding: 10px;
}

.modal-text-box p:nth-child(3) {
    font-weight: bold;
    height: 10%;
    padding: 10px;
    text-align: right;
}



.modalBox button {
    display: block;
    background: #998E7D;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    margin: 30px auto;
}

.hidden {
    display: none;
}
</style>