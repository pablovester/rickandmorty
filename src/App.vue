import axios from 'axios'

<template>
  <v-app>
    <Header/>
    <v-content>
      <Cards v-if="porPaginas==true"></Cards>
      <Page v-if="porPaginas==false"/></Page>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Cards from './components/Cards'
import Page from './components/Page'

export default {
  name: 'App',
  components: {
    Header,
    Cards,
    Page
  },
  data () {
    return {
      porPaginas: true
    }
  }
}
</script>
