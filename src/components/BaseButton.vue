<template>
        <button @click="onClick(Product)">
          delete
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
  },
};
</script>

<style lang="scss" scoped>
button {
display:inline-block;
padding:0.35em 1.2em;
border:0.1em solid #FFFFFF;
margin:0 0.3em 0.3em 0;
border-radius:0.12em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
text-align:center;
transition: all 0.2s;
}

button:hover{
color:#000000;
background-color:#FFFFFF;
}

@media all and (max-width:30em){
button{
display:block;
margin:0.4em auto;
}
}
</style>
