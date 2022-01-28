<template>
  <div>
      <div class="write-modal hidden">
            <div @click="closeWriteBg()" class="write-bg"></div>
            <div class="write-modalBox">
                    
                    <div class="write-modalBox-container">
                        <div class="write-modal-image-box">
                            <img src="https://source.unsplash.com/random" alt="sample">
                        </div>

                        <div class="write-modal-text-box">
                            <form>
                                제목 : <input type="text" name="contentsTitle"><br>
                                내용 : <input type="text" name="contentsText"><br>
                                작성자 : <input class="write-modal-author" type="text" name="userName"><br>
                                <input type="hidden" name="goodPoint" value="0">
                                <input type="submit" @click="registerCommunity"><br>
                                <input type="button" @click="getCommunity" value="조회">
                            </form>
                            
                            <div class="sampleBox" v-for="(sample, idx) in sampleData" :key="idx">
                                <span>{{ sample.userName }}</span><br>
                                <span>{{ sample.contentsTitle }}</span><br>
                                <span>{{ sample.contentsText }}</span><br>
                                <span>{{ sample.goodPoint }}</span><br>
                            </div>
                        </div>
                    </div>

                <button @click="closeWriteBg()" class="closeBtn-w">✖</button>
            </div>
        </div>
  </div>
</template>


<script>
export default {
    name: 'writeModal',
    data() {
        return {
            sampleData: []
        }
    },
    methods: {
        addSampleData(e) {
            console.log(e);
        },
        closeBtn() {
            const close = () => {
                document.querySelector(".write-modal").classList.add("hidden");
            }
            document.querySelector(".closeBtn").addEventListener("click", close);
        },
        closeWriteBg() {
            
            const close = () => {
                document.querySelector(".write-modal").classList.add("hidden");
            }
            document.querySelector(".write-bg").addEventListener("click", close);
        },
        registerCommunity(evt) {

            console.log(evt.target.form);
            evt.preventDefault();
            const contentsTitle = evt.target.form[0].value;
            const contentsText = evt.target.form[1].value;
            const userName = evt.target.form[2].value;
            const goodPoint = evt.target.form[3].value;


            // const url = 'http://localhost:3000/community';
            const commData = { 
                userName: userName, 
                contentsTitle: contentsTitle, 
                contentsText: contentsText, 
                goodPoint: goodPoint 
                };

            fetch('http://localhost:3000/community', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(commData)
            })

        },
        getCommunity() {
            fetch('http://localhost:3000/community/get')
                .then((res) => res.json())
                .then((res) => {
                    this.sampleData = res;
                    console.log(this.sampleData)
                });
                
        }
    }
}


</script>


<style scoped>

* {
    margin: 0;
    padding: 0;
    background: unset;
    color: black;
}

.write-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.write-modal .write-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}

.write-modalBox {
    /* display: flex;
    flex-direction: column; */
    position: absolute;
    background-color: #595349;
    width: 80%;
    height: 600px;
    padding: 15px;
}

.write-modalBox-container {
    background: #BFB19D;
    display: flex;
    width: 98%;
    height: 96%;
    padding: 10px;
}

.write-modal-image-box {
    display: block;
    width: 40%;
    height: 100%;
}

.write-modal-image-box img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.write-modal-text-box {
    display: flex;
    flex-direction: column;
    width: 59%;
    height: 100%;
    text-align: left;
    line-height: 25px;
    margin-left: 1%;
}



.goodPointP {
    width: 100%;
    font-weight: bold;
    padding: 10px;
    text-align: right;
}

.write-modal-text-box .txt {
    height: 80%;
    /* font-size: 1.5em; */
    font-weight: bold;
    padding: 10px;
}

.write-modal-author {
    font-weight: bold;
    height: 10%;
    padding: 10px;
    text-align: right;
}



.closeBtn-w {
    display: block;
    background: #E6D5BC;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    margin: 30px auto;
}

.hidden {
    display: none;
}
</style>