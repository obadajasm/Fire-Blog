import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import locale from "element-ui/lib/locale/lang/en";
import Element from "element-ui";

Vue.config.productionTip = false;
Vue.use(Element, { locale });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
