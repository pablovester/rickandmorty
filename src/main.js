import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import moment from 'moment'

Vue.use(Vuetify, {
  iconfont: 'mdi' 
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
