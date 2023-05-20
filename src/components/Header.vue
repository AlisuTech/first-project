<template>
    <dialog class="dialog-background animate-dialog" :open="isDialogOpen">
        <div>
            <h3>Sign In</h3>
            <button @click="close_dialog_action()">Close Dialog</button>
            <br>
            <br>
            <h4>Email</h4>
            <br>
            <input v-model="email"/>
            <br>
            <br>
            <h4>Password</h4>
            <br>
            <input v-model="password"/>
            <br>
            <br>
            <button @click="login_action()">Login</button>
            <br>
            <br>
            <input type="checkbox" v-model="rememberme"/>
            <span> Remember me</span>
            <p>{{ loginMessage }}</p>
        </div>
    </dialog>
    <dialog class="dialog-background animate-dialog" :open="isSignUp">
        <div>
            <h3>Sign Up</h3>
            <button @click="close_dialog_action()">Close Dialog</button>
            <br>
            <br>
            <h4>Email</h4>
            <br>
            <input v-model="email"/>
            <br>
            <br>
            <h4>Firstname</h4>
            <br>
            <input v-model="firstname"/>
            <br>
            <br>
            <h4>Lastname</h4>
            <br>
            <br>
            <input v-model="lastname"/>
            <br>
            <br>
            <h4>Gender</h4>
            <br>
            <br>
            <input v-model="gender"/>
            <br>
            <br>
            <h4>Phone Number</h4>
            <br>
            <br>
            <input v-model="phonenumber"/>
            <br>
            <br>
            <h4>Location</h4>
            <input v-model="location"/>
            <br>
            <br>
            <h4>Password</h4>
            <br>
            <input v-model="password"/>
            <br>
            <br>
            <button @click="signup_action()">Login</button>
            <br>
            <br>>
        </div>
    </dialog>
    <div class="header-grid header-background-palette">
        <div class="header-flex header-text-space">
            <img class="header-text-space" src="../assets/logo.png" style="width:40px"/>
            <h2 class="header-text-space">Geodrill Manager (GM)</h2>
        </div>
        <div class="header-flex header-justify-right">
            <div class="header-text-space" v-if="showHeaderName">
                <h3 style="color:orange" >{{headerName}}</h3>
                <p>(PROJECTS)</p>
            </div>
            <button class="header-button-design" @click="signup_action_callback()">
                <p id="logbtn" class="header-login-style header-text-space">Sign Up</p>
            </button>
            
            <button class="header-button-design" @click="log_in_out_action()">
                <p id="logbtn" class="header-login-style header-text-space">{{ loginTitle }}</p>
            </button>
            <i class="fa fa-sign-in" style="margin-right: 10px;"></i>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name:"HeaderPage",
    data(){
        return{
            loginTitle:"Login",
            headerName:"Joy Chidinma",
            showHeaderName:false,
            email:"",
            firstname:"",
            lastname:"",
            gender:"",
            location:"",
            phonenumber:"",
            isSignUp:false,
            password:"nehfbfbb",
            rememberme:false,
            loginMessage:"",
            isDialogOpen:false
        }
    },
    methods:{
        async signup_action (){
            // let userData={
            //     firstname:this.firstname,
            //     lastname:this.lastname,
            //     email:this.email,
            //     gender:this.gender,
            //     location:this.location,
            //     phonenumber:this.phonenumber
            // }
            await axios.post(`http://localhost:5000/createuserbyquery?firstname=${this.firstname}&lastname=${this.lastname}&gender=${this.gender}`)
            // await axios.post('http://localhost:5000/createuser',userData)
        },
        signup_action_callback(){
            this.isSignUp=!this.isSignUp
        },
        log_in_out_action(){
            this.isDialogOpen=true

        },
        close_dialog_action(){
            this.isDialogOpen=false
        },
        login_action(){
            if(this.loginTitle=="Logout"){
                this.loginTitle="Login"
                this.showHeaderName=false
            }
            else{
                this.loginTitle="Logout"
                if(this.email=="joy@gmail.com"){
                    this.showHeaderName=true
                    this.headerName=this.email
                    this.loginMessage=""
                    this.isDialogOpen=false
                }
                else{
                    this.loginMessage="Invalid login details"
                }
            }
            

            // var log_btn=document.getElementById("logbtn");
            // if(log_btn.innerText=="Logout"){
            //     log_btn.innerText="Login"
            // }
            // else{
            //     log_btn.innerText="Logout"
            // }
        }
    }
}
</script>

<style>
.header-grid{
    display:grid;
    grid-template-columns: auto auto;
}
.header-flex{
    display:flex;
    align-items: center;
}
.header-text-space{
    margin:10px
}
.header-background-palette{
    background-color: #202730;
    color:white
}
.header-justify-right{
    justify-content: flex-end;
}
.header-login-style{
    font-weight: 700;
}
.header-login-style:hover{
    cursor: pointer;
    text-decoration: underline;
}
.header-button-design{
    color: white;
    background-color: #202730;
    border: none;
}
.animate-dialog {
  animation-name: animate-top-dialog;
  animation-duration: 0.5s;
}
.dialog-background {
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 25%;
  top: 10%;
  width: 50%;
  height: 300px;
  overflow-y: auto;
  background-color: whitesmoke;
  border: none;
  padding: 20px;
}
</style>