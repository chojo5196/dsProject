<template>
  <div>
    <button @click="onOff" class="btnClick2">클릭</button>

<!------------ 로그인 모달창 ------------>
  <div class="modal">
    
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input type="text" v-model="inputId" placeholder="아이디"/>{{ inputId }}
          <input type="password" v-model="inputPw" placeholder="비밀번호"/> {{ inputPw }}
          <button action="submit" @click="console">로그인</button>
          <p class="message">아직 회원가입 하지 않으셨나요? <a href="#">회원가입</a></p>
        </form>
      </div>
    </div>

  </div>
  
  </div>
</template>

<script>
export default {
  name: 'sample',
  data() {
    return {
      inputId: "",
      inputPw: ""
    }
  },
  methods: {
    onOff() {
      document.querySelector('.modal').style.display = "block";
    },
    console() {
      console.log("A");
    }
  },
  created: function() {
    window.onclick = (e) => {
      if (e.target.className == 'modal' || e.target.className == 'modal2') {
        document.querySelector('.modal').style.display = "none";
        document.querySelector('.modal2').style.display = "none";
      }
    }
  }
}

</script>



<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.btnClick2 {
  position: absolute;
  top: 0;
  left: 60px;
  z-index: 50;
}
.modal {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #76b852;
  opacity: 99%;
  z-index: 1050;
}

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 15px;
}

.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form button:hover,
.form button:active,
.form button:focus {
  background: #43A047;
}

.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}

.form .message a {
  color: #4CAF50;
  text-decoration: none;
}

</style>