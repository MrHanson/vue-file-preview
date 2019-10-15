import ImgPreviewer from '../../src/package/img.vue'

ImgPreviewer.install = function(Vue) {
  Vue.component(ImgPreviewer.name, ImgPreviewer)
}

export default ({ Vue }) => {
  Vue.use(ImgPreviewer)
}
