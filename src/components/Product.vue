<template>
    <div class="product">
        <div class="left">
        <img class="image" src="../assets/placeholder_image.png" alt="Placeholder Image">
        </div>
        <div class="right">
        <p class="descr">{{ Product.description }}</p>
        <p class="brand">{{ Product.brand }}</p>
        <Button class="button" :onClick="rentProduct"
        :Product="Product" :description="ButtonDescription" />
        <Button class="button" :onClick="likeProduct"
        :Product="Product" :description="FavouriteButtonDescription" />
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
      rentProduct: 'productsModule/rentProduct',
      likeProduct: 'productsModule/likeProduct',
    }),
  },
  computed: {
    ButtonDescription() {
      return this.Product.available ? 'Ausleihen' : 'Zurückgeben';
    },
    FavouriteButtonDescription() {
      return this.Product.favourite ? 'Unlike' : 'Like';
    },

  },
};
</script>

<style lang="scss" scoped>
@import '../style/_constants';

  .product {
    display: flex;
    flex-direction: column;
    background-color: $secondary-color;
    padding: 1rem;
    margin-bottom: 1rem;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    width: 50vmin;
    font-family: $primary-font;
    text-transform: uppercase;
    display: flex;
    flex-flow: row wrap;
    border: 3px solid $primary-color;
  }

  .available {
    color: black;
    background-color: $secondary-color;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 25%;
  }

  img {
    width: 100%;
  }

  .right {
    margin-left: 50px;
  }

  .descr {
    color: $primary-color;
  }

  .brand {
    color: $tertiary-color;
  }

  .button {
    float: right;
    margin-left: 50px;
  }

</style>
