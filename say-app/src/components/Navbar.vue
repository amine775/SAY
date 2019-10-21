<template>
   <nav> 
      <v-toolbar flat app>
        <v-toolbar-title>SAYFY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text v-for="link in links" :key="link.text" router :to="link.route">{{link.btn}}</v-btn>
        </v-toolbar-items>
        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon v-for="link in links" :key="link.text" router :to="link.route">
            <v-icon>{{link.icon}}</v-icon>
          </v-btn>f
        </template>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" app class="indigo" ></v-navigation-drawer>
   </nav>

</template>

<script>

export default {
    data() {
        return {
            drawer:false,
            links: [
                { icon: 'mdi-export-variant', text: 'mdi-export-variant', route: '/Share'}, 
                { icon: 'mdi-delete-circle', text: 'mdi-delete-circle', route: '/Delete'},
                { icon: 'mdi-plus-circle', text: 'mdi-plus-circle', route: '/Ajout'},
                { btn:'Home', text:'click', route:'/Home'},
                { btn:'ABOUT US', text:'click', route:'/About'},
                { btn:'CONTACT', text:'click', route:'/Contact'}
            ]
        }
    }
}
</script>