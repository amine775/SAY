<template>
  <nav>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar dark class="purple darken-1">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetUp</router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      
      <!-- dropdown menu -->
      <v-menu>
        <v-btn flat slot = "activator" color="grey" >
        <v-icon left>expand_more</v-icon>
        <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon dark left>{{item.icon}}</v-icon>
          {{item.title}}
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
      menuItems: [
        {icon:'supervisor_account',title:'view meetups', link:'/meetups'},
        {icon:'room',title:'Organize meetup', link:'/createmeetup'},
        {icon:'person',title:'Profile', link:'/profile'},
        {icon:'face',title:'Sign up', link:'/signup'},
        {icon:'lock_open',title:'Sign in', link:'/signin'}
      ]

    };
  }
};
</script>
