# md-previewer Attributes & Events

## Common Attributes

| parameter | description                     | type    | options | default |
| --------- | ------------------------------- | ------- | ------- | ------- |
| readOnly  | change `editor` & `viewer` mode | Boolean | ---     | true    |
| height    | ---                             | String  | ---     | 300px   |

## Editor Attributes

| parameter     | description | type   | options          | default                                                            |
| ------------- | ----------- | ------ | ---------------- | ------------------------------------------------------------------ |
| mode          | editor mode | String | markdown/wysiwyg | markdown                                                           |
| previewStyle  | ---         | String | vertical/tab     | vertical                                                           |
| editorOptions | ---         | Object | ---              | [defaultOptions](https://github.com/nhn/toast-ui.vue-editor#props) |

## Events

| event       | description           | callback param |
| ----------- | --------------------- | -------------- |
| text-change | call when text change | current text   |
