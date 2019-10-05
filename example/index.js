import Vue from 'vue'
import App from './App.vue'

/** import element-ui */
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

/** 引入FilePreview */
import FilePreview from '@/'
Vue.use(FilePreview)

import 'normalize.css'

Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
  render: h => h(App)
}).$mount('#app')
