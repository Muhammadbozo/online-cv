import Vue from "vue";
import Router from "vue-router";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "masthead",
      component: Masthead,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
	{
	  path: "/resume",
      name: "resume",
      component: Resume,
    },
	{
	  path: "/projects",
      name: "project",
      component: Projects,
    },
  ],
});
