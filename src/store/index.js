import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "sadas"
  },
  getters: {
    getJoke: state => state.joke
  },
  mutations: {
    readJoke(state, payload) {
      state.joke = payload.joke;
    }
  },
  actions: {
    async getJoke({ commit }) {
      const response = await fetch(
        "https://geek-jokes.sameerkumar.website/api"
      );
      const joke = await response.text();
      commit("readJoke", { joke });
      return;
    }
  },
  modules: {}
});