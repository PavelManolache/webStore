<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="item in menuItems"
            :key="item.value"
            :prepend-icon="item.icon"
            :to="item.to"
            :title="item.title"
            link
          />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
      menuItems: [
        { title: "Home", icon: "mdi-home-city", to: "/" },
        { title: "Contacts", icon: "mdi-account", to: "/contact" },
        { title: "Add Movie", icon: "mdi-account", to: "/addmovie" },
      ],
    };
  },
};
</script>
