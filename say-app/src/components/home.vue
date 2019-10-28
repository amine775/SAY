<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="primary">explore meetup</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/createmeetup" class="primary">orgonize meeetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
          <v-flex xs12>
              <v-carousel style="cursor: pointer;">
                  <v-carousel-item
                          v-for="okok in itemss"
                          :src="okok.imageUrl"
                          :key="okok.id"
                          @click="onLoadMeetup(okok.id)"
                  >
                      <div class="title">
                          {{okok.title}}

                      </div>
                  </v-carousel-item>
              </v-carousel>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12  class="text-xs-center">
              <p>join our awesome meetups</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed:{
            itemss(){
                return this.$store.getters.featuredMeetups
            }

        },
        methods :{
            onLoadMeetup(id) {
                this.$router.push('/meetups/' + id)

            }
        }    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0,0,0,0,5);
        font-size: 2em;
        padding: 20px;
    }
</style>
