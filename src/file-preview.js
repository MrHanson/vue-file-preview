import ImgPreviewer from '@/previewers/img.vue'
import ExcelPreviewer from '@/previewers/excel.vue'

export default {
  name: 'FilePreview',
  // eslint-disable-next-line
  render(h) {
    switch (this.fileType) {
      case 'img':
        return h(
          ImgPreviewer,
          {
            ref: 'imgPV',
            props: this.imgPvProps
          },
          this.$slots['img-error']
        )
      case 'excel':
        return h(ExcelPreviewer, { ref: 'excelPV', props: this.excelPvProps })
    }
  },
  props: {
    fileType: {
      type: String,
      required: true
    },
    // img-previewer props
    imgPvProps: {
      type: Object,
      default: () => ({})
    },
    // img-previewer props
    excelPvProps: {
      type: Object,
      default: () => ({})
    }
  }
}
