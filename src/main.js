// import "the-new-css-reset/css/reset.css";
import About from "@/components/pages/About.vue";
import App from "@/App.vue";
import Home from "@/components/pages/Home.vue";
import NotFound from "@/components/pages/NotFound.vue";
import vuetify from "@/plugins/vuetify.js";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount("#app");
