<template>
  <div>
    <button @click="onOff">join클릭</button>

<!------------ 회원가입 모달창 ------------>
    <div class="modal2" ref="modal2">
      
      <div class="login-page">
        <div class="form">
          <form @submit.prevent novalidate=true>
                
                <label>Name*</label>
                <input type="text"
                @input="LiveName"
                :value="joinName"
                ref="editName"
                placeholder="username"/>
              
                <!--
                <label>Gender</label>
                <div v-for="gender in joinGender" class="seleBox"
                :key="gender">
                  <span>
                    <input type="radio"
                     v-model="genderPick"
                     :value="gender"></span>{{gender}}
                </div>
                -->

                <label>YYMMDD</label>
                <input type="text"
                v-model="joinbirth"
                ref="editBirthday"
                placeholder="yyyymmdd"
                maxlength=8/>

                <label>ID*</label>
                <input type="text"
                @input="LiveId"
                :value="joinId"
                ref="editId"
                placeholder="userId"/>

                <label>Email*</label>
                <input type="email"
                v-model="joinEmail"
                ref="editEmail"
                placeholder="Email@.com"/>

                <label>Pw*</label>
                <input type="password"
                v-model="joinPw"
                ref="editPw"
                 placeholder="password"/>

                <label>Re:Pw*</label>
                <input type="password"
                v-model="joinRePW"
                ref="editRePw"
                placeholder="password"
                style="margin-bottom: 0px;"/>
                <span class="checkpassword">{{pwMsg}}</span>

                <label >Phone</label>
                <span v-for ="(value,index) in joinNum" :key="value">
                  <input type="text" 
                  :value="joinNum[index]"
                  style="width: 120px;margin-right:15px;">
                </span>
                
                <button
                @click="joinFirst"
                :disabled="isDisabled"
                >가입완료</button>
              </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'join',
  data() {
    return {
      testName:'',
          testPw:'',
          joinName: '',
          joinGender: ['Male','Female','Nothing'],
          genderPick:'Male',
          joinId: '',
          joinbirth:'',
          joinEmail: '',
          joinPw: '',
          joinRePW: '',
          joinNum:['010',null,null],
          joinObj: ['검색','추천','광고','행사','기타'], 
          objPick: [],
          pwMsg: '동일한 비밀번호를 설정해주세요',
          
          
    }
  },
  methods: {
     onOff() {
      document.querySelector('.modal2').style.display = "block";
      },
      LiveName(event) {
        this.joinName = event.target.value;
      },
      LiveId(event) {
        this.joinId = event.target.value;
      },
      joinFirst() {
        const mem = {};

        if(!this.joinName) {
          this.$refs.editName.focus();
          return alert('Name Empty');
        }

        if(!this.joinId) {
          this.$refs.editId.focus();
          return alert('ID Empty');
        }

        if(!this.joinEmail) {
          this.$refs.editEmail.focus();
          return alert('Email Empty');
        } else if(!this.validEmail(this.joinEmail)) {
          this.$refs.editEmail.focus();
          return alert('Not Email Type');
        }

        if(this.joinPw != this.joinRePW){
          this.$refs.editRePw.focus();
          return alert('Pw Not Match');
        } else if(!this.joinPw) {
          this.$refs.editPw.focus();
          return alert('Pw Empty');
        } else if(!this.joinRePW) {
          return this.$refs.editRePw.focus();
        }
        alert('!완료!');

        mem.name = this.joinName;
        mem.gender = this.genderPick;
        mem.password = this.joinRePW;
        mem.email = this.joinEmail;

        localStorage.setItem('member',JSON.stringify(mem));

        window.open('#');
      },
      
      validEmail: function (email) {
        //var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        return emailRegex.test(email);
      },
      validPw: function(password) {
        const pwRegex = RegExp(/[#?!@$%^&*-]/);
        return pwRegex.test(password);
      }
    },
    watch: {
      joinName(val) {
        this.joinName = val.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/gi,'');
      },
      joinId(val) {
        this.joinId = val.replace(/[^0-9|a-z]/gi,'');
      },
      joinbirth(val) {
        this.joinbirth = val.replace(/[^0-9]/,'')
      },
      joinRePW(val) {
        if(this.joinPw != val){
          this.pwMsg = '비밀번호가 일치하지 않습니다.'
        } else {
          this.pwMsg = '비밀번호가 일치합니다.'
        }
      }
    },
    computed: {
      isDisabled() {
        //if(!this.joinName)
        return !this.joinName || !this.joinbirth;
      }
    }
}

  window.onclick = (e) => {
    if (e.target.className == 'modal2') {
      document.querySelector('.modal2').style.display = "none";
    }
  }
</script>



<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
.modal2 {
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
  width: 500px;
  padding: 1% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 500px;
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
.form label {
    display: flex;
    margin-bottom: 5px;
}
.seleBox {
    display: inline-block;
    margin: 10px;
}
.checkpassword {
  font-size: 5px;
}
</style>