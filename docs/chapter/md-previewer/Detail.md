# md-previewer Attributes & Events

## Common Attributes

| 参数          | 说明                           | 类型    | 可选值 | 默认值 |
| ------------- | ------------------------------ | ------- | ------ | ------ |
| readOnly      | 切换 Editor 和 Viewer 两种模式 | Boolean | ---    | true   |
| height        | ---                            | String  | ---    | 300px  |
| previewerText | 文本内容                       | String  | ---    | ---    |

## Editor Attributes

| 参数          | 说明       | 类型   | 可选值           | 默认值                                                             |
| ------------- | ---------- | ------ | ---------------- | ------------------------------------------------------------------ |
| mode          | 编辑器默认 | String | markdown/wysiwyg | markdown                                                           |
| previewStyle  | ---        | String | vertical/tab     | vertical                                                           |
| editorOptions | ---        | Object | ---              | [defaultOptions](https://github.com/nhn/toast-ui.vue-editor#props) |

## Events

| 事件名称    | 说明           | 回调参数   |
| ----------- | -------------- | ---------- |
| text-change | 文本变化时触发 | 当前文本值 |
