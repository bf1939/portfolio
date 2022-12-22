// import "normalize.css";
import "the-new-css-reset/css/reset.css";
import App from "@/App.vue";
import Home from "@/components/pages/Home.vue";
import NotFound from "@/components/pages/NotFound.vue";
import Profile from "@/components/pages/Profile.vue";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
  { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
