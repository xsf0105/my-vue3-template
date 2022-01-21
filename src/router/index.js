import { createWebHistory, createRouter } from "vue-router";
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";

const routes = [
  {
    path: "/",
    name: "page1",
    component: Page1,
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;