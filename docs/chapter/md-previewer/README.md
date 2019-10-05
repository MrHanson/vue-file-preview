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
