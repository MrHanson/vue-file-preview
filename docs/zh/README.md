# vue-file-preview

## 简介

一个由多个 previewers 子组件组成的文件预览 Vue 组件

## 支持文件类型

- img
- excel

## 安装

```bash
  npm install --save vue '@mrhanson/vue-file-preview'
  # or
  yarn add vue '@mrhanson/vue-file-preview'
```

## 使用

### ESModule

- 全局

```js
import Vue from 'vue'
import FilePreview from 'vue-file-preview'
Vue.use(FilePreview)
```

- Vue 组件

```html
<template>
  <filePreview v-bind="filePreviewConfig" />
</template>

<script>
  import filePreview from '@mrhanson/vue-file-preview'

  export default {
    data() {
      return {
        filePreviewConfig: {
          /* filePreview props */
        }
      }
    },

    components: { filePreview }
  }
</script>
```
