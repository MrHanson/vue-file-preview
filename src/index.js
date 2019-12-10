// all
import FilePreview from './file-preview'

FilePreview.install = function(Vue) {
  Vue.component(FilePreview.name, FilePreview)
}

if (typeof window !== 'undefined' && window.Vue) {
  FilePreview.install(window.Vue)
}

export default FilePreview

// previewers
import ImgPreviewer from './previewers/img'
import ExcelPrviewer from './previewers/excel'

ImgPreviewer.install = function(Vue) {
  Vue.component(ImgPreviewer.name, ImgPreviewer)
}

ExcelPrviewer.install = function(Vue) {
  Vue.component(ExcelPrviewer.name, ExcelPrviewer)
}

export { ImgPreviewer, ExcelPrviewer }
