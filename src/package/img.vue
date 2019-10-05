<template>
  <div id="img-previewer">
    <template v-if="cSrcList.length > 0">
      <div class="cover-container">
        <ul>
          <li v-for="(item, index) in cSrcList" :key="index">
            <img
              :src="item.src"
              :width="item.width"
              :height="item.height"
              @click="openViewer(index)"
            />
          </li>
        </ul>
      </div>
    </template>
    <template v-else-if="previewSrcList.length == 0">
      <div class="image_error">
        <slot name="error">加载失败</slot>
      </div>
    </template>
    <div ref="container" id="container" style="display: none">
      <ul>
        <li v-for="(item, index) in previewSrcList" :key="index">
          <img :src="item" />
        </li>
      </ul>
    </div>
    <div
      v-show="cSrcList.length === 0 && previewSrcList.length > 0"
      class="only-preview-mask"
    ></div>
  </div>
</template>

<script>
/* Viewer.js */
import ImgViewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import { isObject } from '@/utils/type'

export default {
  name: 'ImgPreviewer',
  props: {
    coverSrcList: { type: [Array, String], default: () => [] },
    previewSrcList: { type: Array, default: () => [] },
    width: { type: String, default: '100px' },
    height: { type: String, default: '100px' },
    alt: { type: String, default: '' },
    viewerOptions: {
      type: Object,
      default: () => ({ button: false, backdrop: false })
    }
  },
  computed: {
    cSrcList() {
      /* convert props coverSrcList to Array */
      return arrayPropsConvert(this.coverSrcList, this.width, this.height)
    }
  },
  data() {
    return {
      imgViewer: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const onlyPreview = this.cSrcList.length === 0
      this._onlyPreviewMode(onlyPreview)
      this.imgViewer = new ImgViewer(
        this.$refs['container'],
        this.viewerOptions
      )
      if (onlyPreview) {
        this.openViewer()
      }
    })
  },
  methods: {
    openViewer(index = 0) {
      const len = this.previewSrcList.length
      if (len > 0 && index < len) {
        this.imgViewer.view(index)
      }
    },
    _onlyPreviewMode(onlyPreview) {
      this.viewerOptions.button = !onlyPreview
      this.viewerOptions.backdrop = !onlyPreview
    }
  }
}

/**
 * @param srcList{Array}
 * @param gw{String} global width
 * @param gh{String} global height
 */
function arrayPropsConvert(srcList, gw, gh) {
  let ori = []
  if (!Array.isArray(srcList)) {
    ori = JSON.parse(srcList)
  } else {
    ori = [...srcList]
  }

  const res = []
  for (let i = 0, len = ori.length; i < len; i++) {
    const item = ori[i]
    const tmp = {}
    if (isObject(item)) {
      if (!item.src) continue
      tmp.src = item.src
      tmp.width = item.width ? item.width : gw
      tmp.height = item.height ? item.height : gh
    } else {
      tmp.src = item
      tmp.width = gw
      tmp.height = gh
    }
    res.push(tmp)
  }
  return res
}
</script>

<style lang="less" scoped>
#img-previewer {
  overflow: hidden;
  .cover {
    cursor: pointer;
  }
  .image_error {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background: #f5f7fa;
    color: #c0c4cc;
    vertical-align: middle;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    li {
      list-style: none;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .only-preview-mask {
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
