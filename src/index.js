import Vue from 'vue'
import App from './components/App.vue'
import VueApollo from 'vue-apollo'
import Vuesax from 'vuesax'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import router from './router/router.js'
import './index.css'
import 'vuesax/dist/vuesax.css'
Vue.config.productionTip = false

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql',
  headers: {
    token: localStorage.getItem("user_auth")
  }
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

Vue.config.productionTip = false
new Vue({
  provide: apolloProvider.provide(),
  router,
  Vuesax,
  render: h => h(App)
}).$mount("#app");


// new Vue({
//   el: '#app',
//   provide: apolloProvider.provide(),
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || App
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })

// Vue.use(VueApollo)
