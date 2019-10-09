# img-previewer

## 介绍

- 基于[viewer.js](https://github.com/fengyuanchen/viewerjs)进行封装的 img 预览组件

## 基本使用

```html
<!-- component.vue -->
<template>
  <img-previewer ref="imgPV" v-bind="imgPvProps">
    <template v-slot:error>
      加载失败插槽
    </template>
  </img-previewer>
</template>

<script>
  import { ImgPreviewer } from '@mrhanson/vue-file-preview'
  export default {
    data() {
      return {
        imgPvProps: {
          coverList: [
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            () => (
              <img
                width='250px'
                height='200px'
                src='https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
              />
            ),
            {
              render: () => (
                <img src='https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg' />
              )
            },
            {
              width: '250px',
              height: '250px',
              src:
                'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
              alt: '404',
              style: {
                'border-radius': '16px'
              }
            }
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

## Props

<!-- prettier-ignore -->
| 参数     | 说明         | 类型   | 可选值 | 默认值 |
| -------- | ------------ | ------ | ------ | ------ |
| coverList | [详见coverList](/chapter/img-previewer/CoverList.md) | `Array` | ---    | ---    |
| width    | CoverItem默认高度 | `String` | ---    | `100px`  |
| height   | CoverItem默认宽度 | `String` | ---    | `100px`  |
| alt      | 同原生 alt   | `String` | ---    | ---    |
| previewSrcList | 预览图片来源地址 | `Array` | --- | --- |
| viewerOptions | [预览视图参数设置](https://github.com/fengyuanchen/viewerjs#options) | `Object` | --- | --- |

## Methods

| 方法名     | 说明                                            | 参数              |
| ---------- | ----------------------------------------------- | ----------------- |
| openViewer | 打开 previewSrcList 中指定 index 的图片预览视图 | `(index: Number)` |

## Slots

| 名称  | 说明                   |
| ----- | ---------------------- |
| error | 封面图片源加载失败内容 |
