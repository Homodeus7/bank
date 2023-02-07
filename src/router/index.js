import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/TheHome.vue";
/* eslint-disable */
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("../views/TheHelp.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/TheAuth.vue"),
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
