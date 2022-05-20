<template>
  <v-app style="background-color: #c7fff3">
    <v-app-bar app color="light-blue" class="black--text">
      <v-spacer />
      <h2>Cotação Fipe - {{ controller.tipoValor }}</h2>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="7" md="8" lg="2" xl="3">
            <tipo :controller="controller" />
          </v-col>
          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            <selecao :controller="controller" />
          </v-col>
          <v-col cols="12" sm="7" md="8" lg="4" xl="3">
            <grafico :controller="controller" />
            <valor :controller="controller" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { homeController } from "../di/di";
import tipo from "../components/tipo.vue";
import selecao from "../components/selecao.vue";
import grafico from "../components/grafico.vue";
import valor from "../components/valor.vue";
export default {
  components: {
    tipo,
    selecao,
    grafico,
    valor
  },
  data: (context) => ({
    controller: homeController(context),
  }),
  mounted() {
    this.controller.mounted();
  },
  watch: {
    "controller.tipo"() {
      this.controller.buscarMarca();
    },
    "controller.marca"() {
      this.controller.buscarModelo();
    },
    "controller.modelo"() {
      this.controller.buscarAno();
    },
    "controller.ano"() {
      this.controller.buscarValor();
    },
  },
};
</script>