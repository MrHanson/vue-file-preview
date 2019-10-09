# md-previewer

## 介绍

- 基于[toast-ui.vue-editor](https://github.com/nhn/toast-ui.vue-editor)进行封装的 markdown 预览组件
- 组件内部包含 Editor 和 Viewer 两个组件，通过参数 [readOnly](/chapter/md-previewer/detail.md#readOnly) 进行切换

## 基本使用

<!-- prettier-ignore -->
```vue
<!-- component.vue -->
<template>
  <md-previewer
    ref="mdPV"
    v-bind="mdPvProps"
    @text-change="handleMdPvTextChange" />
</template>

<script>
import { MdPreviewer } from 'vue-file-preview'
export default {
  data() {
    return {
      mdPvProps: {
        readOnly: false,
        height: '300px',
        mode: 'markdown',
        previewStyle: 'vertical'
      }
    }
  },
  components: {
    'md-previewer': MdPreviewer
  },
  methods: {
    handleMdPvTextChange(val) {
      // do something
    }
  }
}
</script>
```

## Props

| 参数          | 说明                           | 类型      | 可选值 | 默认值  |
| ------------- | ------------------------------ | --------- | ------ | ------- |
| readOnly      | 切换 Editor 和 Viewer 两种模式 | `Boolean` | ---    | `true`  |
| height        | ---                            | `String`  | ---    | `300px` |
| previewerText | 文本内容                       | `String`  | ---    | ---     |

## Editor Props

| 参数          | 说明       | 类型     | 可选值             | 默认值                                                             |
| ------------- | ---------- | -------- | ------------------ | ------------------------------------------------------------------ |
| mode          | 编辑器默认 | `String` | `markdown/wysiwyg` | `markdown`                                                         |
| previewStyle  | ---        | `String` | `vertical/tab`     | `vertical`                                                         |
| editorOptions | ---        | `Object` | ---                | [defaultOptions](https://github.com/nhn/toast-ui.vue-editor#props) |

## Events

| 事件名称    | 说明           | 回调参数         |
| ----------- | -------------- | ---------------- |
| text-change | 文本变化时触发 | `(text: string)` |
