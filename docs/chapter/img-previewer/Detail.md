# img-previewer Attributes & Methods & Slots

## Attributes

<!-- prettier-ignore -->
| 参数     | 说明         | 类型   | 可选值 | 默认值 |
| -------- | ------------ | ------ | ------ | ------ |
| coverSrc | 封面图片源   | String | ---    | ---    |
| width    | 封面图片高度 | String | ---    | 100px  |
| height   | 封面图片宽度 | String | ---    | 100px  |
| alt      | 同原生 alt   | String | ---    | ---    |
| previewSrcList | 开启图片预览功能 | Array | --- | --- |
| viewerOptions | [预览视图参数设置](https://github.com/fengyuanchen/viewerjs#options) | Object | --- | --- |

## Methods

| 方法名     | 说明                                            | 参数  |
| ---------- | ----------------------------------------------- | ----- |
| openViewer | 打开 previewSrcList 中指定 index 的图片预览视图 | index |

## Slots

| 名称  | 说明                   |
| ----- | ---------------------- |
| error | 封面图片源加载失败内容 |
