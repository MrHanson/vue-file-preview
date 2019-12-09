# vue-file-preview

[![npm](https://img.shields.io/npm/v/@mrhanson/vue-file-preview.svg)](https://www.npmjs.com/package/@mrhanson/vue-file-preview)![License](https://img.shields.io/npm/l/@mrhanson/vue-file-preview)

## Description

> A file preview component by Vue , maked up by serval previewer components

## Filetype Support

- img
- excel

## Install

```shell
  npm install --save vue '@mrhanson/vue-file-preview'
  # or
  yarn add vue '@mrhanson/vue-file-preview'
```

## Document

[中文](https://mrhanson.github.io/vue-file-preview/zh) | [English](https://mrhanson.github.io/vue-file-preview/)

## Props

### file-previewer

| prop         | type   | default | optional  | description                   |
| ------------ | ------ | ------- | --------- | ----------------------------- |
| fileType     | string |         | img/excel | choose which previewer to use |
| imgPvProps   | object |         |           | props of img-previewer        |
| excelPvProps | object |         |           | props of excel-previewer      |

### img-previewer

| prop           | type   | default | optional | description                                                     |
| -------------- | ------ | ------- | -------- | --------------------------------------------------------------- |
| coverList      | array  | --      |          | choose which previewer to use                                   |
| previewSrcList | array  | --      |          | src list to preview                                             |
| width          | string | '100px' |          | width of coverList item                                         |
| height         | string | '100px' |          | height of coverList item                                        |
| alt            | string | --      |          | same as origin alt                                              |
| viewerOptions  |        |         |          | [more detail](https://github.com/fengyuanchen/viewerjs#options) |

### excel-previewer

| prop           | type          | default | optional | description                |
| -------------- | ------------- | ------- | -------- | -------------------------- |
| file           | object        |         |          | excel file stream          |
| isClientStream | boolean       | true    |          | whether client file stream |
| tableHeight    | stirng/number |         |          | previewer table height     |

## Slots

### fileType = 'img'

#### default

> used for customizing layout of coverList

```html
<template>
  <file-preview
    ref="filePV"
    file-type="img"
    :md-pv-props="mdPvProps"
    :img-pv-props="imgPvProps"
  >
    <div class="list">
      <div
        class="item"
        v-for="(src, index) in imgPvProps.coverList"
        :key="index"
        @click="openViewer(index)"
      >
        <img :src="src" :alt="index" />
      </div>
    </div>
  </file-preview>
</template>

<script>
  export default {
    data() {
      return {
        imgPvProps: {
          coverList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          ],
          width: '250px',
          height: '200px',
          previewSrcList: [
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
            'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          ]
        },
        openViewer(index) {
          this.$refs['filePV'].openImgViewer(index)
        }
      }
    }
  }
</script>
```

## Methods

| Methods      | Description                               | Parameters |
| ------------ | ----------------------------------------- | ---------- |
| openViewer() | Open Viewer by passing `index`(default 0) | index      |
