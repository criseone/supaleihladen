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
