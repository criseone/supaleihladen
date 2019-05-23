<template>
  <div id="app">
    <ProductList />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
  name: 'app',
  components: {
    ProductList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

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

</style>
