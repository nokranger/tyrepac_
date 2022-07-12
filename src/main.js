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
import VueMeta from 'vue-meta'
import JwPagination from 'jw-vue-pagination'
import VueAnalytic from 'vue-analytics'
// import axios from 'axios'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueAnalytic, {
  id: 'UA-6923893-40',
  router
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))
Vue.component('jw-pagination', JwPagination)
Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})

library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// axios.defaults.baseURL = process.env.VUE_APP_API_URL

Vue.use(vuePhotoZoomPro)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
