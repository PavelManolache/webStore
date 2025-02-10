<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-main class="custom-main">
    <router-view />
  </v-main>
</template>
<style scoped>
.custom-main {
  width: 60%; /* Set your desired width here */
  margin: 0 auto; /* Center it horizontally */
}
</style>
