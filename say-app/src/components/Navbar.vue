<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"></span>
        <span>SAYFY</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="link in links" :key="link.text" router :to="link.route">{{link.btn}}</v-btn>
        <v-btn flat color="grey">
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
        { btn: "ABOUT US", text: "click", route: "/About" },
        { btn: "CONTACT", text: "click", route: "/Contact" }
        
      ]
    };
  }
};
</script>