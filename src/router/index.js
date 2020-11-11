import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Books from '@components/Books'
// import Words from "@components/Words";
// import Signin from "@components/Signin";
// import Signup from "@components/Signup";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Books.vue"),
  },
  {
    path: "/words",
    name: "Words",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Words.vue"),
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Signin.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Signup.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Profile.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
