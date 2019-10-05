# img-previewer Attributes & Methods & Slots

## Attributes

<!-- prettier-ignore -->
| parameter     | description         | type   | options | default |
| -------- | ------------ | ------ | ------ | ------ |
| coverSrcList | cover pic list | Array, String | ---    | ---    |
| width    | cover item default width | String | ---    | 100px  |
| height   | cover item default height | String | ---    | 100px  |
| alt      | same as origin alt   | String | ---    | ---    |
| previewSrcList | preview pic list | Array | --- | --- |
| viewerOptions | [viwerOptions](https://github.com/fengyuanchen/viewerjs#options) | Object | --- | --- |

## Methods

| 方法名     | description          | parameter |
| ---------- | -------------------- | --------- |
| openViewer | open viewer by index | index     |

## Slots

| name  | description        |
| ----- | ------------------ |
| error | error slot content |
