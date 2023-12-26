import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },

  getters: {
    posts: (state) => state.posts,
  },

  mutations: {
    SET_POSTS: function (state, payload) {
      state.posts = payload;
    },
  },

  actions: {
    async setPosts({ commit }, payload) {
      commit("SET_POSTS", payload);
    },
  },
  modules: {},
});
