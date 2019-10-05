<script>
import MdPreviewer from '@/package/md.vue'
import ImgPreviewer from '@/package/img.vue'

export default {
  name: 'FilePreview',
  // eslint-disable-next-line
  render: function(h) {
    switch (this.fileType) {
      case 'md':
        return h('md-previewer', {
          props: this.mdPvProps,
          on: {
            'text-change': this._handleMdPvTextChange
          },
          ref: 'mdPV'
        })
      case 'img':
        return h(
          'img-previewer',
          {
            props: this.imgPvProps,
            ref: 'imgPV'
          },
          [h('template', { slot: 'error' }, this.$slots.img_error)]
        )
      default:
        return h()
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
      this.$emit('mdpv-text-change', val)
    }
  }
}
</script>
