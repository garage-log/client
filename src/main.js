import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

import { createI18n } from "vue-i18n";
import { en, tr } from "./langs";

const vuetify = createVuetify({
  components,
  directives,
});

const i18n = createI18n({
  locale: "tr", // ingilizce yapmak icin 'en'
  messages: {
    en,
    tr,
  },
});

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(vuetify).use(i18n);
app.use(pinia);

app.mount("#app");
