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
display:inline-block;
padding:0.35em 1.2em;
border:0.1em solid $button-color-1;
margin:0 0.3em 0.3em 0;
box-sizing: border-box;
text-decoration:none;
font-family: $primary-font;
font-weight:300;
color:black;
text-align:center;
transition: all 0.2s;
background-color: $button-color-1;
text-transform: uppercase;
}

button:hover{
color: black;
border:0.1em solid $button-color-2;
background-color: $button-color-2;
}

@media all and (max-width:30em){
button{
display:block;
margin:0.4em auto;
}
}
</style>
