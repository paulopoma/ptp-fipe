<template>
  <v-card
    v-if="controller.valorFipe.valor"
    color="light-blue"
    class="white--text text-center my-1"
  >
    <v-card-text class="black--text">
      <h3>
        {{ controller.valorFipe.marca }} - {{ controller.valorFipe.modelo }} -
        {{ controller.valorFipe.anoModelo }} -
        {{ controller.valorFipe.combustivel }}
      </h3>
    </v-card-text>
    <v-card-text class="black--text">
      <h1>{{ controller.valorFipe.valor }}</h1>
    </v-card-text>
    <v-card-text class="black--text">
      <h5>
        Tabela Fipe: {{ controller.valorFipe.codigoFipe }} -
        {{ controller.valorFipe.mesReferencia }}
      </h5>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    controller: {
      required: true,
    },
  },
};
</script>
