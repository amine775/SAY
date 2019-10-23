<template>
  <nav>
    <v-toolbar text app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"></span>
        <span>SAYFY</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="link in links" :key="link.route" router :to="link.route">{{link.btn}}</v-btn>
        <v-btn text color="grey">
          <span> Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { btn: "Home", text: "click", route: "/Home" },
        { btn: "Selectionner une voiture", text: "click", route: "/SELECT" },
        { btn: "Modifier une voiture", text: "click", route: "/UPDATE" },
        { btn: "Ajouter une voiture", text: "click", route: "/ADD" },
        { btn: "Supprimer une voiture", text: "click", route: "/DELETE" }
        
      ]
    };
  }
};
</script>