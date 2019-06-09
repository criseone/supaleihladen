<template>
    <div class="product">
        <div class="left">
        <img class="image" :src="Product.img_link" alt="Placeholder Image">
        </div>
        <div class="right">
        <div class="right-top">
        <span class="descr">{{ Product.description }}</span>
        <span class="brand">{{ Product.brand }}</span>
        </div>
        <div class="right-bottom">
        <div>
        <span class="count">{{ Product.count_available }} / {{ Product.count_total }} </span>
        </div>
        <div>
        <Button class="button"  v-if="isAvailable"
                                :onClick="rentProduct"
                                :Product="Product"
                                :description="rentDescription" />
        </div>
        <div>
        <Button class="button"  v-if="isRentedOut"
                                :onClick="returnProduct"
                                :Product="Product"
                                :description="returnDescription" />
        </div>
        <div>
        <Button class="button"  :onClick="likeProduct"
                                :Product="Product"
                                :description="FavouriteButtonDescription" />
        </div>
        </div>
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
    flex-direction: row;
    flex-flow: row wrap;
    background-color: $secondary-color;
    margin-bottom: 1rem;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    font-family: $primary-font;
    text-transform: uppercase;
  }

  img {
    width: 25vmin;
  }

  .descr {
    color: $primary-color;
  }

  .brand {
    color: $button-color-1;
  }

  .button {
    display: inline-block;
    width: 25%;
  }

  .count {
    color: $secondary-color;
    background-color: $primary-color;
    border-radius: 10vmin;
    display: inline-block;
    width: 25%;
  }

  .right {
    width: 75vmin;
    display: flex;
    flex-direction: column;
  }

  .right-top {
    width: 100%;
}

  .right-bottom {
    flex-flow: row wrap;
    justify-content: flex-start;
  }

</style>
