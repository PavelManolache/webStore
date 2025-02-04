<script setup>
import { RouterLink, RouterView } from "vue-router";

import Appbar from "./components/Appbar.vue";
import NavigationDrawer from "./components/Navigation-drawer.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md"
      ><NavigationDrawer></NavigationDrawer>
      <v-layout>
        <Appbar></Appbar>

        <Main> </Main>
      </v-layout>
    </v-layout>
    <Footer></Footer>
  </v-app>
</template>
