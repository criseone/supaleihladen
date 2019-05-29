import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Products: [],
  },
  getters: {
    Products: state => state.Products,
  },
  mutations: {
    rentProduct(state, product) {
      Vue.set(product, 'available', false);
    },
    returnProduct(state, product) {
      Vue.set(product, 'available', true);
    },
    setProducts(state, products) {
      console.log(products);
      Vue.set(state, 'items', [...products]);
    },
  },
  actions: {
    rentProduct({ commit }, product) {
      if (product.available) {
        commit('rentProduct', product);
      } else {
        commit('returnProduct', product);
      }
    },
  },
});
