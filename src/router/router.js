import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/signin",
    name:"login",
    component: Login
  },
  {
    path:"/signup",
    name:"signup",
    component: Signup
  },
//   {
//     path:"/lessons/lesson",
//     name:"lesson",
//     component: SingleLesson
//   },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
