import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import { store } from './store';
import VueRouter from 'vue-router'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: '/produtos', component: ProductList },
  { path: '/', component: ProductForm }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
