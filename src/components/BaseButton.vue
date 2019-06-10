<template>
        <button @click="onClick(Product)">
          {{ description }}
        </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    Product: Object,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../style/constants';

button {
border:0.1em solid $button-color-1;
box-sizing: border-box;
font-family: $primary-font;
font-weight:300;
color: $button-color-1;
text-align:center;
transition: all 0.2s;
background-color: $secondary-color;
text-transform: uppercase;
border-radius: 2pt;
font-size: 3vw;
}

button:hover{
color: $secondary-color;
border:0.1em solid $button-color-2;
background-color: $button-color-2;
}

@media all and (max-width:60em){
button{
display:block;}
}
</style>
