<template>
  <v-app header>
    <v-app-bar>
      <v-toolbar-title class="headline text-uppercase">
        <span>I AM MANAGER</span>
        <div id="bGrp">
      <v-btn v-if="connect" v-on:click="say('Vous ne pouvez pas vous connecter pour le moment')"> Se connecter</v-btn>
      <v-btn v-else>Bonjour, {{username}} </v-btn>
      </div>
      </v-toolbar-title>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: 'Header ',
  components: {
  },
  data: () => ({
    connect: true,
    connection: 'Se connecter'
  }),
  el: 'bGrp',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
}
</script>
