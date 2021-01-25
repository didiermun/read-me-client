<template>
<div class="main">
    <div class="side">
    </div>
    <div class="side2">
    <div class="sign-up-form">
        <div>
                <h1>Login to Account</h1>
            </div>
            <p class="status">{{ status}}</p>
            
        <form action="#" method="post" autocomplete="off">
            <div>
                <label for="username">username</label>
                <input type="text" name="username" id="username" placeholder="Username" v-model="user.username">
            </div>
            <div>
                <label for="password">password</label>
                <input type="password" name="password" id="password" placeholder="Password" v-model="user.password">
            </div>
            <div>
                <input type="button" value="Submit" class="submit" v-on:click=LoginUser>
            </div>
        </form>
    </div>
    <p class="altenative">Don't have an account <span>Sign in here</span></p>
    </div>
    </div>
</template>
<script>
import gql from 'graphql-tag'
export default {
     data() {
    return {
      user: {
        id: "",
        username: "",
        password: "",
      },
      status:""
    };
  },
  methods:{
      async LoginUser(){
          const notValid = this.user.password.trim().length < 3|| this.user.username.trim().length < 3;
          if(notValid){
              this.status = "Your inputs are not valid"
          }
          else{
              this.status = "",
      this.$apollo.mutate({
        
        mutation: gql`
            mutation login($userData: loginInput!) {
            login(logindata: $userData) {
                token
             }
            }
          `,
          variables: {
              "userData":{
                 username: this.user.username,
                 password: this.user.password,
            }
          }
      })
      .then(response => {
        localStorage.setItem('user_auth',response.data.login.token)
        this.status = ""
      })
      .catch((error) => {
          console.error(error)
      this.status = error.graphQLErrors[0].message;
    })
          }
    },
  }
}
</script>
<style scoped>

*{
    font-family:  'Bahnschrift',sans-serif;
}
.status{
    text-align: center;
    color: red;
    max-width:400px;
}
.altenative{
    text-align: center;
}
.submit{
    background-color: #1da571;
    color: #FFFFFF;
    border-radius: 7px;
    margin-top: 15px;
    margin-left: 15px;
    padding: 10px;
    font-size: 17px;
}
span{
    font-weight: 700;
    color: #1da571;
}
input{
    width: 80%;
    margin: 5px;
    font-size: 17px;
    border-radius: 7px;
    border: 0px #FFFFFF solid;
    display: block;
    background: #FFFFFF;
    box-shadow:1.5px 1.5px 0px #999;
    padding: 10px;
    text-align: center;
}
h1{
    text-transform: capitalize;
    font-size: 35px;
    margin-bottom: 50px;
    margin-left: 20px;
}
.sign-up-form{
   margin: auto;
   margin-top: 80px; 
   margin-left: 0px;
}
.side2{
   min-width: 40%;
   float: right; 
}
.side{
    min-width: 50%;
    min-height: 47em;
    background-color: #1da571;
    float: left;
    margin: -10px;
    padding: -20px;
}
label{
    font-weight: 40;
    font-size: 20px;
    text-transform: capitalize;
    margin: auto;
    margin-top: 17px;
    text-align: center;
    display: block;
    width: 100%;
}
</style>