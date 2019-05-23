<template>
    <div id="product-list">
      <Product v-for="product in getProducts"
        v-bind:key="product.id"
        v-bind:Product="product" />
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
      return this.$store.state.products;
    },
  },
};
</script>
