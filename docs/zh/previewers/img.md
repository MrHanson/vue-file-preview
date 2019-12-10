# img-previewer

## 基本用法

<ClientOnly>
<demo-box>

<demo-img-simple slot="demo"></demo-img-simple>

<template slot="code">

<<< docs/.vuepress/components/demo/img/simple.vue

</template>

</demo-box>
</ClientOnly>

## 自定义布局

<ClientOnly>
<demo-box>

<demo-img-layout slot="demo"></demo-img-layout>

<template slot="code">

<<< docs/.vuepress/components/demo/img/layout.vue

</template>

</demo-box>
</ClientOnly>

## Props

| 参数           | 类型   | 默认值  | 可选值 | 说明                                                         |
| -------------- | ------ | ------- | ------ | ------------------------------------------------------------ |
| coverList      | array  | --      |        | 封面列表数组，若不传则开启全屏预览模式                       |
| previewSrcList | array  | --      |        | 预览图片列表                                                 |
| width          | string | '100px' |        | 封面列表项的宽度                                             |
| height         | string | '100px' |        | 封面列表项的高度                                             |
| alt            | string | --      |        | 同原生 alt 属性                                              |
| viewerOptions  |        |         |        | [更多详情](https://github.com/fengyuanchen/viewerjs#options) |

## Slots

### default

> 用于自定义布局

## Methods

| 方法       | 说明                                        | 参数  |
| ---------- | ------------------------------------------- | ----- |
| openViewer | 通过传递的索引打开预览项 `index`(default 0) | index |
