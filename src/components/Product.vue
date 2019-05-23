<template>
    <div class="product" :class="ProductStyle">
        <p>{{ Product.descr }}</p>
        <Button :onClick="rentProduct" :Product="Product" :description="ButtonDescription" />
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
    ...mapActions(['rentProduct']),
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
  .product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:violet;
  border-radius: 0.3rem;
  padding: 1rem;
  color: #fff;
  margin-bottom: 1rem;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  width: 10rem;
  }

  .available {
    background-color: greenyellow;
  }
</style>
