import ArticlesService from "@/modules/articles/service";

import CreateArticle from "./pages/create-article/store";

function getState() {
  return {
    loading: false,
    article: null,
    articles: [],
    articlesCount: 0,
  };
}

export default {
  namespaced: true,
  modules: { CreateArticle },
  state: getState,
  getters: {
    loading(state) {
      return state.loading;
    },
    articles(state) {
      return state.articles;
    },
    article(state) {
      return state.article;
    },
    articlesCount(state) {
      return state.articlesCount;
    },
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setArticles(state, value) {
      state.articles = value;
    },
    setArticle(state, value) {
      state.article = value;
    },
    setArticlesCount(state, value) {
      state.articlesCount = value;
    },
    resetState(state) {
      Object.assign(state, getState());
    },
  },
  actions: {
    async getArticles({ commit, dispatch }, qp = {}) {
      dispatch("resetState");
      commit("setLoading", true);

      try {
        const isLoggedIn = await dispatch("Auth/isLoggedIn", null, {
          root: true,
        });
        console.log(qp, qp?.getAll);
        const ep =
          isLoggedIn && !qp?.getAll
            ? ArticlesService.getArticlesFeed(qp)
            : ArticlesService.getAllArticles(qp);
        let response = await ep;
        commit("setArticles", response.articles);
        commit("setArticlesCount", response.articlesCount);
        return response;
      } finally {
        commit("setLoading", false);
      }
    },
    async getArticleBySlug({ commit }, slug) {
      commit("setLoading", true);
      try {
        let { article } = await ArticlesService.getArticleBySlug(slug);
        commit("setArticle", article);
        return article;
      } finally {
        commit("setLoading", false);
      }
    },
    resetState({ commit }) {
      commit("resetState");
    },
  },
};
