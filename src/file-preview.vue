<script>
import MdPreviewer from '@/package/md.vue'
import ImgPreviewer from '@/package/img.vue'
import './style.css'

export default {
  name: 'FilePreview',
  // eslint-disable-next-line
  render: function(h) {
    switch (this.fileType) {
      case 'md':
        return (
          <md-previewer
            {...{ attrs: this.mdPvProps }}
            vOn:text-change={this._handleMdPvTextChange}
            ref="mdPV"
          ></md-previewer>
        )
      case 'img':
        return (
          <img-previewer
            {...{ attrs: this.imgPvProps }}
            scopedSlots={{
              error: () => this.$slots.img_error
            }}
            ref="imgPV"
          ></img-previewer>
        )
    }
  },
  props: {
    fileType: {
      type: String,
      required: true
    },
    /** md-previewer props */
    mdPvProps: {
      type: Object,
      default: () => ({
        readOnly: false,
        height: '300px',
        mode: 'markdown',
        previewStyle: 'vertical'
      })
    },
    /** img-previewer props */
    imgPvProps: {
      type: Object,
      default: null
    }
  },
  components: {
    'md-previewer': MdPreviewer,
    'img-previewer': ImgPreviewer
  },
  methods: {
    fileClear() {
      switch (this.fileType) {
        case 'md':
          break
      }
    },
    _handleMdPvTextChange(val) {
      this.$emit('md-text-change', val)
    }
  }
}
</script>
