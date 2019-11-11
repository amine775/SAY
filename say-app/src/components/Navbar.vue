<template>
  <nav>
    <v-toolbar dark class="purple darken-1">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetUp</router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn  v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon dark left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn v-if="userIsAuthenticated"
                
        @click="OnLogout">
          <v-icon dark left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sideNav:false,


    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon:'face',title:'Sign up', link:'/signup'},
        {icon:'lock_open',title:'Sign in', link:'/signin'}
      ]
      if(this.userIsAuthenticated) {
        menuItems = [
          {icon:'supervisor_account',title:'view meetups', link:'/meetups'},
          {icon:'room',title:'Organize meetup', link:'/createmeetup'},
          {icon:'person',title:'Profile', link:'/profile'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }

  },
  methods : {
    OnLogout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
