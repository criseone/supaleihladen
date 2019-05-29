<template>
    <div class="product" :class="ProductStyle">
        <div class="left">
        <img class="image" src="../assets/placeholder_image.png" alt="Placeholder Image">
        </div>
        <div class="right">
        <p class="descr">{{ Product.description }}</p>
        <p class="brand">{{ Product.brand }}</p>
        <Button class="button" :onClick="rentProduct"
        :Product="Product" :description="ButtonDescription" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from './BaseButton.vue';

export default {
  name: 'Product',
  components: {
    Button,
  },
  props: {
    Product: Object,
  },
  methods: {
    ...mapActions({
      rentProduct  : 'productsModule/rentProduct',
    }),
  },
  computed: {
    ButtonDescription() {
      return this.Product.available ? 'Ausleihen' : 'Zurückgeben';
    },
    ProductStyle() {
      return this.Product.available ? 'available' : 'rented';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../style/_constants';

  .product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $secondary-color;
  padding: 1rem;
  margin-bottom: 1rem;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  width: 30vmin;
  font-family: $primary-font;
  text-transform: uppercase;
  display: flex;
  flex-flow: row wrap;
  }

  .left {
    width: 25%;
  }

  .descr {
    color: $primary-color;
  }

  .brand {
    color: $tertiary-color;
  }

  .available {
    color: black;
    background-color: $secondary-color;
  }

  img {
    width: 100%;
  }

</style>
