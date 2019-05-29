<template>
  <div id="app">
    <ProductList />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
  name: 'app',
  components: {
    ProductList,
  },
  created() {
    this.$store.dispatch('productsModule/openDBChannel');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
