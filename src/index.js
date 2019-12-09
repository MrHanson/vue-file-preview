// all
import FilePreview from './file-preview'
export default FilePreview

// previewers
import ImgPreviewer from './previewers/img'
import ExcelPrviewer from './previewers/excel'

FilePreview.install = function(Vue) {
  Vue.component(FilePreview.name, FilePreview)
}

ImgPreviewer.install = function(Vue) {
  Vue.component(ImgPreviewer.name, ImgPreviewer)
}

ExcelPrviewer.install = function(Vue) {
  Vue.component(ExcelPrviewer.name, ExcelPrviewer)
}

export const previewers = { ImgPreviewer, ExcelPrviewer }
