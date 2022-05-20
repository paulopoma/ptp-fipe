<template>
  <v-card
    v-if="controller.anos.length > 0"
    color="light-blue"
    class="white--text my-1"
  >
    <v-card-text class="white--text">
      <div id="chart" style="height: 200px; width: 100%"></div>
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
}
</script>
