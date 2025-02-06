<template>
  <v-container fluid>
    <v-row align="start" justify="start">
      <v-col cols="12">
        <v-form class="full-form">
          <v-text-field label="Movie Name" v-model="name"></v-text-field>
          <v-text-field
            label="Description"
            v-model="description"
            style="height: 300px"
          ></v-text-field>
          <v-text-field
            label="Production Year"
            v-model="release_year"
          ></v-text-field>
          <v-text-field label="Genre" v-model="genre"></v-text-field>

          <v-btn class="me-4" type="submit" @click="submit"> submit </v-btn>
          <v-btn class="me-4" type="submit"> clear </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    submit() {
      return axios({
        method: "post",
        data: {
          name: this.name,
          description: this.description,
          release_year: this.release_year,
          genre: this.genre,
        },
        url: "http://localhost:5000/movies",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        this.$router.push({ name: "Home" });
        this.$refs.form.reset();
      });
    },
  },
};
</script>
