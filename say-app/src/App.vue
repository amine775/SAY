<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Football Manager</span>
        <span class="font-weight-light">Selection d'équipe</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <MenuG/>
      <MenuD/>
    </v-content>
  </v-app>
</template>

<script>
import MenuG from './components/MenuG'
import MenuD from './components/MenuD'
export default {
  name: 'App',
  components: {
    MenuG,
    MenuD
  },
  data: () => ({
    //
  })
}
</script>
