<template>
  <v-app app>
    <header>
       <Header/>
    </header>
    <v-content>
      <div>
        <Menu/>
      </div>
    </v-content>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer
  },
  data: () => ({
  })
}
</script>
