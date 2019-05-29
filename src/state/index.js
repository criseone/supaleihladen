import Vue from 'vue';
import Vuex from 'vuex';
import VuexEasyFirestore from 'vuex-easy-firestore';
import { Firebase, initFirebase } from './firebase';
import productsModule from './modules/products';

Vue.use(Vuex);

const easyFirestore = VuexEasyFirestore(
  [productsModule],
  { logging: true, FirebaseDependency: Firebase },
);

const storeConfig = {
  plugins: [easyFirestore],
};

const store = new Vuex.Store(storeConfig);

initFirebase()
  .catch((err) => {
    throw err;
  });

export default store;
