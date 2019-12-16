# img-previewer

## 基本用法

<<< docs/.vuepress/components/demo/img/simple.vue

## Props

| 参数           | 类型   | 默认值  | 可选值 | 说明                                                                                                    |
| -------------- | ------ | ------- | ------ | ------------------------------------------------------------------------------------------------------- |
| coverList      | array  | --      |        | 封面列表数组，可传递字符串数组，或者具有`url`, `alt`, `lazy`, `zIndex`, `width`, `height`属性的对象数组 |
| previewSrcList | array  | --      |        | 预览图片地址数组                                                                                        |
| width          | string | '100px' |        | 封面列表项的宽度                                                                                        |
| height         | string | '100px' |        | 封面列表项的高度                                                                                        |
