# vue-file-preview 食用文档

## 介绍

- Vue.js 通用文件预览组件
- 由多个 Previewer 组件组成，组件间相互独立

## 支持文件类型

- 目前支持

  - [markdown](/chapter/md-previewer/)
  - [img](/chapter/img-previewer/)

- 未来支持

  - excel
  - docx

## 安装

```bash
  // npm
  npm install vue
  npm install '@mrhanson/vue-file-preview'
  # or
  yarn add vue
  yarn add '@mrhanson/vue-file-preview'
```

## 使用

### ES Module

- 全局注册

```js
// Vue app entry file
import Vue from 'vue'
import FilePreview from 'vue-file-preview'
import 'vue-file-preview/dist/lib/file-preview.css'
Vue.use(FilePreview)
```

- 局部注册

```html
<template>
  <file-preview />
</template>

<script>
  import FilePreview from '@mrhanson/vue-file-preview'
  export default {
    components: {
      FilePreview
    }
  }
</script>
```
