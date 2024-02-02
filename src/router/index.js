import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import DataES from "../lib/langs/es.json";
import DataENG from "../lib/langs/eng.json";

const lang = navigator.language || navigator.userLanguage;
const langData = lang === "es-ES" ? DataES : DataENG;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
      props: { data: langData.about },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      props: { data: langData.projects },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      props: { data: langData.contact },
    },
  ],
});

export default router;
