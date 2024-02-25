import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/reset.css";
import "./assets/style.css";

const app = createApp(App);

app.use(router);
app.use(VueGtag, { config: { id: "G-WVB29M5BGS" } });

app.mount("#app");