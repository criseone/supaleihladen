<template>
    <div class="product">
        <div class="left">
        <div class="picture">
        <img class="image" :src="Product.img_link" alt="Product Picture">
        </div>
        </div>
        <div class="right">
        <div class="top-right">
        <div class="title">
        <span class="descr">{{ Product.description }}</span>
        </div>
        <div class="subtitle">
        <span class="brand">{{ Product.brand }}</span>
        </div>
        <div class="favoriteflag">
        <Button class="button"  :onClick="likeProduct"
                                :Product="Product"
                                :description="FavouriteButtonDescription" />
        </div>
        </div>
        <div class="bottom-right">
        <div class="tag">
        <span class="count">{{ Product.count_available }} / {{ Product.count_total }} </span>
        </div>
        <div class="rentbutton">
        <Button class="button"  v-if="isAvailable"
                                :onClick="rentProduct"
                                :Product="Product"
                                :description="rentDescription" />
        </div>
        <div class="returnbutton">
        <Button class="button"  v-if="isRentedOut"
                                :onClick="returnProduct"
                                :Product="Product"
                                :description="returnDescription" />
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
  position: absolute;
  top: 0;
  right: 20%;
  width: 10vmin;
  }

.bottom-right {
  display: flex;
}

  .tag {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20vmin;
  }

  .count {
    order: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    color: $secondary-color;
    background-color: $primary-color;
    border-radius: 10vmin;
    display: inline-block;
    width: 70%;
    font-size: 4vw;
  }

  .returnbutton {
    order: 2;
    position: absolute;
    bottom: 0;
    right: 20%;
    width: 10vmin;
  }

  .rentbutton {
    order: 3;
    position: absolute;
    bottom: 0;
    right: 60%;
    width: 10vmin;
  }

  .descr {
    color: $primary-color;
  }

  .brand {
    color: $button-color-1;
  }

</style>
