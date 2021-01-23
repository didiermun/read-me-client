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
        <div class="testimonials b-parents">
            <form action="#" v-on:submit.prevent="onSubmit">
                <span class="status">{{status}}</span>
                <div class="form-header">
                <select name="course" class="course-select" v-model="lesson.course">
                    <option value="">--Course--</option>
                    <option value="5ffebd5e52325d2b1c4aa273">Java</option>
                    <option value="5ffebd5e52325d2b1c4aa273">Scripts</option>
                    <option value="5ffebd5e52325d2b1c4aa273">Maven</option>
                    <option value="5ffebd5e52325d2b1c4aa273">Tools</option>
                </select>
                <input class="nameInput" type="text" name="name" v-model="lesson.name" placeholder="Lesson name">
                </div>
                <label for="body">Body</label>
                <textarea name="body" cols="80" rows="15" v-model="lesson.content"></textarea>
                <input type="submit" value="Add Lesson" v-on:click=addNewCourse>
            </form>
        </div>
    </div>
    <div class="medium">
        <div class="recommendations b-parents main-parents">
            <div><h2>My Guide</h2></div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Text highliting</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">code formatting</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">adding image</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">font family and size</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>

            <div class="lesson">
                <div class="lesson-header">
                <p class="title">re usable collable codes</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Features and links</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
            </div>
            <div class="lesson">
                <div class="lesson-header">
                <p class="title">Introduction to Java</p>
                </div>
                <p class="body">The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords ...</p>
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
      lesson: {
        id: "",
        course: "",
        content: "",
        name:""
      },
      status:""
    };
  },
  methods:{
       onSubmit () {
    },
      async addNewCourse(){
          const notValid = this.lesson.content.trim().length < 30;
          if(notValid){
              this.status = "Your content is not valid"
          }
          else{
              this.status = "",
      this.$apollo.mutate({
        
        mutation: gql`
            mutation createLesson($courseData: LessonInput!) {
            createLesson(input: $courseData) {
                content
             }
            }
          `,
          variables: {
              "courseData":{
                 content: this.lesson.content,
                 course: this.lesson.course,
                 name: this.lesson.name,
                 author:['5ffea2835cc3812678b9a435','5ffebd5e52325d2b1c4aa273']
            }
          }
      })
      .then(response => {
        console.log(response.data)
        this.status = ""
        this.lesson.course = ""
        this.lesson.content = ""
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
form *{
     margin: 0px auto 3px;
}
textarea{
    margin-top: 0px;
    font-size: 17px;
    text-align: center;
}
label{
    font-size: 15px;
    margin-top: 0px;
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
.form-header{
    display: flex;
}
.form-header *{
    margin: 5px;
}
.nameInput{
    background-color: #fff;
    box-shadow: 0px 1px 1px rgb(34, 3, 3);
    margin-top: 10px;
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
.status{
    text-align: center;
    color: red;
    max-width:400px;
}

.lesson{
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0px 0px 1px;
    cursor: pointer;
    /* border-bottom: 2px rgb(173, 160, 146) solid; */
}
.course-select{
    width: 150px;
    font-size: 19px;
    margin-bottom: 0px;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 4px;
    line-height:1;
    box-shadow:0 0 1px 0 rgba(129, 36, 36, 0.6);
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
    background-color: #1da571;
    stroke: none;
    box-shadow: none;
    border: 0px;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: rgb(223, 221, 221);
  border-radius: 3;
}
input{
    width: 80%;
    font-size: 15px;
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
    min-width: 90%;
    max-width: 90%;
    height: 550px;
    box-shadow: 0px 0px 4px rgb(167, 164, 164);
    margin-top: 30px;
    overflow: auto;
    border-radius: 4px;
}
.b-parents h2{
    text-align: center;
    top: 10px;
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
.profile{
    min-width: 90%;
    background-color: #fff;
    min-height: 100%;
}

</style>