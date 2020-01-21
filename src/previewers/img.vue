<template>
  <div id="img-previewer">
    <el-image
      v-for="(item, index) in srcList"
      :key="'cover' + index"
      fit="fill"
      :style="item.style"
      :src="item.url"
      :alt="item.alt"
      :lazy="item.lazy"
      :z-index="item.zIndex"
      :preview-src-list="previewSrcList"
    >
      <template v-slot:error>
        <slot name:img-error></slot>
      </template>
    </el-image>
  </div>
</template>

<script>
import { Image } from 'element-ui'
import parseSize from '@laomao800/parse-size-with-unit'
import { isPlainObject } from '@/util'

export default {
  name: 'ImgPreviewer',

  props: {
    width: {
      type: [String, Number],
      default: 100
    },
    height: {
      type: [String, Number],
      default: 100
    },
    coverList: {
      type: Array,
      default: () => []
    },
    previewSrcList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    coverWidth() {
      return parseSize(this.width, 'px')
    },
    coverHeight() {
      return parseSize(this.height, 'px')
    },
    srcList() {
      const list = this.coverList.map(item => {
        if (typeof item === 'string' && !!item) {
          return {
            fit: 'fill',
            zIndex: 2000,
            lazy: true,
            url: item,
            style: {
              width: this.coverWidth,
              height: this.coverHeight
            }
          }
        } else if (isPlainObject(item)) {
          return {
            fit: 'fill',
            zIndex: 2000,
            lazy: true,
            url: item.url || '',
            style: {
              width: parseSize(item.width) || this.coverWidth,
              height: parseSize(item.height) || this.coverHeight,
              ...item.style
            },
            alt: item.alt || ''
          }
        } else {
          return null
        }
      })
      return list.filter(item => !!item)
    }
  },

  components: {
    'el-image': Image
  }
}
</script>
