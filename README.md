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

## Example

[CLICK ME](https://mrhanson.github.io/vue-file-preview/)

## Props

### file-previewer

| prop         | type   | default | optional  | description                   |
| ------------ | ------ | ------- | --------- | ----------------------------- |
| fileType     | string |         | img/excel | choose which previewer to use |
| imgPvProps   | object |         |           | props of img-previewer        |
| excelPvProps | object |         |           | props of excel-previewer      |

### img-previewer

| prop           | type   | default | optional | description                                                                                                  |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| coverList      | array  | --      |          | cover item list, can pass object with `url`, `alt`, `lazy`, `zIndex`, `style` attribute                      |
| previewSrcList | array  | --      |          | src list to preview, same as [preview-src-list](https://element.eleme.cn/#/zh-CN/component/image#attributes) |
| width          | string | '100px' |          | global width of coverList item                                                                               |
| height         | string | '100px' |          | global height of coverList item                                                                              |

### excel-previewer

| prop           | type          | default | optional | description                |
| -------------- | ------------- | ------- | -------- | -------------------------- |
| file           | object        |         |          | excel file stream          |
| isClientStream | boolean       | true    |          | whether client file stream |
| tableHeight    | stirng/number |         |          | previewer table height     |
