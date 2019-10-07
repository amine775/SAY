<template>
    <div>
        <ul v-for='car in cars' :key=car.name>
            <li>{{car.name}}</li>
            <li>{{car.model}}</li>
            <li>{{car.year}}</li>
            <button @click='selectcar(car)'>Voir les détails</button>
        </ul>
        <button @click="addCar"> Add car </button>
        <p> Nombre de voiture : {{counter}} </p>
    </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  data () {
    return {
      cars: []
    }
  },
  http: {
    root: 'http://localhost:3000'
  },
  props: ['name', 'model', 'year'],
  methods: {
    addCar () {
      this.cars.push({
        'name': 'ford',
        'model': 'fiesta',
        'year': '2008'
      })
    },
    selectcar (car) {
      this.$emit('selected', car)
    }
  },
  computed: {
    counter () {
      return this.cars.length
    }
  },
  mounted () {
    this.$resource('cars').get().then(response => {
      this.cars = response.data
    },
    response => {
      console.log('erreur', response)
    })
  }
}
</script>
