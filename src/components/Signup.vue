<template>
<div class="main">
    <div class="side">
    </div>
    <div class="side2">
    <div class="sign-up-form">
        <div>
                <h1>Create Account</h1>
            </div>
            <p class="status">{{ status}}</p>
        <form action="#" method="post" autocomplete="off">
            <div class="for-names">
            <div>
                <input type="text" name="fname" id="email" placeholder="First name" v-model="user.fname">
            </div>
            <div>
                <input type="text" name="lname" id="email" placeholder="Last name" v-model="user.lname">
            </div>
            </div>
            <div>
                <input type="text" name="username" id="username" placeholder="Username" v-model="user.username">
            </div>
             <div>
                <input type="text" name="email" id="email" placeholder="Email" v-model="user.email">
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Password" v-model="user.password">
            </div>
            <div>
                <input type="button" value="Submit" class="submit" v-on:click=createUser>
            </div>
        </form>
    </div>
    <p class="altenative">Already have an account? <router-link to="signin"><span>Sign in here</span></router-link></p>
    </div>
    </div>
</template>
<script>
import gql from 'graphql-tag'
export default {
    name: 'signup',
     data() {
    return {
      user: {
        id: "",
        username: "",
        password: "",
        email: "",
        lname:"",
        fname:"",
        dob:"2020-12-12",
        profile :""
      },
      status:"",
      courses: [],
    };
  },
    apollo:{
      courses:{
        query: gql`
          query {
            courses{
                id
                name
            }
          }
        `,
      }
    },
  methods:{
      getMethods(){
          alert(this.courses[0].name);
      },
      async createUser(){
          const notValid = this.user.password.trim().length < 3|| this.user.username.trim().length < 3 || this.user.lname.trim().length < 3 || this.user.fname.trim().length < 3 || this.user.email.trim().length < 8;
          if(notValid){
              this.status = "Your inputs are not valid"
          }
          else{
              this.status = ""
      this.$apollo.mutate({
        
        mutation: gql`
            mutation createUser($userData: CreateInput!) {
            createUser(input: $userData) {
                id
                username
                lname
             }
            }
          `,
          variables: {
              "userData":{
                 username: this.user.username,
                 password: this.user.email,
                 dob: this.user.dob,
                 profile: this.user.profile,
                 fname: this.user.fname,
                 lname: this.user.lname,
                 email: this.user.email,
            }
          }
      })
      .then(response => {
        //this.user = response.data.createUser  //adding it to our previous query
        alert(response.data.createUser.username)
        //location.reload()
      })
      .catch((error) => {
          this.status = ""
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
.main{
    height: 620px;
    overflow-y: hidden;
}
.status{
    text-align: center;
    color: red;
    max-width:400px;
}
.altenative{
    text-align: center;
}
.for-names{
    width: 100%;
    background-color: #5324;
    left: 0;
    margin-left: -10%;
}
.for-names div{
    width: 45%;
    display: inline;
    float: right;
}
.for-names input{
width: 80%;
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
body{
    overflow: hidden;
}
input{
    width: 81%;
    margin: 5px;
    font-size: 17px;
    border-radius: 7px;
    border: 1px #000 solid;
    display: block;
    background: #FFFFFF;
    box-shadow:0px 0px 0px #999;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
}
h1{
    text-transform: capitalize;
    font-size: 35px;
    margin-bottom: 50px;
    margin-left: 20px;
}
.sign-up-form{
   margin-top: 80px; 
   margin-left: 80px auto;
   padding-left: 50px;
}
.side2{
   min-width: 50%;
   float: right; 
   background-color: rgb(255, 255, 255);
   margin-left:0px;
   padding-left: 0px;
   overflow: hidden;
}
.side{
    min-width: 50%;
    min-height: 47em;
    background-color: #1da571;
    float: left;
    margin: 0px;
    padding: 0px;
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