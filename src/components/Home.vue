<template>
<div class="main">
    <div class="side">
    </div>
    <div class="side2">
    <div class="sign-up-form">
        <div>
                <h1>Create Account</h1>
            </div>
            
        <form action="#" method="post" autocomplete="off">
            <div>
                <label for="username">username</label>
                <input type="text" name="username" id="username" placeholder="Username" v-model="user.username">
            </div>
            <div>
                <label for="email">email</label>
                <input type="text" name="email" id="email" placeholder="Email" v-model="user.email">
            </div>
            <div>
                <label for="password">password</label>
                <input type="password" name="password" id="password" placeholder="Password" v-model="user.password">
            </div>
            <div>
                <input type="button" value="Submit" class="submit" v-on:click=createUser>
            </div>
        </form>
    </div>
    <p >Already have an account? <span>Sign in here</span></p>
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
        username: "Didien",
        password: "Munezero",
        email: "didiermunezer38@gmail.com",
      },
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
                 password: this.user.email,
            }
          }
      })
      .then(response => {
        //this.user = response.data.createUser  //adding it to our previous query
        console.log(response.data)
        //location.reload()
      })
      .catch((error) => {
      // Error
      //console.error(error.graphQLErrors[0].message)
      console.error(error.graphQLErrors[0].extensions.code)
      alert(Object.keys(error))
    })
    },
  }
}
</script>
<style scoped>
*{
    font-family:  'Bahnschrift',sans-serif;
}

.submit{
    background-color: #272343;
    color: #FFFFFF;
    border-radius: 7px;
    margin-top: 15px;
    margin-left: 15px;
    padding: 10px;
    font-size: 17px;
}
span{
    font-weight: 700;
    color: #272343;
}
body{
    overflow: hidden;
}
input{
    width: 300px;
    margin: 5px;
    font-size: 17px;
    border-radius: 7px;
    border: 0px #FFFFFF solid;
    display: block;
    background: #FFFFFF;
    box-shadow:1.5px 1.5px 0px #999;
    padding: 10px;
}
h1{
    text-transform: capitalize;
    font-size: 35px;
    margin-bottom: 50px;
    margin-left: 20px;
}
.sign-up-form{
   margin: auto;
    margin-top: 150px; 
}
.side2{
   min-width: 40%;
    float: right; 
}
.side{
    min-width: 50%;
    min-height: 42em;;
    background-color: #74B49B;
    float: left;
    margin: -10px;
    padding: -20px;
}
label{
    font-weight: 700;
    font-size: 20px;
    text-transform: capitalize;
    padding-left: 10px;
    margin: auto;
    text-align: center;
}
</style>