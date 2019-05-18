<template>
    <div id="product-list">
      <Product v-for="product in getProducts"
        v-bind:key="product.id"
        v-bind:id="product.id"
        v-bind:descr="product.descr" />
    </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'ProductList',
  components: {
    Product,
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>
