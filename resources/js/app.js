require("./bootstrap");
import { createApp } from "vue";
import index from "./components/index.vue";

const app = createApp({});
app.component("index", index).mount("#app");
