// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'

import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Home from './components/home/Home'
import Contact from './components/Contact'
import WorkWithUs from './components/WorkWithUs'
import About from './components/About'

Vue.use(VueRouter)
 
Vue.use(VueFire)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/work-with-us', component: WorkWithUs },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



