import Vue from "vue";
import App from "./App.vue";
import i18n from "@/locales/i18n";
import router from "./router";
import "./registerServiceWorker";
import ArgonDashboard from "./plugins/argon-dashboard";
import * as VueGoogleMaps from "vue2-google-maps";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Vuelidate from "vuelidate";
import { BreadstickBakery } from "breadstick";

Vue.config.productionTip = false;

Vue.use(ArgonDashboard);

Vue.use(VueGoogleMaps, {
  load: {
    key: "xxx",
    libraries: "places"
  },
  installComponents: true
});

Vue.use(Vuelidate);

Vue.use(BreadstickBakery);

new Vue({
  i18n,
  Loading,
  router,
  render: h => h(App)
}).$mount("#app");
