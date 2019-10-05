# img-previewer

## 介绍

- 基于[viewer.js](https://github.com/fengyuanchen/viewerjs)进行封装的 img 预览组件

## 基本使用

<!-- prettier-ignore -->
```vue
<!-- component.vue -->
<template>
  <img-previewer ref="imgPV" v-bind="imgPvProps">
    <template v-slot:error>
      加载失败插槽
    </template>
  </img-previewer>
</template>

<script>
import { ImgPreviewer } from 'vue-file-preview'
export default {
  data() {
    return {
      imgPvProps: {
        coverSrcList: [
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        ],
        width: '500px',
        height: '400px',
        alt: '加载失败',
        previewSrcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        viewerOptions: {}
      }
    }
  },
  components: {
    'img-previewer': ImgPreviewer
  }
}
</script>
```
