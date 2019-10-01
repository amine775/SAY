<template>
  <v-app app>
    <header>
       <Header/>
    </header>
    <v-content>
      <div>
        <MenuG/>
        <MenuD/>
      </div>
    </v-content>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import MenuG from './components/MenuG'
import MenuD from './components/MenuD'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    MenuG,
    MenuD,
    Footer
  },
  data: () => ({
  })
}
</script>
