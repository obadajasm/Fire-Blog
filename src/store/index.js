import Vue from "vue";
import Vuex from "vuex";

import User from "./modules/user";
import Auth from "@/modules/auth/store";
import Articles from "@/modules/articles/store";
import Tags from "@/modules/tags/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { User, Auth, Articles, Tags },
});
