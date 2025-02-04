<template>
  <v-container fluid>
    <v-row align="start" justify="start">
      <v-col cols="12">
        <v-form class="full-form">
          <v-text-field label="Movie Name"></v-text-field>
          <v-text-field
            label="Description"
            style="height: 300px"
          ></v-text-field>
          <v-text-field label="Production Year"></v-text-field>
          <v-text-field label="Genre"></v-text-field>

          <v-btn class="me-4" type="submit"> submit </v-btn>
          <v-btn class="me-4" type="submit"> clear </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
