import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import Data from "../lib/data/data.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
      props: { data: Data.about },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      props: { data: Data.projects },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      props: { data: Data.contact },
    },
  ],
});

export default router;
