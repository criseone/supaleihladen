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
    rentProduct(state, plProduct) {
      Vue.set(plProduct, 'available', false);
    },
    returnProduct(state, plProduct) {
      Vue.set(plProduct, 'available', true);
    },
  },
  actions: {
    rentProduct({ commit }, plProduct) {
      if (plProduct.available) {
        commit('rentProduct', plProduct);
      } else {
        commit('returnProduct', plProduct);
      }
    },
  },
});
