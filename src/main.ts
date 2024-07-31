import { createApp, h } from "vue";
import "./style.css";
import App from "./App.vue";
import { vueBridge } from "@garfish/bridge-vue-v3";
import { createRouter, createWebHistory } from "vue-router";

function newRouter(basename: string) {
  const router = createRouter({
    history: createWebHistory(basename),
    routes: [],
  });
  return router;
}

export const provider = vueBridge({
  rootComponent: App,
  appOptions: ({ basename }) => ({
    el: "#app",
    render: () => h(App),
    router: newRouter(basename),
  }),
});

if (!window.__GARFISH__) {
  const vueInstance = createApp(App);
  vueInstance.mount(document.querySelector("#app") as Element);
}

window.name = "heihei12";
