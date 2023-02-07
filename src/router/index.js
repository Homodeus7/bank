import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/TheHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("../views/TheHelp.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/TheAuth.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
