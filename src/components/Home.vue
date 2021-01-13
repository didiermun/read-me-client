<template>
<div>
    <div>
        <div class="head">
            <input type="text" placeholder="Search Lessons">
        </div>
        <div>
            <button class="submit">New Lesson</button>
        </div>
    </div>
    <div class="main">
    <div class="big">
        <div class="recommendations">hello</div>
        <div class="testimonials">dsfa</div>
    </div>
    <div class="medium">
        <div class="profile">fdsafds</div>
        <div class="stats">dfdasdfads</div>
    </div>
    </div>
</div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.main{
    width: 100%;
    display: flex;
}
.big{
    min-width: 69%;
    max-width: 70%;
    display: flex;
}
.big div{
    min-width: 48%;
    margin: 4px;
    height: 550px;
}
.medium{
    display: flex;
    flex-direction: column;
    min-width: 29%;
    max-width: 30%;
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
    min-height: 40%;
}
.profile{
    min-width: 90%;
    background-color: #B0EACD;
    min-height: 40%;
}
</style>