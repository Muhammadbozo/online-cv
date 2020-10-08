import Vue from "vue";
import Router from "vue-router";
import index from "./components/index";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
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
    {
      path: "/contact",
        name: "contact",
        component: Contact,
      },
  ],
});
