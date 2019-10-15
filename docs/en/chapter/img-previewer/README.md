# img-previewer

## Description

- Web component by wrapping [viewer.js](https://github.com/fengyuanchen/viewerjs)

## Basic Usage

<!-- prettier-ignore -->
```html
<!-- component.vue -->
<template>
  <img-previewer ref="imgPV" v-bind="imgPvProps">
    <template v-slot:error>
      loading...
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
        alt: 'loading...',
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

## Attributes

<!-- prettier-ignore -->
| Name     | Description         | Type   | Option | Default |
| -------- | ------------ | ------ | ------ | ------ |
| coverList | [more detail](/chapter/img-previewer/CoverList.md) | `Array` | ---    | ---    |
| width    | CoverItem default width | `String` | ---    | `100px`  |
| height   | CoverItem default height | `String` | ---    | `100px`  |
| alt      | same as alt   | `String` | ---    | ---    |
| previewSrcList | preview source path list | `Array` | --- | --- |
| viewerOptions | [detail](https://github.com/fengyuanchen/viewerjs#options) | `Object` | --- | --- |

## Methods

| Name       | Description                           | Callback params   |
| ---------- | ------------------------------------- | ----------------- |
| openViewer | open the viewer of specific index pic | `(index: Number)` |

## Slots

| Name  | Description     |
| ----- | --------------- |
| error | show when error |
