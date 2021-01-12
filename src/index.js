import Vue from 'vue'
import App from './components/App.vue'
import Signup from './components/Signup.vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
Vue.config.productionTip = false

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

const routes = {
  '/': Signup,
  '/about': App,
  '/signup': App
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // apolloProvider,
  provide: apolloProvider.provide(),
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Signup
    }
  },
  render (h) { return h(this.ViewComponent) }
})

// Vue.use(VueApollo)
