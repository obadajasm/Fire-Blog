import TagsService from "@/modules/tags/service";

function getState() {
  return {
    loading: false,
    tags: [],
    selectedTag: null,
  };
}

export default {
  namespaced: true,
  state: getState,
  getters: {
    loading(state) {
      return state.loading;
    },
    tags(state) {
      return state.tags;
    },
    selectedTag(state) {
      return state.selectedTag;
    },
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setTags(state, value) {
      state.tags = value;
    },
    setSelectedTag(state, value) {
      state.selectedTag = value;
    },

    resetState(state) {
      Object.assign(state, getState());
    },
  },
  actions: {
    async getTags({ commit }) {
      commit("setLoading", true);
      try {
        let response = await TagsService.getTags();
        commit("setTags", response.tags);
        return response.tags;
      } finally {
        commit("setLoading", false);
      }
    },
    setSelectedTag({ commit }, tag) {
      commit("setSelectedTag", tag);
    },
    resetState({ commit }) {
      commit("resetState");
    },
  },
};
