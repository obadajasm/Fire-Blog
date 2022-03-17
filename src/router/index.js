import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import authHelper from "@/utils/auth-helper";

Vue.use(VueRouter);

import routes from "./routes";

const router = new VueRouter({
  routes,
});

const authWhiteList = ["/login", "/signup", "/home"];
const whiteList = [...authWhiteList, "/articles"];

router.beforeEach(async (to, from, next) => {
  try {
    await store.dispatch("Auth/getAccessToken");
    if (authWhiteList.some((e) => to.path.startsWith(e))) {
      next("/feed");
    } else {
      next();
    }
  } catch (error) {
    if (whiteList.some((e) => to.path.startsWith(e))) {
      next();
    } else {
      authHelper.reset();
      next("/home");
    }
  }
});

export default router;
