# img-previewer

## basic usage

<ClientOnly>
<demo-box>

<demo-img-simple slot="demo" />

<template slot="code">

<<< docs/.vuepress/components/demo/img/simple.vue

</template>

</demo-box>
<ClientOnly>

## Props

| prop           | type   | default | optional | description                                                                                                  |
| -------------- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| coverList      | array  | --      |          | cover item list, can pass object with `url`, `alt`, `lazy`, `zIndex`, `width`, `height` attribute            |
| previewSrcList | array  | --      |          | src list to preview, same as [preview-src-list](https://element.eleme.cn/#/zh-CN/component/image#attributes) |
| width          | string | '100px' |          | global width of coverList item                                                                               |
| height         | string | '100px' |          | global height of coverList item                                                                              |
