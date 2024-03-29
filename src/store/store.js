import Vue from 'vue';
import Vuex from 'vuex';

import carrinho from './modules/carrinho';
import parametros from './modules/parametros';

import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nome: 'Bruno',
    sobrenome: ' Souza',
  },
  getters,
  modules: { carrinho, parametros },
});
