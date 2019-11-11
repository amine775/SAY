<template>
    <v-dialog width ="350px" persistent v-model="editDialog">
       <template v-slot:activator="{ on }">
           <v-btn v-on="on">
            <v-icon>edit</v-icon>Edit
            </v-btn>

           <v-btn
                   class="red--text darken-1"
                   flat
                   @click="deleteMeetup"><v-icon>clear</v-icon>Delete</v-btn>
        </template>

        <v-card>
            <v-container>
               <v-layout row wrap>
                   <v-flex xs12>
                       <v-card-title>Edit meetup</v-card-title>
                   </v-flex>
               </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                name="title"
                                label="title"
                                id="title"
                                v-model="editedTitle"
                                required></v-text-field>
                            <v-text-field
                                    name="description"
                                    label="description"
                                    id="description"
                                    multi-line
                                    v-model="editedDescription"
                                    required></v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>

                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-card-actions>

                                <v-btn
                                        class="red--text darken-1"
                                        flat
                                        @click="editDialog = false">close</v-btn>
                                <v-btn
                                        class="green--text darken-1"
                                        flat
                                        @click="onSaveChanges">save</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>


            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
      props: ['meetup'],
      data () {
          return {
              editDialog : false,
              editedTitle: this.meetup.title,
              editedDescription: this.meetup.description
          }
      },
      methods : {
          onSaveChanges () {
              if (this.editedTitle.trim()===''|| this.editedDescription.trim()===''){
                  return
              }
              this.editDialog = false
              this.$store.dispatch('updateMeetupData',{
                 id: this.meetup.id,
                 title : this.editedTitle,
                 description : this.editedDescription
              })
          },
          deleteMeetup () {
              this.editDialog = false
              this.$store.dispatch('deleteMeetup',{
                 id: this.meetup.id
              }),
              this.$router.push('/meetups')
          },
      }
  }
</script>
