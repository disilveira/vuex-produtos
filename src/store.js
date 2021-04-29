import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        produtos: []
    },
    getters: {
        getProdutos: state => {
            return state.produtos.map(produto => produto)
        }
    },
    mutations: {
        addProduto(state, produto) {
            state.produtos.push({
                nome: produto.nome,
                preco: produto.preco,
                categoria: produto.categoria
            })
        }
    },
    actions: {
        addProduto(context, produto) {
            context.commit('addProduto', produto)
        }
    }
});