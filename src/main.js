import Vue from "vue";
import App from "./App.vue";
import i18n from "@/locales/i18n";
import router from "./router";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(ArgonDashboard);

Vue.use(VueGoogleMaps, {
  load: {
    key: "xxx",
    libraries: "places" // necessary for places input
  },
  installComponents: true
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
