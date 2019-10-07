<template>
  <v-app app>
    <header>
      <div>
       <Header/>
      </div>
    </header>
    <v-content>
      <div>
        <CarPage/>
      </div>
    </v-content>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import CarPage from './page/CarPage'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    CarPage,
    Footer
  },
  data: () => ({
  })
}
</script>
