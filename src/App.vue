<template>
  <div id="app">
    <Nav titulo="Cadastro de Produtos - Store and Routes - Vue" />
    <div class="container">
      <div class="row">
        <div class="offset-md-3 col-md-6">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  components: {
    Nav
  }
};
</script>