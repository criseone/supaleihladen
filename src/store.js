/* eslint-disable arrow-body-style */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, descr: 'Zange' },
      { id: 2, descr: 'Hammer' },
      { id: 3, descr: 'Bohrer' },
      { id: 4, descr: 'Meter' },
      { id: 5, descr: 'Akkuschrauber' },
      { id: 6, descr: 'Säge' },
      { id: 7, descr: 'Flammenwerfer' },
    ],
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
  },
  mutations: {

  },
  actions: {

  },
});
