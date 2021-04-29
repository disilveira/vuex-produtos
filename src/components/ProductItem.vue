<template>

  <div class="card" style="margin-bottom: 5px">
    <div class="card-body">
      <h4 class="card-title">{{produto.nome}}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{produto.categoria}}</h6>
      <h5>R$ {{produto.preco}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    produto: Object,
  },
};
</script>