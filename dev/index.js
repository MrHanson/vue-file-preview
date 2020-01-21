import Vue from 'vue'
import App from './App.vue'

/** 引入FilePreview */
import FilePreview from '../release/file-preview.common'
Vue.use(FilePreview)

import 'normalize.css'

Vue.config.productionTip = false
Vue.config.performance = true

import element from 'element-ui'
Vue.use(element)

new Vue({
  render: h => h(App)
}).$mount('#app')
