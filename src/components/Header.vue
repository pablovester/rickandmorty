 <template> 
  <v-toolbar app class="lime darken-1">
    <v-toolbar-title class="headline text-uppercase">
      <span class="cyan--text text--accent-3">Rick and Morty</span>
      <span> character list</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="porPaginas = !porPaginas"><span>Prueba</span></v-btn>
    <v-btn
      flat
      href="https://github.com/pablovester"
      target="_blank">
      <v-icon>mdi-github-circle</v-icon>
      <span class="mr-2">by pablovester</span>
    </v-btn>
  </v-toolbar>
</template>

<script></script>

<style>
  i{ font-family: 'Material Icons'; }
</style>