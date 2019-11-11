import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedMeetups: [
            {
                imageUrl: 'https://media.routard.com/image/10/5/new-york.1468105.c768x230.jpg',
                id:'gesfgje',
                title:'meetup in newyork',
                date: new Date(),
                location:'NYY',
                description:'c ny'
            },

            {
                imageUrl: 'https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415__480.jpg',
                id:'gesfllgje',
                title:'meetup in paris',
                date: new Date(),
                location:'paris',
                description:'c paris'
            }
        ],
        user: null,
        loading: false,
        error: null

    },
    mutations: {
        setLoadedMeetups (state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup (state,payload) {
            state.loadedMeetups.push(payload)

        },
        updateMeetup(state, payload) {
            const meetup = state.loadedMeetups.find(meetup => {
                return meetup.id === payload.id
            })
            if (payload.title){
                meetup.title = payload.title
            }
            if (payload.description){
                meetup.description = payload.description
            }
            if (payload.date){
                meetup.date = payload.date
            }
        },
        deleteMeetup (state,payload) {
            const meetup = state.loadedMeetups.find(meetup => {
                return meetup.id === payload.id
            })
            if (payload.title){
                meetup.title = null
            }
            if (payload.description){
                meetup.description = null
            }
            if (payload.date){
                meetup.date = null
            }
        },

        setUser (state,payload){
            state.user = payload
        },
        setLoading (state, payload){
            state.loading = payload
        },
        setError (state, payload){
            state.error = payload
        },
        clearError (state){
            state.error = null
        }
    },
    actions : {
        loadMeetups({commit}){
            commit('setLoading',true)
           firebase.database().ref('meetups').once('value').then((data)=> {
               const meetups= []
               const obj = data.val()
               for (let key in obj) {
                   meetups.push({
                       id:key,
                       title:obj[key].title,
                       description : obj[key].description,
                       imageUrl : obj[key].imageUrl,
                       date : obj[key].date,
                       location : obj[key].location,
                       creatorId: obj[key].creatorId
                   })
               }

               commit('setLoadedMeetups', meetups)
               commit('setLoading',false)
           }).catch(
                /*(error) => {
                   commit('setLoading',true)
               }*/
           )
        },
        createMeetup ({commit,getters},payload){
            const meetup = {
                title: payload.title,
                location : payload.location,
                imageUrl : payload.imageUrl,
                description: payload.description,
                date: payload.date,
                creatorId: getters.user.id

            }

            firebase.database().ref('meetups').push(meetup).then(
                (data) => {
                    const key = data.key
                    commit('createMeetup',{
                        ...meetup, id :key

                    })


                })


        },
        updateMeetupData ({commit},payload){
            commit('setLoading',true)
            const updateObj = {}
            if (payload.title) {
                updateObj.title = payload.title
            }
            if (payload.description) {
                updateObj.description = payload.description
            }
            if (payload.date){
               updateObj.date = payload.date
            }
            firebase.database().ref('meetups').child(payload.id).update(updateObj).then(
                () => {
                    commit('setLoading',false)
                    commit('updateMeetup',payload)
                }
            )
        },

        deleteMeetup ({commit}, payload){
            commit('setLoading',true)
            firebase.database().ref('meetups').child(payload.id).remove().then(function() {
                commit('setLoading',false)
                commit('updateMeetup',payload)
            }
            )},

        signUserUp ({commit},payload){
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password).then((
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser)
                }

            )).catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                }



            )
        },
        signUserIn ({commit},payload){
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser)
                }
            ).catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                }



            )
        },
        autoSignIn({commit},payload) {
            commit('setUser',{id: payload.uid,registeredMeetups : []})
        },
        logout({commit}){
            firebase.auth().signOut()

            commit('setUser',null)
        },
        clearError ({commit}) {
            commit('clearError')
        }
    },
    getters : {
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA,meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state,getters) {
            return getters.loadedMeetups.slice(0,5)
        },
        loadedMeetup(state){
            return(meetupId) =>{
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user(state){
            return state.user
        },
        loading(state){
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
})
