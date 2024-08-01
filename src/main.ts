import { createApp } from "vue";

import App from "./App.vue";

import "./style.css";

const instance = createApp(App);
instance.mount(document.querySelector("#app")!);

window.unmount = () => {
  instance.unmount();
};
