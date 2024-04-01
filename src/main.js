import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import StyleClass from "primevue/styleclass";
import Wind from "./wind";

const app = createApp(App);
app.component("Button", Button);
app.directive("styleclass", StyleClass);
app.use(PrimeVue, { unstyled: true, pt: Wind });
app.mount("#app");
