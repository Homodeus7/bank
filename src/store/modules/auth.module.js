const TOKEN_KEY = "jwt-token";

export default {
  namespaced: true, // для локализации экшенов
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY),
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async login({ commit }) {
      commit("setToken", "TEST TOKEN");
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(_, getters) {
      return !!getters.token;
    },
  },
};
