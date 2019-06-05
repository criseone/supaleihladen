import Vue from 'vue';

const productsModule = {
  firestorePath: 'Products',
  firestoreRefType: 'collection',
  moduleName: 'productsModule',
  statePropName: 'Products',
  namespaced: true,

  getters: {
    Products: state => state.Products,
  },
  mutations: {},
  actions: {
    rentProduct({ dispatch }, product) {
      if (product.count_available > 0) {
        Vue.set(product, 'count_available', product.count_available - 1);
      }
      dispatch('set', product);
    },
    returnProduct({ dispatch }, product) {
      if (product.count_available < product.count_total) {
        Vue.set(product, 'count_available', product.count_available + 1);
      }
      dispatch('set', product);
    },
    likeProduct({ dispatch }, product) {
      Vue.set(product, 'favourite', !product.favourite);
      dispatch('set', product);
    },
  },
};

export default productsModule;
