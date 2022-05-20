<template>
  <div>
    <v-card color="light-blue" class="white--text my-1" height="130" justifyed>
      <v-card-text class="white--text">
        <v-autocomplete
          label="Marca"
          color="white"
          outlined
          :items="controller.marcas"
          item-value="codigo"
          item-text="nome"
          v-model="controller.marca"
        ></v-autocomplete>
      </v-card-text>
    </v-card>
    <v-card color="light-blue" class="white--text my-1" height="130" justifyed>
      <v-card-text class="white--text">
        <v-autocomplete
          label="Modelo"
          color="white"
          outlined
          :items="controller.modelos"
          item-value="codigo"
          item-text="nome"
          v-model="controller.modelo"
        ></v-autocomplete>
      </v-card-text>
    </v-card>
    <v-card color="light-blue" class="white--text my-1" height="130" justifyed>
      <v-card-text class="white--text">
        <v-autocomplete
          label="Ano"
          color="white"
          outlined
          :items="controller.anos"
          item-value="codigo"
          item-text="nome"
          v-model="controller.ano"
        ></v-autocomplete>
      </v-card-text>
    </v-card>
  </div>
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
