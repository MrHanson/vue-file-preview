import FilePreview from './file-preview.vue'
import ImgPreviewer from './package/img.vue'
import MdPreviewer from './package/md.vue'

FilePreview.install = function(Vue) {
  Vue.component(FilePreview.name, FilePreview)
}

ImgPreviewer.install = function(Vue) {
  Vue.component(ImgPreviewer.name, ImgPreviewer)
}

MdPreviewer.install = function(Vue) {
  Vue.component(MdPreviewer.name, MdPreviewer)
}

export default FilePreview
export { ImgPreviewer, MdPreviewer }
