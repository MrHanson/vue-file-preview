<script>
import ImgPreviewer from '@/previewers/img.vue'
import ExcelPreviewer from '@/previewers/excel.vue'

export default {
  name: 'FilePreview',
  // eslint-disable-next-line
  render(h) {
    switch (this.fileType) {
      case 'img':
        return <ImgPreviewer ref='imgPV' {...{ attrs: this.imgPvProps }} />
      case 'excel':
        return <ExcelPreviewer ref='excelPV' {...{ attrs: this.excelPvProps }} />
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
</script>
