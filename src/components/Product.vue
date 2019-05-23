<template>
    <div class="product">
        <p>{{ Product.descr }}</p>
        <Button :onClick="rentProduct" :Product="Product" :description="getAvailability" />
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
    getAvailability() {
      return this.Product.available ? 'Ausleihen' : 'Zurückgeben';
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
</style>
