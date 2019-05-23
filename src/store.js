import Vue from 'vue';
import Vuex from 'vuex';
import Data from '../test-data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: Data,
  getters: {
    getProducts: state => state.products,
  },
  mutations: {
    delProduct(state, plProduct) {
      // eslint-disable-next-line no-param-reassign
      state.products = state.products.filter(product => product !== plProduct);
    },
  },
  actions: {
    delProduct({ commit }, plProduct) {
      commit('delProduct', plProduct);
    },
  },
});
