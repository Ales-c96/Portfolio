import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import Data from "../lib/data/data.json";
import NotFoundView from "../views/NotFoundView.vue";

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
    {
      path: "/:catchAll(.*)", // Ruta comodín para capturar cualquier URL no encontrada
      component: NotFoundView,
    },
  ],
});

export default router;
