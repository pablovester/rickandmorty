import axios from 'axios'

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
  }
}
</script>
