<template>
    <div class="product">
        <div class="left">
        <div class="picture">
        <img class="image" :src="Product.img_link" alt="Product Picture">
        </div>
        </div>
        <div class="right">
        <div class="top-right">
                  <div class="favoriteflag" @click="onClick(Product)"
                                :onClick="likeProduct"
                                :Product="Product"
                                v-bind:class="{ active: FavouriteButtonDescription }">
                  </div>
        </div>
        <div class="title">
        <span class="descr">{{ Product.description }}</span>
        </div>
        <div class="subtitle">
        <span class="brand">{{ Product.brand }}</span>
        </div>
        <div class="listspacer"></div>
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
      return this.Product.favourite;
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
    width: 90vw;
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
    width: 65vw;
    height: 25vw;
    position: relative;
  }

  .left {
    order: 1;
    position: relative;
  }

  .picture {
    width: 25vw;
    height: 25vw;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .title {
    text-align: left;
    font-size: 4vw;
    max-height: 70px;
  }

  .subtitle {
    text-align: left;
    font-size: 4vw;
  }

  .brand {
    max-height: 70px;
  }

  .favoriteflag {
  background-image: url("../assets/ribbon-empty.png");
  background-repeat: no-repeat;
  background-position: top right;
  float: right;
  min-height: 30pt;
  max-height: 66pt;
  width: 10vw;
  }

  .favoriteflag.active {
  background-image: url("../assets/ribbon-filled.png");
  }

  .tag {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20vw;
    float: left;
    text-align: left;
  }

  .count {
    color: $secondary-color;
    background-color: $primary-color;
    border-radius: 10vw;
    display: inline-block;
    width: 70%;
    font-size: 3vw;
    text-align: center;
  }

  .bottom-right {
    display: flex;
    justify-content: flex-end;
}

  .return {
    order: 1;
    //float: right;
    margin-top: 10px;
    min-height: 30pt;
    max-height: 66pt;
  }

  .rent {
    order: 2;
    margin-left: 10px;
    margin-top: 10px;
    float: right;
    min-height: 30pt;
    max-height: 66pt;
  }

  .descr {
    color: $primary-color;
  }

  .brand {
    color: $button-color-1;
  }

</style>
