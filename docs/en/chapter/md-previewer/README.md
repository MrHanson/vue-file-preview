# md-previewer

## Description

- Web component by wrapping[toast-ui.vue-editor](https://github.com/nhn/toast-ui.vue-editor)
- Change `editor` & `viewer` mode by prop [readOnly](/chapter/md-previewer/detail.md#readOnly)

## Basic Usage

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

## Common Attributes

| parameter | description                     | type      | options | default |
| --------- | ------------------------------- | --------- | ------- | ------- |
| readOnly  | change `editor` & `viewer` mode | `Boolean` | ---     | `true`  |
| height    | ---                             | `String`  | ---     | `300px` |

## Editor Attributes

| parameter     | description | type     | options            | default                                                            |
| ------------- | ----------- | -------- | ------------------ | ------------------------------------------------------------------ |
| mode          | editor mode | `String` | `markdown/wysiwyg` | `markdown`                                                         |
| previewStyle  | ---         | `String` | `vertical/tab`     | `vertical`                                                         |
| editorOptions | ---         | `Object` | ---                | [defaultOptions](https://github.com/nhn/toast-ui.vue-editor#props) |

## Events

| event       | description           | callback param   |
| ----------- | --------------------- | ---------------- |
| text-change | call when text change | `(text: string)` |
