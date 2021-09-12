<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
//import { mapGetters } from 'vuex';
export default {
  //   computed: {
  //     ...mapGetters({
  //       total: 'valorTotal',
  //     }),
  //   },

  //Leitura dos GETTERS usando MAPGETTERS
  //computed: mapGetters(['valorTotal']),

  // Leitura dos GETTERS diretamente - Mais comum
  computed: {
    total() {
      return this.$store.getters.valorTotal;
    },
  },
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}
</style>
