import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'

const routes = {
  '/': Home,
  '/about': App
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Home
    }
  },
  render (h) { return h(this.ViewComponent) }
})
