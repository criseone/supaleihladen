<template>
    <div class="product">
        <div class="left">
        <img class="image" :src="Product.img_link" alt="Placeholder Image">
        </div>
        <div class="right-top">
        <p class="descr">{{ Product.description }}</p>
        <p class="brand">{{ Product.brand }}</p>
        </div>
        <div class="right-bottom">
        <p class="count">{{ Product.count_available }} / {{ Product.count_total }}</p>
        <Button class="button"  v-if="isAvailable"
                                :onClick="rentProduct"
                                :Product="Product"
                                :description="rentDescription" />
        <Button class="button"  v-if="isRentedOut"
                                :onClick="returnProduct"
                                :Product="Product"
                                :description="returnDescription" />
        <Button class="button"  :onClick="likeProduct"
                                :Product="Product"
                                :description="FavouriteButtonDescription" />
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
      returnProduct: 'productsModule/returnProduct',
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
    isAvailable() {
      return this.Product.count_available > 0;
    },
    isRentedOut() {
      return this.Product.count_available !== this.Product.count_total;
    },
    /* isAvailable: () => this.Product.count_available > 0,
    isRentedOut: () => this.Product.count_available !== this.Product.count_total, */
    rentDescription: () => 'Ausleihen',
    returnDescription: () => 'Zurückgeben',
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

  .right-top {
    margin-left: 50px;
  }

  .right-bottom {
   flex-direction: row;
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
