import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Joke from "../views/Joke.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/joke",
    name: "joke",
    props: true,
    component: Joke
  },
  {
    path: "/joke/:name",
    name: "joke",
    props: true,
    component: Joke
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
