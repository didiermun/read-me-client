<template>
<div>
    <div class="header">
        <div class="head">
            <input type="text" placeholder="Search Lessons">
        </div>
        <div>
            <button class="submit">New Lesson</button>
        </div>
    </div>
    <div class="main">
    <div class="big">
        <div class="recommendations b-parents">
            <div><h2>Lesson Recomms</h2></div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p><p>by El healer</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>
            
        </div>
        <div class="testimonials b-parents"></div>
    </div>
    <div class="medium">
        <div class="profile parent">
            <h3>My Profile</h3>
            <div class="photo">
            <h5>Photo</h5>
             <img class="pro-image" src="https://th.bing.com/th/id/OIP.HJYbPogeBDhnlK0b1vFTWAD6D6?w=175&h=180&c=7&o=5&pid=1.7" alt="Photo">
            </div>
            <form action="#">
                <label for="fname">First name</label>
                <input type="text" name="fname" placeholder="First Name" v-model="getCurrentUser.fname">
                <label for="fname">Last name</label>
                <input type="text" name="lname" placeholder="Last name" v-model="getCurrentUser.lname">
                <label for="fname">Date of birth</label>
                <input type="date" name="username" placeholder="Date Of Birth" v-model="getCurrentUser.dob">
                <label for="fname">Email</label>
                <input type="text" name="username" placeholder="Email" v-model="getCurrentUser.email">
                <label for="fname">Password</label>
                <input type="text" name="username" placeholder="Password" v-model="getCurrentUser.password">
                <input type="submit" value="Save Changes" class="button">
            </form>
        </div>
        <div class="stats parent">
            <div>
                <p>Last Month summary</p>
                <p>193 Lessons in 40 Courses written</p>
                <p>7210 Comments in 12934 likes</p>

            </div>
        </div>
    </div>
    </div>
</div>    
</template>
<script>
import gql from 'graphql-tag'
export default {
    data() {
    return {
      getCurrentUser: {
        id: "",
        username: "healer",
        password: "",
        lname:"",
        dob:"",
        fname:"",
        password:""
      },
    };
  },
   apollo:{
      getCurrentUser:{
        query: gql`
          query {
            getCurrentUser{
                id
                username
                lname
                fname
                email
                dob
            }
          }
        `,
      }
    }, 
}
</script>
<style scoped>
form *{
     margin: 0px auto 3px;
}
label{
    font-size: 20px;
}
h3{
    font-size: 20px;
    font-weight: 800;
    margin: 5% 30%;
}
h5{
    margin: 30px 50px 10px;
    display: none;
}
.pro-image{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin: 0px 33% 0px;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.button{
    background: #1da571;
}

.lesson{
    padding: 10px 20px;
    background-color: #fff;
    /* border-bottom: 2px rgb(173, 160, 146) solid; */
}
.lesson-header{
    display: flex;
    width: 100%;
    padding: 0px;
}
form input{
    width: 70%;
}

.title{
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    padding-right: 10px;
}
.body{
    font-size: 12px;
    margin-top: -10px;
}
.submit{
    margin: 10px 40px;
    width: fit-content;
    height: 40px;
    padding: 4px 20px;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: rgb(223, 221, 221);
  border-radius: 3;
}
input{
    width: 80%;
    font-size: 17px;
    border-radius: 7px;
    border: 0px #FFFFFF solid;
    display: block;
    background: #ebe8e8;
    box-shadow:1px 1px 1px rgb(207, 207, 207);
    padding: 10px;
    text-align: center;

}
.main{
    width: 100%;
    display: flex;
}
.header{
   width: 40%;
    display: flex;
    margin-left: 10%; 
}
.big{
    min-width: 69%;
    max-width: 70%;
    display: flex;
    margin: 0px;
    margin-left: 4.5%;
    margin-right: -2%;
}
.big .b-parents{
    background-color: #fff;
    margin-left: 20px;
    min-width: 43%;
    max-width: 43%;
    height: 550px;
    box-shadow: 0px 0px 4px rgb(167, 164, 164);
    margin-top: 30px;
    overflow: auto;
    border-radius: 4px;
}
.medium{
    display: flex;
    flex-direction: column;
    min-width: 29%;
    max-width: 30%;
    margin-top: -3.5%;
}
.medium .parent{
    margin-bottom: 10px;
    box-shadow: 0.5px 0.5px 3px;
}
.recommendations{
    background-color: #3423;
}
.testimonials{
    background-color: #3423;
}
.stats{
    min-width: 90%;
    background-color: #74B49B;
    min-height: 38%;
    display: none;
}
.profile{
    min-width: 90%;
    background-color: #fff;
    min-height: 100%;
}
.recommendations h2{
    text-align: center;
    top: 10px;
}
</style>