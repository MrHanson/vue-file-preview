<template>
  <div id="img-previewer">
    <slot>
      <template v-if="cList.length > 0">
        <div class="cover-container">
          <ul>
            <li v-for="(item, index) in cList" :key="item.key || index">
              <v-node v-if="isFunction(item)" :node="item()"></v-node>
              <v-node v-else-if="item.render" :node="item.render()"></v-node>
              <img
                v-else-if="isObject(item)"
                :style="item.style"
                :src="item.src"
                :width="item.width"
                :height="item.height"
                :alt="item.alt"
                @click="openViewer(index)"
              />
              <div v-else :style="{ width, height }">
                <i
                  :style="{ 'line-height': height, 'font-size': iconFontSize }"
                  class="iconfont"
                >
                  &#xe609;
                </i>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </slot>
    <div ref="container" id="container" style="display: none">
      <ul>
        <li v-for="(item, index) in previewSrcList" :key="index">
          <img v-if="isHttpUrl(item)" :src="item" />
        </li>
      </ul>
    </div>
    <div
      v-show="coverList.length === 0 && previewSrcList.length > 0"
      class="only-preview-mask"
    ></div>
  </div>
</template>

<script>
/* Viewer.js */
import ImgViewer from 'viewerjs'
import VNode from '@/components/v-node.js'
import 'viewerjs/dist/viewer.css'
import { isFunction, isObject, isString } from '@/utils/type'
import { isHttpUrl } from '@/utils/util'

export default {
  name: 'ImgPreviewer',
  props: {
    coverList: { type: Array, default: () => [] },
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
    cList() {
      return arrayPropsConvert(this.coverList, this.width, this.height)
    },
    iconFontSize() {
      const regx = /\d+/g
      const w = this.width.match(regx),
        h = this.height.match(regx)
      return Math.min(w, h) + 'px'
    }
  },
  data() {
    return {
      imgViewer: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const onlyPreview = this.cList.length === 0
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
  components: {
    VNode
  },
  methods: {
    openViewer(index = 0) {
      const len = this.previewSrcList.length
      if (len > 0 && index < len) {
        this.imgViewer.view(index)
      } else {
        this.imgViewer.view(len - 1)
      }
    },
    _onlyPreviewMode(onlyPreview) {
      this.viewerOptions.button = !onlyPreview
      this.viewerOptions.backdrop = !onlyPreview
    },
    isObject,
    isFunction,
    isHttpUrl
  }
}

/**
 * @param srcList{Array}
 * @param gw{String} global width
 * @param gh{String} global height
 */
function arrayPropsConvert(list, gw, gh) {
  let ori = [...list]

  const res = []
  for (let i = 0, len = ori.length; i < len; i++) {
    const item = ori[i]
    const tmp = {
      width: gw,
      height: gh,
      style: {}
    }

    if (isFunction(item)) {
      res.push(item)
      continue
    } else if (isObject(item)) {
      /* render component */
      if (item.render) {
        res.push(item)
        continue
      }

      tmp.src = item.src || ''
      tmp.width = item.width || gw
      tmp.height = item.height || gh
      tmp.style = item.style || {}
    } else if (isString(item)) {
      tmp.src = item
    }

    if (tmp.src && isHttpUrl(tmp.src)) {
      res.push(tmp)
    } else {
      res.push('404')
    }
  }
  return res
}
</script>

<style lang="less" scoped>
#img-previewer {
  overflow: auto;
  .cover {
    cursor: pointer;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    li {
      list-style: none;
      text-decoration: none;
      text-align: center;
      img {
        cursor: pointer;
      }
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
