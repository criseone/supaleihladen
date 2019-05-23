/* eslint-disable arrow-body-style */
import Vue from 'vue';
import Vuex from 'vuex';
import Data from '../test-data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: Data,
  getters: {
    /*

    kept for later use !bug

    getProducts: (state) => {
      return state.products.sort(product => product.descr);
    },
    */
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
