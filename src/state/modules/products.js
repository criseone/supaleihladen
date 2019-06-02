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
      Vue.set(product, 'available', !product.available);
      dispatch('set', product);
    },
    likeProduct({ dispatch }, product) {
      Vue.set(product, 'favourite', !product.favourite);
      dispatch('set', product);
    },
  },
};

export default productsModule;
