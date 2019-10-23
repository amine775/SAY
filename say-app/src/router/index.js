import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Select from '../views/Select.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/SELECT',
    name: 'select',
    component: Select
  },
  {
    path: '/about',
    name: 'about',
    component: About

  },
  {
    path: '/Contact',
    name: 'contact',
    component: Contact

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
