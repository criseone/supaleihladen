<template>
    <div class="product">
        <p>{{ descr }}</p>
    </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    id: Number,
    descr: String,
  },
};
</script>
