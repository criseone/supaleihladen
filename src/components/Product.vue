<template>
    <div class="product" :class="ProductStyle">
        <img src="../assets/placeholder_image.png" alt="Placeholder Image">
        <p class="descr">{{ Product.descr }}</p>
        <p class="brand">{{ Product.brand }}</p>
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
@import '../style/_constants';

.wrapper {
  display: flex;
  flex-flow: row wrap;
}

/* We tell all items to be 100% width, via flex-basis */
.wrapper > * {
  flex: 1 100%;
}

/* We rely on source order for mobile-first approach
 * in this case:
 * 1. header
 * 2. article
 * 3. aside 1
 * 4. aside 2
 * 5. footer
 */

/* All screens */
@media all and (min-width: 800px) {
  /* We invert order of first sidebar and main
   * And tell the main element to take twice as much width as the other two sidebars
   */
  .main { flex: 2 0px; }
  .aside-1 { order: 1; }
  .main    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}

  .product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $secondary-color;
  padding: 1rem;
  margin-bottom: 1rem;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  width: 30vmin;
  font-family: $primary-font;
  text-transform: uppercase;
  }

  .descr {
    color: $primary-color;
  }

  .brand {
    color: $tertiary-color;
  }

  .available {
    color: black;
    background-color: white;
  }

  img {
    width: 7vmin;
  }

</style>
