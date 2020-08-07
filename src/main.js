import Vue from "vue";
import App from "./App.vue";
import i18n from "@/locales/i18n";
import api from "@/services/api.js";
import router from "./router";
import "./registerServiceWorker";
import VueSession from "vue-session";
import ArgonDashboard from "./plugins/argon-dashboard";

Vue.config.productionTip = false;
Vue.prototype.$api = api;

Vue.use(ArgonDashboard);
Vue.use(VueSession, { persist: true });
new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
