<template>
<div>
    <div class="side"></div>
    <div class="signup-form">
        <div>
                <h1>Create Account</h1>
            </div>
        <form action="#" method="post">
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
    </div>
</template>

<style scoped>
*{
    font-family: sans-serif;
}
.submit{
    background-color: #272343;
    color: #FFFFFF;
}
input{
    width: 300px;
    min-height: 32px;
    padding: 4px;
    margin: 5px;
    font-size: 17px;
    border-radius: 5px;
    border: 0px #FFFFFF solid;
    display: block;
    background: #FFFFFF;
    box-shadow:1px 1px 4px #999;
}
h1{
    text-transform: capitalize;
    font-size: 30px;
}
</style>