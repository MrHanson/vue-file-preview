import FilePreview from './file-preview.vue'
import ImgPreviewer from './package/img.vue'

FilePreview.install = function(Vue) {
  Vue.component(FilePreview.name, FilePreview)
}

ImgPreviewer.install = function(Vue) {
  Vue.component(ImgPreviewer.name, ImgPreviewer)
}

export default FilePreview
export { ImgPreviewer }
