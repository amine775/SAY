<template>
  <v-container>
    <p> {{username}}</p>
    <input v-model="username">
    <p> {{password}}</p>
    <input v-model="password">
  </v-container>
</template>

<script>
export default {
  data: () => ({
    username: 'Veuillez entrer un nom de compte',
    password: 'Veuillez entrer un mot de passe'
  })
}
</script>
