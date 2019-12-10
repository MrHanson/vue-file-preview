import DemoBox from '@laomao800/vue-demo-box'
import ImgPreviewer from '../../src/previewers/img.vue'

ImgPreviewer.install = function(Vue) {
  Vue.component(ImgPreviewer.name, ImgPreviewer)
}

DemoBox.install = function(Vue) {
  Vue.component(DemoBox.name, DemoBox)
}

export default ({ Vue }) => {
  Vue.use(ImgPreviewer)
  Vue.use(DemoBox)
}
