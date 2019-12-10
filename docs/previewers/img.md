# img-previewer

## basic usage

<demo-box>

<demo-img-simple slot="demo"></demo-img-simple>

<template slot="code">

<<< docs/.vuepress/components/demo/img/simple.vue

</template>

</demo-box>

## custom layout

<demo-box>

<demo-img-layout slot="demo"></demo-img-layout>

<template slot="code">

<<< docs/.vuepress/components/demo/img/layout.vue

</template>

</demo-box>

## Props

| prop           | type   | default | optional | description                                                     |
| -------------- | ------ | ------- | -------- | --------------------------------------------------------------- |
| coverList      | array  | --      |          | cover item list, if not pass would open fullscreen mode         |
| previewSrcList | array  | --      |          | src list to preview                                             |
| width          | string | '100px' |          | width of coverList item                                         |
| height         | string | '100px' |          | height of coverList item                                        |
| alt            | string | --      |          | same as origin alt                                              |
| viewerOptions  |        |         |          | [more detail](https://github.com/fengyuanchen/viewerjs#options) |

## Slots

### default

> used for customizing layout of coverList

## Methods

| Methods    | Description                               | Parameters |
| ---------- | ----------------------------------------- | ---------- |
| openViewer | Open Viewer by passing `index`(default 0) | index      |
