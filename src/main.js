import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import vuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'
// import axios from 'axios'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// axios.defaults.baseURL = 'http://119.63.90.135:2083/'

Vue.use(vuePhotoZoomPro)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
