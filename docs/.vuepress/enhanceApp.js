import ImgPreviewer from '../../src/previewers/img.vue'
import ExcelPreviewer from '../../src/previewers/excel.vue'

ImgPreviewer.install = function(Vue) {
  Vue.component(ImgPreviewer.name, ImgPreviewer)
}

ExcelPreviewer.install = function(Vue) {
  Vue.component(ExcelPreviewer.name, ExcelPreviewer)
}

export default ({ Vue }) => {
  Vue.use(ImgPreviewer)
  Vue.use(ExcelPreviewer)
}
