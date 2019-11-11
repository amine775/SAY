<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4>create meetup</h4>
            </v-flex>

        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                            name="title"
                            label="Title"
                            id="title"
                            v-model="title"
                            required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="location"
                                    label="location"
                                    id="location"
                                    v-model="location"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="imageUrl"
                                    label="image URL"
                                    id="image-url"
                                    v-model="imageUrl"
                                    required></v-text-field>

                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" alt="" height="200">
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    name="description"
                                    label="description"
                                    id="description"
                                    multi-line
                                    v-model="description"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex vs12 sm6 offset-sm3>
                            <datetime type="datetime"
                                v-model="date"
                                zone="Europe/Paris"
                                input-id="startDate">
                            <label for="startDate" slot="before">Selectionner une date :</label>
                            <template slot="button-cancel">
                                Cancel
                            </template>
                            <template slot="button-confirm">
                                Confirm
                            </template>
                        </datetime>

                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary" :disabled="!formIsValid" type="submit">create meetup</v-btn>

                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                location : '',
                imageUrl:'',
                description :'',
                date: new Date().getMonth()

            }
        },
        computed: {
        formIsValid() {
            return this.title !== '' &&
                this.location !== '' &&
                this.imageUrl !== '' &&
                this.description !== ''
        },
            submittableDateTime() {
                const date = new Date(this.date)
                return date
            }

        },
        methods:{
            onCreateMeetup(){
                if (!this.formIsValid){
                    return
                }

                const meetupData={
                    title: this.title,
                    location : this.location,
                    imageUrl : this.imageUrl,
                    description: this.description,
                    date: this.date
                }
                this.$store.dispatch('createMeetup',meetupData)
                this.$router.push('/meetups')


            }
        }
    }
</script>
