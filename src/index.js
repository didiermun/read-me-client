import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        token: ''
      },
    });
  }
});

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
