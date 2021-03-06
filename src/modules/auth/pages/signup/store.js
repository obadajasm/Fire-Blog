import AuthService from "@/modules/auth/service";

export default {
  namespaced: true,
  state() {
    return {
      loading: false,
    };
  },
  getters: {
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
  },
  actions: {
    async signup({ commit, dispatch }, payload) {
      commit("setLoading", true);
      try {
        const { user } = await AuthService.signup(payload);
        dispatch("User/storeUser", user, { root: true });
        commit("Auth/setAccessToken", user.token, { root: true });
      } finally {
        commit("setLoading", false);
      }
    },
  },
};
