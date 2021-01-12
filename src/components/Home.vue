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
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username">
            </div>
            <div>
                <label for="email">email</label>
                <input type="text" name="email" id="email" placeholder="Email">
            </div>
            <div>
                <label for="password">password</label>
                <input type="text" name="password" id="password" placeholder="Password">
            </div>
            <div>
                <input type="button" value="Submit" class="submit">
            </div>
        </form>
    </div>
    <p>Already have an account? <span>Sign in here</span></p>
    </div>
    </div>
</template>

<style scoped>
*{
    font-family:  'Bahnschrift',sans-serif;
}

.submit{
    background-color: #272343;
    color: #FFFFFF;
    border-radius: 15px;
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
    box-shadow:2px 2px 4px #999;
    padding: 10px;
}
h1{
    text-transform: capitalize;
    font-size: 35px;
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