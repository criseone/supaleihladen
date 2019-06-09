<template>
    <div class="product">
        <div class="left">
        <div class="picture">
        <img class="image" :src="Product.img_link" alt="Product Picture">
        </div>
        </div>
        <div class="right">
        <div class="top-right">
                  <Button class="button favoriteflag"  :onClick="likeProduct"
                                :Product="Product"
                                :description="FavouriteButtonDescription" />
        </div>
        <div class="title">
        <span class="descr">{{ Product.description }}</span>
        </div>
        <div class="subtitle">
        <span class="brand">{{ Product.brand }}</span>
        </div>
        <div class="favoriteflag">
        </div>
        <div class="bottom-right">
        <div class="tag">
        <span class="count">{{ Product.count_available }} / {{ Product.count_total }} </span>
        </div>
        <Button class="button rent"  v-if="isAvailable"
                                :onClick="rentProduct"
                                :Product="Product"
                                :description="rentDescription" />
        <Button class="button return"  v-if="isRentedOut"
                                :onClick="returnProduct"
                                :Product="Product"
                                :description="returnDescription" />
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
      return this.Product.available ? 'borrow' : 'return';
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
    rentDescription: () => 'borrow',
    returnDescription: () => 'return',
  },
};
</script>

<style lang="scss" scoped>
@import '../style/_constants';

  .product {
    display: flex;
    flex-direction: row;
    width: 90vmin;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 10px;
    background-color: $secondary-color;
    margin-bottom: 8vw;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    font-family: $primary-font;
    text-transform: uppercase;
    border-bottom: 0.1em solid $primary-color;
    padding-bottom: 8vw;
  }

  .right {
    order: 2;
    width: 65vmin;
    height: 20vmin;
    position: relative;
  }

  .left {
    order: 1;
  }

  .picture {
    width: 25vmin;
    height: 20vmin;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .title {
    text-align: left;
    font-size: 4vw;
  }

  .subtitle {
    text-align: left;
    font-size: 4vw;
  }

  .favoriteflag {
  float: right;
  }

  .tag {
    width: 20vmin;
    float: left;
    text-align: left;
  }

  .count {
    color: $secondary-color;
    background-color: $primary-color;
    border-radius: 10vmin;
    display: inline-block;
    width: 70%;
    font-size: 4vw;
    text-align: center;
  }

  .return {
    float: right;
  }

  .rent {
    float: left;
  }

  .descr {
    color: $primary-color;
  }

  .brand {
    color: $button-color-1;
  }

</style>
