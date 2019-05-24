import Vue from 'vue';
import Vuex from 'vuex';

import Provider from './provider';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Products: [],
  },
  getters: {
    Products: state => state.products,
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
    getProducts() {
      const products = Provider.GET.Products();
      console.log(products);
    },
  },
});
