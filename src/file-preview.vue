<script>
import ImgPreviewer from '@/previewers/img.vue'
import ExcelPreviewer from '@/previewers/excel/index'
import WordPvProps from '@/previewers/word'
import './style.css'

export default {
  name: 'FilePreview',
  // eslint-disable-next-line
  render(h) {
    switch (this.fileType) {
      case 'img':
        return (
          <ImgPreviewer
            ref='imgPV'
            {...{ attrs: this.imgPvProps }}
            scopedSlots={{
              default: () => this.$slots.default
            }}
          />
        )
      case 'excel':
        return (
          <ExcelPreviewer ref='excelPV' {...{ attrs: this.excelPvProps }} />
        )
      case 'word':
        return <WordPvProps ref='wordPV' {...{ attrs: this.wordPvProps }} />
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
    },
    // word-previewer props
    wordPvProps: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    openImgViewer(index = 0) {
      this.$refs['imgPV'].openViewer(index)
    }
  }
}
</script>
