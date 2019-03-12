<template>
  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6>
          <v-card v-for="character in characters">
            <v-layout class="align-center">
              <v-flex xs5>
                <v-img
                class="white--text"
                :src="character.image" :alt="character.name"
                contain>
                </v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title class="layout justify-center">
                <div>
                  <div class="headline font-weight-black text-uppercase text-xs-center">{{ character.name }}</div>
                  <v-layout>
                    <v-flex xs6 class="text-xs-center">Species:</v-flex>
                    <v-flex xs6 class="text-xs-center">{{ character.species }}</v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex xs6 class="text-xs-center">Status:</v-flex>
                    <v-flex xs6 class="text-xs-center">
                      <div v-if="character.status === 'Dead'" class="font-weight-bold text-uppercase red--text text--accent-4 text-xs-center">
                            <v-icon color="red accent-4" size="1.2rem">mdi-account-remove</v-icon>
                              {{ character.status }}
                      </div>
                      <div v-else-if="character.status === 'Alive'" class="font-weight-bold text-uppercase green--text text--accent-4 text-xs-center">
                        <v-icon size="1.2rem" color="green accent-4">mdi-account-multiple-check</v-icon>
                              {{ character.status }}
                      </div>
                       <div v-else class="font-weight-bold text-uppercase blue-grey--text text--darken-3 text-xs-center">
                          <v-icon color="blue-grey darken-3" size="1.2rem">mdi-account-question</v-icon>
                              {{ character.status }}
                      </div>
                    </v-flex>
                   </v-layout>   
                  <div class="font-weight-thin font-italic">{{ character.location.name }}</div>
                  <div>{{ character.created | formatDate }}</div>
                </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          <v-divider light></v-divider>
          </v-card>
          <v-container fluid align-center>
            <v-layout align-center justify-center row>
              <v-flex>
                <div class="text-xs-center">
                  <v-btn @click="prevPage" class="lime lighten-1">
                    <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>
                    <v-spacer></v-spacer>
                    <span>Prev</span>
                  </v-btn>
                </div>
              </v-flex>
              <v-flex>  
                <div class="text-xs-center">
                  <v-btn @click="nextPage" class="lime lighten-1">
                    <span>Next</span>
                    <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                    <v-spacer></v-spacer>
                  </v-btn>
                </div>
               </v-flex> 
             </v-layout>
          </v-container>  
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {

data: () => ({
            characters: [],
            pages: [],
            index: 0,
            prev: '',
            next: '',
            date: []
            }),

filters: {
    formatDate: function(date) {
      var year = date.split('-')[0];
      var month = date.split('-')[1];
      var day = date.split('-')[2].slice(0,2);
      return year + '/' + month + '/' + day;
    }
  },

mounted() {
this.getCharacters('https://rickandmortyapi.com/api/character');
},

methods: {
  async getCharacters(url) {
    let config = {
    headers: {
    'Accept': 'application/json'
    }
    }
    axios.get(url, config)
      .then(res => {
      this.characters = res.data.results;
      this.pages[this.index] = res.data.results;
      this.prev = res.data.info.prev;
      this.next = res.data.info.next;
      this.date = res.data.results.created
      })
      .catch(err => {
        alert(err);
    });
    },
    prevPage() {
      if(this.index > 0){
          this.index--;
      if(this.pages[this.index] == undefined) {
          this.getCharacters(this.prev);
      }else{
      this.characters = this.pages[this.index];
          }
      }
    },
    nextPage() {
      if(this.index < 25){
          this.index++;
      if(this.pages[this.index] == undefined) {
          this.getCharacters(this.next);
      }else{
      this.characters = this.pages[this.index];
          }
      }
    }
  }
}
</script>
<style>
</style>