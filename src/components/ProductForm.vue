<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <div class="form-group">
        <label for="nome"><strong>Produto</strong></label>
        <input
          type="text"
          class="form-control"
          v-model="nome"
          placeholder="Digite o nome do Produto"
        />
        <small class="text-danger"
          ><strong>{{ isProductNameLimitExceeded }}</strong></small
        >
      </div>
      <div class="form-group">
        <label for="nome"><strong>Preço</strong></label>
        <input
          type="text"
          class="form-control"
          v-model="preco"
          placeholder="Digite o preço do Produto"
        />
      </div>
      <div class="form-group">
        <label for="nome"><strong>Categoria</strong></label>
        <input
          type="text"
          class="form-control"
          v-model="categoria"
          placeholder="Digite a categoria do Produto"
        />
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <strong>Produto:</strong> {{ nome }} <br />
            <strong>Preço:</strong> {{ preco }} <br />
            <strong>Categoria:</strong> {{ categoria }}
          </li>
        </ol>
      </nav>
      <button type="submit" class="btn btn-success btn-block">Cadastrar</button>
      <br />
      <div class="text-center">
        <router-link to="/produtos"
          >Ver lista de produtos cadastrados</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>


export default {
  data() {
    return {
      nome: "",
      preco: "",
      categoria: "",
      isProductNameLimitExceeded: "",
      produtos: [],
    };
  },
  methods: {
    onFormSubmit() {
      this.$store.dispatch('addProduto', { nome: this.nome, preco: this.preco, categoria: this.categoria });
      console.log(this.$store.state.produtos);
    },
    handleOnAddProduct(produto) {
      this.produtos = this.produtos.concat(produto);
    },
  },
  watch: {
    nome() {
      if (this.nome.length > 15) {
        this.isProductNameLimitExceeded =
          "O Produto ultrapassou o limite de 15 caracteres";
      } else {
        this.isProductNameLimitExceeded = "";
      }
    },
  },
};
</script>