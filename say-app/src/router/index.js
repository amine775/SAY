import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import meetups from '../components/Meetup/meetups.vue'
import createmeetup from '../components/Meetup/createmeetup.vue'
import profile from '../components/user/profile.vue'
import signin from '../components/user/signin.vue'
import signup from '../components/user/signup.vue'
import meetup from '../components/Meetup/meetup.vue'
import AuthGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/meetups',
    name: 'meetups',
    component: meetups

  },
  {
    path: '/meetups/:id',
    name: 'meetup',
    props :true,
    component: meetup

  },
  {
    path: '/createmeetup',
    name: 'createmeetup',
    component: createmeetup,
    beforeEnter: AuthGuard
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    beforeEnter: AuthGuard

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
