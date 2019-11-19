<script>
import ImgPreviewer from '@/package/img.vue'
import './style.css'

export default {
  name: 'FilePreview',
  // eslint-disable-next-line
  render: function(h) {
    switch (this.fileType) {
      case 'img':
        return (
          <img-previewer
            {...{ attrs: this.imgPvProps }}
            scopedSlots={{
              default: () => this.$slots.default
            }}
            ref='imgPV'></img-previewer>
        )
    }
  },
  props: {
    fileType: {
      type: String,
      required: true
    },
    /** img-previewer props */
    imgPvProps: {
      type: Object,
      default: null
    }
  },
  components: {
    'img-previewer': ImgPreviewer
  },
  methods: {
    fileClear() {
      switch (this.fileType) {
        case 'md':
          break
      }
    },
    openImgViewer(index = 0) {
      this.$refs['imgPV'].openViewer(index)
    }
  }
}
</script>
