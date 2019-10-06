<template>
  <v-app app>
    <header>
      <div>
       <Header/>
      </div>
    </header>
    <v-content>
      <div>
        <Cars name="ford" model="fiesta" year="2008"/>
      </div>
    </v-content>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Cars from './components/Cars'
import CarPage from './page/CarPage'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Cars,
    CarPage,
    Footer
  },
  data: () => ({
  })
}
</script>
