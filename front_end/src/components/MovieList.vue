<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="movie in movies" :key="movie._id" cols="12" md="4">
        <v-card class="pa-3">
          <v-img
            v-if="movie.img"
            :src="movie.img"
            height="200px"
            contain
          ></v-img>

          <v-card-title>{{ movie.name }}</v-card-title>
          <v-card-subtitle
            >{{ movie.release_year }} - {{ movie.genre }}</v-card-subtitle
          >
          <v-card-text>{{ movie.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
    };
  },

  mounted() {
    this.fetchMovies();
  },

  methods: {
    fetchMovies() {
      axios.get("http://localhost:5000/movies").then((response) => {
        this.movies = response.data;
      });
    },
  },
};
</script>
