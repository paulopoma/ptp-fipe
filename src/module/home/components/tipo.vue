<template>
  <v-item-group mandatory v-model="controller.tipo">
    <v-item v-slot="{ active, toggle }">
      <v-card
        :color="active ? 'indigo' : 'light-blue'"
        class="d-flex align-center justify-center my-1"
        dark
        height="130"
        @click="toggle"
        style="border-radius: 20px"
      >
        <v-icon color="black" size="70px">mdi-car</v-icon>
      </v-card>
    </v-item>
    <v-item v-slot="{ active, toggle }">
      <v-card
        :color="active ? 'indigo' : 'light-blue'"
        class="d-flex align-center justify-center my-1"
        dark
        height="130"
        @click="toggle"
        style="border-radius: 20px"
      >
        <v-icon color="black" size="70px">mdi-bike</v-icon>
      </v-card>
    </v-item>
    <v-item v-slot="{ active, toggle }">
      <v-card
        :color="active ? 'indigo' : 'light-blue'"
        class="d-flex align-center justify-center my-1"
        dark
        height="130"
        @click="toggle"
        style="border-radius: 20px"
      >
        <v-icon color="black" size="70px">mdi-truck</v-icon>
      </v-card>
    </v-item>
  </v-item-group>
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
