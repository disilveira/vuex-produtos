<template>
  <nav class="navbar navbar-dark bg-primary">
    <span class="navbar-brand mb-0 h1">{{titulo}}</span>
  </nav>
</template>

<script>
export default {
  props: {
    titulo: String,
  },
};
</script>

<style scoped>
nav {
    margin-bottom: 15px;
}
</style>