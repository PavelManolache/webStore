<template>
  <v-container fluid>
    <v-row align="start" justify="start">
      <v-col cols="12">
        <v-form class="full-form" ref="form" @submit.prevent="submit">
          <v-text-field label="Movie Name" v-model="name"></v-text-field>
          <v-text-field
            label="Description"
            v-model="description"
            style="height: 200px"
          ></v-text-field>
          <v-text-field
            label="Production Year"
            v-model="release_year"
          ></v-text-field>
          <v-text-field label="Genre" v-model="genre"></v-text-field>
          <v-text-field label="Img URL" v-model="img"></v-text-field>

          <v-btn class="me-4" type="submit"> submit </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      description: "",
      release_year: "",
      genre: "",
      img: "",
    };
  },

  methods: {
    submit() {
      return axios({
        method: "post",
        data: {
          name: this.name,
          description: this.description,
          release_year: this.release_year,
          genre: this.genre,
          img: this.img,
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
