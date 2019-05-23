<template>
    <div class="product">
        <p>{{ Product.descr }}</p>
        <button @click="delProduct(Product)">
          delete
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Product',
  props: {
    Product: Object,
  },
  methods: {
    ...mapActions(['delProduct']),
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
</style>
