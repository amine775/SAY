import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
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
        createMeetup (state,payload) {
            state.loadedMeetups.push(payload)

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
        createMeetup ({commit},payload){
            const meetup = {
                title: payload.title,
                location : payload.location,
                imageUrl : payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id:'njnjn'
            }
            commit('createMeetup',meetup)

        },
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

            ).catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                }



            ))
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
            )
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
