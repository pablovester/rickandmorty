import axios from 'axios'
import moment from 'moment'

<template>
  <v-app>
    <Header/>
    <v-content>
      <Cards/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Cards from './components/Cards'

export default {
  name: 'App',
  components: {
    Header,
    Cards
  },
  data () {
    return {
      //
    }
  }
}
</script>
